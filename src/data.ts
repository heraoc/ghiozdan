// Conținutul site-ului. Fiecare text are variantă în română (ro) și germană (de).

import { ceasulSiArceleTest } from './content/ceasul-si-arcele-test';
import { unghiuriTest } from './content/unghiuri-test';
import { adiacenteBisectoareaTest } from './content/adiacente-bisectoarea-test';
import { ibnBattutaTest } from './content/ibn-battuta-test';
import { inmultireaTest } from './content/inmultirea-test';
import { sumaSiDiferentaTest } from './content/suma-si-diferenta-test';
import { mariExploratoriTest } from './content/mari-exploratori-test';
import { organismulOmuluiTest } from './content/organismul-omului-test';
import { nutritiaTest } from './content/nutritia-test';
import { frunzaTest } from './content/frunza-test';
import { descoperireaLumiiTest } from './content/descoperirea-lumii-test';
import { vikingiiTest } from './content/vikingii-test';
import { organismulPlanteiTest } from './content/organismul-plantei-test';
import { unitatiDeMasuraTest } from './content/unitati-de-masura-test';
import type { Text } from './i18n';

export type Grade = 3 | 6;

export const GRADES: Grade[] = [3, 6];

export const config = {
  defaultGrade: 3 as Grade,
};

const PALETTE = {
  mat: { color: '#2f80ed', soft: '#e7f0fd' },
  alg: { color: '#2f80ed', soft: '#e7f0fd' },
  gmt: { color: '#d64545', soft: '#fbe8e8' },
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
  /**
   * Pagina interactivă a lecției, din folderul public/. O singură pagină primește ?lang=ro|de;
   * altfel, câte o pagină pentru fiecare limbă.
   */
  src: string | Text;
  /** Testul de la finalul lecției (opțional). */
  test?: { questions: Question[]; minutes: number };
}

export interface Question {
  q: Text;
  options: Text[];
  /** Indexul variantei corecte din options. */
  correct: number;
  /** Explicația afișată după răspuns. */
  explain: Text;
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
  href: string;
}

