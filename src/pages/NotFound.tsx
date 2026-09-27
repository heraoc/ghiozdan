import { homeHref } from '../data';
import { useLang } from '../i18n';

export function NotFound() {
  const { t } = useLang();
  return (
    <main className="main">
      <a className="back-link" href={homeHref}>
        ← {t.backHome}
      </a>
      <p className="empty">{t.soon}</p>
    </main>
  );
}
