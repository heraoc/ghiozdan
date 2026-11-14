import type { Question } from '../data';

// Testul de la finalul lecției „Cel mai mare divizor comun”.
export const cmmdcTest: Question[] = [
  {
    q: { ro: 'Care este mulțimea divizorilor comuni ai numerelor 18 și 24?', de: 'Was ist die Menge der gemeinsamen Teiler von 18 und 24?' },
    options: [
      { ro: '{1, 2, 3, 6, 9}', de: '{1, 2, 3, 6, 9}' },
      { ro: '{2, 3, 6}', de: '{2, 3, 6}' },
      { ro: '{1, 6}', de: '{1, 6}' },
      { ro: '{1, 2, 3, 6}', de: '{1, 2, 3, 6}' },
    ],
    correct: 3,
    explain: {
      ro: 'D₁₈ = {1, 2, 3, 6, 9, 18} și D₂₄ = {1, 2, 3, 4, 6, 8, 12, 24}. Intersecția lor este {1, 2, 3, 6}, iar cel mai mare element este 6: (18, 24) = 6.',
      de: 'D₁₈ = {1, 2, 3, 6, 9, 18} und D₂₄ = {1, 2, 3, 4, 6, 8, 12, 24}. Ihr Durchschnitt ist {1, 2, 3, 6}, das größte Element ist 6: (18, 24) = 6.',
    },
  },
  {
    q: { ro: 'Cât este (0, 15)?', de: 'Was ist (0, 15)?' },
    options: [
      { ro: '0', de: '0' },
      { ro: '15', de: '15' },
      { ro: '1', de: '1' },
      { ro: '5', de: '5' },
    ],
    correct: 1,
    explain: {
      ro: 'Orice număr nenul divide pe 0, deci divizorii comuni ai lui 0 și 15 sunt divizorii lui 15. Cel mai mare este 15. Regula: (0, n) = n.',
      de: 'Jede Zahl ≠ 0 teilt 0, also sind die gemeinsamen Teiler von 0 und 15 die Teiler von 15. Der größte ist 15. Regel: (0, n) = n.',
    },
  },
  {
    q: { ro: 'Cât este (9, 27)?', de: 'Was ist (9, 27)?' },
    options: [
      { ro: '27', de: '27' },
      { ro: '3', de: '3' },
      { ro: '9', de: '9' },
      { ro: '1', de: '1' },
    ],
    correct: 2,
    explain: {
      ro: '9 | 27 (27 = 9 · 3), deci cel mai mare divizor comun este numărul mai mic: (9, 27) = 9.',
      de: '9 | 27 (27 = 9 · 3), also ist der ggT die kleinere Zahl: (9, 27) = 9.',
    },
  },
  {
    q: { ro: 'Care dintre perechi este formată din numere prime între ele?', de: 'Welches Paar besteht aus teilerfremden Zahlen?' },
    options: [
      { ro: '14 și 21', de: '14 und 21' },
      { ro: '8 și 9', de: '8 und 9' },
      { ro: '9 și 15', de: '9 und 15' },
      { ro: '8 și 12', de: '8 und 12' },
    ],
    correct: 1,
    explain: {
      ro: '8 = 2³ și 9 = 3² nu au niciun factor prim în comun, deci (8, 9) = 1. Celelalte perechi au divizori comuni mai mari decât 1 (7, 3, respectiv 4).',
      de: '8 = 2³ und 9 = 3² haben keinen gemeinsamen Primfaktor, also (8, 9) = 1. Die anderen Paare haben gemeinsame Teiler größer als 1 (7, 3 bzw. 4).',
    },
  },
  {
    q: { ro: 'Pentru 264 = 2³ · 3 · 11 și 252 = 2² · 3² · 7, cât este (264, 252)?', de: 'Für 264 = 2³ · 3 · 11 und 252 = 2² · 3² · 7: Was ist (264, 252)?' },
    options: [
      { ro: '2² · 3 = 12', de: '2² · 3 = 12' },
      { ro: '2³ · 3² = 72', de: '2³ · 3² = 72' },
      { ro: '2 · 3 = 6', de: '2 · 3 = 6' },
      { ro: '2³ · 3² · 7 · 11 = 5544', de: '2³ · 3² · 7 · 11 = 5544' },
    ],
    correct: 0,
    explain: {
      ro: 'Factorii comuni sunt 2 și 3. Exponenții cei mai mici: 2² (față de 2³) și 3 (față de 3²). Deci (264, 252) = 2² · 3 = 12.',
      de: 'Die gemeinsamen Faktoren sind 2 und 3. Kleinste Exponenten: 2² (gegenüber 2³) und 3 (gegenüber 3²). Also (264, 252) = 2² · 3 = 12.',
    },
  },
  {
    q: { ro: 'Cât este (120, 84)?', de: 'Was ist (120, 84)?' },
    options: [
      { ro: '6', de: '6' },
      { ro: '24', de: '24' },
      { ro: '4', de: '4' },
      { ro: '12', de: '12' },
    ],
    correct: 3,
    explain: {
      ro: '120 = 2³ · 3 · 5 și 84 = 2² · 3 · 7. Factorii comuni: 2 (exponent minim 2) și 3. (120, 84) = 2² · 3 = 12.',
      de: '120 = 2³ · 3 · 5 und 84 = 2² · 3 · 7. Gemeinsame Faktoren: 2 (kleinster Exponent 2) und 3. (120, 84) = 2² · 3 = 12.',
    },
  },
  {
    q: { ro: 'Care este cel mai mare divizor comun al numerelor 60, 84 și 90?', de: 'Was ist der größte gemeinsame Teiler der Zahlen 60, 84 und 90?' },
    options: [
      { ro: '12', de: '12' },
      { ro: '30', de: '30' },
      { ro: '2', de: '2' },
      { ro: '6', de: '6' },
    ],
    correct: 3,
    explain: {
      ro: '60 = 2² · 3 · 5, 84 = 2² · 3 · 7, 90 = 2 · 3² · 5. În toate apar 2 și 3; exponenții cei mai mici sunt 1 și 1. (60, 84, 90) = 2 · 3 = 6. Numărul 12 nu îl divide pe 90.',
      de: '60 = 2² · 3 · 5, 84 = 2² · 3 · 7, 90 = 2 · 3² · 5. In allen kommen 2 und 3 vor; die kleinsten Exponenten sind 1 und 1. (60, 84, 90) = 2 · 3 = 6. Die Zahl 12 teilt 90 nicht.',
    },
  },
  {
    q: { ro: 'Două panglici, de 72 cm și 108 cm, se taie în bucăți egale, cât mai lungi, fără resturi. Cât are o bucată?', de: 'Zwei Bänder, 72 cm und 108 cm lang, werden in gleich lange, möglichst lange Stücke ohne Rest geschnitten. Wie lang ist ein Stück?' },
    options: [
      { ro: '18 cm', de: '18 cm' },
      { ro: '36 cm', de: '36 cm' },
      { ro: '12 cm', de: '12 cm' },
      { ro: '216 cm', de: '216 cm' },
    ],
    correct: 1,
    explain: {
      ro: 'Lungimea bucății este (72, 108). 72 = 2³ · 3² și 108 = 2² · 3³, deci (72, 108) = 2² · 3² = 36 cm. Ies 2 și 3 bucăți.',
      de: 'Die Stücklänge ist (72, 108). 72 = 2³ · 3² und 108 = 2² · 3³, also (72, 108) = 2² · 3² = 36 cm. Es ergeben sich 2 und 3 Stücke.',
    },
  },
  {
    q: { ro: 'Un dreptunghi de 36 cm × 60 cm se acoperă cu dale pătrate egale, cât mai mari, fără spații. Câte dale sunt?', de: 'Ein Rechteck von 36 cm × 60 cm wird mit gleich großen, möglichst großen quadratischen Fliesen ohne Lücken belegt. Wie viele Fliesen sind es?' },
    options: [
      { ro: '8', de: '8' },
      { ro: '12', de: '12' },
      { ro: '60', de: '60' },
      { ro: '15', de: '15' },
    ],
    correct: 3,
    explain: {
      ro: 'Latura dalei este (36, 60) = 12 cm. Pe lățime încap 36 : 12 = 3 dale, pe lungime 60 : 12 = 5 dale. În total 3 · 5 = 15 dale.',
      de: 'Die Fliesenseite ist (36, 60) = 12 cm. In der Breite passen 36 : 12 = 3 Fliesen, in der Länge 60 : 12 = 5 Fliesen. Insgesamt 3 · 5 = 15 Fliesen.',
    },
  },
  {
    q: { ro: 'Dacă d = (a, b), atunci mulțimea divizorilor comuni ai lui a și b, D_a ∩ D_b, este egală cu …', de: 'Ist d = (a, b), dann ist die Menge der gemeinsamen Teiler von a und b, D_a ∩ D_b, gleich …' },
    options: [
      { ro: 'M_d, mulțimea multiplilor lui d', de: 'M_d, der Vielfachenmenge von d' },
      { ro: 'D_d, mulțimea divizorilor lui d', de: 'D_d, der Teilermenge von d' },
      { ro: '{d}', de: '{d}' },
      { ro: 'D_a ∪ D_b', de: 'D_a ∪ D_b' },
    ],
    correct: 1,
    explain: {
      ro: 'Cel mai mare divizor comun este divizibil cu orice divizor comun, deci divizorii comuni sunt exact divizorii lui d. De exemplu, pentru (18, 24) = 6: {1, 2, 3, 6} = D₆.',
      de: 'Der ggT ist durch jeden gemeinsamen Teiler teilbar, also sind die gemeinsamen Teiler genau die Teiler von d. Zum Beispiel für (18, 24) = 6: {1, 2, 3, 6} = D₆.',
    },
  },
];
