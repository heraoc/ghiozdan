import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Grade } from './data';
import { loadPref, savePref } from './storage';

export type Lang = 'ro' | 'de';
export const LANGS: Lang[] = ['ro', 'de'];

/** Text disponibil în ambele limbi ale site-ului. */
export type Text = Record<Lang, string>;

type PluralForms = Partial<Record<Intl.LDMLPluralRule, string>> & { other: string };

// Româna are trei forme: „1 lecție”, „3 lecții”, „20 de lecții”.
function pluralWord(lang: Lang, n: number, forms: PluralForms) {
  return forms[new Intl.PluralRules(lang).select(n)] ?? forms.other;
}

function plural(lang: Lang, n: number, forms: PluralForms) {
  return `${n} ${pluralWord(lang, n, forms)}`;
}

const messages = {
  ro: {
    tagline: 'ÎNVĂȚĂM ÎMPREUNĂ',
    home: 'Ghiozdan, pagina de start',
    search: 'Caută o lecție sau o materie',
    chooseGrade: 'Alege clasa',
    chooseLang: 'Alege limba',
    gradeButton: (g: Grade) => `Clasa a ${g}-a`,
    gradeLabel: (g: Grade) => `clasa a ${g}-a`,
    whatToday: 'Ce învățăm astăzi?',
    subjectsTab: 'Materii',
    testsTab: 'Teste',
    allSubjects: 'Toate materiile',
    tests: 'Teste',
    lessons: (n: number) => plural('ro', n, { one: 'lecție', few: 'lecții', other: 'de lecții' }),
    questions: (n: number) => plural('ro', n, { one: 'întrebare', few: 'întrebări', other: 'de întrebări' }),
    minutes: (n: number) => plural('ro', n, { one: 'minut', few: 'minute', other: 'de minute' }),
    startTest: 'Începe testul',
    retakeTest: 'Reia testul',
    empty: (q: string) => `Nu am găsit nimic pentru „${q}”. Încearcă alt cuvânt.`,
    title: 'Ghiozdan · Învățăm împreună',
    backHome: 'Pagina de start',
    openLesson: 'Deschide lecția',
    noLessons: 'Încă nu sunt lecții la această materie. Revino curând!',
    fullscreen: 'Deschide pe tot ecranul',
    soon: 'Pagina aceasta va fi disponibilă în curând.',
    testTitle: 'Test: verifică ce ai învățat',
    testIntro: 'Alege răspunsul corect. Vezi imediat dacă ai nimerit și de ce.',
    questionOf: (i: number, n: number) => `Întrebarea ${i} din ${n}`,
    correct: 'Corect!',
    wrong: 'Nu chiar.',
    score: (c: number, n: number) => `Ai răspuns corect la ${c} din ${n} întrebări.`,
    scoreAll: 'Bravo, toate răspunsurile sunt corecte!',
  },
  de: {
    tagline: 'WIR LERNEN ZUSAMMEN',
    home: 'Ghiozdan, Startseite',
    search: 'Suche nach einer Lektion oder einem Fach',
    chooseGrade: 'Klasse wählen',
    chooseLang: 'Sprache wählen',
    gradeButton: (g: Grade) => `${g}. Klasse`,
    gradeLabel: (g: Grade) => `${g}. Klasse`,
    whatToday: 'Was lernen wir heute?',
    subjectsTab: 'Fächer',
    testsTab: 'Tests',
    allSubjects: 'Alle Fächer',
    tests: 'Tests',
    lessons: (n: number) => plural('de', n, { one: 'Lektion', other: 'Lektionen' }),
    questions: (n: number) => plural('de', n, { one: 'Frage', other: 'Fragen' }),
    minutes: (n: number) => plural('de', n, { one: 'Minute', other: 'Minuten' }),
    startTest: 'Test starten',
    retakeTest: 'Test wiederholen',
    empty: (q: string) => `Wir haben nichts zu „${q}“ gefunden. Versuche ein anderes Wort.`,
    title: 'Ghiozdan · Wir lernen zusammen',
    backHome: 'Startseite',
    openLesson: 'Lektion öffnen',
    noLessons: 'Für dieses Fach gibt es noch keine Lektionen. Schau bald wieder vorbei!',
    fullscreen: 'Im Vollbild öffnen',
    soon: 'Diese Seite ist bald verfügbar.',
    testTitle: 'Test: Prüfe, was du gelernt hast',
    testIntro: 'Wähle die richtige Antwort. Du siehst sofort, ob sie stimmt und warum.',
    questionOf: (i: number, n: number) => `Frage ${i} von ${n}`,
    correct: 'Richtig!',
    wrong: 'Nicht ganz.',
    score: (c: number, n: number) => `Du hast ${c} von ${n} Fragen richtig beantwortet.`,
    scoreAll: 'Super, alle Antworten sind richtig!',
  },
} satisfies Record<Lang, unknown>;

export type Messages = (typeof messages)['ro'];

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Messages;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => loadPref('lang', LANGS, 'ro'));

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = messages[lang].title;
    savePref('lang', lang);
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang, t: messages[lang] }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang trebuie folosit în interiorul <LangProvider>');
  return ctx;
}
