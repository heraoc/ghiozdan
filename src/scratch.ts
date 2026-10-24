// Ciorna: desenele se țin pe dispozitiv, în IndexedDB (localStorage e prea mic pentru desene).
// Dacă IndexedDB lipsește sau e blocat (mod privat), ciorna merge mai departe, dar doar cât timp pagina rămâne deschisă.

/** O tușă: x, y și grosimea relativă (m) pentru fiecare punct, într-un singur șir plat. */
export interface Stroke {
  /** p = creion, e = radieră */
  t: 'p' | 'e';
  c: string;
  w: number;
  pts: number[];
}

interface Record {
  strokes: Stroke[];
  thumb: string;
  at: number;
}

const DB = 'ghiozdan';
const STORE = 'scratch';

const memory = new Map<string, Record>();
let dbPromise: Promise<IDBDatabase> | null = null;
let persistent = true;

function open(): Promise<IDBDatabase> {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      try {
        const req = indexedDB.open(DB, 1);
        req.onupgradeneeded = () => req.result.createObjectStore(STORE);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      } catch (e) {
        reject(e);
      }
    });
    dbPromise.catch(() => {
      persistent = false;
    });
  }
  return dbPromise;
}

function run<T>(mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return open().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const req = fn(db.transaction(STORE, mode).objectStore(STORE));
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      }),
  );
}

/** Se salvează ciorna pe acest dispozitiv? (fals în modul privat) */
export async function canPersist(): Promise<boolean> {
  try {
    await open();
  } catch {
    persistent = false;
  }
  return persistent;
}

export async function loadScratch(key: string): Promise<Stroke[]> {
  try {
    const rec = await run<Record | undefined>('readonly', (s) => s.get(key));
    if (rec) return rec.strokes;
  } catch {
    persistent = false;
  }
  return memory.get(key)?.strokes ?? [];
}

/** Salvează tușele; fără tușe, șterge înregistrarea. */
export async function saveScratch(key: string, strokes: Stroke[], thumb: string): Promise<void> {
  if (!strokes.length) return clearScratch(key);
  const rec: Record = { strokes, thumb, at: Date.now() };
  memory.set(key, rec);
  try {
    await run('readwrite', (s) => s.put(rec, key));
  } catch {
    persistent = false;
  }
}

export async function clearScratch(key: string): Promise<void> {
  memory.delete(key);
  try {
    await run('readwrite', (s) => s.delete(key));
  } catch {
    persistent = false;
  }
}

/** Miniaturile ciornelor care încep cu prefixul dat (cheie → imagine). */
export async function listThumbs(prefix: string): Promise<{ [key: string]: string }> {
  const out: { [key: string]: string } = {};
  memory.forEach((rec, key) => {
    if (key.startsWith(prefix)) out[key] = rec.thumb;
  });
  try {
    const db = await open();
    await new Promise<void>((resolve, reject) => {
      const req = db.transaction(STORE, 'readonly').objectStore(STORE).openCursor(IDBKeyRange.bound(prefix, prefix + '￿'));
      req.onsuccess = () => {
        const cur = req.result;
        if (!cur) return resolve();
        out[cur.key as string] = (cur.value as Record).thumb;
        cur.continue();
      };
      req.onerror = () => reject(req.error);
    });
  } catch {
    persistent = false;
  }
  return out;
}

export async function clearPrefix(prefix: string): Promise<void> {
  [...memory.keys()].filter((k) => k.startsWith(prefix)).forEach((k) => memory.delete(k));
  try {
    await run('readwrite', (s) => s.delete(IDBKeyRange.bound(prefix, prefix + '￿')));
  } catch {
    persistent = false;
  }
}
