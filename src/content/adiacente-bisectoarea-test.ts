import type { Question } from '../data';

// Testul de la finalul lecției „Unghiuri suplementare, complementare, adiacente. Bisectoarea”.
export const adiacenteBisectoareaTest: Question[] = [
  {
    q: { ro: 'Care este suplementul unghiului de 47°?', de: 'Wie groß ist das Supplement des Winkels von 47°?' },
    options: [
      { ro: '43°', de: '43°' },
      { ro: '133°', de: '133°' },
      { ro: '143°', de: '143°' },
      { ro: '313°', de: '313°' },
    ],
    correct: 1,
    explain: { ro: 'Suplementul lui x° este 180° − x°: 180° − 47° = 133°.', de: 'Das Supplement von x° ist 180° − x°: 180° − 47° = 133°.' },
  },
  {
    q: { ro: 'Două unghiuri suplementare sunt congruente. Cât măsoară fiecare?', de: 'Zwei Supplementwinkel sind gleich groß. Wie groß ist jeder?' },
    options: [
      { ro: '45°', de: '45°' },
      { ro: '180°', de: '180°' },
      { ro: '60°', de: '60°' },
      { ro: '90°', de: '90°' },
    ],
    correct: 3,
    explain: { ro: 'x + x = 180°, deci x = 90°: fiecare este un unghi drept.', de: 'x + x = 180°, also x = 90°: Jeder ist ein rechter Winkel.' },
  },
  {
    q: { ro: 'Complementul unui unghi este de 2 ori mai mare decât unghiul. Cât măsoară unghiul?', de: 'Das Komplement eines Winkels ist doppelt so groß wie der Winkel. Wie groß ist der Winkel?' },
    options: [
      { ro: '30°', de: '30°' },
      { ro: '45°', de: '45°' },
      { ro: '60°', de: '60°' },
      { ro: '20°', de: '20°' },
    ],
    correct: 0,
    explain: { ro: 'x + 2x = 90°, deci 3x = 90° și x = 30°. Complementul are 60°.', de: 'x + 2x = 90°, also 3x = 90° und x = 30°. Das Komplement hat 60°.' },
  },
  {
    q: {
      ro: 'Două unghiuri suplementare au măsurile x și y, iar 2 · x = 3 · y. Cât este x?',
      de: 'Zwei Supplementwinkel haben die Maße x und y, und 2 · x = 3 · y. Wie groß ist x?',
    },
    options: [
      { ro: '72°', de: '72°' },
      { ro: '90°', de: '90°' },
      { ro: '108°', de: '108°' },
      { ro: '120°', de: '120°' },
    ],
    correct: 2,
    explain: {
      ro: '2x = 3y = k ⇒ x = k : 2, y = k : 3; k : 2 + k : 3 = 180° ⇒ 5k = 1080° ⇒ k = 216°, deci x = 108° și y = 72°.',
      de: '2x = 3y = k ⇒ x = k : 2, y = k : 3; k : 2 + k : 3 = 180° ⇒ 5k = 1080° ⇒ k = 216°, also x = 108° und y = 72°.',
    },
  },
  {
    q: { ro: 'Care NU este o condiție ca două unghiuri să fie adiacente?', de: 'Welche ist KEINE Bedingung dafür, dass zwei Winkel benachbart sind?' },
    options: [
      { ro: 'să aibă vârful comun', de: 'einen gemeinsamen Scheitel haben' },
      { ro: 'să aibă o latură comună', de: 'einen gemeinsamen Schenkel haben' },
      { ro: 'să aibă interioarele disjuncte', de: 'disjunkte Innenbereiche haben' },
      { ro: 'să aibă suma 180°', de: 'zusammen 180° ergeben' },
    ],
    correct: 3,
    explain: { ro: 'Suma nu contează în definiție. Dacă suma este 180°, unghiurile adiacente se numesc adiacente suplementare.', de: 'Die Summe gehört nicht zur Definition. Ist die Summe 180°, heißen die benachbarten Winkel Nebenwinkel.' },
  },
  {
    q: {
      ro: '∢AOB = 80° și ∢AOC = 30°, iar OC este în interiorul lui ∢AOB. Sunt ∢AOB și ∢AOC adiacente?',
      de: '∢AOB = 80° und ∢AOC = 30°, wobei OC im Inneren von ∢AOB liegt. Sind ∢AOB und ∢AOC benachbart?',
    },
    options: [
      { ro: 'Nu, interioarele lor au puncte comune', de: 'Nein, ihre Innenbereiche haben gemeinsame Punkte' },
      { ro: 'Da, au vârful O și latura OA comune', de: 'Ja, sie haben den Scheitel O und den Schenkel OA gemeinsam' },
      { ro: 'Da, pentru că 80° + 30° < 180°', de: 'Ja, weil 80° + 30° < 180°' },
      { ro: 'Nu, pentru că nu au vârf comun', de: 'Nein, weil sie keinen gemeinsamen Scheitel haben' },
    ],
    correct: 0,
    explain: { ro: '∢AOC este cuprins în ∢AOB, deci interioarele nu sunt disjuncte. Adiacente sunt ∢AOC și ∢COB.', de: '∢AOC liegt in ∢AOB, die Innenbereiche sind also nicht disjunkt. Benachbart sind ∢AOC und ∢COB.' },
  },
  {
    q: { ro: 'OM este bisectoarea lui ∢AOB și ∢AOM = 35°. Cât măsoară ∢AOB?', de: 'OM halbiert ∢AOB, und ∢AOM = 35°. Wie groß ist ∢AOB?' },
    options: [
      { ro: '17,5°', de: '17,5°' },
      { ro: '35°', de: '35°' },
      { ro: '70°', de: '70°' },
      { ro: '55°', de: '55°' },
    ],
    correct: 2,
    explain: { ro: '∢AOM este jumătate din ∢AOB, deci ∢AOB = 2 · 35° = 70°.', de: '∢AOM ist die Hälfte von ∢AOB, also ∢AOB = 2 · 35° = 70°.' },
  },
  {
    q: {
      ro: 'La construcția bisectoarei cu rigla și compasul, ce faci după ce primul arc (cu centrul în O) a dat punctele C și D?',
      de: 'Was machst du bei der Konstruktion mit Lineal und Zirkel, nachdem der erste Bogen (um O) die Punkte C und D ergeben hat?',
    },
    options: [
      { ro: 'unești C cu D', de: 'C mit D verbinden' },
      { ro: 'trasezi, cu aceeași deschidere, câte un arc din C și din D', de: 'mit derselben Zirkelöffnung je einen Bogen um C und um D zeichnen' },
      { ro: 'măsori ∢COD cu raportorul', de: '∢COD mit dem Winkelmesser messen' },
      { ro: 'trasezi un arc mai mare din O', de: 'einen größeren Bogen um O zeichnen' },
    ],
    correct: 1,
    explain: { ro: 'Arcele din C și D se intersectează în M; semidreapta OM este bisectoarea.', de: 'Die Bögen um C und D schneiden sich in M; die Halbgerade OM ist die Winkelhalbierende.' },
  },
];
