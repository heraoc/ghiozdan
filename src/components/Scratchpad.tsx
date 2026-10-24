import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { useLang } from '../i18n';
import { canPersist, loadScratch, saveScratch, type Stroke } from '../scratch';
import { loadPref, savePref } from '../storage';

/** Foaia are o mărime logică fixă, așa că desenul arată la fel pe orice ecran. */
const W = 1000;
const H = 2000;
const SCALE = 2;
const WIDTHS = [2.5, 4.5, 8];
const COLORS = ['#1f2430', '#2f6fd6', '#c23b3b'];
const BACKGROUNDS = ['grid', 'lines', 'plain'] as const;
type Background = (typeof BACKGROUNDS)[number];

// ---------- desenare (aceeași logică la desenat live, la reîncărcare și la miniatură) ----------

function lineWidth(s: Stroke, m: number) {
  return s.w * m * (s.t === 'e' ? 5 : 1);
}

function setup(ctx: CanvasRenderingContext2D, s: Stroke) {
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.globalCompositeOperation = s.t === 'e' ? 'destination-out' : 'source-over';
  ctx.strokeStyle = s.t === 'e' ? '#000' : s.c;
  ctx.fillStyle = ctx.strokeStyle;
}

/** Segmentul k al tușei (k ≥ 1): curbă pătratică între mijloacele punctelor, pentru linii netede. */
function piece(ctx: CanvasRenderingContext2D, s: Stroke, k: number) {
  const p = s.pts;
  const X = (i: number) => p[i * 3];
  const Y = (i: number) => p[i * 3 + 1];
  const M = (i: number) => p[i * 3 + 2];
  setup(ctx, s);
  ctx.lineWidth = lineWidth(s, (M(k - 1) + M(k)) / 2);
  ctx.beginPath();
  if (k === 1) {
    ctx.moveTo(X(0), Y(0));
    ctx.lineTo((X(0) + X(1)) / 2, (Y(0) + Y(1)) / 2);
  } else {
    ctx.moveTo((X(k - 2) + X(k - 1)) / 2, (Y(k - 2) + Y(k - 1)) / 2);
    ctx.quadraticCurveTo(X(k - 1), Y(k - 1), (X(k - 1) + X(k)) / 2, (Y(k - 1) + Y(k)) / 2);
  }
  ctx.stroke();
}

/** Capătul tușei: un punct dacă a fost doar o atingere, altfel ultimul fragment drept. */
function finish(ctx: CanvasRenderingContext2D, s: Stroke) {
  const p = s.pts;
  const n = p.length / 3;
  setup(ctx, s);
  ctx.beginPath();
  if (n === 1) {
    ctx.arc(p[0], p[1], lineWidth(s, p[2]) / 2, 0, Math.PI * 2);
    ctx.fill();
    return;
  }
  ctx.lineWidth = lineWidth(s, p[(n - 1) * 3 + 2]);
  ctx.moveTo((p[(n - 2) * 3] + p[(n - 1) * 3]) / 2, (p[(n - 2) * 3 + 1] + p[(n - 1) * 3 + 1]) / 2);
  ctx.lineTo(p[(n - 1) * 3], p[(n - 1) * 3 + 1]);
  ctx.stroke();
}

function paintStroke(ctx: CanvasRenderingContext2D, s: Stroke) {
  const n = s.pts.length / 3;
  for (let k = 1; k < n; k++) piece(ctx, s, k);
  finish(ctx, s);
}

function repaint(cv: HTMLCanvasElement, strokes: Stroke[]) {
  const ctx = cv.getContext('2d');
  if (!ctx) return;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.setTransform(SCALE, 0, 0, SCALE, 0, 0);
  strokes.forEach((s) => paintStroke(ctx, s));
}

