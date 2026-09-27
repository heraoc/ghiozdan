import type { CSSProperties } from 'react';
import type { Test } from '../data';

export function TestCard({ test, href }: { test: Test; href: string }) {
  const { subject } = test;
  const tint = { '--c': subject.color, '--soft': subject.soft } as CSSProperties;
  const starsText = '★'.repeat(test.stars) + '☆'.repeat(3 - test.stars);
  return (
    <article className="test-card" style={tint}>
      <div className="test-head">
        <span className="glyph glyph-sm" aria-hidden="true">{subject.glyph}</span>
        <div className="test-titles">
          <span className="test-subject">{subject.name}</span>
          <h3 className="test-title">{test.title}</h3>
        </div>
      </div>
      <div className="test-meta">
        <span>{test.questions} întrebări</span>
        <span>{test.minutes} minute</span>
      </div>
      <div className="test-foot">
        <span className="test-stars" aria-label={`${test.stars} din 3 steluțe`}>{starsText}</span>
        <a className="test-cta" href={href}>
          {test.stars ? 'Reia testul' : 'Începe testul'} →
        </a>
      </div>
    </article>
  );
}
