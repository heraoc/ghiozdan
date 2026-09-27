// Conținutul site-ului. Fiecare text are variantă în română (ro) și germană (de).

import type { Text } from './i18n';

export type Grade = 3 | 6;

export const GRADES: Grade[] = [3, 6];

export const config = {
  /** Numele elevului din mesajul de întâmpinare, în funcție de clasă. */
  studentName: { 3: 'Augusta', 6: 'Smaranda' } as Record<Grade, string>,
  defaultGrade: 3 as Grade,
};

const PALETTE = {
  mat: { color: '#2f80ed', soft: '#e7f0fd' },
  rom: { color: '#e5673d', soft: '#fdece5' },
  ger: { color: '#8b5cf6', soft: '#f0eafe' },
  sti: { color: '#27a36f', soft: '#e3f5ec' },
  bio: { color: '#27a36f', soft: '#e3f5ec' },
  fiz: { color: '#e0a100', soft: '#fdf4d6' },
  ist: { color: '#d9469a', soft: '#fbe8f2' },
  geo: { color: '#1f8a78', soft: '#e1f3ef' },
  tic: { color: '#5b6cf0', soft: '#eaecfd' },
};

export type SubjectKey = keyof typeof PALETTE;

export interface Lesson {
  slug: string;
  title: Text;
  summary: Text;
  /** Pagina interactivă a lecției, din folderul public/. Primește ?lang=ro|de. */
  src: string;
}

export interface Subject {
  key: SubjectKey;
  slug: string;
  name: Text;
  glyph: string;
  lessons: Lesson[];
  color: string;
  soft: string;
}

export interface Test {
  id: string;
  subject: Subject;
  title: Text;
  questions: number;
  minutes: number;
  /** 0 = testul n-a fost dat încă */
  stars: 0 | 1 | 2 | 3;
}

const SUBJECT_NAMES: Record<SubjectKey, [slug: string, name: Text]> = {
  mat: ['matematica', { ro: 'Matematică', de: 'Mathematik' }],
  rom: ['limba-romana', { ro: 'Limba română', de: 'Rumänisch' }],
  ger: ['limba-germana', { ro: 'Limba germană', de: 'Deutsch' }],
  sti: ['stiintele-naturii', { ro: 'Științele naturii', de: 'Naturwissenschaften' }],
  bio: ['biologie', { ro: 'Biologie', de: 'Biologie' }],
  fiz: ['fizica', { ro: 'Fizică', de: 'Physik' }],
  ist: ['istorie', { ro: 'Istorie', de: 'Geschichte' }],
  geo: ['geografie', { ro: 'Geografie', de: 'Geografie' }],
  tic: ['tic', { ro: 'TIC', de: 'IKT' }],
};

/** Materiile fiecărei clase, în ordinea afișării, cu iconița lor. */
const SUBJECTS: Record<Grade, [SubjectKey, glyph: string][]> = {
  3: [
    ['mat', '1+2'],
    ['rom', 'Aa'],
    ['ger', 'Ää'],
    ['sti', '✿'],
  ],
  6: [
    ['mat', 'x²'],
    ['rom', 'Aa'],
    ['ger', 'Ää'],
    ['ist', 'Ⅵ'],
    ['fiz', '⚡'],
    ['geo', '◎'],
    ['bio', '✿'],
    ['tic', '</>'],
  ],
};

/**
 * Lecțiile fiecărei materii. Momentan nu există niciuna; numărul de lecții
 * de pe carduri se calculează automat din această listă.
 */
const LESSONS: Record<Grade, Partial<Record<SubjectKey, Lesson[]>>> = {
  3: {},
  6: {
    ist: [
      {
        slug: 'ibn-battuta',
        title: {
          ro: 'Călătoriile lui Ibn Battuta (1325–1354)',
          de: 'Die Reisen des Ibn Battuta (1325–1354)',
        },
        summary: {
          ro: 'Aproape 30 de ani pe drum, din Tanger până în China și Mali. Parcurge traseul pe hartă, oprire cu oprire.',
          de: 'Fast 30 Jahre unterwegs, von Tanger bis nach China und Mali. Folge der Route auf der Karte, Station für Station.',
        },
        src: 'lectii/clasa-6/istorie/ibn-battuta.html',
      },
    ],
  },
};

type TestRow = [SubjectKey, Text, questions: number, minutes: number];

/** Teste-exemplu (provizorii), încă nedate: 0 steluțe. */
const TESTS: Record<Grade, TestRow[]> = {
  3: [
    ['mat', { ro: 'Adunarea și scăderea până la 1000', de: 'Addition und Subtraktion bis 1000' }, 10, 15],
    ['mat', { ro: 'Înmulțirea până la 100', de: 'Multiplikation bis 100' }, 12, 20],
    ['rom', { ro: 'Substantivul', de: 'Das Substantiv' }, 10, 15],
    ['sti', { ro: 'Ciclul apei', de: 'Der Wasserkreislauf' }, 8, 10],
    ['rom', { ro: 'Semnele de punctuație', de: 'Die Satzzeichen' }, 8, 10],
  ],
  6: [
    ['mat', { ro: 'Fracții ordinare', de: 'Gewöhnliche Brüche' }, 12, 25],
    ['mat', { ro: 'Unghiuri', de: 'Winkel' }, 10, 20],
    ['rom', { ro: 'Verbul', de: 'Das Verb' }, 12, 20],
    ['bio', { ro: 'Celula', de: 'Die Zelle' }, 10, 15],
    ['ist', { ro: 'Grecia antică', de: 'Das antike Griechenland' }, 10, 15],
    ['geo', { ro: 'Continente și oceane', de: 'Kontinente und Ozeane' }, 12, 15],
    ['fiz', { ro: 'Mărimi fizice', de: 'Physikalische Größen' }, 10, 20],
  ],
};

export function getSubjects(grade: Grade): Subject[] {
  return SUBJECTS[grade].map(([key, glyph]) => {
    const [slug, name] = SUBJECT_NAMES[key];
    return { key, slug, name, glyph, lessons: LESSONS[grade][key] ?? [], ...PALETTE[key] };
  });
}

export function getTests(grade: Grade): Test[] {
  const subjects = getSubjects(grade);
  return TESTS[grade].map(([key, title, questions, minutes], i) => ({
    id: `${grade}-${i}`,
    subject: subjects.find((s) => s.key === key)!,
    title,
    questions,
    minutes,
    stars: 0,
  }));
}

/** Steluțele adunate din toate testele clasei. */
export function totalStars(grade: Grade) {
  return getTests(grade).reduce((sum, t) => sum + t.stars, 0);
}

export function getSubject(grade: Grade, slug: string) {
  return getSubjects(grade).find((s) => s.slug === slug);
}

/** Linkuri către paginile interioare (rutare prin # în adresă). */
export const homeHref = '#/';
export const subjectHref = (grade: Grade, s: Subject) => `#/clasa-${grade}/${s.slug}`;
export const lessonHref = (grade: Grade, s: Subject, l: Lesson) => `#/clasa-${grade}/${s.slug}/${l.slug}`;
export const testHref = (grade: Grade, t: Test) => `#/clasa-${grade}/teste/${t.id}`;