/** Miniatura ciornei, ca să o recunoști pe cardul întrebării. */
function renderThumb(strokes: Stroke[]): string {
  const tw = 240;
  const th = 120;
  const layer = document.createElement('canvas');
  layer.width = tw;
  layer.height = th;
  const lctx = layer.getContext('2d');
  const out = document.createElement('canvas');
  out.width = tw;
  out.height = th;
  const octx = out.getContext('2d');
  if (!lctx || !octx) return '';
  // Încadrăm tot ce s-a scris în miniatură.
  let x0 = W, y0 = H, x1 = 0, y1 = 0;
  strokes.forEach((s) => {
    for (let i = 0; i < s.pts.length; i += 3) {
      x0 = Math.min(x0, s.pts[i]);
      x1 = Math.max(x1, s.pts[i]);
      y0 = Math.min(y0, s.pts[i + 1]);
      y1 = Math.max(y1, s.pts[i + 1]);
    }
  });
  const pad = 20;
  const bw = Math.max(x1 - x0 + 2 * pad, 120);
  const bh = Math.max(y1 - y0 + 2 * pad, 60);
  const k = Math.min(tw / bw, th / bh);
  lctx.translate((tw - bw * k) / 2, (th - bh * k) / 2);
  lctx.scale(k, k);
  lctx.translate(pad - x0, pad - y0);
  strokes.forEach((s) => paintStroke(lctx, { ...s, w: s.w * Math.max(1, 1.4 / k) }));
  octx.fillStyle = '#fff';
  octx.fillRect(0, 0, tw, th);
  octx.drawImage(layer, 0, 0);
  return out.toDataURL('image/png');
}

// ---------- panoul ----------

interface Props {
  /** Cheia ciornei, de ex. 6/algebra/numere-prime/q3 */
  storageKey: string;
  /** Enunțul întrebării, afișat în partea de sus a panoului. */
  title: string;
  onClose: () => void;
  /** Ciorna s-a salvat (thumb) sau a rămas goală (null). */
  onSaved: (key: string, thumb: string | null) => void;
}

