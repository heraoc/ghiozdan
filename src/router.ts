import { useEffect, useState } from 'react';
import type { Grade } from './data';

/**
 * Rutare simplă prin # în adresă, fără configurare pe server:
 *   #/                              pagina de start
 *   #/clasa-6/istorie               pagina materiei
 *   #/clasa-6/istorie/ibn-battuta   pagina lecției
 */
export type Route =
  | { page: 'home' }
  | { page: 'subject'; grade: Grade; subject: string }
  | { page: 'lesson'; grade: Grade; subject: string; lesson: string }
  | { page: 'notFound'; grade?: Grade };

export function parseRoute(hash: string): Route {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
  if (!parts.length) return { page: 'home' };

  const m = /^clasa-(3|6)$/.exec(parts[0]);
  if (!m) return { page: 'notFound' };
  const grade = Number(m[1]) as Grade;

  if (parts.length === 1) return { page: 'home' };
  if (parts[1] === 'teste') return { page: 'notFound', grade };
  if (parts.length === 2) return { page: 'subject', grade, subject: parts[1] };
  if (parts.length === 3) return { page: 'lesson', grade, subject: parts[1], lesson: parts[2] };
  return { page: 'notFound', grade };
}

export function useRoute() {
  const [route, setRoute] = useState(() => parseRoute(location.hash));
  useEffect(() => {
    const onChange = () => {
      setRoute(parseRoute(location.hash));
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}

export function navigate(href: string) {
  if (location.hash !== href) location.hash = href;
}
