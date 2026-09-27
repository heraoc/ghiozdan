import { GRADES, type Grade } from '../data';
import { Avatar } from './Avatar';

interface Props {
  grade: Grade;
  onGradeChange: (g: Grade) => void;
  query: string;
  onQueryChange: (q: string) => void;
}

export function Header({ grade, onGradeChange, query, onQueryChange }: Props) {
  return (
    <header className="header">
      <a className="brand" href="#" aria-label="Ghiozdan, pagina de start">
        <span className="brand-mark">G</span>
        <span className="brand-text">
          <span className="brand-name">GHIOZDAN</span>
          <span className="brand-tagline">ÎNVĂȚĂM ÎMPREUNĂ</span>
        </span>
      </a>

      <label className="search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-4-4" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Caută o lecție sau o materie"
          aria-label="Caută o lecție sau o materie"
        />
      </label>

      <div className="grade-switch" role="group" aria-label="Alege clasa">
        {GRADES.map((g) => (
          <button
            key={g}
            type="button"
            className="grade-btn"
            aria-pressed={g === grade}
            onClick={() => onGradeChange(g)}
          >
            {g === 3 ? 'Clasa a 3-a' : 'Clasa a 6-a'}
          </button>
        ))}
      </div>

      <Avatar />
    </header>
  );
}
