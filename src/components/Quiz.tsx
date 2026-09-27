import { forwardRef, useState } from 'react';
import type { Question } from '../data';
import { useLang } from '../i18n';

/** Test cu variante de răspuns: fiecare răspuns primește imediat corect/greșit și explicația. */
export const Quiz = forwardRef<HTMLElement, { questions: Question[] }>(function Quiz({ questions }, ref) {
  const { lang, t } = useLang();
  const [answers, setAnswers] = useState<(number | undefined)[]>(() => questions.map(() => undefined));

  const answered = answers.filter((a) => a !== undefined).length;
  const right = answers.filter((a, i) => a === questions[i].correct).length;
  const done = answered === questions.length;

  const choose = (qi: number, oi: number) =>
    setAnswers((prev) => (prev[qi] !== undefined ? prev : prev.map((a, i) => (i === qi ? oi : a))));

  return (
    <section className="quiz" ref={ref} aria-labelledby="quiz-title">
      <h2 id="quiz-title" className="quiz-title">
        {t.testTitle}
      </h2>
      <p className="page-meta">{t.testIntro}</p>

      <ol className="quiz-list">
        {questions.map((q, qi) => {
          const chosen = answers[qi];
          const isAnswered = chosen !== undefined;
          return (
            <li key={qi} className="quiz-card">
              <span className="quiz-num">{t.questionOf(qi + 1, questions.length)}</span>
              <h3 className="quiz-q">{q.q[lang]}</h3>
              <div className="quiz-options">
                {q.options.map((o, oi) => {
                  const state = !isAnswered
                    ? ''
                    : oi === q.correct
                      ? 'is-correct'
                      : oi === chosen
                        ? 'is-wrong'
                        : 'is-dim';
                  return (
                    <button
                      key={oi}
                      type="button"
                      className={`quiz-option ${state}`}
                      aria-pressed={oi === chosen}
                      disabled={isAnswered}
                      onClick={() => choose(qi, oi)}
                    >
                      {o[lang]}
                    </button>
                  );
                })}
              </div>
              <div aria-live="polite">
                {isAnswered && (
                  <p className={`quiz-feedback ${chosen === q.correct ? 'is-correct' : 'is-wrong'}`}>
                    <strong>{chosen === q.correct ? t.correct : t.wrong}</strong> {q.explain[lang]}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      {done && (
        <div className="quiz-result" aria-live="polite">
          <p>{right === questions.length ? t.scoreAll : t.score(right, questions.length)}</p>
          <button type="button" className="quiz-retry" onClick={() => setAnswers(questions.map(() => undefined))}>
            {t.retakeTest}
          </button>
        </div>
      )}
    </section>
  );
});
