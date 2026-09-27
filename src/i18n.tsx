import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Grade } from './data';

export type Lang = 'ro' | 'de';
export const LANGS: Lang[] = ['ro', 'de'];

/** Text disponibil în ambele limbi ale site-ului. */
export type Text = Record<Lang, string>;

const STORAGE_KEY = 'ghiozdan.lang';

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
    /** [text înainte, clasa (îngroșată), text după] */
    youAreIn: (g: Grade) => ['Ești în ', `clasa a ${g}-a`, '.'],
    hello: 'Bună',
    whatToday: 'Ce învățăm astăzi?',
    starsWord: (n: number) => pluralWord('ro', n, { one: 'steluță', few: 'steluțe', other: 'de steluțe' }),
    subjectsTab: 'Materii',
    testsTab: 'Teste',
    allSubjects: 'Toate materiile',
    tests: 'Teste',
    lessons: (n: number) => plural('ro', n, { one: 'lecție', few: 'lecții', other: 'de lecții' }),
    questions: (n: number) => plural('ro', n, { one: 'întrebare', few: 'întrebări', other: 'de întrebări' }),
    minutes: (n: number) => plural('ro', n, { one: 'minut', few: 'minute', other: 'de minute' }),
    starsOf3: (n: number) => `${n} din 3 steluțe`,
    startTest: 'Începe testul',
    retakeTest: 'Reia testul',
    empty: (q: string) => `Nu am găsit nimic pentru „${q}”. Încearcă alt cuvânt.`,
    title: 'Ghiozdan · Învățăm împreună',
  },
  de: {
    tagline: 'WIR LERNEN ZUSAMMEN',
    home: 'Ghiozdan, Startseite',
    search: 'Suche nach einer Lektion oder einem Fach',
    chooseGrade: 'Klasse wählen',
    chooseLang: 'Sprache wählen',
    gradeButton: (g: Grade) => `${g}. Klasse`,
    gradeLabel: (g: Grade) => `${g}. Klasse`,
    youAreIn: (g: Grade) => ['Du bist in der ', `${g}. Klasse`, '.'],
    hello: 'Hallo',
    whatToday: 'Was lernen wir heute?',
    starsWord: (n: number) => pluralWord('de', n, { one: 'Stern', other: 'Sterne' }),
    subjectsTab: 'Fächer',
    testsTab: 'Tests',
    allSubjects: 'Alle Fächer',
    tests: 'Tests',
    lessons: (n: number) => plural('de', n, { one: 'Lektion', other: 'Lektionen' }),
    questions: (n: number) => plural('de', n, { one: 'Frage', other: 'Fragen' }),
    minutes: (n: number) => plural('de', n, { one: 'Minute', other: 'Minuten' }),
    starsOf3: (n: number) => `${n} von 3 Sternen`,
    startTest: 'Test starten',
    retakeTest: 'Test wiederholen',
    empty: (q: string) => `Wir haben nichts zu „${q}“ gefunden. Versuche ein anderes Wort.`,
    title: 'Ghiozdan · Wir lernen zusammen',
  },
} satisfies Record<Lang, unknown>;

export type Messages = (typeof messages)['ro'];

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Messages;
}

const LangContext = createContext<LangContextValue | null>(null);

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'ro' || saved === 'de') return saved;
  } catch {
    // localStorage indisponibil (mod privat etc.)
  }
  return 'ro';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = messages[lang].title;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignorăm
    }
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang, t: messages[lang] }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang trebuie folosit în interiorul <LangProvider>');
  return ctx;
}
