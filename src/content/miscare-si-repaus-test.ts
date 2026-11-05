import type { Question } from '../data';

// Testul de la finalul lecției „Mișcare și repaus: corp, reper, traiectorie”.
export const miscareSiRepausTest: Question[] = [
  {
    q: {
      ro: 'Când poate fi considerat un corp „punct material”?',
      de: 'Wann darf ein Körper als „Massenpunkt“ gelten?',
    },
    options: [
      { ro: 'când este foarte greu', de: 'wenn er sehr schwer ist' },
      { ro: 'când dimensiunile lui sunt neglijabile față de deplasarea lui', de: 'wenn seine Größe gegenüber seiner Verschiebung vernachlässigt werden kann' },
      { ro: 'când se află în repaus', de: 'wenn er sich in Ruhe befindet' },
      { ro: 'când este de culoare închisă', de: 'wenn er dunkel gefärbt ist' },
    ],
    correct: 1,
    explain: {
      ro: 'Contează raportul dintre mărimea corpului și distanța parcursă, nu greutatea sau culoarea.',
      de: 'Es zählt das Verhältnis zwischen der Größe des Körpers und der zurückgelegten Strecke, nicht Gewicht oder Farbe.',
    },
  },
  {
    q: {
      ro: 'Care dintre aceste corpuri NU poate fi considerat punct material în situația dată?',
      de: 'Welcher dieser Körper darf in der angegebenen Situation NICHT als Massenpunkt gelten?',
    },
    options: [
      { ro: 'avionul care zboară de la București la Paris', de: 'das Flugzeug von Bukarest nach Paris' },
      { ro: 'Pământul pe orbita din jurul Soarelui', de: 'die Erde auf ihrer Bahn um die Sonne' },
      { ro: 'o mașină care parchează într-un loc strâmt', de: 'ein Auto, das in eine enge Lücke einparkt' },
      { ro: 'o mașină care merge de la Iași la București', de: 'ein Auto von Iași nach Bukarest' },
    ],
    correct: 2,
    explain: {
      ro: 'La parcare, deplasarea este de câțiva metri, comparabilă cu mărimea mașinii, deci dimensiunile ei contează.',
      de: 'Beim Einparken beträgt die Verschiebung nur wenige Meter, vergleichbar mit der Größe des Autos, seine Größe zählt also.',
    },
  },
  {
    q: {
      ro: 'Ce este un sistem de referință?',
      de: 'Was ist ein Bezugssystem?',
    },
    options: [
      { ro: 'drumul parcurs de un corp', de: 'der Weg eines Körpers' },
      { ro: 'un reper căruia i se asociază instrumente de măsură pentru distanță și timp', de: 'ein Bezugskörper, dem Messgeräte für Strecke und Zeit zugeordnet sind' },
      { ro: 'viteza cu care se mișcă un corp', de: 'die Geschwindigkeit, mit der sich ein Körper bewegt' },
      { ro: 'orice corp aflat în repaus', de: 'jeder ruhende Körper' },
    ],
    correct: 1,
    explain: {
      ro: 'Reperul, împreună cu rigla și ceasul, formează sistemul de referință.',
      de: 'Der Bezugskörper bildet zusammen mit Lineal und Uhr das Bezugssystem.',
    },
  },
  {
    q: {
      ro: 'Un pasager stă pe scaunul lui într-un tren aflat în mers. Față de ce este în mișcare?',
      de: 'Ein Fahrgast sitzt auf seinem Platz in einem fahrenden Zug. Wozu bewegt er sich?',
    },
    options: [
      { ro: 'față de scaunul lui', de: 'zu seinem Sitz' },
      { ro: 'față de vagonul în care se află', de: 'zum Waggon, in dem er sitzt' },
      { ro: 'față de peronul pe lângă care trece trenul', de: 'zum Bahnsteig, an dem der Zug vorbeifährt' },
      { ro: 'față de niciun corp', de: 'zu keinem Körper' },
    ],
    correct: 2,
    explain: {
      ro: 'Față de peron își schimbă poziția; față de scaun și vagon rămâne pe loc.',
      de: 'Gegenüber dem Bahnsteig ändert er seine Lage; gegenüber Sitz und Waggon bleibt er an Ort und Stelle.',
    },
  },
  {
    q: {
      ro: 'Sportivii A și B aleargă în același sens, cu aceeași viteză. Cum este A față de B?',
      de: 'Die Sportler A und B laufen in dieselbe Richtung mit gleicher Geschwindigkeit. Wie ist A gegenüber B?',
    },
    options: [
      { ro: 'în mișcare', de: 'in Bewegung' },
      { ro: 'în mișcare accelerată', de: 'in beschleunigter Bewegung' },
      { ro: 'nu se poate spune', de: 'lässt sich nicht sagen' },
      { ro: 'în repaus', de: 'in Ruhe' },
    ],
    correct: 3,
    explain: {
      ro: 'Distanța dintre ei rămâne aceeași, deci A este în repaus față de B, dar în mișcare față de Pământ.',
      de: 'Ihr Abstand bleibt gleich, A ist also gegenüber B in Ruhe, aber gegenüber der Erde in Bewegung.',
    },
  },
  {
    q: {
      ro: 'Ce înseamnă că „mișcarea este relativă”?',
      de: 'Was bedeutet „Bewegung ist relativ“?',
    },
    options: [
      { ro: 'depinde de sistemul de referință ales', de: 'sie hängt vom gewählten Bezugssystem ab' },
      { ro: 'este mereu foarte lentă', de: 'sie ist immer sehr langsam' },
      { ro: 'nu poate fi măsurată', de: 'sie lässt sich nicht messen' },
      { ro: 'se întâmplă doar la corpuri mici', de: 'sie gibt es nur bei kleinen Körpern' },
    ],
    correct: 0,
    explain: {
      ro: 'Același corp poate fi în mișcare față de un reper și în repaus față de altul; de aceea precizăm mereu reperul.',
      de: 'Derselbe Körper kann gegenüber einem Bezugskörper in Bewegung und gegenüber einem anderen in Ruhe sein; deshalb nennen wir immer den Bezugskörper.',
    },
  },
  {
    q: {
      ro: 'Ce traiectorie are lampa fixată pe roata unei biciclete, față de axul roții?',
      de: 'Welche Bahn hat die am Rad eines Fahrrads befestigte Lampe gegenüber der Radachse?',
    },
    options: [
      { ro: 'dreaptă', de: 'gerade' },
      { ro: 'circulară', de: 'kreisförmig' },
      { ro: 'o cicloidă', de: 'eine Zykloide' },
      { ro: 'niciuna, lampa stă pe loc', de: 'keine, die Lampe bleibt an Ort und Stelle' },
    ],
    correct: 1,
    explain: {
      ro: 'Față de ax, lampa rămâne la aceeași distanță de el și se rotește pe un cerc. Față de șosea ar descrie o cicloidă.',
      de: 'Gegenüber der Achse bleibt die Lampe im gleichen Abstand und dreht sich auf einem Kreis. Gegenüber der Straße beschriebe sie eine Zykloide.',
    },
  },
  {
    q: {
      ro: 'Cabina unei roți panoramice se mișcă față de Pământ pe o traiectorie…',
      de: 'Die Gondel eines Riesenrads bewegt sich gegenüber der Erde auf einer Bahn, die…',
    },
    options: [
      { ro: 'rectilinie', de: 'geradlinig ist' },
      { ro: 'curbilinie, de tip cicloidă', de: 'krummlinig ist, vom Typ Zykloide' },
      { ro: 'circulară', de: 'kreisförmig ist' },
      { ro: 'în zigzag', de: 'zickzackförmig ist' },
    ],
    correct: 2,
    explain: {
      ro: 'Cabina se învârte în jurul axului roții: traiectoria este un cerc, caz particular de traiectorie curbilinie.',
      de: 'Die Gondel dreht sich um die Radachse: Die Bahn ist ein Kreis, ein Sonderfall der krummlinigen Bahn.',
    },
  },
];