const SUBJECT_NAMES: Record<SubjectKey, [slug: string, name: Text]> = {
  mat: ['matematica', { ro: 'Matematică', de: 'Mathematik' }],
  alg: ['algebra', { ro: 'Algebră', de: 'Algebra' }],
  gmt: ['geometrie', { ro: 'Geometrie', de: 'Geometrie' }],
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
    ['mat', '2×3'],
    ['rom', 'Aa'],
    ['ger', 'Ää'],
    ['sti', '✿'],
  ],
  6: [
    ['alg', 'x²'],
    ['gmt', '△'],
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
 * Lecțiile fiecărei materii, în ordinea în care au fost create: lecțiile noi se adaugă
 * la sfârșitul listei materiei (doar la cerere se mută mai sus, de exemplu o recapitulare
 * pusă după lecțiile pe care le recapitulează). Numărul lecției (1, 2, 3…) vine din poziția în listă,
 * iar numărul de lecții de pe carduri se calculează tot din această listă.
 */
const LESSONS: Record<Grade, Partial<Record<SubjectKey, Lesson[]>>> = {
  3: {
    mat: [
      {
        slug: 'inmultirea',
        title: {
          ro: 'Înmulțirea numerelor naturale',
          de: 'Die Multiplikation natürlicher Zahlen',
        },
        summary: {
          ro: 'Înmulțirea ca adunare repetată, înmulțirea cu o sumă și numere de două cifre înmulțite cu o cifră.',
          de: 'Multiplikation als wiederholte Addition, Multiplikation mit einer Summe und zweistellige Zahlen mal einstellige.',
        },
        src: 'lectii/clasa-3/matematica/inmultirea.html',
        test: { questions: inmultireaTest, minutes: 8 },
      },
      {
        slug: 'suma-si-diferenta',
        title: {
          ro: 'Metoda grafică: suma și diferența',
          de: 'Die grafische Methode: Summe und Differenz',
        },
        summary: {
          ro: 'Aflăm două numere când le știm suma și diferența: desenul cu segmente, planul în 4 pași și exerciții cu verificare.',
          de: 'Wir finden zwei Zahlen, wenn wir ihre Summe und Differenz kennen: Zeichnung mit Strecken, Plan in 4 Schritten und Übungen mit Kontrolle.',
        },
        src: 'lectii/clasa-3/matematica/suma-si-diferenta.html',
        test: { questions: sumaSiDiferentaTest, minutes: 6 },
      },
    ],
  },
  6: {
    bio: [
      {
        slug: 'organismul-plantei',
        title: {
          ro: 'Organismul unei plante superioare',
          de: 'Der Organismus einer höheren Pflanze',
        },
        summary: {
          ro: 'Organele unei plante cu flori, țesuturile din frunză, tulpină și rădăcină și drumul sevei prin plantă.',
          de: 'Die Organe einer Blütenpflanze, die Gewebe in Blatt, Stängel und Wurzel und der Weg der Nährlösungen durch die Pflanze.',
        },
        src: 'lectii/clasa-6/biologie/organismul-plantei.html',
        test: { questions: organismulPlanteiTest, minutes: 8 },
      },
      {
        slug: 'organismul-omului',
        title: {
          ro: 'Organismul unui mamifer și al omului',
          de: 'Der Organismus eines Säugetiers und des Menschen',
        },
        summary: {
          ro: 'De la celulă la organism: țesuturile, organele și cele zece sisteme de organe ale omului, văzute pe corp.',
          de: 'Von der Zelle zum Organismus: Gewebe, Organe und die zehn Organsysteme des Menschen, am Körper gezeigt.',
        },
        src: 'lectii/clasa-6/biologie/organismul-omului.html',
        test: { questions: organismulOmuluiTest, minutes: 8 },
      },
      {
        slug: 'nutritia',
        title: {
          ro: 'Nutriția în lumea vie',
          de: 'Ernährung in der lebenden Welt',
        },
        summary: {
          ro: 'Autotrof și heterotrof, fotosinteza, frunza pe dinafară și pe dinăuntru, plante insectivore, saprotrofe, simbioză și parazitism.',
          de: 'Autotroph und heterotroph, Fotosynthese, äußere und innere Struktur des Blattes, insektenfressende Pflanzen, Saprotrophe, Symbiose und Parasitismus.',
        },
        src: 'lectii/clasa-6/biologie/nutritia.html',
        test: { questions: nutritiaTest, minutes: 8 },
      },
      {
        slug: 'frunza',
        title: {
          ro: 'Frunza: structură și funcție',
          de: 'Das Blatt – Struktur und Funktion',
        },
        summary: {
          ro: 'Părțile frunzei, forma ei ca adaptare la mediu, experimentul „De ce sunt frunzele verzi?”, straturile frunzei și epiderma.',
          de: 'Die Teile des Blattes, seine Form als Anpassung an den Lebensraum, das Experiment „Warum sind Blätter grün?“, die Gewebeschichten und die Epidermis.',
        },
        src: 'lectii/clasa-6/biologie/frunza.html',
        test: { questions: frunzaTest, minutes: 8 },
      },
    ],
    gmt: [
      {
        slug: 'ceasul-si-arcele',
        title: {
          ro: 'Ceasul și arcele de cerc',
          de: 'Die Uhr und die Kreisbögen',
        },
        summary: {
          ro: 'Unghiul dintre acele ceasului la orice oră, arcul parcurs de acul orar și elementele cercului: rază, coardă, diametru, arce.',
          de: 'Der Winkel zwischen den Uhrzeigern zu jeder Uhrzeit, der Bogen des Stundenzeigers und die Teile des Kreises: Radius, Sehne, Durchmesser, Bögen.',
        },
        src: 'lectii/clasa-6/geometrie/ceasul-si-arcele.html',
        test: { questions: ceasulSiArceleTest, minutes: 8 },
      },
      {
        slug: 'adiacente-bisectoarea',
        title: {
          ro: 'Unghiuri suplementare, complementare, adiacente. Bisectoarea',
          de: 'Supplement- und Komplementwinkel, benachbarte Winkel, Winkelhalbierende',
        },
        summary: {
          ro: 'Suplement și complement, problemele cu rapoarte (metoda cu k), când sunt două unghiuri adiacente și construcția bisectoarei cu raportorul sau cu rigla și compasul.',
          de: 'Supplement und Komplement, Aufgaben mit Verhältnissen (Methode mit k), wann zwei Winkel benachbart sind, und die Konstruktion der Winkelhalbierenden mit Winkelmesser oder mit Lineal und Zirkel.',
        },
        src: 'lectii/clasa-6/geometrie/adiacente-bisectoarea.html',
        test: { questions: adiacenteBisectoareaTest, minutes: 8 },
      },
      {
        slug: 'unghiuri',
        title: {
          ro: 'Recapitulare: unghiuri',
          de: 'Wiederholung: Winkel',
        },
        summary: {
          ro: 'Unghiuri adiacente, complementare și suplementare, opuse la vârf, în jurul unui punct, bisectoarea, metoda cu x și evaluarea din manual, interactivă.',
          de: 'Benachbarte Winkel, Komplement- und Supplementwinkel, Scheitelwinkel, Winkel um einen Punkt, die Winkelhalbierende, die Methode mit x und die Prüfung aus dem Buch, interaktiv.',
        },
        src: 'lectii/clasa-6/geometrie/unghiuri.html',
        test: { questions: unghiuriTest, minutes: 8 },
      },
    ],
    fiz: [
      {
        slug: 'unitati-de-masura',
        title: {
          ro: 'Unitățile de măsură: lungime, arie, volum',
          de: 'Maßeinheiten: Länge, Fläche, Volumen',
        },
        summary: {
          ro: 'De la cot și palmă la metru, prefixele, o călătorie de la nanometri la Univers, metrul pătrat și litrul.',
          de: 'Von Elle und Handbreite zum Meter, die Vorsätze, eine Reise von Nanometern bis zum Universum, Quadratmeter und Liter.',
        },
        src: 'lectii/clasa-6/fizica/unitati-de-masura.html',
        test: { questions: unitatiDeMasuraTest, minutes: 8 },
      },
    ],
    geo: [
      {
        slug: 'descoperirea-lumii',
        title: {
          ro: 'Descoperirea lumii',
          de: 'Die Entdeckung der Welt',
        },
        summary: {
          ro: 'De la Himilcon și Pytheas la vikingi și Magellan: cine a explorat lumea, de ce, când, de unde și încotro, pe hărți interactive.',
          de: 'Von Himilkon und Pytheas bis zu den Wikingern und Magellan: wer die Welt erkundete, warum, wann, woher und wohin, auf interaktiven Karten.',
        },
        src: 'lectii/clasa-6/geografie/descoperirea-lumii.html',
        test: { questions: descoperireaLumiiTest, minutes: 8 },
      },
      {
        slug: 'vikingii',
        title: {
          ro: 'Vikingii: navigatorii nordului',
          de: 'Die Wikinger: Seefahrer des Nordens',
        },
        summary: {
          ro: 'Lecție de explorare: organizarea vikingilor, corăbiile lor, navigația fără busolă și călătoriile lui Erik cel Roșu și Leif Eriksson.',
          de: 'Entdeckerstunde: die Organisation der Wikinger, ihre Schiffe, Navigation ohne Kompass und die Reisen von Erik dem Roten und Leif Eriksson.',
        },
        src: 'lectii/clasa-6/geografie/vikingii.html',
        test: { questions: vikingiiTest, minutes: 8 },
      },
    ],
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
        test: { questions: ibnBattutaTest, minutes: 5 },
      },
      {
        slug: 'mari-exploratori',
        title: {
          ro: 'Mari exploratori (1487–1597)',
          de: 'Große Entdecker (1487–1597)',
        },
        summary: {
          ro: 'De la Diaz la Barents: șase navigatori care au găsit drumuri noi pe mare. Urmărește-le traseele pe harta lumii.',
          de: 'Von Diaz bis Barents: sechs Seefahrer, die neue Seewege fanden. Verfolge ihre Routen auf der Weltkarte.',
        },
        src: {
          ro: 'lectii/clasa-6/istorie/mari-exploratori.html',
          de: 'lectii/clasa-6/istorie/mari-exploratori.de.html',
        },
        test: { questions: mariExploratoriTest, minutes: 5 },
      },
    ],
  },
};

