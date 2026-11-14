import type { Question } from '../data';

// Testul de la finalul lecției „Cel mai mic multiplu comun”.
export const cmmmcTest: Question[] = [
  {
    q: { ro: 'Care este cel mai mic multiplu comun nenul al numerelor 6 și 8?', de: 'Was ist das kleinste gemeinsame Vielfache ≠ 0 der Zahlen 6 und 8?' },
    options: [
      { ro: '12', de: '12' },
      { ro: '48', de: '48' },
      { ro: '24', de: '24' },
      { ro: '2', de: '2' },
    ],
    correct: 2,
    explain: {
      ro: 'M₆ = {0, 6, 12, 18, 24, …} și M₈ = {0, 8, 16, 24, …}. Primul număr nenul comun este 24, deci [6, 8] = 24.',
      de: 'M₆ = {0, 6, 12, 18, 24, …} und M₈ = {0, 8, 16, 24, …}. Die erste gemeinsame Zahl ≠ 0 ist 24, also [6, 8] = 24.',
    },
  },
  {
    q: { ro: 'Cât este [0, 7]?', de: 'Was ist [0, 7]?' },
    options: [
      { ro: '7', de: '7' },
      { ro: '0', de: '0' },
      { ro: '1', de: '1' },
      { ro: '14', de: '14' },
    ],
    correct: 1,
    explain: {
      ro: 'Singurul multiplu al lui 0 este 0, deci multiplii comuni ai lui 0 și 7 sunt doar {0}. Regula: [0, n] = 0. (Atenție: (0, 7) = 7 la c.m.m.d.c.)',
      de: 'Das einzige Vielfache von 0 ist 0, also ist die Menge der gemeinsamen Vielfachen von 0 und 7 nur {0}. Regel: [0, n] = 0. (Achtung: beim ggT ist (0, 7) = 7.)',
    },
  },
  {
    q: { ro: 'Cât este [9, 27]?', de: 'Was ist [9, 27]?' },
    options: [
      { ro: '9', de: '9' },
      { ro: '243', de: '243' },
      { ro: '3', de: '3' },
      { ro: '27', de: '27' },
    ],
    correct: 3,
    explain: {
      ro: '9 | 27, deci 27 este deja multiplu al lui 9. Regula: a | b ⇒ [a, b] = b, adică [9, 27] = 27.',
      de: '9 | 27, also ist 27 schon ein Vielfaches von 9. Regel: a | b ⇒ [a, b] = b, also [9, 27] = 27.',
    },
  },
  {
    q: { ro: 'Cât este [5, 12]?', de: 'Was ist [5, 12]?' },
    options: [
      { ro: '60', de: '60' },
      { ro: '17', de: '17' },
      { ro: '12', de: '12' },
      { ro: '1', de: '1' },
    ],
    correct: 0,
    explain: {
      ro: '5 și 12 sunt prime între ele, (5, 12) = 1, deci [5, 12] = 5 · 12 = 60.',
      de: '5 und 12 sind teilerfremd, (5, 12) = 1, also [5, 12] = 5 · 12 = 60.',
    },
  },
  {
    q: { ro: 'Pentru 4 = 2² și 14 = 2 · 7, cât este [4, 14]?', de: 'Für 4 = 2² und 14 = 2 · 7: Was ist [4, 14]?' },
    options: [
      { ro: '2 · 7 = 14', de: '2 · 7 = 14' },
      { ro: '2² · 7 = 28', de: '2² · 7 = 28' },
      { ro: '2³ · 7 = 56', de: '2³ · 7 = 56' },
      { ro: '2 = 2', de: '2 = 2' },
    ],
    correct: 1,
    explain: {
      ro: 'Luăm toți factorii primi, cu exponenții cei mai mari: 2² (din 4) și 7. [4, 14] = 2² · 7 = 28.',
      de: 'Wir nehmen alle Primfaktoren mit den größten Exponenten: 2² (aus 4) und 7. [4, 14] = 2² · 7 = 28.',
    },
  },
  {
    q: { ro: 'Pentru 180 = 2² · 3² · 5 și 168 = 2³ · 3 · 7, cât este [180, 168]?', de: 'Für 180 = 2² · 3² · 5 und 168 = 2³ · 3 · 7: Was ist [180, 168]?' },
    options: [
      { ro: '2² · 3 = 12', de: '2² · 3 = 12' },
      { ro: '2³ · 3² · 5 · 7 = 2520', de: '2³ · 3² · 5 · 7 = 2520' },
      { ro: '2² · 3² · 5 · 7 = 1260', de: '2² · 3² · 5 · 7 = 1260' },
      { ro: '180 · 168 = 30240', de: '180 · 168 = 30240' },
    ],
    correct: 1,
    explain: {
      ro: 'Luăm toți factorii (2, 3, 5, 7) cu exponentul cel mai mare: 2³, 3², 5, 7. [180, 168] = 8 · 9 · 5 · 7 = 2520. Prima variantă este c.m.m.d.c.',
      de: 'Wir nehmen alle Faktoren (2, 3, 5, 7) mit dem größten Exponenten: 2³, 3², 5, 7. [180, 168] = 8 · 9 · 5 · 7 = 2520. Die erste Antwort ist der ggT.',
    },
  },
  {
    q: { ro: 'Cât este [15, 9, 10]?', de: 'Was ist [15, 9, 10]?' },
    options: [
      { ro: '45', de: '45' },
      { ro: '30', de: '30' },
      { ro: '1350', de: '1350' },
      { ro: '90', de: '90' },
    ],
    correct: 3,
    explain: {
      ro: '15 = 3 · 5, 9 = 3², 10 = 2 · 5. Luăm 2, 3² și 5: [15, 9, 10] = 2 · 9 · 5 = 90.',
      de: '15 = 3 · 5, 9 = 3², 10 = 2 · 5. Wir nehmen 2, 3² und 5: [15, 9, 10] = 2 · 9 · 5 = 90.',
    },
  },
  {
    q: { ro: 'Dacă (a, b) = 4 și a · b = 144, cât este [a, b]?', de: 'Wenn (a, b) = 4 und a · b = 144, was ist dann [a, b]?' },
    options: [
      { ro: '576', de: '576' },
      { ro: '4', de: '4' },
      { ro: '36', de: '36' },
      { ro: '144', de: '144' },
    ],
    correct: 2,
    explain: {
      ro: 'Din (a, b) · [a, b] = a · b rezultă [a, b] = 144 : 4 = 36.',
      de: 'Aus (a, b) · [a, b] = a · b folgt [a, b] = 144 : 4 = 36.',
    },
  },
  {
    q: { ro: 'Un clopot sună din 12 în 12 minute, altul din 18 în 18. Au sunat împreună acum. Peste cât timp sună din nou împreună?', de: 'Eine Glocke läutet alle 12 Minuten, eine andere alle 18. Sie haben jetzt gemeinsam geläutet. Wann läuten sie wieder gemeinsam?' },
    options: [
      { ro: '6 minute', de: '6 Minuten' },
      { ro: '36 de minute', de: '36 Minuten' },
      { ro: '30 de minute', de: '30 Minuten' },
      { ro: '216 minute', de: '216 Minuten' },
    ],
    correct: 1,
    explain: {
      ro: 'Cerem cel mai mic moment nenul care este multiplu al lui 12 și al lui 18: [12, 18] = 2² · 3² = 36 de minute.',
      de: 'Gesucht ist der früheste Zeitpunkt ≠ 0, der ein Vielfaches von 12 und von 18 ist: [12, 18] = 2² · 3² = 36 Minuten.',
    },
  },
  {
    q: { ro: 'Cu cărămizi de 6 cm × 10 cm, puse toate în același sens, se face cel mai mic pătrat posibil, fără spații. Câte cărămizi sunt?', de: 'Mit Backsteinen von 6 cm × 10 cm, alle gleich gelegt, wird das kleinstmögliche Quadrat ohne Lücken gebaut. Wie viele Backsteine sind es?' },
    options: [
      { ro: '5', de: '5' },
      { ro: '30', de: '30' },
      { ro: '60', de: '60' },
      { ro: '15', de: '15' },
    ],
    correct: 3,
    explain: {
      ro: 'Latura este [6, 10] = 30 cm. Încap 30 : 6 = 5 cărămizi pe o direcție și 30 : 10 = 3 pe cealaltă: 5 · 3 = 15.',
      de: 'Die Seite ist [6, 10] = 30 cm. Es passen 30 : 6 = 5 Backsteine in der einen Richtung und 30 : 10 = 3 in der anderen: 5 · 3 = 15.',
    },
  },
];
