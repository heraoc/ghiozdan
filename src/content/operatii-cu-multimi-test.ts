import type { Question } from '../data';

// Testul de la finalul lecției „Mulțimi: recapitulare și operații”.
export const operatiiCuMultimiTest: Question[] = [
  {
    q: { ro: 'A = {1, 2, 3, 4} și B = {3, 4, 5}. Cât este A ∪ B?', de: 'A = {1, 2, 3, 4} und B = {3, 4, 5}. Was ist A ∪ B?' },
    options: [
      { ro: '{3, 4}', de: '{3, 4}' },
      { ro: '{1, 2, 5}', de: '{1, 2, 5}' },
      { ro: '{1, 2, 3, 4, 5}', de: '{1, 2, 3, 4, 5}' },
      { ro: '{1, 2}', de: '{1, 2}' },
    ],
    correct: 2,
    explain: {
      ro: 'Reuniunea conține elementele care aparțin cel puțin uneia dintre mulțimi, fiecare o singură dată: {1, 2, 3, 4, 5}.',
      de: 'Die Vereinigung enthält die Elemente, die mindestens einer der Mengen angehören, jedes nur einmal: {1, 2, 3, 4, 5}.',
    },
  },
  {
    q: { ro: 'Pentru aceleași mulțimi, A = {1, 2, 3, 4} și B = {3, 4, 5}, cât este A ∩ B?', de: 'Für dieselben Mengen, A = {1, 2, 3, 4} und B = {3, 4, 5}: Was ist A ∩ B?' },
    options: [
      { ro: '{3, 4}', de: '{3, 4}' },
      { ro: '{1, 2, 3, 4, 5}', de: '{1, 2, 3, 4, 5}' },
      { ro: '{1, 2}', de: '{1, 2}' },
      { ro: '∅', de: '∅' },
    ],
    correct: 0,
    explain: {
      ro: 'Intersecția are elementele comune celor două mulțimi: 3 și 4.',
      de: 'Der Durchschnitt hat die Elemente, die beiden Mengen gemeinsam sind: 3 und 4.',
    },
  },
  {
    q: { ro: 'A = {a, b, c, d} și B = {c, d, e}. Cât este A \\ B?', de: 'A = {a, b, c, d} und B = {c, d, e}. Was ist A \\ B?' },
    options: [
      { ro: '{e}', de: '{e}' },
      { ro: '{c, d}', de: '{c, d}' },
      { ro: '{a, b, c, d, e}', de: '{a, b, c, d, e}' },
      { ro: '{a, b}', de: '{a, b}' },
    ],
    correct: 3,
    explain: {
      ro: 'A \\ B păstrează elementele lui A care nu sunt în B: a și b. (Elementul e ar apărea în B \\ A.)',
      de: 'A \\ B behält die Elemente von A, die nicht in B sind: a und b. (Das Element e käme in B \\ A vor.)',
    },
  },
  {
    q: { ro: 'Dacă x ∈ A \\ B, atunci:', de: 'Wenn x ∈ A \\ B, dann gilt:' },
    options: [
      { ro: 'x ∈ A sau x ∈ B', de: 'x ∈ A oder x ∈ B' },
      { ro: 'x ∈ A și x ∉ B', de: 'x ∈ A und x ∉ B' },
      { ro: 'x ∉ A și x ∈ B', de: 'x ∉ A und x ∈ B' },
      { ro: 'x ∈ A și x ∈ B', de: 'x ∈ A und x ∈ B' },
    ],
    correct: 1,
    explain: {
      ro: 'Diferența A \\ B este formată din elementele care aparțin lui A și nu aparțin lui B.',
      de: 'Die Differenz A \\ B besteht aus den Elementen, die zu A, aber nicht zu B gehören.',
    },
  },
  {
    q: { ro: 'C = {2, 4} și D = {2, 4, 6, 8}. Cât este C ∪ D?', de: 'C = {2, 4} und D = {2, 4, 6, 8}. Was ist C ∪ D?' },
    options: [
      { ro: '{2, 4}', de: '{2, 4}' },
      { ro: '{6, 8}', de: '{6, 8}' },
      { ro: '∅', de: '∅' },
      { ro: '{2, 4, 6, 8}', de: '{2, 4, 6, 8}' },
    ],
    correct: 3,
    explain: {
      ro: 'C ⊂ D, deci C ∪ D = D, iar C ∩ D = C.',
      de: 'C ⊂ D, also C ∪ D = D und C ∩ D = C.',
    },
  },
  {
    q: { ro: 'M = {1, 3, 5} și N = {2, 4, 6}. Cât este M ∩ N?', de: 'M = {1, 3, 5} und N = {2, 4, 6}. Was ist M ∩ N?' },
    options: [
      { ro: '∅ (mulțimile sunt disjuncte)', de: '∅ (die Mengen sind disjunkt)' },
      { ro: '{0}', de: '{0}' },
      { ro: '{1, 2, 3, 4, 5, 6}', de: '{1, 2, 3, 4, 5, 6}' },
      { ro: '{1, 3, 5}', de: '{1, 3, 5}' },
    ],
    correct: 0,
    explain: {
      ro: 'Nu au niciun element comun, deci intersecția este mulțimea vidă. Atenție: {0} are un element, pe 0.',
      de: 'Sie haben kein gemeinsames Element, also ist der Durchschnitt die leere Menge. Achtung: {0} hat ein Element, die 0.',
    },
  },
  {
    q: { ro: 'A = {1, 2, 3, 4, 5} și B = {4, 5, 6, 7}. Câte elemente are A ∪ B?', de: 'A = {1, 2, 3, 4, 5} und B = {4, 5, 6, 7}. Wie viele Elemente hat A ∪ B?' },
    options: [
      { ro: '9', de: '9' },
      { ro: '7', de: '7' },
      { ro: '2', de: '2' },
      { ro: '5', de: '5' },
    ],
    correct: 1,
    explain: {
      ro: 'A ∪ B = {1, 2, 3, 4, 5, 6, 7}: 7 elemente. Elementele comune, 4 și 5, se numără o singură dată (5 + 4 − 2 = 7).',
      de: 'A ∪ B = {1, 2, 3, 4, 5, 6, 7}: 7 Elemente. Die gemeinsamen Elemente 4 und 5 werden nur einmal gezählt (5 + 4 − 2 = 7).',
    },
  },
  {
    q: { ro: 'Care dintre mulțimi este infinită?', de: 'Welche dieser Mengen ist unendlich?' },
    options: [
      { ro: 'D₃₀, mulțimea divizorilor lui 30', de: 'D₃₀, die Menge der Teiler von 30' },
      { ro: 'mulțimea cifrelor', de: 'die Menge der Ziffern' },
      { ro: '{x | x ∈ ℕ și x < 1000}', de: '{x | x ∈ ℕ und x < 1000}' },
      { ro: 'M₇, mulțimea multiplilor lui 7', de: 'M₇, die Menge der Vielfachen von 7' },
    ],
    correct: 3,
    explain: {
      ro: 'Multiplii lui 7 (0, 7, 14, 21, …) nu se opresc. Celelalte mulțimi au un număr finit de elemente (8, 10 și 1000).',
      de: 'Die Vielfachen von 7 (0, 7, 14, 21, …) hören nie auf. Die anderen Mengen haben endlich viele Elemente (8, 10 und 1000).',
    },
  },
];