type TestRow = [SubjectKey, Text, questions: number, minutes: number];

/** Teste-exemplu (provizorii); duc deocamdată la „în curând”. */
const TESTS: Record<Grade, TestRow[]> = {
  3: [
    ['mat', { ro: 'Adunarea și scăderea până la 1000', de: 'Addition und Subtraktion bis 1000' }, 10, 15],
    ['mat', { ro: 'Înmulțirea până la 100', de: 'Multiplikation bis 100' }, 12, 20],
    ['rom', { ro: 'Substantivul', de: 'Das Substantiv' }, 10, 15],
    ['sti', { ro: 'Ciclul apei', de: 'Der Wasserkreislauf' }, 8, 10],
    ['rom', { ro: 'Semnele de punctuație', de: 'Die Satzzeichen' }, 8, 10],
  ],
  6: [
    ['alg', { ro: 'Fracții ordinare', de: 'Gewöhnliche Brüche' }, 12, 25],
    ['gmt', { ro: 'Unghiuri', de: 'Winkel' }, 10, 20],
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

/** Testele clasei: întâi cele reale (de la finalul lecțiilor), apoi exemplele. */
export function getTests(grade: Grade): Test[] {
  const subjects = getSubjects(grade);
  const real = subjects.flatMap((subject) =>
    subject.lessons.flatMap((l) =>
      l.test
        ? [
            {
              id: `${subject.slug}-${l.slug}`,
              subject,
              title: l.title,
              questions: l.test.questions.length,
              minutes: l.test.minutes,
              href: lessonTestHref(grade, subject, l),
            },
          ]
        : [],
    ),
  );
  const examples = TESTS[grade].map(([key, title, questions, minutes], i) => ({
    id: `${grade}-${i}`,
    subject: subjects.find((s) => s.key === key)!,
    title,
    questions,
    minutes,
    href: `#/clasa-${grade}/teste/${grade}-${i}`,
  }));
  return [...real, ...examples];
}

export function getSubject(grade: Grade, slug: string) {
  return getSubjects(grade).find((s) => s.slug === slug);
}

/** Linkuri către paginile interioare (rutare prin # în adresă). */
export const homeHref = '#/';
export const subjectHref = (grade: Grade, s: Subject) => `#/clasa-${grade}/${s.slug}`;
export const lessonHref = (grade: Grade, s: Subject, l: Lesson) => `#/clasa-${grade}/${s.slug}/${l.slug}`;
/** Pagina lecției, derulată direct la testul de la final. */
export const lessonTestHref = (grade: Grade, s: Subject, l: Lesson) => `${lessonHref(grade, s, l)}/test`;
