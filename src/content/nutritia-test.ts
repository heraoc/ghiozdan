import type { Question } from '../data';

// Testul de la finalul lecției „Nutriția în lumea vie”.
export const nutritiaTest: Question[] = [
  {
    q: {
      ro: 'Ce înseamnă că un organism este autotrof?',
      de: 'Was bedeutet es, dass ein Organismus autotroph ist?',
    },
    options: [
      { ro: 'Mănâncă alte organisme.', de: 'Er frisst andere Organismen.' },
      { ro: 'Își face singur hrana din substanțe anorganice.', de: 'Er stellt seine Nahrung selbst aus anorganischen Stoffen her.' },
      { ro: 'Trăiește pe seama unei gazde.', de: 'Er lebt auf Kosten eines Wirts.' },
      { ro: 'Se hrănește cu resturi moarte.', de: 'Er ernährt sich von toten Resten.' },
    ],
    correct: 1,
    explain: {
      ro: 'Autotrof = „se hrănește singur”: plantele și algele își fac hrana prin fotosinteză.',
      de: 'Autotroph = „ernährt sich selbst“: Pflanzen und Algen stellen ihre Nahrung durch Fotosynthese her.',
    },
  },
  {
    q: {
      ro: 'Care dintre acestea este heterotrof?',
      de: 'Welches dieser Lebewesen ist heterotroph?',
    },
    options: [
      { ro: 'teiul', de: 'die Linde' },
      { ro: 'algele marine', de: 'die Meeresalgen' },
      { ro: 'vidra', de: 'der Otter' },
      { ro: 'iarba', de: 'das Gras' },
    ],
    correct: 2,
    explain: {
      ro: 'Vidra mănâncă pești; nu-și poate face singură hrana.',
      de: 'Der Otter frisst Fische; er kann seine Nahrung nicht selbst herstellen.',
    },
  },
  {
    q: {
      ro: 'De ce are nevoie planta pentru fotosinteză?',
      de: 'Was braucht die Pflanze für die Fotosynthese?',
    },
    options: [
      { ro: 'apă, dioxid de carbon, lumină și clorofilă', de: 'Wasser, Kohlendioxid, Licht und Chlorophyll' },
      { ro: 'oxigen și întuneric', de: 'Sauerstoff und Dunkelheit' },
      { ro: 'insecte și apă', de: 'Insekten und Wasser' },
      { ro: 'doar sol', de: 'nur Erde' },
    ],
    correct: 0,
    explain: {
      ro: 'Din apă și dioxid de carbon, cu energia luminii prinsă de clorofilă, planta face hrană și eliberează oxigen.',
      de: 'Aus Wasser und Kohlendioxid stellt die Pflanze mit der Lichtenergie, die das Chlorophyll einfängt, Nahrung her und gibt Sauerstoff ab.',
    },
  },
  {
    q: {
      ro: 'Cum se numește partea lată a frunzei, unde are loc cea mai mare parte a fotosintezei?',
      de: 'Wie heißt der breite Teil des Blattes, in dem der größte Teil der Fotosynthese stattfindet?',
    },
    options: [
      { ro: 'pețiolul', de: 'der Blattstiel' },
      { ro: 'teaca', de: 'die Blattscheide' },
      { ro: 'limbul', de: 'die Blattspreite' },
      { ro: 'rădăcina', de: 'die Wurzel' },
    ],
    correct: 2,
    explain: {
      ro: 'Limbul e lat și subțire, ca să prindă cât mai multă lumină.',
      de: 'Die Blattspreite ist breit und dünn, damit sie möglichst viel Licht einfängt.',
    },
  },
  {
    q: {
      ro: 'Prin ce intră dioxidul de carbon în frunză?',
      de: 'Wodurch gelangt das Kohlendioxid ins Blatt?',
    },
    options: [
      { ro: 'prin stomate', de: 'durch die Spaltöffnungen' },
      { ro: 'prin vasele liberiene', de: 'durch den Bast' },
      { ro: 'prin cloroplaste', de: 'durch die Chloroplasten' },
      { ro: 'prin pețiol', de: 'durch den Blattstiel' },
    ],
    correct: 0,
    explain: {
      ro: 'Stomatele sunt deschizături mici, mai ales pe fața de jos a frunzei.',
      de: 'Die Spaltöffnungen sind kleine Öffnungen, vor allem auf der Blattunterseite.',
    },
  },
  {
    q: {
      ro: 'De ce prind insecte plantele insectivore, deși sunt verzi?',
      de: 'Warum fangen insektenfressende Pflanzen Insekten, obwohl sie grün sind?',
    },
    options: [
      { ro: 'Pentru că nu pot face fotosinteză.', de: 'Weil sie keine Fotosynthese betreiben können.' },
      { ro: 'Pentru că trăiesc în soluri sărace în săruri minerale.', de: 'Weil sie in mineralarmen Böden leben.' },
      { ro: 'Ca să se apere de insecte.', de: 'Um sich vor Insekten zu schützen.' },
      { ro: 'Pentru că nu au rădăcini.', de: 'Weil sie keine Wurzeln haben.' },
    ],
    correct: 1,
    explain: {
      ro: 'Ele fac fotosinteză, dar își completează hrana cu substanțele din insecte, care lipsesc din sol.',
      de: 'Sie betreiben Fotosynthese, ergänzen ihre Nahrung aber mit Stoffen aus Insekten, die im Boden fehlen.',
    },
  },
  {
    q: {
      ro: 'Ciupercile care descompun lemnul mort sunt:',
      de: 'Pilze, die totes Holz zersetzen, sind:',
    },
    options: [
      { ro: 'autotrofe', de: 'autotroph' },
      { ro: 'parazite', de: 'Parasiten' },
      { ro: 'saprotrofe', de: 'Saprotrophe' },
      { ro: 'chemoautotrofe', de: 'chemoautotroph' },
    ],
    correct: 2,
    explain: {
      ro: 'Saprotrofele se hrănesc cu materie moartă și o întorc în circuitul naturii.',
      de: 'Saprotrophe ernähren sich von toter Materie und führen sie in den Naturkreislauf zurück.',
    },
  },
  {
    q: {
      ro: 'Lichenul este format dintr-o ciupercă și o algă care se ajută reciproc. Ce relație este aceasta?',
      de: 'Eine Flechte besteht aus einem Pilz und einer Alge, die sich gegenseitig helfen. Welche Beziehung ist das?',
    },
    options: [
      { ro: 'parazitism', de: 'Parasitismus' },
      { ro: 'simbioză', de: 'Symbiose' },
      { ro: 'nutriție saprotrofă', de: 'saprotrophe Ernährung' },
      { ro: 'nicio relație', de: 'keine Beziehung' },
    ],
    correct: 1,
    explain: {
      ro: 'În simbioză ambii parteneri câștigă; în parazitism gazda pierde.',
      de: 'In der Symbiose haben beide Partner Vorteile; beim Parasitismus wird der Wirt geschädigt.',
    },
  },
];
