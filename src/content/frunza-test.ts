import type { Question } from '../data';

// Testul de la finalul lecției „Frunza: structură și funcție”.
export const frunzaTest: Question[] = [
  {
    q: { ro: 'Ce fel de organ este frunza?', de: 'Was für ein Organ ist das Blatt?' },
    options: [
      { ro: 'un organ de reproducere', de: 'ein Fortpflanzungsorgan' },
      { ro: 'un organ vegetativ', de: 'ein vegetatives Organ' },
      { ro: 'un țesut', de: 'ein Gewebe' },
      { ro: 'o celulă', de: 'eine Zelle' },
    ],
    correct: 1,
    explain: {
      ro: 'Frunza, tulpina și rădăcina sunt organe vegetative: hrănesc și susțin planta.',
      de: 'Blatt, Stängel und Wurzel sind vegetative Organe: Sie ernähren und tragen die Pflanze.',
    },
  },
  {
    q: { ro: 'Ce rol are pețiolul, pe lângă prinderea frunzei de tulpină?', de: 'Welche Aufgabe hat der Blattstiel außer der Verbindung mit dem Stängel?' },
    options: [
      { ro: 'face flori', de: 'er bildet Blüten' },
      { ro: 'absoarbe apa din sol', de: 'er nimmt Wasser aus dem Boden auf' },
      { ro: 'așază frunzele ca să nu se umbrească unele pe altele', de: 'er platziert die Blätter so, dass sie sich nicht gegenseitig beschatten' },
      { ro: 'produce semințe', de: 'er bildet Samen' },
    ],
    correct: 2,
    explain: {
      ro: 'Pețiolii lungi scot frunzele de jos de sub umbra celor de sus.',
      de: 'Lange Blattstiele holen die unteren Blätter aus dem Schatten der oberen.',
    },
  },
  {
    q: { ro: 'Ce fel de frunze au cactușii?', de: 'Was für Blätter haben Kakteen?' },
    options: [
      { ro: 'frunze transformate în spini', de: 'zu Stacheln umgewandelte Blätter' },
      { ro: 'frunze mari și rotunde', de: 'große, runde Blätter' },
      { ro: 'solzi', de: 'Schuppen' },
      { ro: 'frunze lungi și late', de: 'lange, breite Blätter' },
    ],
    correct: 0,
    explain: {
      ro: 'Spinii pierd foarte puțină apă, o adaptare la deșert.',
      de: 'Stacheln verlieren sehr wenig Wasser, eine Anpassung an die Wüste.',
    },
  },
  {
    q: { ro: 'Plantele care trăiesc în apă au, de obicei:', de: 'Pflanzen, die im Wasser leben, haben meist:' },
    options: [
      { ro: 'ace', de: 'Nadeln' },
      { ro: 'limbul redus', de: 'reduzierte Blattspreiten' },
      { ro: 'spini', de: 'Stacheln' },
      { ro: 'limbul lat', de: 'breite Blattspreiten' },
    ],
    correct: 3,
    explain: {
      ro: 'În apă nu le lipsește apa, iar limbul lat prinde multă lumină (de exemplu nufărul amazonian).',
      de: 'Im Wasser fehlt ihnen kein Wasser, und die breite Spreite fängt viel Licht (zum Beispiel die Amazonas-Riesenseerose).',
    },
  },
  {
    q: { ro: 'În experiment, ce lichid scoate pigmenții clorofilieni din frunze?', de: 'Welche Flüssigkeit löst im Experiment die Chlorophyllpigmente aus den Blättern?' },
    options: [
      { ro: 'acetona', de: 'Azeton' },
      { ro: 'apa', de: 'Wasser' },
      { ro: 'nici una', de: 'keine' },
      { ro: 'amândouă la fel', de: 'beide gleich gut' },
    ],
    correct: 0,
    explain: {
      ro: 'Cu acetonă se obține un lichid verde; cu apă, frunzele verzi dau un lichid aproape incolor.',
      de: 'Mit Azeton erhält man eine grüne Flüssigkeit; mit Wasser geben grüne Blätter eine fast farblose Flüssigkeit.',
    },
  },
  {
    q: { ro: 'Ce arată extractul cu acetonă din frunze roșii?', de: 'Was zeigt der Azeton-Extrakt aus roten Blättern?' },
    options: [
      { ro: 'că frunzele roșii nu au pigmenți', de: 'dass rote Blätter keine Pigmente haben' },
      { ro: 'că și frunzele roșii au clorofilă', de: 'dass auch rote Blätter Chlorophyll haben' },
      { ro: 'că acetona este roșie', de: 'dass Azeton rot ist' },
      { ro: 'că frunzele roșii sunt moarte', de: 'dass rote Blätter tot sind' },
    ],
    correct: 1,
    explain: {
      ro: 'Extractul e verde: clorofila există, doar că e acoperită de pigmenți roșii.',
      de: 'Der Extrakt ist grün: Chlorophyll ist vorhanden, es wird nur von roten Pigmenten überdeckt.',
    },
  },
  {
    q: { ro: 'Care strat al frunzei are cele mai multe cloroplaste?', de: 'Welche Blattschicht hat die meisten Chloroplasten?' },
    options: [
      { ro: 'cuticula', de: 'die Cuticula' },
      { ro: 'epiderma', de: 'die Epidermis' },
      { ro: 'țesutul palisadic', de: 'das Palisadengewebe' },
      { ro: 'nervura', de: 'die Blattader' },
    ],
    correct: 2,
    explain: {
      ro: 'Țesutul palisadic stă chiar sub epiderma de sus și primește primul lumina.',
      de: 'Das Palisadengewebe liegt direkt unter der oberen Epidermis und bekommt das Licht zuerst.',
    },
  },
  {
    q: { ro: 'Ce rol are cuticula?', de: 'Welche Aufgabe hat die Cuticula?' },
    options: [
      { ro: 'face fotosinteză', de: 'sie betreibt Fotosynthese' },
      { ro: 'transportă hrana', de: 'sie transportiert Nahrung' },
      { ro: 'lasă gazele să intre', de: 'sie lässt Gase hinein' },
      { ro: 'împiedică pierderea apei', de: 'sie verhindert den Wasserverlust' },
    ],
    correct: 3,
    explain: {
      ro: 'Cuticula e un strat impermeabil; gazele intră și ies prin stomate.',
      de: 'Die Cuticula ist wasserundurchlässig; Gase gelangen durch die Spaltöffnungen hinein und hinaus.',
    },
  },
];
