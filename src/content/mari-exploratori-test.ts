import type { Question } from '../data';

// Testul de la finalul lecției „Mari exploratori”.
// Întrebările vin din secțiunea „Teste dich” a lecției originale, cu variante de răspuns.
export const mariExploratoriTest: Question[] = [
  {
    q: {
      ro: 'Cine a ajuns primul la vârful sudic al Africii?',
      de: 'Wer erreichte als Erster die Südspitze Afrikas?',
    },
    options: [
      { ro: 'Vasco da Gama', de: 'Vasco da Gama' },
      { ro: 'Cristofor Columb', de: 'Christoph Kolumbus' },
      { ro: 'Bartolomeu Diaz', de: 'Bartolomeu Diaz' },
      { ro: 'Fernando Magellan', de: 'Fernando Magellan' },
    ],
    correct: 2,
    explain: {
      ro: 'Bartolomeu Diaz, în anul 1488. L-a numit „Capul Furtunilor”; azi îi spunem Capul Bunei Speranțe.',
      de: 'Bartolomeu Diaz im Jahr 1488. Er nannte es „Kap der Stürme“; heute heißt es Kap der Guten Hoffnung.',
    },
  },
  {
    q: {
      ro: 'De ce i-a numit Columb „indieni” pe oamenii din America?',
      de: 'Warum nannte Kolumbus die Menschen in Amerika „Indianer“?',
    },
    options: [
      { ro: 'Credea că ajunsese în India, adică în Asia.', de: 'Er glaubte, er sei in Indien (Asien) angekommen.' },
      { ro: 'Așa își spuneau ei înșiși.', de: 'So nannten sie sich selbst.' },
      { ro: 'Veniseră cu mult timp înainte din India.', de: 'Sie waren lange vorher aus Indien gekommen.' },
      { ro: 'Așa i-a cerut regina Isabela.', de: 'Königin Isabella hatte es so verlangt.' },
    ],
    correct: 0,
    explain: {
      ro: 'Până la moarte, Columb a crezut că ajunsese în Asia, navigând spre vest.',
      de: 'Kolumbus glaubte bis zu seinem Tod, dass er nach Westen segelnd Asien erreicht hatte.',
    },
  },
  {
    q: {
      ro: 'În ce oraș din India a ajuns Vasco da Gama?',
      de: 'Welche Stadt in Indien erreichte Vasco da Gama?',
    },
    options: [
      { ro: 'Delhi', de: 'Delhi' },
      { ro: 'Calicut', de: 'Calicut' },
      { ro: 'Goa', de: 'Goa' },
      { ro: 'Bombay', de: 'Bombay' },
    ],
    correct: 1,
    explain: {
      ro: 'Calicut, în 1498: un oraș bogat, unde se făcea comerț cu mirodenii.',
      de: 'Calicut, im Jahr 1498: eine reiche Handelsstadt für Gewürze.',
    },
  },
  {
    q: {
      ro: 'Câte corăbii din flota lui Magellan s-au întors în Spania?',
      de: 'Wie viele Schiffe der Magellan-Flotte kamen zurück nach Spanien?',
    },
    options: [
      { ro: 'Niciuna', de: 'Keines' },
      { ro: 'Una', de: 'Eines' },
      { ro: 'Trei', de: 'Drei' },
      { ro: 'Toate cinci', de: 'Alle fünf' },
    ],
    correct: 1,
    explain: {
      ro: 'Doar „Victoria”, cu 18 oameni. Magellan însuși a murit în 1521, în Filipine.',
      de: 'Nur eines, die „Victoria“, mit 18 Männern. Magellan selbst starb 1521 auf den Philippinen.',
    },
  },
  {
    q: {
      ro: 'De ce i se spune lui Francis Drake și pirat?',
      de: 'Warum wird Francis Drake auch Seeräuber genannt?',
    },
    options: [
      { ro: 'A furat corabia „Golden Hind”.', de: 'Er stahl die „Golden Hind“.' },
      { ro: 'A atacat corăbii englezești.', de: 'Er überfiel englische Schiffe.' },
      { ro: 'A trăit pe o insulă a piraților.', de: 'Er lebte auf einer Pirateninsel.' },
      {
        ro: 'A atacat corăbii și porturi spaniole și a luat argint și aur.',
        de: 'Er überfiel spanische Schiffe und Häfen und raubte Silber und Gold.',
      },
    ],
    correct: 3,
    explain: {
      ro: 'A făcut-o cu acordul reginei Angliei. Spaniolii îl numeau „El Draque”, Dragonul.',
      de: 'Er tat es mit Erlaubnis der englischen Königin. Die Spanier nannten ihn „El Draque“, den Drachen.',
    },
  },
  {
    q: {
      ro: 'Unde a trebuit să ierneze Willem Barents?',
      de: 'Wo musste Willem Barents überwintern?',
    },
    options: [
      { ro: 'Pe Novaia Zemlia', de: 'Auf Nowaja Semlja' },
      { ro: 'Pe Spitzbergen', de: 'Auf Spitzbergen' },
      { ro: 'Pe Insula Urșilor', de: 'Auf der Bäreninsel' },
      { ro: 'În Norvegia', de: 'In Norwegen' },
    ],
    correct: 0,
    explain: {
      ro: 'Corabia i-a rămas prinsă în gheață, așa că oamenii și-au construit o casă din lemn adus de mare și din lemnul corăbiei.',
      de: 'Sein Schiff fror im Eis fest, deshalb bauten die Männer ein Haus aus Treibholz und Schiffsholz.',
    },
  },
  {
    q: {
      ro: 'Ce urmări au avut descoperirile pentru oamenii din America?',
      de: 'Welche Folgen hatten die Entdeckungen für die Menschen in Amerika?',
    },
    options: [
      { ro: 'Aproape niciuna, viața lor a rămas la fel.', de: 'Fast keine, ihr Leben blieb gleich.' },
      { ro: 'S-au îmbogățit din comerțul cu mirodenii.', de: 'Sie wurden durch den Gewürzhandel reich.' },
      {
        ro: 'Europenii le-au cucerit pământurile, iar mulți au murit de boli, din cauza violenței și a muncii forțate.',
        de: 'Die Europäer eroberten ihr Land; viele starben an Krankheiten, Gewalt und Zwangsarbeit.',
      },
      { ro: 'Au plecat cu toții să trăiască în Europa.', de: 'Sie zogen alle nach Europa.' },
    ],
    correct: 2,
    explain: {
      ro: 'Europenii au întemeiat colonii. Multe popoare au murit de boli aduse din Europa, cum ar fi variola.',
      de: 'Die Europäer gründeten Kolonien. Viele Ureinwohner starben an eingeschleppten Krankheiten wie den Pocken.',
    },
  },
];
