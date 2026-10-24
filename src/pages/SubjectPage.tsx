import type { CSSProperties } from 'react';
import { getSubject, homeHref, lessonHref, type Grade } from '../data';
import { useLang } from '../i18n';
import { NotFound } from './NotFound';

export function SubjectPage({ grade, slug }: { grade: Grade; slug: string }) {
  const { lang, t } = useLang();
  const subject = getSubject(grade, slug);
  if (!subject) return <NotFound />;

  // Lecțiile active (necitite) urcă în față; cele încheiate coboară, în ordinea originală.
  const ordered = subject.lessons
    .map((l, i) => ({ l, no: i + 1 }))
    .sort((a, b) => Number(!!a.l.done) - Number(!!b.l.done));

  const tint = { '--c': subject.color, '--soft': subject.soft } as CSSProperties;
  return (
    <main className="main" style={tint}>
      <a className="back-link" href={homeHref}>
        ← {t.backHome}
      </a>
      <div className="subject-head">
        <span className="glyph glyph-lg" aria-hidden="true">{subject.glyph}</span>
        <div>
          <h1 className="page-title">{subject.name[lang]}</h1>
          <p className="page-meta">
            {t.gradeLabel(grade)} · {t.lessons(subject.lessons.length)}
          </p>
        </div>
      </div>

      {subject.lessons.length ? (
        <div className="lesson-list">
          {ordered.map(({ l, no }) => (
            <a key={l.slug} className={`lesson-card${l.done ? ' is-done' : ''}`} href={lessonHref(grade, subject, l)}>
              <span className="lesson-no">
                {t.lessonNo(no)}
                {l.done && <span className="lesson-done-mark"> · ✓ {t.lessonDone}</span>}
              </span>
              <h2 className="lesson-title">{l.title[lang]}</h2>
              <p className="lesson-summary">{l.summary[lang]}</p>
              <span className="lesson-cta">{t.openLesson} →</span>
            </a>
          ))}
        </div>
      ) : (
        <p className="empty">{t.noLessons}</p>
      )}
    </main>
  );
}
