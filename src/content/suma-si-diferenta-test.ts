import type { Question } from '../data';

// Testul de la finalul lecției „Metoda grafică: suma și diferența”.
export const sumaSiDiferentaTest: Question[] = [
  {
    q: {
      ro: 'a + b = 20 și a − b = 4. Cât este suma părților egale?',
      de: 'a + b = 20 und a − b = 4. Wie groß ist die Summe der gleichen Teile?',
    },
    options: [
      { ro: '24', de: '24' },
      { ro: '16', de: '16' },
      { ro: '8', de: '8' },
      { ro: '10', de: '10' },
    ],
    correct: 1,
    explain: {
      ro: 'Scoatem din sumă bucata în plus: 20 − 4 = 16.',
      de: 'Wir nehmen das zusätzliche Stück von der Summe weg: 20 − 4 = 16.',
    },
  },
  {
    q: {
      ro: 'Suma părților egale este 16. Care este numărul mai mic?',
      de: 'Die Summe der gleichen Teile ist 16. Welche ist die kleinere Zahl?',
    },
    options: [
      { ro: '16', de: '16' },
      { ro: '4', de: '4' },
      { ro: '8', de: '8' },
      { ro: '32', de: '32' },
    ],
    correct: 2,
    explain: {
      ro: 'Sunt două părți egale, deci împărțim la 2: 16 : 2 = 8.',
      de: 'Es sind zwei gleiche Teile, also teilen wir durch 2: 16 : 2 = 8.',
    },
  },
  {
    q: {
      ro: 'Numărul mai mic este 8, iar diferența este 4. Care este numărul mai mare?',
      de: 'Die kleinere Zahl ist 8, die Differenz ist 4. Welche ist die größere Zahl?',
    },
    options: [
      { ro: '12', de: '12' },
      { ro: '4', de: '4' },
      { ro: '32', de: '32' },
      { ro: '16', de: '16' },
    ],
    correct: 0,
    explain: {
      ro: 'Numărul mai mare are bucata în plus: 8 + 4 = 12.',
      de: 'Die größere Zahl hat das zusätzliche Stück: 8 + 4 = 12.',
    },
  },
  {
    q: {
      ro: 'Ce înseamnă „a este mai mare decât b cu 5”?',
      de: 'Was bedeutet „a ist um 5 größer als b“?',
    },
    options: [
      { ro: 'a + b = 5', de: 'a + b = 5' },
      { ro: 'b − a = 5', de: 'b − a = 5' },
      { ro: 'a = 5', de: 'a = 5' },
      { ro: 'a − b = 5', de: 'a − b = 5' },
    ],
    correct: 3,
    explain: {
      ro: 'Diferența dintre ele este 5: a − b = 5, adică a = b + 5.',
      de: 'Der Unterschied zwischen ihnen ist 5: a − b = 5, also a = b + 5.',
    },
  },
  {
    q: {
      ro: 'Doi frați au împreună 26 de bomboane. Unul are cu 6 mai multe decât celălalt. Câte bomboane are fratele care are mai puține?',
      de: 'Zwei Brüder haben zusammen 26 Bonbons. Einer hat 6 mehr als der andere. Wie viele Bonbons hat der Bruder mit weniger?',
    },
    options: [
      { ro: '16', de: '16' },
      { ro: '10', de: '10' },
      { ro: '13', de: '13' },
      { ro: '20', de: '20' },
    ],
    correct: 1,
    explain: {
      ro: '26 − 6 = 20 și 20 : 2 = 10. Celălalt frate are 10 + 6 = 16.',
      de: '26 − 6 = 20 und 20 : 2 = 10. Der andere Bruder hat 10 + 6 = 16.',
    },
  },
  {
    q: {
      ro: 'Cum verificăm că am găsit numerele corecte?',
      de: 'Wie prüfen wir, ob wir die richtigen Zahlen gefunden haben?',
    },
    options: [
      { ro: 'Le înmulțim.', de: 'Wir multiplizieren sie.' },
      {
        ro: 'Le adunăm (trebuie să dea suma) și le scădem (trebuie să dea diferența).',
        de: 'Wir addieren sie (es muss die Summe ergeben) und subtrahieren sie (es muss die Differenz ergeben).',
      },
      { ro: 'Împărțim suma la 2.', de: 'Wir teilen die Summe durch 2.' },
      { ro: 'Nu e nevoie de verificare.', de: 'Eine Probe ist nicht nötig.' },
    ],
    correct: 1,
    explain: {
      ro: 'Verificarea folosește ambele date ale problemei: suma și diferența.',
      de: 'Die Probe benutzt beide Angaben der Aufgabe: die Summe und die Differenz.',
    },
  },
];
