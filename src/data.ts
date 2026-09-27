// Conținut provizoriu (exemple inventate), preluat din prototipul Claude Design.
// Se înlocuiește cu conținutul real când e gata.

export type Grade = 3 | 6;

export const GRADES: Grade[] = [3, 6];

export const config = {
  studentName: 'Maria',
  defaultGrade: 3 as Grade,
};

type PaletteKey = keyof typeof PALETTE;

const PALETTE = {
  mat: { color: '#2f80ed', soft: '#e7f0fd' },
  rom: { color: '#e5673d', soft: '#fdece5' },
  sti: { color: '#27a36f', soft: '#e3f5ec' },
  eng: { color: '#8b5cf6', soft: '#f0eafe' },
  muz: { color: '#d9469a', soft: '#fbe8f2' },
  art: { color: '#e0a100', soft: '#fdf4d6' },
  bio: { color: '#27a36f', soft: '#e3f5ec' },
  fiz: { color: '#e0a100', soft: '#fdf4d6' },
  ist: { color: '#e5673d', soft: '#fdece5' },
  geo: { color: '#1f8a78', soft: '#e1f3ef' },
  inf: { color: '#5b6cf0', soft: '#eaecfd' },
};

export interface Subject {
  key: PaletteKey;
  slug: string;
  name: string;
  glyph: string;
  lessons: number;
  color: string;
  soft: string;
}

export interface Test {
  id: string;
  subject: Subject;
  title: string;
  questions: number;
  minutes: number;
  /** 0 = testul n-a fost dat încă */
  stars: 0 | 1 | 2 | 3;
}

type SubjectRow = [PaletteKey, string, string, string, number];
type TestRow = [PaletteKey, string, number, number, Test['stars']];

const SUBJECT_ROWS: Record<Grade, SubjectRow[]> = {
  3: [
    ['mat', 'matematica', 'Matematică', '1+2', 24],
    ['rom', 'limba-romana', 'Limba română', 'Aa', 30],
    ['sti', 'stiinte', 'Științe', '✿', 16],
    ['eng', 'engleza', 'Engleză', 'Hi', 18],
    ['muz', 'muzica', 'Muzică', '♪', 10],
    ['art', 'arte', 'Arte', '✎', 12],
  ],
  6: [
    ['mat', 'matematica', 'Matematică', 'x²', 36],
    ['rom', 'limba-romana', 'Limba română', 'Aa', 34],
    ['bio', 'biologie', 'Biologie', '✿', 22],
    ['fiz', 'fizica', 'Fizică', '⚡', 20],
    ['ist', 'istorie', 'Istorie', 'Ⅵ', 18],
    ['geo', 'geografie', 'Geografie', '◎', 20],
    ['eng', 'engleza', 'Engleză', 'Hi', 24],
    ['inf', 'informatica', 'Informatică', '</>', 16],
  ],
};

const TEST_ROWS: Record<Grade, TestRow[]> = {
  3: [
    ['mat', 'Adunarea și scăderea până la 1000', 10, 15, 3],
    ['mat', 'Înmulțirea până la 100', 12, 20, 2],
    ['rom', 'Substantivul', 10, 15, 0],
    ['sti', 'Ciclul apei', 8, 10, 3],
    ['eng', 'Colors and numbers', 10, 10, 1],
    ['rom', 'Semnele de punctuație', 8, 10, 0],
  ],
  6: [
    ['mat', 'Fracții ordinare', 12, 25, 2],
    ['mat', 'Unghiuri', 10, 20, 0],
    ['rom', 'Verbul', 12, 20, 3],
    ['bio', 'Celula', 10, 15, 1],
    ['ist', 'Grecia antică', 10, 15, 0],
    ['geo', 'Continente și oceane', 12, 15, 2],
    ['fiz', 'Mărimi fizice', 10, 20, 0],
    ['eng', 'Present Simple', 10, 15, 3],
  ],
};

export const STARS: Record<Grade, number> = { 3: 46, 6: 81 };

export function gradeLabel(grade: Grade) {
  return grade === 3 ? 'clasa a 3-a' : 'clasa a 6-a';
}

export function getSubjects(grade: Grade): Subject[] {
  return SUBJECT_ROWS[grade].map(([key, slug, name, glyph, lessons]) => ({
    key,
    slug,
    name,
    glyph,
    lessons,
    ...PALETTE[key],
  }));
}

export function getTests(grade: Grade): Test[] {
  const subjects = getSubjects(grade);
  return TEST_ROWS[grade].map(([key, title, questions, minutes, stars], i) => ({
    id: `${grade}-${i}`,
    subject: subjects.find((s) => s.key === key)!,
    title,
    questions,
    minutes,
    stars,
  }));
}

/** Linkuri pregătite pentru paginile interioare. */
export const subjectHref = (grade: Grade, s: Subject) => `#/clasa-${grade}/${s.slug}`;
export const testHref = (grade: Grade, t: Test) => `#/clasa-${grade}/teste/${t.id}`;
