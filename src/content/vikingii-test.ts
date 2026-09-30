import type { Question } from '../data';

// Testul de la finalul lecției „Vikingii: navigatorii nordului” (Geografie, clasa a 6-a).
export const vikingiiTest: Question[] = [
  {
    q: { ro: 'Cum se numea adunarea oamenilor liberi la vikingi?', de: 'Wie hieß die Versammlung der freien Menschen bei den Wikingern?' },
    options: [
      { ro: 'Senat', de: 'Senat' },
      { ro: 'Thing (în Islanda: Althing)', de: 'Thing (in Island: Althing)' },
      { ro: 'Knarr', de: 'Knarr' },
      { ro: 'Saga', de: 'Saga' },
    ],
    correct: 1,
    explain: {
      ro: 'La Thing se judecau certurile și se hotărau legile. Althing-ul islandez s-a ținut din anul 930.',
      de: 'Beim Thing wurden Streitigkeiten entschieden und Gesetze beschlossen. Das isländische Althing tagte seit 930.',
    },
  },
  {
    q: { ro: 'Ce avantaj avea corabia vikingă datorită pescajului mic?', de: 'Welchen Vorteil hatte das Wikingerschiff durch seinen geringen Tiefgang?' },
    options: [
      { ro: 'putea zbura', de: 'es konnte fliegen' },
      { ro: 'nu avea nevoie de vânt', de: 'es brauchte keinen Wind' },
      { ro: 'putea duce 1000 de oameni', de: 'es konnte 1000 Menschen tragen' },
      { ro: 'putea urca pe râuri și putea fi tras pe plajă', de: 'es konnte Flüsse hinauffahren und an den Strand gezogen werden' },
    ],
    correct: 3,
    explain: {
      ro: 'Corabia intra în apă mai puțin de un metru.',
      de: 'Das Schiff tauchte weniger als einen Meter ins Wasser.',
    },
  },
  {
    q: { ro: 'De unde vine cuvântul german „Steuerbord” (partea dreaptă a navei)?', de: 'Woher kommt das Wort „Steuerbord“ (rechte Schiffsseite)?' },
    options: [
      { ro: 'de la cârma vikingă, prinsă pe partea dreaptă', de: 'vom Wikingerruder, das rechts befestigt war' },
      { ro: 'de la numele unui rege', de: 'vom Namen eines Königs' },
      { ro: 'de la steaua Polară', de: 'vom Polarstern' },
      { ro: 'de la vela pătrată', de: 'vom Rahsegel' },
    ],
    correct: 0,
    explain: {
      ro: '„Steuerbord” înseamnă „bordul cu cârma”: cârma laterală era pe partea dreaptă a pupei.',
      de: '„Steuerbord“ ist die Seite mit dem Steuer: Das Seitenruder saß rechts am Heck.',
    },
  },
  {
    q: { ro: 'Ce arată înălțimea soarelui la amiază?', de: 'Was zeigt die Höhe der Mittagssonne an?' },
    options: [
      { ro: 'cât e ceasul', de: 'wie spät es ist' },
      { ro: 'ce vreme va fi', de: 'wie das Wetter wird' },
      { ro: 'cât de departe spre nord ești (paralela)', de: 'wie weit im Norden man ist (der Breitengrad)' },
      { ro: 'cât de adâncă e marea', de: 'wie tief das Meer ist' },
    ],
    correct: 2,
    explain: {
      ro: 'Cu cât mergi mai spre nord, cu atât soarele de la amiază e mai jos. Așa navigau vikingii pe aceeași paralelă.',
      de: 'Je weiter nördlich, desto tiefer steht die Mittagssonne. So fuhren die Wikinger auf demselben Breitengrad.',
    },
  },
  {
    q: { ro: 'Cine a descoperit Groenlanda și a întemeiat acolo prima așezare vikingă?', de: 'Wer entdeckte Grönland und gründete dort die erste Wikingersiedlung?' },
    options: [
      { ro: 'Leif Eriksson', de: 'Leif Eriksson' },
      { ro: 'Erik cel Roșu', de: 'Erik der Rote' },
      { ro: 'Bjarni Herjólfsson', de: 'Bjarni Herjólfsson' },
      { ro: 'Cristofor Columb', de: 'Christoph Kolumbus' },
    ],
    correct: 1,
    explain: {
      ro: 'Erik a explorat Groenlanda între 982 și 985 și a venit apoi cu coloniști; ferma lui era la Brattahlíð.',
      de: 'Erik erkundete Grönland von 982 bis 985 und kam dann mit Siedlern zurück; sein Hof lag in Brattahlíð.',
    },
  },
  {
    q: { ro: 'Câte corăbii cu coloniști au pornit spre Groenlanda și câte au ajuns?', de: 'Wie viele Siedlerschiffe brachen nach Grönland auf, und wie viele kamen an?' },
    options: [
      { ro: 'au pornit 5, au ajuns 5', de: '5 brachen auf, 5 kamen an' },
      { ro: 'au pornit 100, au ajuns 90', de: '100 brachen auf, 90 kamen an' },
      { ro: 'au pornit 25, au ajuns 14', de: '25 brachen auf, 14 kamen an' },
      { ro: 'nu a ajuns niciuna', de: 'keines kam an' },
    ],
    correct: 2,
    explain: {
      ro: 'Drumul era periculos: unele corăbii s-au scufundat, altele s-au întors.',
      de: 'Die Fahrt war gefährlich: Einige Schiffe sanken, andere kehrten um.',
    },
  },
  {
    q: { ro: 'Cum a numit Leif ținutul cu păduri întinse, azi Labrador?', de: 'Wie nannte Leif das Land mit weiten Wäldern, heute Labrador?' },
    options: [
      { ro: 'Markland', de: 'Markland' },
      { ro: 'Helluland', de: 'Helluland' },
      { ro: 'Vinland', de: 'Vinland' },
      { ro: 'Grænland', de: 'Grænland' },
    ],
    correct: 0,
    explain: {
      ro: 'Markland = „țara pădurilor”; Helluland = „țara pietrelor plate”; Vinland = „țara viței-de-vie”.',
      de: 'Markland = „Waldland“; Helluland = „Land der flachen Steine“; Vinland = „Weinland“.',
    },
  },
  {
    q: { ro: 'Ce au dovedit arheologii la L’Anse aux Meadows?', de: 'Was bewiesen die Archäologen in L’Anse aux Meadows?' },
    options: [
      { ro: 'că acolo trăia Columb', de: 'dass Kolumbus dort lebte' },
      { ro: 'că vikingii au fost în America, lemnul fiind tăiat în anul 1021', de: 'dass die Wikinger in Amerika waren; das Holz wurde im Jahr 1021 geschlagen' },
      { ro: 'că vikingii aveau busolă', de: 'dass die Wikinger einen Kompass hatten' },
      { ro: 'că Groenlanda era o pădure', de: 'dass Grönland ein Wald war' },
    ],
    correct: 1,
    explain: {
      ro: 'Este prima dovadă sigură că europenii au ajuns în America înaintea lui Columb (1492).',
      de: 'Das ist der erste sichere Beweis, dass Europäer vor Kolumbus (1492) in Amerika waren.',
    },
  },
];
