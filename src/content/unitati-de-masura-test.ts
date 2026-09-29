import type { Question } from '../data';

// Testul de la finalul lecției „Unitățile de măsură: lungime, arie, volum”.
export const unitatiDeMasuraTest: Question[] = [
  {
    q: {
      ro: 'Care este unitatea de măsură a lungimii în SI?',
      de: 'Was ist die SI-Einheit der Länge?',
    },
    options: [
      { ro: 'centimetrul', de: 'der Zentimeter' },
      { ro: 'metrul', de: 'der Meter' },
      { ro: 'kilometrul', de: 'der Kilometer' },
      { ro: 'pasul', de: 'der Schritt' },
    ],
    correct: 1,
    explain: {
      ro: 'Metrul (m) este una dintre cele 7 unități fundamentale ale SI.',
      de: 'Der Meter (m) ist eine der 7 Basiseinheiten des SI.',
    },
  },
  {
    q: { ro: 'Cât face 25 cm în metri?', de: 'Wie viel sind 25 cm in Metern?' },
    options: [
      { ro: '2,5 m', de: '2,5 m' },
      { ro: '0,025 m', de: '0,025 m' },
      { ro: '0,25 m', de: '0,25 m' },
      { ro: '250 m', de: '250 m' },
    ],
    correct: 2,
    explain: {
      ro: '1 m = 100 cm, deci 25 cm = 25 : 100 = 0,25 m.',
      de: '1 m = 100 cm, also 25 cm = 25 : 100 = 0,25 m.',
    },
  },
  {
    q: { ro: 'Ce înseamnă prefixul „micro-” (µ)?', de: 'Was bedeutet der Vorsatz „Mikro-“ (µ)?' },
    options: [
      { ro: 'de 1 000 de ori mai mic (10⁻³)', de: '1 000-mal kleiner (10⁻³)' },
      { ro: 'de un milion de ori mai mic (10⁻⁶)', de: 'eine Million Mal kleiner (10⁻⁶)' },
      { ro: 'de un milion de ori mai mare (10⁶)', de: 'eine Million Mal größer (10⁶)' },
      { ro: 'de 100 de ori mai mic (10⁻²)', de: '100-mal kleiner (10⁻²)' },
    ],
    correct: 1,
    explain: {
      ro: '1 µm = 0,000001 m. Bacteriile au câțiva micrometri.',
      de: '1 µm = 0,000001 m. Bakterien sind wenige Mikrometer groß.',
    },
  },
  {
    q: { ro: 'Câți decimetri pătrați are 1 m²?', de: 'Wie viele Quadratdezimeter hat 1 m²?' },
    options: [
      { ro: '10', de: '10' },
      { ro: '1 000', de: '1 000' },
      { ro: '100', de: '100' },
      { ro: '10 000', de: '10 000' },
    ],
    correct: 2,
    explain: {
      ro: '1 m² = 10 dm × 10 dm = 100 dm². La arie, pasul între unități vecine este 100.',
      de: '1 m² = 10 dm × 10 dm = 100 dm². Bei Flächen ist der Schritt zwischen benachbarten Einheiten 100.',
    },
  },
  {
    q: { ro: 'Câți metri pătrați are un hectar?', de: 'Wie viele Quadratmeter hat ein Hektar?' },
    options: [
      { ro: '100 m²', de: '100 m²' },
      { ro: '1 000 m²', de: '1 000 m²' },
      { ro: '10 000 m²', de: '10 000 m²' },
      { ro: '1 000 000 m²', de: '1 000 000 m²' },
    ],
    correct: 2,
    explain: {
      ro: '1 ha = 1 hm² = 100 m × 100 m = 10 000 m².',
      de: '1 ha = 1 hm² = 100 m × 100 m = 10 000 m².',
    },
  },
  {
    q: { ro: 'Câți centimetri cubi are 1 dm³?', de: 'Wie viele Kubikzentimeter hat 1 dm³?' },
    options: [
      { ro: '10', de: '10' },
      { ro: '100', de: '100' },
      { ro: '1 000', de: '1 000' },
      { ro: '10 000', de: '10 000' },
    ],
    correct: 2,
    explain: {
      ro: '1 dm³ = 10 cm × 10 cm × 10 cm = 1 000 cm³. La volum, pasul este 1 000.',
      de: '1 dm³ = 10 cm × 10 cm × 10 cm = 1 000 cm³. Beim Volumen ist der Schritt 1 000.',
    },
  },
  {
    q: { ro: 'Care egalitate este corectă?', de: 'Welche Gleichung ist richtig?' },
    options: [
      { ro: '1 L = 1 cm³', de: '1 L = 1 cm³' },
      { ro: '1 L = 1 m³', de: '1 L = 1 m³' },
      { ro: '1 mL = 1 dm³', de: '1 mL = 1 dm³' },
      { ro: '1 mL = 1 cm³', de: '1 mL = 1 cm³' },
    ],
    correct: 3,
    explain: {
      ro: '1 L = 1 dm³ și 1 mL = 1 cm³.',
      de: '1 L = 1 dm³ und 1 mL = 1 cm³.',
    },
  },
  {
    q: { ro: 'Câți litri încap într-un cub cu latura de 1 m?', de: 'Wie viele Liter passen in einen Würfel mit 1 m Kantenlänge?' },
    options: [
      { ro: '10 L', de: '10 L' },
      { ro: '100 L', de: '100 L' },
      { ro: '1 000 L', de: '1 000 L' },
      { ro: '1 000 000 L', de: '1 000 000 L' },
    ],
    correct: 2,
    explain: {
      ro: '1 m³ = 1 000 dm³ = 1 000 L, cam cât 5–6 căzi pline.',
      de: '1 m³ = 1 000 dm³ = 1 000 L, etwa 5–6 volle Badewannen.',
    },
  },
  {
    q: { ro: 'Cum citești corect volumul într-un cilindru gradat?', de: 'Wie liest man das Volumen im Messzylinder richtig ab?' },
    options: [
      { ro: 'la marginea de sus a lichidului, privind de sus', de: 'am oberen Rand der Flüssigkeit, von oben schauend' },
      { ro: 'la baza meniscului, cu ochiul la nivelul lichidului', de: 'am tiefsten Punkt des Meniskus, mit dem Auge auf Höhe der Flüssigkeit' },
      { ro: 'la fundul cilindrului', de: 'am Boden des Zylinders' },
      { ro: 'oricum, rezultatul e același', de: 'egal wie, das Ergebnis ist gleich' },
    ],
    correct: 1,
    explain: {
      ro: 'Dacă privești de sus sau de jos, citești o valoare greșită.',
      de: 'Wenn du von oben oder unten schaust, liest du einen falschen Wert ab.',
    },
  },
  {
    q: { ro: 'Ce fel de mărime măsoară anul-lumină?', de: 'Welche Größe misst das Lichtjahr?' },
    options: [
      { ro: 'o durată', de: 'eine Zeitdauer' },
      { ro: 'o distanță', de: 'eine Entfernung' },
      { ro: 'o viteză', de: 'eine Geschwindigkeit' },
      { ro: 'o masă', de: 'eine Masse' },
    ],
    correct: 1,
    explain: {
      ro: 'Anul-lumină este distanța parcursă de lumină într-un an, aproape 9 460 de miliarde de km.',
      de: 'Das Lichtjahr ist die Strecke, die Licht in einem Jahr zurücklegt, fast 9 460 Milliarden km.',
    },
  },
];
