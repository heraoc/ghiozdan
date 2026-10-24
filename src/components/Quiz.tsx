import { forwardRef, useEffect, useRef, useState } from 'react';
import type { Question } from '../data';
import { useLang } from '../i18n';
import { clearPrefix, listThumbs } from '../scratch';
import { Scratchpad } from './Scratchpad';

/** Test cu variante de răspuns: fiecare răspuns primește imediat corect/greșit și explicația. */
export const Quiz = forwardRef<HTMLElement, { questions: Question[]; scratchKey: string }>(function Quiz({ questions, scratchKey }, ref) {
  const { lang, t } = useLang();
  const [answers, setAnswers] = useState<(number | undefined)[]>(() => questions.map(() => undefined));
  // Ciorna: întrebarea deschisă, miniaturile ciornelor salvate și butonul de la „Reia testul” nu o șterg.
  const [open, setOpen] = useState<number | null>(null);
  const [thumbs, setThumbs] = useState<{ [key: string]: string }>({});
  const [askClear, setAskClear] = useState(false);
  const opener = useRef<HTMLElement | null>(null);
  const prefix = `${scratchKey}/q`;

  useEffect(() => {
    let alive = true;
    void listThumbs(prefix).then((found) => alive && setThumbs(found));
    return () => {
      alive = false;
    };
  }, [prefix]);

  const closeScratch = () => {
    setOpen(null);
    opener.current?.focus();
  };
  const onSaved = (key: string, thumb: string | null) =>
    setThumbs((prev) => {
      const next = { ...prev };
      if (thumb) next[key] = thumb;
      else delete next[key];
      return next;
    });
  const clearAll = async () => {
    await clearPrefix(prefix);
    setThumbs({});
    setAskClear(false);
  };

  const answered = answers.filter((a) => a !== undefined).length;
  const right = answers.filter((a, i) => a === questions[i].correct).length;
  const done = answered === questions.length;

  const choose = (qi: number, oi: number) =>
    setAnswers((prev) => (prev[qi] !== undefined ? prev : prev.map((a, i) => (i === qi ? oi : a))));

  return (
    <section className={`quiz${open !== null ? ' scratch-open' : ''}`} ref={ref} aria-labelledby="quiz-title">
      <h2 id="quiz-title" className="quiz-title">
        {t.testTitle}
      </h2>
      <p className="page-meta">{t.testIntro}</p>
      {Object.keys(thumbs).length > 0 && (
        <p className="scratch-clear-all">
          {askClear ? (
            <>
              {t.scratchClearAllAsk}{' '}
              <button type="button" className="scratch-link is-danger" onClick={() => void clearAll()}>
                {t.scratchClearYes}
              </button>{' '}
              <button type="button" className="scratch-link" onClick={() => setAskClear(false)}>
                {t.scratchClearNo}
              </button>
            </>
          ) : (
            <button type="button" className="scratch-link" onClick={() => setAskClear(true)}>
              🧹 {t.scratchClearAll}
            </button>
          )}
        </p>
      )}

      <ol className="quiz-list">
        {questions.map((q, qi) => {
          const chosen = answers[qi];
          const isAnswered = chosen !== undefined;
          return (
            <li key={qi} className="quiz-card">
              <div className="quiz-head">
                <span className="quiz-num">{t.questionOf(qi + 1, questions.length)}</span>
                <button
                  type="button"
                  className={`scratch-btn${thumbs[`${prefix}${qi + 1}`] ? ' has-scratch' : ''}`}
                  onClick={(e) => {
                    opener.current = e.currentTarget;
                    setOpen(qi);
                  }}
                >
                  {thumbs[`${prefix}${qi + 1}`] ? (
                    <>
                      <img src={thumbs[`${prefix}${qi + 1}`]} alt="" width={48} height={24} />
                      {t.scratchHas}
                    </>
                  ) : (
                    <>✏️ {t.scratchOpen}</>
                  )}
                </button>
              </div>
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

      {open !== null && (
        <Scratchpad
          key={open}
          storageKey={`${prefix}${open + 1}`}
          title={questions[open].q[lang]}
          onClose={closeScratch}
          onSaved={onSaved}
        />
      )}
    </section>
  );
});
