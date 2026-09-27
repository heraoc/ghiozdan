import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { getSubject, subjectHref, type Grade } from '../data';
import { useLang } from '../i18n';
import { NotFound } from './NotFound';

interface Props {
  grade: Grade;
  subjectSlug: string;
  lessonSlug: string;
}

export function LessonPage({ grade, subjectSlug, lessonSlug }: Props) {
  const { lang, t } = useLang();
  const subject = getSubject(grade, subjectSlug);
  const lesson = subject?.lessons.find((l) => l.slug === lessonSlug);
  if (!subject || !lesson) return <NotFound />;

  const src = `${import.meta.env.BASE_URL}${lesson.src}?lang=${lang}`;
  const tint = { '--c': subject.color, '--soft': subject.soft } as CSSProperties;
  return (
    <main className="main main-wide" style={tint}>
      <a className="back-link" href={subjectHref(grade, subject)}>
        ← {subject.name[lang]} · {t.gradeLabel(grade)}
      </a>
      <div className="lesson-head">
        <div>
          <h1 className="page-title">{lesson.title[lang]}</h1>
          <p className="page-meta">{lesson.summary[lang]}</p>
        </div>
        <a className="fullscreen-link" href={src} target="_blank" rel="noopener">
          {t.fullscreen} ↗
        </a>
      </div>
      <LessonFrame key={src} src={`${src}&embed=1`} title={lesson.title[lang]} />
    </main>
  );
}

/** Lecția interactivă, cu înălțimea potrivită automat după conținut. */
function LessonFrame({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(800);

  useEffect(() => {
    const frame = ref.current;
    if (!frame) return;
    let observer: ResizeObserver | undefined;
    const onLoad = () => {
      const doc = frame.contentDocument;
      if (!doc) return; // altă origine: rămâne înălțimea implicită
      const fit = () => setHeight(doc.documentElement.scrollHeight);
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
  }, []);

  return <iframe ref={ref} className="lesson-frame" src={src} title={title} style={{ height }} />;
}
