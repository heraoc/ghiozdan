import type { Question } from '../data';

// Testul de la finalul lecției „Ceasul și arcele de cerc”.
export const ceasulSiArceleTest: Question[] = [
  {
    q: { ro: 'Câte grade are arcul dintre două numere vecine de pe cadranul ceasului?', de: 'Wie viel Grad hat der Bogen zwischen zwei benachbarten Zahlen auf dem Zifferblatt?' },
    options: [
      { ro: '12°', de: '12°' },
      { ro: '30°', de: '30°' },
      { ro: '60°', de: '60°' },
      { ro: '6°', de: '6°' },
    ],
    correct: 1,
    explain: { ro: '360° : 12 = 30°.', de: '360° : 12 = 30°.' },
  },
  {
    q: { ro: 'Câte grade parcurge minutarul într-un minut?', de: 'Wie viel Grad überstreicht der Minutenzeiger in einer Minute?' },
    options: [
      { ro: '1°', de: '1°' },
      { ro: '0,5°', de: '0,5°' },
      { ro: '6°', de: '6°' },
      { ro: '30°', de: '30°' },
    ],
    correct: 2,
    explain: { ro: 'Minutarul face un cerc întreg într-o oră: 360° : 60 = 6°.', de: 'Der Minutenzeiger dreht sich in einer Stunde einmal ganz herum: 360° : 60 = 6°.' },
  },
  {
    q: { ro: 'Câte grade parcurge acul orar într-un minut?', de: 'Wie viel Grad überstreicht der Stundenzeiger in einer Minute?' },
    options: [
      { ro: '0,5°', de: '0,5°' },
      { ro: '1°', de: '1°' },
      { ro: '5°', de: '5°' },
      { ro: '6°', de: '6°' },
    ],
    correct: 0,
    explain: { ro: 'Acul orar face 30° într-o oră: 30° : 60 = 0,5°.', de: 'Der Stundenzeiger schafft 30° pro Stunde: 30° : 60 = 0,5°.' },
  },
  {
    q: { ro: 'Ce arc parcurge acul orar de la 2:00 până la 4:30?', de: 'Welchen Bogen überstreicht der Stundenzeiger von 2:00 bis 4:30?' },
    options: [
      { ro: '60°', de: '60°' },
      { ro: '75°', de: '75°' },
      { ro: '90°', de: '90°' },
      { ro: '150°', de: '150°' },
    ],
    correct: 1,
    explain: { ro: 'Trec 2 ore și jumătate: 2,5 × 30° = 75°.', de: 'Es vergehen zweieinhalb Stunden: 2,5 × 30° = 75°.' },
  },
  {
    q: { ro: 'Ce unghi fac acele la 12:30?', de: 'Welchen Winkel bilden die Zeiger um 12:30?' },
    options: [
      { ro: '180°', de: '180°' },
      { ro: '150°', de: '150°' },
      { ro: '165°', de: '165°' },
      { ro: '195°', de: '195°' },
    ],
    correct: 2,
    explain: { ro: 'Minutarul e la 180°, acul orar a înaintat 15° de la 12: 180° − 15° = 165°.', de: 'Der Minutenzeiger steht bei 180°, der Stundenzeiger ist 15° über die 12 hinaus: 180° − 15° = 165°.' },
  },
  {
    q: { ro: 'Ce unghi fac acele la 11:20?', de: 'Welchen Winkel bilden die Zeiger um 11:20?' },
    options: [
      { ro: '110°', de: '110°' },
      { ro: '120°', de: '120°' },
      { ro: '140°', de: '140°' },
      { ro: '220°', de: '220°' },
    ],
    correct: 2,
    explain: { ro: 'Minutarul: 120°. Acul orar: 330° + 10° = 340°. Diferența: 220°, iar unghiul mic este 360° − 220° = 140°.', de: 'Minutenzeiger: 120°. Stundenzeiger: 330° + 10° = 340°. Differenz: 220°, der kleinere Winkel ist 360° − 220° = 140°.' },
  },
  {
    q: { ro: 'Cu ce este egală măsura arcului mic AB?', de: 'Wie groß ist der kleine Bogen AB?' },
    options: [
      { ro: 'cu lungimea coardei AB', de: 'so groß wie die Länge der Sehne AB' },
      { ro: 'cu măsura unghiului la centru AOB', de: 'so groß wie der Mittelpunktswinkel AOB' },
      { ro: 'cu 360°', de: '360°' },
      { ro: 'cu jumătate din unghiul AOB', de: 'halb so groß wie der Winkel AOB' },
    ],
    correct: 1,
    explain: { ro: 'm(arcul AB) = m(∢AOB). Arcul mare are 360° minus arcul mic.', de: 'Der Bogen AB ist so groß wie ∢AOB. Der große Bogen hat 360° minus den kleinen Bogen.' },
  },
  {
    q: { ro: 'Care este cea mai lungă coardă a unui cerc?', de: 'Welche ist die längste Sehne eines Kreises?' },
    options: [
      { ro: 'raza', de: 'der Radius' },
      { ro: 'orice coardă, sunt toate egale', de: 'jede, alle sind gleich lang' },
      { ro: 'diametrul', de: 'der Durchmesser' },
      { ro: 'arcul mare', de: 'der große Bogen' },
    ],
    correct: 2,
    explain: { ro: 'Diametrul trece prin centru și are cât două raze.', de: 'Der Durchmesser geht durch den Mittelpunkt und ist so lang wie zwei Radien.' },
  },
  {
    q: { ro: 'De câte ori se suprapun acele ceasului în 12 ore?', de: 'Wie oft liegen die Uhrzeiger in 12 Stunden übereinander?' },
    options: [
      { ro: 'de 12 ori', de: '12-mal' },
      { ro: 'de 11 ori', de: '11-mal' },
      { ro: 'de 24 de ori', de: '24-mal' },
      { ro: 'o singură dată', de: 'nur einmal' },
    ],
    correct: 1,
    explain: { ro: 'Minutarul prinde acul orar din urmă o dată la aproximativ 65 de minute și 27 de secunde, deci de 11 ori în 12 ore.', de: 'Der Minutenzeiger holt den Stundenzeiger etwa alle 65 Minuten und 27 Sekunden ein, also 11-mal in 12 Stunden.' },
  },
];
