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
      ro: 'Cât este 7 × 0?',
      de: 'Wie viel ist 7 × 0?',
    },
    options: [
      { ro: '7', de: '7' },
      { ro: '0', de: '0' },
      { ro: '1', de: '1' },
      { ro: '70', de: '70' },
    ],
    correct: 1,
    explain: {
      ro: 'Orice număr înmulțit cu 0 dă 0.',
      de: 'Jede Zahl mal 0 ergibt 0.',
    },
  },
  {
    q: {
      ro: 'Ce se întâmplă când înmulțim un număr cu 1?',
      de: 'Was passiert, wenn wir eine Zahl mit 1 multiplizieren?',
    },
    options: [
      { ro: 'se dublează', de: 'sie verdoppelt sich' },
      { ro: 'rămâne același număr', de: 'sie bleibt dieselbe Zahl' },
      { ro: 'devine 0', de: 'sie wird 0' },
      { ro: 'crește cu 1', de: 'sie wird um 1 größer' },
    ],
    correct: 1,
    explain: {
      ro: 'Orice număr înmulțit cu 1 rămâne același număr: 9 × 1 = 9.',
      de: 'Jede Zahl mal 1 bleibt dieselbe Zahl: 9 × 1 = 9.',
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
      ro: 'Cât este 3 × (8 − 5)?',
      de: 'Wie viel ist 3 × (8 − 5)?',
    },
    options: [
      { ro: '9', de: '9' },
      { ro: '39', de: '39' },
      { ro: '19', de: '19' },
      { ro: '15', de: '15' },
    ],
    correct: 0,
    explain: {
      ro: '8 − 5 = 3, iar 3 × 3 = 9. Sau: 3 × 8 − 3 × 5 = 24 − 15 = 9.',
      de: '8 − 5 = 3, und 3 × 3 = 9. Oder: 3 × 8 − 3 × 5 = 24 − 15 = 9.',
    },
  },
  {
    q: {
      ro: 'Care egalitate este adevărată?',
      de: 'Welche Gleichung ist wahr?',
    },
    options: [
      { ro: '4 × (2 + 3) = 4 × 2 + 3', de: '4 × (2 + 3) = 4 × 2 + 3' },
      { ro: '4 × (5 − 2) = 4 × 5 + 4 × 2', de: '4 × (5 − 2) = 4 × 5 + 4 × 2' },
      { ro: '4 × (2 + 3) = 4 × 2 + 4 × 3', de: '4 × (2 + 3) = 4 × 2 + 4 × 3' },
      { ro: '4 × (5 − 2) = 4 × 5 − 2', de: '4 × (5 − 2) = 4 × 5 − 2' },
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
