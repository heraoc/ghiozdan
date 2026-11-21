import type { Question } from '../data';

// Testul de la finalul lecției „Drepte perpendiculare. Mediatoarea unui segment”.
export const mediatoareaTest: Question[] = [
  {
    q: { ro: 'Dreptele d și e se taie și formează un unghi de 90°. Cât măsoară celelalte trei unghiuri?', de: 'Die Geraden d und e schneiden sich und bilden einen Winkel von 90°. Wie groß sind die anderen drei Winkel?' },
    options: [
      { ro: '45° fiecare', de: 'je 45°' },
      { ro: '90° fiecare', de: 'je 90°' },
      { ro: '90°, 90° și 180°', de: '90°, 90° und 180°' },
      { ro: '30°, 60° și 90°', de: '30°, 60° und 90°' },
    ],
    correct: 1,
    explain: { ro: 'Unghiul opus la vârf este tot de 90°, iar cele adiacente suplementare sunt 180° − 90° = 90°. Dreptele sunt perpendiculare.', de: 'Der Scheitelwinkel ist ebenfalls 90°, die Nebenwinkel sind 180° − 90° = 90°. Die Geraden sind senkrecht.' },
  },
  {
    q: { ro: 'Care este distanța de la un punct A la o dreaptă d?', de: 'Was ist der Abstand eines Punktes A von einer Geraden d?' },
    options: [
      { ro: 'lungimea oricărui segment de la A la d', de: 'die Länge irgendeiner Strecke von A zu d' },
      { ro: 'lungimea perpendicularei duse din A pe d', de: 'die Länge des Lotes von A auf d' },
      { ro: 'jumătate din lungimea dreptei d', de: 'die Hälfte der Länge der Geraden d' },
      { ro: 'distanța de la A la un punct oarecare', de: 'der Abstand von A zu einem beliebigen Punkt' },
    ],
    correct: 1,
    explain: { ro: 'Distanța este lungimea perpendicularei din A pe d: cel mai scurt segment de la A la dreaptă.', de: 'Der Abstand ist die Länge des Lotes von A auf d: die kürzeste Strecke von A zur Geraden.' },
  },
  {
    q: { ro: 'Ce este mediatoarea unui segment [AB]?', de: 'Was ist die Mittelsenkrechte einer Strecke [AB]?' },
    options: [
      { ro: 'dreapta perpendiculară pe [AB] care trece prin mijlocul lui', de: 'die Gerade, die senkrecht auf [AB] steht und durch den Mittelpunkt geht' },
      { ro: 'orice dreaptă care trece prin mijlocul lui [AB]', de: 'jede Gerade durch den Mittelpunkt von [AB]' },
      { ro: 'orice dreaptă perpendiculară pe [AB]', de: 'jede Gerade senkrecht zu [AB]' },
      { ro: 'dreapta AB', de: 'die Gerade AB' },
    ],
    correct: 0,
    explain: { ro: 'Trebuie îndeplinite amândouă condițiile: perpendiculară pe segment și prin mijlocul lui.', de: 'Beide Bedingungen müssen erfüllt sein: senkrecht zur Strecke und durch ihren Mittelpunkt.' },
  },
  {
    q: { ro: 'AB = 14 cm, iar mediatoarea lui [AB] îl taie în I. Cât este AI?', de: 'AB = 14 cm, und die Mittelsenkrechte von [AB] schneidet in I. Wie groß ist AI?' },
    options: [
      { ro: '28 cm', de: '28 cm' },
      { ro: '14 cm', de: '14 cm' },
      { ro: '7 cm', de: '7 cm' },
      { ro: '10 cm', de: '10 cm' },
    ],
    correct: 2,
    explain: { ro: 'I este mijlocul segmentului: AI = AB : 2 = 7 cm.', de: 'I ist der Mittelpunkt der Strecke: AI = AB : 2 = 7 cm.' },
  },
  {
    q: { ro: 'La construcția mediatoarei cu compasul, cum trebuie să fie deschiderea compasului?', de: 'Wie muss die Zirkelöffnung bei der Konstruktion der Mittelsenkrechten sein?' },
    options: [
      { ro: 'exact AB', de: 'genau AB' },
      { ro: 'mai mică decât jumătate din AB', de: 'kleiner als die Hälfte von AB' },
      { ro: 'mai mare decât jumătate din AB, aceeași pentru ambele arce', de: 'größer als die Hälfte von AB, für beide Bögen dieselbe' },
      { ro: 'orice, câtă vrem, diferită pentru fiecare arc', de: 'beliebig, für jeden Bogen eine andere' },
    ],
    correct: 2,
    explain: { ro: 'Cu r > AB : 2 cele două arce se taie în P și Q, iar PA = PB = QA = QB = r, deci P și Q sunt pe mediatoare.', de: 'Mit r > AB : 2 schneiden sich die beiden Bögen in P und Q, und PA = PB = QA = QB = r, also liegen P und Q auf der Mittelsenkrechten.' },
  },
  {
    q: { ro: 'M se află pe mediatoarea lui [AB] și MA = 9 cm. Cât este MB?', de: 'M liegt auf der Mittelsenkrechten von [AB] und MA = 9 cm. Wie groß ist MB?' },
    options: [
      { ro: '4,5 cm', de: '4,5 cm' },
      { ro: '18 cm', de: '18 cm' },
      { ro: '9 cm', de: '9 cm' },
      { ro: 'nu se poate afla', de: 'lässt sich nicht bestimmen' },
    ],
    correct: 2,
    explain: { ro: 'Orice punct de pe mediatoare este egal depărtat de capetele segmentului: MB = MA = 9 cm.', de: 'Jeder Punkt der Mittelsenkrechten ist von den Endpunkten gleich weit entfernt: MB = MA = 9 cm.' },
  },
  {
    q: { ro: 'Punctul P are PA = PB. Ce putem spune despre P?', de: 'Der Punkt P hat PA = PB. Was können wir über P sagen?' },
    options: [
      { ro: 'P este mijlocul lui [AB]', de: 'P ist der Mittelpunkt von [AB]' },
      { ro: 'P se află pe mediatoarea lui [AB]', de: 'P liegt auf der Mittelsenkrechten von [AB]' },
      { ro: 'P se află pe dreapta AB', de: 'P liegt auf der Geraden AB' },
      { ro: 'nimic sigur', de: 'nichts Sicheres' },
    ],
    correct: 1,
    explain: { ro: 'Teorema reciprocă: un punct egal depărtat de A și B este pe mediatoarea lui [AB] (nu neapărat chiar în mijloc).', de: 'Umkehrsatz: Ein Punkt, der von A und B gleich weit entfernt ist, liegt auf der Mittelsenkrechten von [AB] (nicht unbedingt genau im Mittelpunkt).' },
  },
  {
    q: { ro: 'PA = 5 cm și PB = 8 cm. Unde se află P?', de: 'PA = 5 cm und PB = 8 cm. Wo liegt P?' },
    options: [
      { ro: 'pe mediatoare', de: 'auf der Mittelsenkrechten' },
      { ro: 'de partea lui B față de mediatoare', de: 'auf der Seite von B der Mittelsenkrechten' },
      { ro: 'de partea lui A față de mediatoare', de: 'auf der Seite von A der Mittelsenkrechten' },
      { ro: 'pe segmentul [AB], în mijloc', de: 'auf der Strecke [AB], in der Mitte' },
    ],
    correct: 2,
    explain: { ro: 'P e mai aproape de A decât de B, deci e de partea lui A; distanțele nu sunt egale, deci nu e pe mediatoare.', de: 'P ist näher an A als an B, liegt also auf der Seite von A; die Abstände sind nicht gleich, also nicht auf der Mittelsenkrechten.' },
  },
  {
    q: { ro: 'Casele A și B vor o fântână pe un drum, la aceeași distanță de ele. Unde o punem?', de: 'Die Häuser A und B wollen einen Brunnen an einer Straße, gleich weit von beiden entfernt. Wo setzen wir ihn?' },
    options: [
      { ro: 'în punctul în care drumul taie mediatoarea lui [AB]', de: 'in dem Punkt, in dem die Straße die Mittelsenkrechte von [AB] schneidet' },
      { ro: 'lângă casa A', de: 'neben Haus A' },
      { ro: 'în mijlocul drumului', de: 'in der Mitte der Straße' },
      { ro: 'în mijlocul segmentului [AB], oriunde ar fi', de: 'im Mittelpunkt der Strecke [AB], wo auch immer er liegt' },
    ],
    correct: 0,
    explain: { ro: 'Punctele egal depărtate de A și B sunt pe mediatoare; cel de pe drum este intersecția drumului cu mediatoarea.', de: 'Die von A und B gleich weit entfernten Punkte liegen auf der Mittelsenkrechten; der auf der Straße ist der Schnittpunkt der Straße mit ihr.' },
  },
];
