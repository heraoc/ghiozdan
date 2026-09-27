import type { CSSProperties } from 'react';
import type { Subject } from '../data';

export function SubjectCard({ subject, href }: { subject: Subject; href: string }) {
  const tint = { '--c': subject.color, '--soft': subject.soft } as CSSProperties;
  return (
    <a className="subject-card" href={href} style={tint}>
      <span className="glyph glyph-lg" aria-hidden="true">{subject.glyph}</span>
      <span className="subject-info">
        <span className="subject-name">{subject.name}</span>
        <span className="subject-count">{subject.lessons} lecții</span>
      </span>
    </a>
  );
}
