import type { CSSProperties } from 'react';
import type { Test } from '../data';
import { useLang } from '../i18n';

export function TestCard({ test, href }: { test: Test; href: string }) {
  const { lang, t } = useLang();
  const { subject } = test;
  const tint = { '--c': subject.color, '--soft': subject.soft } as CSSProperties;
  const starsText = '★'.repeat(test.stars) + '☆'.repeat(3 - test.stars);
  return (
    <article className="test-card" style={tint}>
      <div className="test-head">
        <span className="glyph glyph-sm" aria-hidden="true">{subject.glyph}</span>
        <div className="test-titles">
          <span className="test-subject">{subject.name[lang]}</span>
          <h3 className="test-title">{test.title[lang]}</h3>
        </div>
      </div>
      <div className="test-meta">
        <span>{t.questions(test.questions)}</span>
        <span>{t.minutes(test.minutes)}</span>
      </div>
      <div className="test-foot">
        <span className="test-stars" aria-label={t.starsOf3(test.stars)}>{starsText}</span>
        <a className="test-cta" href={href}>
          {test.stars ? t.retakeTest : t.startTest} →
        </a>
      </div>
    </article>
  );
}
