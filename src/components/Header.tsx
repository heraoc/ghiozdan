import { GRADES, type Grade } from '../data';
import { LANGS, useLang } from '../i18n';
import { Avatar } from './Avatar';

interface Props {
  grade: Grade;
  onGradeChange: (g: Grade) => void;
  query: string;
  onQueryChange: (q: string) => void;
}

export function Header({ grade, onGradeChange, query, onQueryChange }: Props) {
  const { lang, setLang, t } = useLang();
  return (
    <header className="header">
      <a className="brand" href="#" aria-label={t.home}>
        <span className="brand-mark">G</span>
        <span className="brand-text">
          <span className="brand-name">GHIOZDAN</span>
          <span className="brand-tagline">{t.tagline}</span>
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
          placeholder={t.search}
          aria-label={t.search}
        />
      </label>

      <div className="switch" role="group" aria-label={t.chooseGrade}>
        {GRADES.map((g) => (
          <button
            key={g}
            type="button"
            className="switch-btn"
            aria-pressed={g === grade}
            onClick={() => onGradeChange(g)}
          >
            {t.gradeButton(g)}
          </button>
        ))}
      </div>

      <div className="switch" role="group" aria-label={t.chooseLang}>
        {LANGS.map((l) => (
          <button
            key={l}
            type="button"
            className="switch-btn"
            lang={l}
            aria-pressed={l === lang}
            onClick={() => setLang(l)}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Avatar />
    </header>
  );
}
