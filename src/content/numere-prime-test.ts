import type { Question } from '../data';

// Testul de la finalul lecției „Divizibilitate, numere prime, factori primi”.
export const numerePrimeTest: Question[] = [
  {
    q: { ro: 'Care dintre afirmații este adevărată?', de: 'Welche Aussage ist wahr?' },
    options: [
      { ro: '4 | 22', de: '4 | 22' },
      { ro: '22 ⋮ 6', de: '22 ⋮ 6' },
      { ro: '40 ⋮ 10', de: '40 ⋮ 10' },
      { ro: '3 | 28', de: '3 | 28' },
    ],
    correct: 2,
    explain: {
      ro: '40 = 10 · 4, deci 40 ⋮ 10. La celelalte împărțirea are rest: 22 = 4 · 5 + 2, 22 = 6 · 3 + 4, 28 = 3 · 9 + 1.',
      de: '40 = 10 · 4, also 40 ⋮ 10. Bei den anderen bleibt ein Rest: 22 = 4 · 5 + 2, 22 = 6 · 3 + 4, 28 = 3 · 9 + 1.',
    },
  },
  {
    q: { ro: 'Care este mulțimea D₇₅, a divizorilor lui 75?', de: 'Was ist die Menge D₇₅, die Teilermenge von 75?' },
    options: [
      { ro: '{1, 3, 5, 15, 25, 75}', de: '{1, 3, 5, 15, 25, 75}' },
      { ro: '{3, 5, 15, 25}', de: '{3, 5, 15, 25}' },
      { ro: '{0, 75, 150, 225, …}', de: '{0, 75, 150, 225, …}' },
      { ro: '{1, 5, 15, 25, 75}', de: '{1, 5, 15, 25, 75}' },
    ],
    correct: 0,
    explain: {
      ro: 'Perechile cu produsul 75 sunt 1 · 75, 3 · 25 și 5 · 15, deci D₇₅ = {1, 3, 5, 15, 25, 75}. A treia variantă este M₇₅, mulțimea multiplilor.',
      de: 'Die Paare mit Produkt 75 sind 1 · 75, 3 · 25 und 5 · 15, also D₇₅ = {1, 3, 5, 15, 25, 75}. Die dritte Antwort ist M₇₅, die Vielfachenmenge.',
    },
  },
  {
    q: { ro: 'Care este mulțimea M₀, a multiplilor lui 0?', de: 'Was ist die Menge M₀, die Vielfachenmenge von 0?' },
    options: [
      { ro: '∅', de: '∅' },
      { ro: 'ℕ', de: 'ℕ' },
      { ro: '{1}', de: '{1}' },
      { ro: '{0}', de: '{0}' },
    ],
    correct: 3,
    explain: {
      ro: 'Multiplii lui 0 sunt 0 · 0, 0 · 1, 0 · 2, … și toți sunt egali cu 0. Deci M₀ = {0}.',
      de: 'Die Vielfachen von 0 sind 0 · 0, 0 · 1, 0 · 2, … und alle sind gleich 0. Also M₀ = {0}.',
    },
  },
  {
    q: { ro: 'Care dintre aceste numere este prim?', de: 'Welche dieser Zahlen ist eine Primzahl?' },
    options: [
      { ro: '51', de: '51' },
      { ro: '57', de: '57' },
      { ro: '91', de: '91' },
      { ro: '59', de: '59' },
    ],
    correct: 3,
    explain: {
      ro: '59 nu se împarte la 2, 3, 5 sau 7, deci are doar divizorii 1 și 59. Celelalte sunt compuse: 51 = 3 · 17, 57 = 3 · 19, 91 = 7 · 13.',
      de: '59 ist durch 2, 3, 5 und 7 nicht teilbar, hat also nur die Teiler 1 und 59. Die anderen sind zusammengesetzt: 51 = 3 · 17, 57 = 3 · 19, 91 = 7 · 13.',
    },
  },
  {
    q: { ro: 'Care dintre perechile de numere conține numai numere care nu sunt nici prime, nici compuse?', de: 'Welches Zahlenpaar besteht nur aus Zahlen, die weder prim noch zusammengesetzt sind?' },
    options: [
      { ro: '0 și 1', de: '0 und 1' },
      { ro: '1 și 2', de: '1 und 2' },
      { ro: '2 și 3', de: '2 und 3' },
      { ro: '4 și 9', de: '4 und 9' },
    ],
    correct: 0,
    explain: {
      ro: 'Numerele 0 și 1 sunt neprime, dar nu sunt compuse (1 are un singur divizor). 2 și 3 sunt prime, iar 4 și 9 sunt compuse.',
      de: 'Die Zahlen 0 und 1 sind keine Primzahlen, aber auch nicht zusammengesetzt (1 hat nur einen Teiler). 2 und 3 sind prim, 4 und 9 sind zusammengesetzt.',
    },
  },
  {
    q: { ro: 'Care este descompunerea în factori primi a lui 360?', de: 'Was ist die Primfaktorzerlegung von 360?' },
    options: [
      { ro: '2³ · 3² · 5', de: '2³ · 3² · 5' },
      { ro: '2² · 3² · 10', de: '2² · 3² · 10' },
      { ro: '2³ · 3 · 15', de: '2³ · 3 · 15' },
      { ro: '2³ · 3³ · 5', de: '2³ · 3³ · 5' },
    ],
    correct: 0,
    explain: {
      ro: '360 : 2 = 180, : 2 = 90, : 2 = 45, : 3 = 15, : 3 = 5, : 5 = 1. Avem trei de 2, doi de 3 și un 5: 360 = 2³ · 3² · 5. În celelalte apar numere neprime (10, 15) sau exponenți greșiți.',
      de: '360 : 2 = 180, : 2 = 90, : 2 = 45, : 3 = 15, : 3 = 5, : 5 = 1. Wir haben drei 2er, zwei 3er und eine 5: 360 = 2³ · 3² · 5. In den anderen kommen Nichtprimzahlen (10, 15) oder falsche Exponenten vor.',
    },
  },
  {
    q: { ro: 'Cât este 6² · 10³, scris ca produs de puteri de numere prime?', de: 'Was ist 6² · 10³, geschrieben als Produkt von Primzahlpotenzen?' },
    options: [
      { ro: '2⁵ · 3² · 5³', de: '2⁵ · 3² · 5³' },
      { ro: '2⁶ · 3² · 5³', de: '2⁶ · 3² · 5³' },
      { ro: '2⁵ · 3⁵ · 5³', de: '2⁵ · 3⁵ · 5³' },
      { ro: '2⁴ · 3² · 5³', de: '2⁴ · 3² · 5³' },
    ],
    correct: 0,
    explain: {
      ro: '6² = (2 · 3)² = 2² · 3² și 10³ = (2 · 5)³ = 2³ · 5³. Adunăm exponenții lui 2: 2 + 3 = 5. Rezultă 2⁵ · 3² · 5³.',
      de: '6² = (2 · 3)² = 2² · 3² und 10³ = (2 · 5)³ = 2³ · 5³. Wir addieren die Exponenten von 2: 2 + 3 = 5. Es ergibt sich 2⁵ · 3² · 5³.',
    },
  },
  {
    q: { ro: 'Câți divizori primi diferiți are numărul n = 2³ · 3 · 5²?', de: 'Wie viele verschiedene Primteiler hat die Zahl n = 2³ · 3 · 5²?' },
    options: [
      { ro: '6', de: '6' },
      { ro: '3', de: '3' },
      { ro: '5', de: '5' },
      { ro: '2', de: '2' },
    ],
    correct: 1,
    explain: {
      ro: 'Divizorii primi sunt bazele puterilor: 2, 3 și 5. Exponenții (3, 1, 2) arată de câte ori apare fiecare, nu câți factori primi diferiți sunt.',
      de: 'Die Primteiler sind die Basen der Potenzen: 2, 3 und 5. Die Exponenten (3, 1, 2) zeigen, wie oft jeder vorkommt, nicht wie viele verschiedene es sind.',
    },
  },
  {
    q: { ro: 'Câți divizori naturali are numărul n = 2³ · 3²?', de: 'Wie viele natürliche Teiler hat die Zahl n = 2³ · 3²?' },
    options: [
      { ro: '5', de: '5' },
      { ro: '12', de: '12' },
      { ro: '6', de: '6' },
      { ro: '72', de: '72' },
    ],
    correct: 1,
    explain: {
      ro: 'Adăugăm 1 la fiecare exponent și înmulțim: (3 + 1) · (2 + 1) = 4 · 3 = 12. Nu adunăm exponenții și nu calculăm n.',
      de: 'Wir addieren 1 zu jedem Exponenten und multiplizieren: (3 + 1) · (2 + 1) = 4 · 3 = 12. Wir addieren nicht die Exponenten und berechnen auch nicht n.',
    },
  },
  {
    q: { ro: 'Cum arăți că 113 este număr prim?', de: 'Wie zeigst du, dass 113 eine Primzahl ist?' },
    options: [
      { ro: 'Verifici că nu se împarte exact la 2, 3, 5 și 7 (pentru că 11² = 121 > 113)', de: 'Du prüfst, dass es nicht durch 2, 3, 5 und 7 teilbar ist (weil 11² = 121 > 113)' },
      { ro: 'Verifici că e impar', de: 'Du prüfst, dass es ungerade ist' },
      { ro: 'Îl împarți doar la 3', de: 'Du teilst nur durch 3' },
      { ro: 'Verifici că se termină în 3', de: 'Du prüfst, dass es auf 3 endet' },
    ],
    correct: 0,
    explain: {
      ro: 'Încercăm numerele prime p cu p² ≤ 113, adică 2, 3, 5, 7. Niciunul nu îl împarte exact, deci 113 este prim. Un număr impar sau care se termină în 3 poate fi compus (de ex. 63).',
      de: 'Wir probieren die Primzahlen p mit p² ≤ 113, also 2, 3, 5, 7. Keine teilt genau, also ist 113 prim. Eine ungerade Zahl oder eine, die auf 3 endet, kann zusammengesetzt sein (z. B. 63).',
    },
  },
];
