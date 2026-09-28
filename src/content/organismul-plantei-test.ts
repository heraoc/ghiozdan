import type { Question } from '../data';

// Testul de la finalul lecției „Organismul unei plante superioare”.
export const organismulPlanteiTest: Question[] = [
  {
    q: {
      ro: 'Care sunt organele vegetative ale unei plante?',
      de: 'Welche sind die vegetativen Organe einer Pflanze?',
    },
    options: [
      { ro: 'floarea, fructul și sămânța', de: 'Blüte, Frucht und Samen' },
      { ro: 'rădăcina, tulpina și frunza', de: 'Wurzel, Stängel und Blatt' },
      { ro: 'rădăcina, floarea și fructul', de: 'Wurzel, Blüte und Frucht' },
      { ro: 'frunza, conul și sămânța', de: 'Blatt, Zapfen und Samen' },
    ],
    correct: 1,
    explain: {
      ro: 'Rădăcina, tulpina și frunza hrănesc planta. Floarea, fructul și sămânța sunt organe de reproducere.',
      de: 'Wurzel, Stängel und Blatt ernähren die Pflanze. Blüte, Frucht und Samen sind Fortpflanzungsorgane.',
    },
  },
  {
    q: {
      ro: 'Care grupă de plante are flori și fructe?',
      de: 'Welche Pflanzengruppe hat Blüten und Früchte?',
    },
    options: [
      { ro: 'mușchii', de: 'Moose' },
      { ro: 'ferigile', de: 'Farne' },
      { ro: 'gimnospermele', de: 'Gymnospermen' },
      { ro: 'angiospermele', de: 'Angiospermen' },
    ],
    correct: 3,
    explain: {
      ro: 'Numai angiospermele au flori și fructe. La ele, semințele sunt închise în fruct.',
      de: 'Nur Angiospermen haben Blüten und Früchte. Ihre Samen sind von der Frucht umschlossen.',
    },
  },
  {
    q: {
      ro: 'Ce țin locul florilor la gimnosperme, de exemplu la molid?',
      de: 'Was entspricht bei den Gymnospermen, zum Beispiel bei der Fichte, den Blüten?',
    },
    options: [
      { ro: 'conurile', de: 'die Zapfen' },
      { ro: 'fructele', de: 'die Früchte' },
      { ro: 'acele', de: 'die Nadeln' },
      { ro: 'rădăcinile', de: 'die Wurzeln' },
    ],
    correct: 0,
    explain: {
      ro: 'Semințele gimnospermelor stau „goale” pe solzii conurilor.',
      de: 'Die Samen der Gymnospermen liegen „nackt“ auf den Schuppen der Zapfen.',
    },
  },
  {
    q: {
      ro: 'Ce conduc vasele lemnoase?',
      de: 'Was leiten die Holzgefäße?',
    },
    options: [
      { ro: 'seva elaborată, de la frunze în jos', de: 'die organische Nährlösung von den Blättern nach unten' },
      { ro: 'aerul, de la stomate spre rădăcină', de: 'Luft von den Spaltöffnungen zur Wurzel' },
      { ro: 'seva brută, de la rădăcină în sus', de: 'die Mineralsalzlösung von der Wurzel nach oben' },
      { ro: 'polenul, de la o floare la alta', de: 'Pollen von einer Blüte zur anderen' },
    ],
    correct: 2,
    explain: {
      ro: 'Seva brută (apă cu săruri minerale) urcă prin lemn. Seva elaborată circulă prin liber.',
      de: 'Die Mineralsalzlösung (Wasser mit Mineralstoffen) steigt im Holzgewebe. Die organische Nährlösung fließt im Bastgewebe.',
    },
  },
  {
    q: {
      ro: 'În ce organ își face planta hrana, prin fotosinteză?',
      de: 'In welchem Organ stellt die Pflanze durch Fotosynthese ihre Nahrung her?',
    },
    options: [
      { ro: 'în rădăcină', de: 'in der Wurzel' },
      { ro: 'în frunză', de: 'im Blatt' },
      { ro: 'în sămânță', de: 'im Samen' },
      { ro: 'în floare', de: 'in der Blüte' },
    ],
    correct: 1,
    explain: {
      ro: 'Frunza are multe cloroplaste. Cu ajutorul luminii, ea face hrana din apă și dioxid de carbon.',
      de: 'Das Blatt hat viele Chloroplasten. Mit Hilfe des Lichts stellt es aus Wasser und Kohlenstoffdioxid Nahrung her.',
    },
  },
  {
    q: {
      ro: 'Care țesut al frunzei are cele mai multe cloroplaste?',
      de: 'Welches Blattgewebe hat die meisten Chloroplasten?',
    },
    options: [
      { ro: 'epiderma superioară', de: 'die obere Epidermis' },
      { ro: 'țesutul lacunar', de: 'das Schwammgewebe' },
      { ro: 'liberul', de: 'das Bastgewebe' },
      { ro: 'țesutul palisadic', de: 'das Palisadengewebe' },
    ],
    correct: 3,
    explain: {
      ro: 'Celulele alungite ale țesutului palisadic stau chiar sub fața însorită a frunzei.',
      de: 'Die langen Zellen des Palisadengewebes liegen direkt unter der sonnigen Blattoberseite.',
    },
  },
  {
    q: {
      ro: 'Prin ce intră dioxidul de carbon în frunză?',
      de: 'Wodurch gelangt Kohlenstoffdioxid in das Blatt?',
    },
    options: [
      { ro: 'prin stomate', de: 'durch die Spaltöffnungen' },
      { ro: 'prin nervuri', de: 'durch die Blattadern' },
      { ro: 'prin perișorii absorbanți', de: 'durch die Wurzelhaare' },
      { ro: 'prin măduvă', de: 'durch das Mark' },
    ],
    correct: 0,
    explain: {
      ro: 'Stomatele, mai ales de pe fața de jos a frunzei, lasă gazele să intre și să iasă.',
      de: 'Die Spaltöffnungen, vor allem auf der Blattunterseite, lassen Gase hinein und hinaus.',
    },
  },
  {
    q: {
      ro: 'Ce organ mâncăm de la gulie?',
      de: 'Welches Organ essen wir beim Kohlrabi?',
    },
    options: [
      { ro: 'rădăcina', de: 'die Wurzel' },
      { ro: 'fructul', de: 'die Frucht' },
      { ro: 'tulpina', de: 'den Stängel' },
      { ro: 'frunzele', de: 'die Blätter' },
    ],
    correct: 2,
    explain: {
      ro: 'Gulia este o tulpină îngroșată, care crește deasupra solului.',
      de: 'Der Kohlrabi ist ein verdickter Stängel, der über der Erde wächst.',
    },
  },
  {
    q: {
      ro: 'Care sunt cele trei zone ale fiecărui organ?',
      de: 'Welche drei Zonen hat jedes Organ?',
    },
    options: [
      { ro: 'protecție, nutriție, conducere', de: 'Schutzzone, Ernährungszone, Leitungszone' },
      { ro: 'rădăcină, tulpină, frunză', de: 'Wurzel, Stängel, Blatt' },
      { ro: 'lemn, liber, măduvă', de: 'Holzgewebe, Bastgewebe, Mark' },
      { ro: 'floare, fruct, sămânță', de: 'Blüte, Frucht, Samen' },
    ],
    correct: 0,
    explain: {
      ro: 'În fiecare organ predomină zona potrivită rolului său.',
      de: 'In jedem Organ überwiegt die Zone, die zu seiner Aufgabe passt.',
    },
  },
];
