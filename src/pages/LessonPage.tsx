import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Quiz } from '../components/Quiz';
import { getSubject, lessonTestHref, subjectHref, type Grade } from '../data';
import { useLang } from '../i18n';
import { NotFound } from './NotFound';

interface Props {
  grade: Grade;
  subjectSlug: string;
  lessonSlug: string;
  /** Adresa se termină în /test: derulăm direct la testul de la final. */
  toTest: boolean;
}

export function LessonPage({ grade, subjectSlug, lessonSlug, toTest }: Props) {
  const { lang, t } = useLang();
  const quizRef = useRef<HTMLElement>(null);
  const [frameHeight, setFrameHeight] = useState(800);
  const subject = getSubject(grade, subjectSlug);
  const lesson = subject?.lessons.find((l) => l.slug === lessonSlug);

  // Harta își schimbă înălțimea după ce se încarcă, deci derulăm la test și după aceea,
  // dar doar în primele secunde, ca să nu sărim la test cât timp copilul folosește harta.
  const scrollUntil = useRef(0);
  useEffect(() => {
    scrollUntil.current = toTest ? Date.now() + 2500 : 0;
  }, [toTest, lessonSlug]);
  useEffect(() => {
    if (Date.now() < scrollUntil.current) quizRef.current?.scrollIntoView({ block: 'start' });
  }, [toTest, lessonSlug, frameHeight]);

  if (!subject || !lesson) return <NotFound />;

  const file = typeof lesson.src === 'string' ? lesson.src : lesson.src[lang];
  const src = `${import.meta.env.BASE_URL}${file}?lang=${lang}`;
  const tint = { '--c': subject.color, '--soft': subject.soft } as CSSProperties;
  return (
    <main className="main main-wide" style={tint}>
      <a className="back-link" href={subjectHref(grade, subject)}>
        ← {subject.name[lang]} · {t.gradeLabel(grade)}
      </a>
      <div className="lesson-head">
        <div>
          <span className="lesson-no">{t.lessonNo(subject.lessons.indexOf(lesson) + 1)}</span>
          <h1 className="page-title">{lesson.title[lang]}</h1>
          <p className="page-meta">{lesson.summary[lang]}</p>
        </div>
        <div className="lesson-links">
          {lesson.test && <a href={lessonTestHref(grade, subject, lesson)}>{t.startTest} ↓</a>}
          <a href={src} target="_blank" rel="noopener">
            {t.fullscreen} ↗
          </a>
        </div>
      </div>
      <LessonFrame
        key={src}
        src={`${src}&embed=1`}
        title={lesson.title[lang]}
        height={frameHeight}
        onHeight={setFrameHeight}
      />
      {lesson.test && <Quiz key={lesson.slug} ref={quizRef} questions={lesson.test.questions} />}
    </main>
  );
}

interface FrameProps {
  src: string;
  title: string;
  height: number;
  onHeight: (h: number) => void;
}

/** Lecția interactivă, cu înălțimea potrivită automat după conținut. */
function LessonFrame({ src, title, height, onHeight }: FrameProps) {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = ref.current;
    if (!frame) return;
    let observer: ResizeObserver | undefined;
    const onLoad = () => {
      const doc = frame.contentDocument;
      if (!doc) return; // altă origine: rămâne înălțimea implicită
      // Măsurăm body, nu documentElement: scrollHeight-ul acestuia nu scade sub înălțimea cadrului,
      // așa că, după ce conținutul se strânge (de exemplu când se încarcă fonturile), cadrul n-ar mai scădea.
      const fit = () => onHeight(doc.body.scrollHeight);
      observer = new ResizeObserver(fit);
      observer.observe(doc.body);
      fit();
    };
    frame.addEventListener('load', onLoad);
    if (frame.contentDocument?.readyState === 'complete' && frame.contentDocument.URL !== 'about:blank') onLoad();
    return () => {
      frame.removeEventListener('load', onLoad);
      observer?.disconnect();
    };
  }, [onHeight]);

  return <iframe ref={ref} className="lesson-frame" src={src} title={title} style={{ height }} />;
}
