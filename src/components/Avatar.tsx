export function Avatar() {
  return (
    <div className="avatar" aria-hidden="true">
      <svg width="40" height="40" viewBox="0 0 40 40">
        <rect width="40" height="40" fill="#ffe9a8" />
        <circle cx="20" cy="17" r="8" fill="#f2b98d" />
        <path d="M11 15c0-7 18-7 18 0c-3-3-15-3-18 0z" fill="#6b3f2a" />
        <circle cx="17" cy="17" r="1.1" fill="#1d2b2a" />
        <circle cx="23" cy="17" r="1.1" fill="#1d2b2a" />
        <path d="M17 20.5q3 2.5 6 0" stroke="#1d2b2a" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M6 40c2-9 26-9 28 0z" fill="#3fb39c" />
      </svg>
    </div>
  );
}