export function Scratchpad({ storageKey, title, onClose, onSaved }: Props) {
  const { t } = useLang();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const strokes = useRef<Stroke[]>([]);
  const redo = useRef<Stroke[]>([]);
  const current = useRef<Stroke | null>(null);
  const currentId = useRef(-1);
  const penSeen = useRef(false);
  const touches = useRef(new Map<number, number>());
  const scrolling = useRef(false);
  const lastY = useRef(0);
  const timer = useRef<number | undefined>(undefined);
  const dirty = useRef(false);
  const mounted = useRef(true);

  const [, setTick] = useState(0);
  const bump = () => setTick((n) => n + 1);
  const [ready, setReady] = useState(false);
  const [tool, setTool] = useState<'p' | 'e'>('p');
  const [color, setColor] = useState(COLORS[0]);
  const [size, setSize] = useState(1);
  const [bg, setBg] = useState<Background>(() => loadPref('scratch.bg', BACKGROUNDS, 'grid'));
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [persistent, setPersistent] = useState(true);
  const [askClear, setAskClear] = useState(false);

  // Uneltele active, citite din handlerele de pointer.
  const settings = useRef({ tool, color, size });
  settings.current = { tool, color, size };

  const save = async () => {
    window.clearTimeout(timer.current);
    if (!dirty.current) return;
    dirty.current = false;
    if (mounted.current) setStatus('saving');
    const list = strokes.current.slice();
    const thumb = list.length ? renderThumb(list) : '';
    await saveScratch(storageKey, list, thumb);
    onSaved(storageKey, list.length ? thumb : null);
    if (mounted.current) setStatus('saved');
  };
  const saveRef = useRef(save);
  saveRef.current = save;

  const scheduleSave = () => {
    dirty.current = true;
    setStatus('saving');
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => void saveRef.current(), 600);
  };

  useEffect(() => {
    mounted.current = true;
    closeRef.current?.focus();
    const cv = canvasRef.current;
    if (cv) {
      cv.width = W * SCALE;
      cv.height = H * SCALE;
    }
    let alive = true;
    void loadScratch(storageKey).then((list) => {
      if (!alive) return;
      strokes.current = list;
      if (canvasRef.current) repaint(canvasRef.current, list);
      setReady(true);
      bump();
    });
    void canPersist().then((ok) => alive && setPersistent(ok));
    return () => {
      alive = false;
      mounted.current = false;
      void saveRef.current(); // nu pierdem nimic nici dacă pagina se schimbă
    };
  }, [storageKey]);

  const close = async () => {
    await save();
    onClose();
  };

  const pos = (e: { clientX: number; clientY: number }) => {
    const r = canvasRef.current!.getBoundingClientRect();
    return [((e.clientX - r.left) / r.width) * W, ((e.clientY - r.top) / r.height) * H];
  };

  const addPoint = (s: Stroke, e: PointerEvent | ReactPointerEvent) => {
    const [x, y] = pos(e);
    const m = e.pointerType === 'pen' ? 0.4 + 1.2 * (e.pressure || 0.5) : 1;
    const n = s.pts.length;
    if (n && Math.hypot(x - s.pts[n - 3], y - s.pts[n - 2]) < 0.4) return;
    s.pts.push(x, y, m);
    const ctx = canvasRef.current!.getContext('2d')!;
    ctx.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    if (s.pts.length / 3 > 1) piece(ctx, s, s.pts.length / 3 - 1);
  };

  const cancelStroke = () => {
    const s = current.current;
    if (!s) return;
    strokes.current = strokes.current.filter((x) => x !== s);
    current.current = null;
    repaint(canvasRef.current!, strokes.current);
  };

  const avgY = () => {
    const ys = [...touches.current.values()];
    return ys.reduce((a, b) => a + b, 0) / (ys.length || 1);
  };

  const onDown = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!ready) return;
    if (e.pointerType === 'pen') penSeen.current = true;
    if (e.pointerType === 'touch') {
      touches.current.set(e.pointerId, e.clientY);
      // Cu Pencilul în mână, degetul doar derulează; două degete derulează oricând.
      if (penSeen.current || touches.current.size > 1) {
        cancelStroke();
        scrolling.current = true;
        lastY.current = avgY();
        return;
      }
    } else if (e.pointerType === 'mouse' && e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    const { tool, color, size } = settings.current;
    const s: Stroke = { t: tool, c: color, w: WIDTHS[size], pts: [] };
    current.current = s;
    currentId.current = e.pointerId;
    strokes.current.push(s);
    redo.current = [];
    addPoint(s, e);
    const ctx = e.currentTarget.getContext('2d')!;
    ctx.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    finish(ctx, s);
  };

  const onMove = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    if (e.pointerType === 'touch' && scrolling.current) {
      touches.current.set(e.pointerId, e.clientY);
      const y = avgY();
      if (scrollRef.current) scrollRef.current.scrollTop -= y - lastY.current;
      lastY.current = y;
      return;
    }
    const s = current.current;
    if (!s || e.pointerId !== currentId.current) return;
    const batch = e.nativeEvent.getCoalescedEvents?.() ?? [];
    (batch.length ? batch : [e.nativeEvent]).forEach((ev) => addPoint(s, ev));
  };

  const onUp = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    if (e.pointerType === 'touch') {
      touches.current.delete(e.pointerId);
      if (!touches.current.size) scrolling.current = false;
      else lastY.current = avgY();
    }
    const s = current.current;
    if (!s || e.pointerId !== currentId.current) return;
    const ctx = e.currentTarget.getContext('2d')!;
    ctx.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    finish(ctx, s);
    current.current = null;
    bump();
    scheduleSave();
  };

  const undo = () => {
    const s = strokes.current.pop();
    if (!s) return;
    redo.current.push(s);
    repaint(canvasRef.current!, strokes.current);
    bump();
    scheduleSave();
  };
  const redoStroke = () => {
    const s = redo.current.pop();
    if (!s) return;
    strokes.current.push(s);
    repaint(canvasRef.current!, strokes.current);
    bump();
    scheduleSave();
  };
  const clearAll = () => {
    strokes.current = [];
    redo.current = [];
    repaint(canvasRef.current!, strokes.current);
    setAskClear(false);
    bump();
    scheduleSave();
  };

  const pickBg = (b: Background) => {
    setBg(b);
    savePref('scratch.bg', b);
  };

  const bgNames: Record<Background, string> = { grid: t.scratchGrid, lines: t.scratchLines, plain: t.scratchPlain };
  const colorNames = [t.scratchBlack, t.scratchBlue, t.scratchRed];
  const statusText = !persistent ? t.scratchNoSave : status === 'saving' ? t.scratchSaving : status === 'saved' ? t.scratchSaved : '';

  return (
    <div
      className="scratch"
      role="dialog"
      aria-label={t.scratch}
      onKeyDown={(e) => {
        if (e.key === 'Escape') void close();
      }}
    >
      <div className="scratch-top">
        <div className="scratch-title">
          <strong>✏️ {t.scratch}</strong>
          <span className={`scratch-status${persistent ? '' : ' is-warn'}`} aria-live="polite">
            {statusText}
          </span>
        </div>
        <p className="scratch-q">{title}</p>
        <button ref={closeRef} type="button" className="scratch-done" onClick={() => void close()}>
          {t.scratchDone}
        </button>
      </div>

      <div className="scratch-tools" role="toolbar" aria-label={t.scratchTools}>
        <button type="button" className="tool" aria-pressed={tool === 'p'} title={t.scratchPen} aria-label={t.scratchPen} onClick={() => setTool('p')}>
          ✏️
        </button>
        <button type="button" className="tool" aria-pressed={tool === 'e'} title={t.scratchEraser} aria-label={t.scratchEraser} onClick={() => setTool('e')}>
          🧽
        </button>
        <span className="tool-sep" />
        {WIDTHS.map((w, i) => (
          <button
            key={w}
            type="button"
            className="tool"
            aria-pressed={size === i}
            title={t.scratchThickness(i + 1)}
            aria-label={t.scratchThickness(i + 1)}
            onClick={() => setSize(i)}
          >
            <span className="tool-dot" style={{ width: 4 + i * 4, height: 4 + i * 4 }} />
          </button>
        ))}
        <span className="tool-sep" />
        {COLORS.map((c, i) => (
          <button
            key={c}
            type="button"
            className="tool"
            aria-pressed={tool === 'p' && color === c}
            title={colorNames[i]}
            aria-label={colorNames[i]}
            onClick={() => {
              setColor(c);
              setTool('p');
            }}
          >
            <span className="tool-dot" style={{ width: 14, height: 14, background: c }} />
          </button>
        ))}
        <span className="tool-sep" />
        <button type="button" className="tool" title={t.scratchUndo} aria-label={t.scratchUndo} disabled={!strokes.current.length} onClick={undo}>
          ↶
        </button>
        <button type="button" className="tool" title={t.scratchRedo} aria-label={t.scratchRedo} disabled={!redo.current.length} onClick={redoStroke}>
          ↷
        </button>
        <span className="tool-sep" />
        <select className="tool-select" value={bg} aria-label={t.scratchBackground} onChange={(e) => pickBg(e.target.value as Background)}>
          {BACKGROUNDS.map((b) => (
            <option key={b} value={b}>
              {bgNames[b]}
            </option>
          ))}
        </select>
        {askClear ? (
          <span className="scratch-confirm" role="alert">
            {t.scratchClearAsk}
            <button type="button" className="scratch-danger" onClick={clearAll}>
              {t.scratchClearYes}
            </button>
            <button type="button" className="tool-text" onClick={() => setAskClear(false)}>
              {t.scratchClearNo}
            </button>
          </span>
        ) : (
          <button type="button" className="tool-text" disabled={!strokes.current.length} onClick={() => setAskClear(true)}>
            🗑️ {t.scratchClear}
          </button>
        )}
      </div>

      <div className="scratch-scroll" ref={scrollRef}>
        <div className="scratch-sheet">
          <div className={`scratch-paper bg-${bg}`}>
            <canvas
              ref={canvasRef}
              className="scratch-canvas"
              aria-label={t.scratchCanvas}
              onPointerDown={onDown}
              onPointerMove={onMove}
              onPointerUp={onUp}
              onPointerCancel={onUp}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
