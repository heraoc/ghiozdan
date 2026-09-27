import { useMemo, useState } from 'react';
import { SubjectCard } from '../components/SubjectCard';
import { TestCard } from '../components/TestCard';
import { config, getSubjects, getTests, subjectHref, type Grade } from '../data';
import { useLang } from '../i18n';
import { matches } from '../search';

type Tab = 'materii' | 'teste';

export function Home({ grade, query }: { grade: Grade; query: string }) {
  const { t } = useLang();
  const [tab, setTab] = useState<Tab>('materii');

  // Căutarea găsește textele în ambele limbi: materia sau titlul unei lecții.
  const subjects = useMemo(
    () =>
      getSubjects(grade).filter((s) =>
        matches(query, s.name.ro, s.name.de, ...s.lessons.flatMap((l) => [l.title.ro, l.title.de])),
      ),
    [grade, query],
  );
  const tests = useMemo(
    () =>
      getTests(grade).filter((x) =>
        matches(query, x.title.ro, x.title.de, x.subject.name.ro, x.subject.name.de),
      ),
    [grade, query],
  );
  const label = t.gradeLabel(grade);
  const [before, gradeText, after] = t.youAreIn(grade);
  const tabs: [Tab, string][] = [
    ['materii', t.subjectsTab],
    ['teste', t.testsTab],
  ];

  return (
    <main className="main">
      <div className="intro">
        <div>
          <h1 className="greeting">
            {t.hello},{' '}
            <span className="greeting-name">
              {config.studentName[grade]}!<Underline />
            </span>
          </h1>
          <p className="intro-text">
            {before}
            <strong>{gradeText}</strong>
            {after} {t.whatToday}
          </p>
        </div>
      </div>

      <nav className="tabs" role="tablist">
        {tabs.map(([key, text]) => (
          <button
            key={key}
            type="button"
            role="tab"
            id={`tab-${key}`}
            aria-selected={key === tab}
            aria-controls="tab-panel"
            className="tab"
            onClick={() => setTab(key)}
          >
            {text}
          </button>
        ))}
      </nav>

      <section id="tab-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
        {tab === 'materii' ? (
          <>
            <h2 className="section-title">
              {t.allSubjects} · {label}
            </h2>
            {subjects.length ? (
              <div className="subject-grid">
                {subjects.map((s) => (
                  <SubjectCard key={s.key} subject={s} href={subjectHref(grade, s)} />
                ))}
              </div>
            ) : (
              <p className="empty">{t.empty(query.trim())}</p>
            )}
          </>
        ) : (
          <>
            <h2 className="section-title">
              {t.tests} · {label}
            </h2>
            {tests.length ? (
              <div className="test-grid">
                {tests.map((x) => (
                  <TestCard key={x.id} test={x} />
                ))}
              </div>
            ) : (
              <p className="empty">{t.empty(query.trim())}</p>
            )}
          </>
        )}
      </section>
    </main>
  );
}

function Underline() {
  return (
    <svg className="greeting-underline" viewBox="0 0 100 14" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M2 9C30 3 70 3 98 7M8 12C40 8 70 8 94 11"
        stroke="#ffe45c"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
