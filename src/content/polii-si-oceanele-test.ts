import type { Question } from '../data';

// Testul de la finalul lecției „Poli, oceane, vârfuri” (Geografie, clasa a 6-a).
export const poliiSiOceaneleTest: Question[] = [
  {
    q: {
      ro: 'Cine a trecut primul cu corabia din Atlantic în Pacific prin Arctica (1878–1879)?',
      de: 'Wer fuhr als Erster mit dem Schiff durch die Arktis vom Atlantik in den Pazifik (1878–1879)?',
    },
    options: [
      { ro: 'Roald Amundsen', de: 'Roald Amundsen' },
      { ro: 'Robert Peary', de: 'Robert Peary' },
      { ro: 'Nils Adolf Erik Nordenskjöld', de: 'Nils Adolf Erik Nordenskjöld' },
      { ro: 'Richard Byrd', de: 'Richard Byrd' },
    ],
    correct: 2,
    explain: {
      ro: 'Nordenskjöld a străbătut Pasajul de Nord-Est, pe lângă Siberia. Amundsen a trecut mai târziu, între 1903 și 1906, pe Pasajul de Nord-Vest.',
      de: 'Nordenskjöld befuhr die Nordostpassage entlang Sibiriens. Amundsen fuhr später, zwischen 1903 und 1906, durch die Nordwestpassage.',
    },
  },
  {
    q: {
      ro: 'Pe lângă ce țărm trece Pasajul de Nord-Vest?',
      de: 'An welcher Küste führt die Nordwestpassage vorbei?',
    },
    options: [
      { ro: 'țărmul Siberiei', de: 'der Küste Sibiriens' },
      { ro: 'țărmul Antarcticii', de: 'der Küste der Antarktis' },
      { ro: 'țărmul Africii', de: 'der Küste Afrikas' },
      { ro: 'canalele din nordul Canadei', de: 'den Kanälen im Norden Kanadas' },
    ],
    correct: 3,
    explain: {
      ro: 'Pasajul de Nord-Vest duce prin canalele Arhipelagului Arctic Canadian.',
      de: 'Die Nordwestpassage führt durch die Kanäle des Kanadisch-Arktischen Archipels.',
    },
  },
  {
    q: {
      ro: 'Ce funcție a avut românul Emil Racoviță în expediția „Belgica” (1897–1899)?',
      de: 'Welche Aufgabe hatte der Rumäne Emil Racoviță auf der „Belgica“-Expedition (1897–1899)?',
    },
    options: [
      { ro: 'biolog și naturalist', de: 'Biologe und Naturforscher' },
      { ro: 'căpitanul navei', de: 'Kapitän des Schiffes' },
      { ro: 'pilot de avion', de: 'Flugzeugpilot' },
      { ro: 'alpinist', de: 'Bergsteiger' },
    ],
    correct: 0,
    explain: {
      ro: 'Racoviță a studiat viețuitoarele din Antarctida. Expediția „Belgica” a fost una științifică.',
      de: 'Racoviță erforschte die Lebewesen der Antarktis. Die „Belgica“-Expedition war eine wissenschaftliche.',
    },
  },
  {
    q: {
      ro: 'Cine a ajuns primul la Polul Nord, potrivit manualului (1909)?',
      de: 'Wer erreichte laut Lehrbuch als Erster den Nordpol (1909)?',
    },
    options: [
      { ro: 'Roald Amundsen', de: 'Roald Amundsen' },
      { ro: 'Robert Edwin Peary', de: 'Robert Edwin Peary' },
      { ro: 'Robert Falcon Scott', de: 'Robert Falcon Scott' },
      { ro: 'Thor Heyerdahl', de: 'Thor Heyerdahl' },
    ],
    correct: 1,
    explain: {
      ro: 'Peary este recunoscut drept câștigător; Frederick Cook afirmase că ajunsese acolo cu un an înainte, dar nu este recunoscut.',
      de: 'Peary gilt als Sieger; Frederick Cook behauptete, ein Jahr früher dort gewesen zu sein, wird aber nicht anerkannt.',
    },
  },
  {
    q: {
      ro: 'În ce ordine au ajuns Amundsen și Scott la Polul Sud?',
      de: 'In welcher Reihenfolge erreichten Amundsen und Scott den Südpol?',
    },
    options: [
      { ro: 'Scott în 1911, Amundsen în 1912', de: 'Scott 1911, Amundsen 1912' },
      { ro: 'amândoi în aceeași zi', de: 'beide am selben Tag' },
      { ro: 'Amundsen în 1909, Scott în 1911', de: 'Amundsen 1909, Scott 1911' },
      { ro: 'Amundsen pe 14 decembrie 1911, Scott în ianuarie 1912', de: 'Amundsen am 14. Dezember 1911, Scott im Januar 1912' },
    ],
    correct: 3,
    explain: {
      ro: 'Amundsen a fost primul; Scott a ajuns la mai bine de o lună după el și nu s-a mai întors.',
      de: 'Amundsen war der Erste; Scott kam gut einen Monat später an und kehrte nicht zurück.',
    },
  },
  {
    q: {
      ro: 'Care explorator a zburat deasupra Polului Nord în 1926 și deasupra Polului Sud în 1929?',
      de: 'Welcher Forscher überflog 1926 den Nordpol und 1929 den Südpol?',
    },
    options: [
      { ro: 'Edmund Hillary', de: 'Edmund Hillary' },
      { ro: 'Jacques-Yves Cousteau', de: 'Jacques-Yves Cousteau' },
      { ro: 'Richard Byrd', de: 'Richard Byrd' },
      { ro: 'Nordenskjöld', de: 'Nordenskjöld' },
    ],
    correct: 2,
    explain: {
      ro: 'Richard Byrd, aviator american, a ajuns la ambii poli pe calea aerului.',
      de: 'Richard Byrd, ein amerikanischer Flieger, erreichte beide Pole auf dem Luftweg.',
    },
  },
  {
    q: {
      ro: 'Cu ce a traversat Thor Heyerdahl Oceanul Pacific în 1947?',
      de: 'Womit überquerte Thor Heyerdahl 1947 den Pazifischen Ozean?',
    },
    options: [
      { ro: 'cu un batiscaf', de: 'mit einem Bathyskaph' },
      { ro: 'cu o plută de balsa, Kon-Tiki', de: 'mit einem Balsafloß, der Kon-Tiki' },
      { ro: 'cu un avion', de: 'mit einem Flugzeug' },
      { ro: 'cu nava „Calypso”', de: 'mit dem Schiff „Calypso“' },
    ],
    correct: 1,
    explain: {
      ro: 'A plecat din Callao (Peru) spre arhipelagul Tuamotu. Calypso a fost nava lui Cousteau.',
      de: 'Er fuhr von Callao (Peru) zum Tuamotu-Archipel. Die Calypso war das Schiff von Cousteau.',
    },
  },
  {
    q: {
      ro: 'Cine a urcat pe vârful Everest în 1953?',
      de: 'Wer bestieg 1953 den Gipfel des Everest?',
    },
    options: [
      { ro: 'Hillary (Noua Zeelandă) și Tenzing (Nepal)', de: 'Hillary (Neuseeland) und Tenzing (Nepal)' },
      { ro: 'Byrd și Peary', de: 'Byrd und Peary' },
      { ro: 'Amundsen și Scott', de: 'Amundsen und Scott' },
      { ro: 'Cousteau și Piccard', de: 'Cousteau und Piccard' },
    ],
    correct: 0,
    explain: {
      ro: 'Edmund Hillary și Norgay Tenzing au fost primii pe cel mai înalt vârf de pe Pământ (8 850 m).',
      de: 'Edmund Hillary und Tenzing Norgay waren die Ersten auf dem höchsten Gipfel der Erde (8850 m).',
    },
  },
  {
    q: {
      ro: 'Ce s-a întâmplat cu nava „Belgica” în Antarctida?',
      de: 'Was geschah mit dem Schiff „Belgica“ in der Antarktis?',
    },
    options: [
      { ro: 'a rămas prinsă în gheață, iar echipajul a iernat acolo', de: 'es blieb im Eis stecken, und die Besatzung überwinterte dort' },
      { ro: 'a ajuns la Polul Sud', de: 'es erreichte den Südpol' },
      { ro: 'a trecut prin Pasajul de Nord-Est', de: 'es durchfuhr die Nordostpassage' },
      { ro: 's-a întors imediat în Belgia', de: 'es kehrte sofort nach Belgien zurück' },
    ],
    correct: 0,
    explain: {
      ro: 'Nava a fost blocată în banchiză și echipajul a petrecut iarna în Antarctida, prima iernare de acest fel.',
      de: 'Das Schiff saß im Packeis fest, und die Besatzung überwinterte in der Antarktis, als erste überhaupt.',
    },
  },
];
