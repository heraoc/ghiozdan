import type { Question } from '../data';

// Testul de la finalul lecției „Fotosinteza: ecuația și drumul substanțelor”.
export const fotosintezaTest: Question[] = [
  {
    q: {
      ro: 'Care dintre substanțe INTRĂ în plantă pentru fotosinteză?',
      de: 'Welcher dieser Stoffe GEHT für die Fotosynthese in die Pflanze hinein?',
    },
    options: [
      { ro: 'zahărul (glucoza)', de: 'der Zucker (Glukose)' },
      { ro: 'oxigenul', de: 'der Sauerstoff' },
      { ro: 'dioxidul de carbon', de: 'das Kohlendioxid' },
      { ro: 'clorofila', de: 'das Chlorophyll' },
    ],
    correct: 2,
    explain: {
      ro: 'Zahărul și oxigenul rezultă. Clorofila e deja în frunză. Dioxidul de carbon intră din aer.',
      de: 'Zucker und Sauerstoff entstehen. Das Chlorophyll ist schon im Blatt. Kohlendioxid kommt aus der Luft hinein.',
    },
  },
  {
    q: {
      ro: 'Ce rezultă în urma fotosintezei?',
      de: 'Was entsteht bei der Fotosynthese?',
    },
    options: [
      { ro: 'apă și dioxid de carbon', de: 'Wasser und Kohlendioxid' },
      { ro: 'zahăr (glucoză) și oxigen', de: 'Zucker (Glukose) und Sauerstoff' },
      { ro: 'lumină și clorofilă', de: 'Licht und Chlorophyll' },
      { ro: 'săruri minerale și apă', de: 'Mineralien und Wasser' },
    ],
    correct: 1,
    explain: {
      ro: 'Din CO₂, apă și săruri minerale, cu lumină și clorofilă, planta face zahăr și eliberează oxigen.',
      de: 'Aus CO₂, Wasser und Mineralien macht die Pflanze mit Licht und Chlorophyll Zucker und gibt Sauerstoff ab.',
    },
  },
  {
    q: {
      ro: 'Prin ce intră dioxidul de carbon în frunză?',
      de: 'Wodurch gelangt das Kohlendioxid ins Blatt?',
    },
    options: [
      { ro: 'prin rădăcină', de: 'durch die Wurzel' },
      { ro: 'prin lemn', de: 'durch das Holz' },
      { ro: 'prin liber', de: 'durch den Bast' },
      { ro: 'prin stomate', de: 'durch die Spaltöffnungen' },
    ],
    correct: 3,
    explain: {
      ro: 'Stomatele sunt „porțile” frunzei pentru gaze: lasă CO₂ să intre și O₂ să iasă.',
      de: 'Die Spaltöffnungen sind die „Tore“ des Blattes für Gase: Sie lassen CO₂ hinein und O₂ hinaus.',
    },
  },
  {
    q: {
      ro: 'Prin ce urcă apa cu sărurile minerale de la rădăcină la frunză?',
      de: 'Wodurch steigen Wasser und Mineralien von der Wurzel zum Blatt?',
    },
    options: [
      { ro: 'prin lemn', de: 'durch das Holz' },
      { ro: 'prin liber', de: 'durch den Bast' },
      { ro: 'prin stomate', de: 'durch die Spaltöffnungen' },
      { ro: 'prin cloroplaste', de: 'durch die Chloroplasten' },
    ],
    correct: 0,
    explain: {
      ro: 'Lemnul duce apa în sus. Liberul duce zahărul în jos.',
      de: 'Das Holz leitet das Wasser nach oben. Der Bast leitet den Zucker nach unten.',
    },
  },
  {
    q: {
      ro: 'Unde se face zahărul în frunză?',
      de: 'Wo entsteht der Zucker im Blatt?',
    },
    options: [
      { ro: 'în stomate', de: 'in den Spaltöffnungen' },
      { ro: 'în țesutul asimilator, în celulele cu cloroplaste', de: 'im Assimilationsgewebe, in den Zellen mit Chloroplasten' },
      { ro: 'în nervuri', de: 'in den Blattadern' },
      { ro: 'în rădăcină', de: 'in der Wurzel' },
    ],
    correct: 1,
    explain: {
      ro: 'Clorofila din cloroplaste prinde lumina, iar în țesutul asimilator se formează zahărul.',
      de: 'Das Chlorophyll in den Chloroplasten fängt das Licht ein, und im Assimilationsgewebe entsteht der Zucker.',
    },
  },
  {
    q: {
      ro: 'Ce rol are lumina în fotosinteză?',
      de: 'Welche Rolle hat das Licht bei der Fotosynthese?',
    },
    options: [
      { ro: 'e un ingredient care se transformă în zahăr', de: 'Es ist eine Zutat, die zu Zucker wird' },
      { ro: 'rezultă la sfârșit, ca oxigenul', de: 'Es entsteht am Ende, wie der Sauerstoff' },
      { ro: 'dă energia, prinsă de clorofilă', de: 'Es liefert die Energie, vom Chlorophyll eingefangen' },
      { ro: 'nu are niciun rol', de: 'Es hat keine Rolle' },
    ],
    correct: 2,
    explain: {
      ro: 'Lumina e sursa de energie. Se vede în ecuație deasupra săgeții, nu printre ingrediente.',
      de: 'Das Licht ist die Energiequelle. In der Gleichung steht es über dem Pfeil, nicht bei den Zutaten.',
    },
  },
  {
    q: {
      ro: 'O plantă stă o săptămână într-un dulap întunecos. Ce se întâmplă cu fotosinteza?',
      de: 'Eine Pflanze steht eine Woche in einem dunklen Schrank. Was passiert mit der Fotosynthese?',
    },
    options: [
      { ro: 'se oprește, pentru că lipsește energia luminii', de: 'Sie hört auf, weil die Lichtenergie fehlt' },
      { ro: 'merge mai repede', de: 'Sie läuft schneller' },
      { ro: 'continuă la fel, dacă are apă', de: 'Sie läuft gleich weiter, wenn Wasser da ist' },
      { ro: 'se oprește, pentru că lipsește rădăcina', de: 'Sie hört auf, weil die Wurzel fehlt' },
    ],
    correct: 0,
    explain: {
      ro: 'Fără lumină, clorofila nu are ce să prindă, deci nu se mai face zahăr.',
      de: 'Ohne Licht hat das Chlorophyll nichts einzufangen, also entsteht kein Zucker mehr.',
    },
  },
  {
    q: {
      ro: 'Care trăsătură externă ajută frunza să prindă mai multă lumină?',
      de: 'Welches äußere Merkmal hilft dem Blatt, mehr Licht einzufangen?',
    },
    options: [
      { ro: 'stomatele', de: 'die Spaltöffnungen' },
      { ro: 'lama lățită și orientarea spre soare', de: 'die breite Blattspreite und die Ausrichtung zur Sonne' },
      { ro: 'lemnul și liberul', de: 'Holz und Bast' },
      { ro: 'spațiile cu aer', de: 'die luftgefüllten Zwischenräume' },
    ],
    correct: 1,
    explain: {
      ro: 'O lamă largă, întoarsă spre soare, primește mai multă lumină. Celelalte sunt însușiri interne.',
      de: 'Eine breite, zur Sonne gedrehte Spreite bekommt mehr Licht. Die anderen sind innere Eigenschaften.',
    },
  },
];
