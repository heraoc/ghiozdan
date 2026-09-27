import { useMemo, useState } from 'react';
import { Header } from '../components/Header';
import { SubjectCard } from '../components/SubjectCard';
import { TestCard } from '../components/TestCard';
import {
  config,
  getSubjects,
  getTests,
  gradeLabel,
  STARS,
  subjectHref,
  testHref,
  type Grade,
} from '../data';
import { matches } from '../search';

type Tab = 'materii' | 'teste';

const TABS: [Tab, string][] = [
  ['materii', 'Materii'],
  ['teste', 'Teste'],
];

export function Home() {
  const [grade, setGrade] = useState<Grade>(config.defaultGrade);
  const [tab, setTab] = useState<Tab>('materii');
  const [query, setQuery] = useState('');

  const subjects = useMemo(
    () => getSubjects(grade).filter((s) => matches(query, s.name)),
    [grade, query],
  );
  const tests = useMemo(
    () => getTests(grade).filter((t) => matches(query, t.title, t.subject.name)),
    [grade, query],
  );
  const label = gradeLabel(grade);

  return (
    <div className="page">
      <Header grade={grade} onGradeChange={setGrade} query={query} onQueryChange={setQuery} />

      <main className="main">
        <div className="intro">
          <div>
            <h1 className="greeting">
              Bună, <span className="greeting-name">{config.studentName}!<Underline /></span>
            </h1>
            <p className="intro-text">
              Ești în <strong>{label}</strong>. Ce învățăm astăzi?
            </p>
          </div>
          <div className="stats">
            <span>
              <strong>{STARS[grade]}</strong> steluțe
            </span>
          </div>
        </div>

        <nav className="tabs" role="tablist">
          {TABS.map(([key, text]) => (
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
              <h2 className="section-title">Toate materiile · {label}</h2>
              {subjects.length ? (
                <div className="subject-grid">
                  {subjects.map((s) => (
                    <SubjectCard key={s.key} subject={s} href={subjectHref(grade, s)} />
                  ))}
                </div>
              ) : (
                <Empty query={query} />
              )}
            </>
          ) : (
            <>
              <h2 className="section-title">Teste · {label}</h2>
              {tests.length ? (
                <div className="test-grid">
                  {tests.map((t) => (
                    <TestCard key={t.id} test={t} href={testHref(grade, t)} />
                  ))}
                </div>
              ) : (
                <Empty query={query} />
              )}
            </>
          )}
        </section>
      </main>
    </div>
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

function Empty({ query }: { query: string }) {
  return <p className="empty">Nu am găsit nimic pentru „{query.trim()}”. Încearcă alt cuvânt.</p>;
}
