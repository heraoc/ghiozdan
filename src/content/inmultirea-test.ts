import type { Question } from '../data';

// Testul de la finalul lecției „Înmulțirea numerelor naturale”.
export const inmultireaTest: Question[] = [
  {
    q: {
      ro: 'Cum se poate scrie 3 + 3 + 3 + 3 + 3 ca înmulțire?',
      de: 'Wie kann man 3 + 3 + 3 + 3 + 3 als Multiplikation schreiben?',
    },
    options: [
      { ro: '3 × 3', de: '3 × 3' },
      { ro: '5 × 5', de: '5 × 5' },
      { ro: '5 × 3', de: '5 × 3' },
      { ro: '3 + 5', de: '3 + 5' },
    ],
    correct: 2,
    explain: {
      ro: 'Numărul 3 se repetă de 5 ori, deci este „de 5 ori câte 3”: 5 × 3 = 15.',
      de: 'Die Zahl 3 wird 5 Mal wiederholt, also „5 Mal je 3“: 5 × 3 = 15.',
    },
  },
  {
    q: {
      ro: 'În egalitatea 6 × 4 = 24, cum se numește numărul 24?',
      de: 'Wie heißt die Zahl 24 in der Gleichung 6 × 4 = 24?',
    },
    options: [
      { ro: 'factor', de: 'Faktor' },
      { ro: 'sumă', de: 'Summe' },
      { ro: 'diferență', de: 'Differenz' },
      { ro: 'produs', de: 'Produkt' },
    ],
    correct: 3,
    explain: {
      ro: '6 și 4 sunt factorii, iar rezultatul înmulțirii, 24, este produsul.',
      de: '6 und 4 sind die Faktoren, das Ergebnis 24 ist das Produkt.',
    },
  },
  {
    q: {
      ro: 'Doi copii au fiecare 5 creioane negre și 3 creioane colorate. Câte creioane au în total? 2 × (5 + 3) = ?',
      de: 'Zwei Kinder haben jeweils 5 schwarze und 3 bunte Stifte. Wie viele Stifte haben sie insgesamt? 2 × (5 + 3) = ?',
    },
    options: [
      { ro: '13', de: '13' },
      { ro: '11', de: '11' },
      { ro: '30', de: '30' },
      { ro: '16', de: '16' },
    ],
    correct: 3,
    explain: {
      ro: '5 + 3 = 8 creioane la fiecare copil, iar 2 × 8 = 16. Sau: 2 × 5 + 2 × 3 = 10 + 6 = 16.',
      de: '5 + 3 = 8 Stifte bei jedem Kind, und 2 × 8 = 16. Oder: 2 × 5 + 2 × 3 = 10 + 6 = 16.',
    },
  },
  {
    q: {
      ro: 'Cât este 4 × (6 + 3)?',
      de: 'Wie viel ist 4 × (6 + 3)?',
    },
    options: [
      { ro: '27', de: '27' },
      { ro: '36', de: '36' },
      { ro: '30', de: '30' },
      { ro: '9', de: '9' },
    ],
    correct: 1,
    explain: {
      ro: '6 + 3 = 9, iar 4 × 9 = 36. Sau: 4 × 6 + 4 × 3 = 24 + 12 = 36.',
      de: '6 + 3 = 9, und 4 × 9 = 36. Oder: 4 × 6 + 4 × 3 = 24 + 12 = 36.',
    },
  },
  {
    q: {
      ro: 'Care egalitate este adevărată?',
      de: 'Welche Gleichung ist wahr?',
    },
    options: [
      { ro: '4 × (2 + 3) = 4 × 2 + 3', de: '4 × (2 + 3) = 4 × 2 + 3' },
      { ro: '4 × (2 + 3) = 2 + 4 × 3', de: '4 × (2 + 3) = 2 + 4 × 3' },
      { ro: '4 × (2 + 3) = 4 × 2 + 4 × 3', de: '4 × (2 + 3) = 4 × 2 + 4 × 3' },
      { ro: '4 × (2 + 3) = 4 + 2 × 3', de: '4 × (2 + 3) = 4 + 2 × 3' },
    ],
    correct: 2,
    explain: {
      ro: 'Numărul 4 trebuie să înmulțească fiecare termen: 4 × (2 + 3) = 4 × 2 + 4 × 3 = 8 + 12 = 20.',
      de: 'Die 4 muss jeden Summanden multiplizieren: 4 × (2 + 3) = 4 × 2 + 4 × 3 = 8 + 12 = 20.',
    },
  },
  {
    q: {
      ro: 'Cât este 20 × 3?',
      de: 'Wie viel ist 20 × 3?',
    },
    options: [
      { ro: '23', de: '23' },
      { ro: '6', de: '6' },
      { ro: '60', de: '60' },
      { ro: '600', de: '600' },
    ],
    correct: 2,
    explain: {
      ro: '20 × 3 = 2 × 3 × 10 = 6 × 10 = 60. Sau: 20 + 20 + 20 = 60.',
      de: '20 × 3 = 2 × 3 × 10 = 6 × 10 = 60. Oder: 20 + 20 + 20 = 60.',
    },
  },
  {
    q: {
      ro: 'Cât este 14 × 2?',
      de: 'Wie viel ist 14 × 2?',
    },
    options: [
      { ro: '24', de: '24' },
      { ro: '28', de: '28' },
      { ro: '18', de: '18' },
      { ro: '16', de: '16' },
    ],
    correct: 1,
    explain: {
      ro: 'Înmulțim unitățile: 4 × 2 = 8, apoi zecile: 1 × 2 = 2 zeci, adică 20. Rezultatul este 28.',
      de: 'Wir multiplizieren die Einer: 4 × 2 = 8, dann die Zehner: 1 × 2 = 2 Zehner, also 20. Das Ergebnis ist 28.',
    },
  },
  {
    q: {
      ro: 'Cât este 23 × 3?',
      de: 'Wie viel ist 23 × 3?',
    },
    options: [
      { ro: '66', de: '66' },
      { ro: '26', de: '26' },
      { ro: '96', de: '96' },
      { ro: '69', de: '69' },
    ],
    correct: 3,
    explain: {
      ro: 'Unitățile: 3 × 3 = 9. Zecile: 2 × 3 = 6 zeci. Rezultatul este 69.',
      de: 'Einer: 3 × 3 = 9. Zehner: 2 × 3 = 6 Zehner. Das Ergebnis ist 69.',
    },
  },
];
