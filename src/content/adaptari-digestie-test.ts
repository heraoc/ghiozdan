import type { Question } from '../data';

// Testul de la finalul lecției „Adaptări ale digestiei la vertebrate”.
export const adaptariDigestieTest: Question[] = [
  {
    q: {
      ro: 'Care animal este carnivor?',
      de: 'Welches Tier ist ein Fleischfresser?',
    },
    options: [
      { ro: 'capra', de: 'die Ziege' },
      { ro: 'broasca țestoasă', de: 'die Schildkröte' },
      { ro: 'lupul', de: 'der Wolf' },
      { ro: 'ursul', de: 'der Bär' },
    ],
    correct: 2,
    explain: {
      ro: 'Lupul vânează prada. Capra și broasca țestoasă sunt erbivore, iar ursul este omnivor.',
      de: 'Der Wolf jagt Beute. Ziege und Schildkröte sind Pflanzenfresser, und der Bär ist ein Allesfresser.',
    },
  },
  {
    q: {
      ro: 'Ce înseamnă „omnivor”?',
      de: 'Was bedeutet „Allesfresser“ (Omnivor)?',
    },
    options: [
      { ro: 'mănâncă doar carne', de: 'frisst nur Fleisch' },
      { ro: 'mănâncă doar plante', de: 'frisst nur Pflanzen' },
      { ro: 'mănâncă și plante, și animale', de: 'frisst Pflanzen und Tiere' },
      { ro: 'nu mănâncă deloc', de: 'frisst gar nicht' },
    ],
    correct: 2,
    explain: {
      ro: 'Omnivor vine din latinescul omnis (tot) și vorare (a mânca).',
      de: 'Omnivor kommt vom lateinischen omnis (alles) und vorare (fressen).',
    },
  },
  {
    q: {
      ro: 'Care dinți sunt lungi și ascuțiți la carnivore și sfâșie prada?',
      de: 'Welche Zähne sind bei Fleischfressern lang und scharf und zerreißen die Beute?',
    },
    options: [
      { ro: 'incisivii', de: 'die Schneidezähne' },
      { ro: 'caninii', de: 'die Eckzähne' },
      { ro: 'molarii', de: 'die Molaren' },
      { ro: 'premolarii', de: 'die Prämolaren' },
    ],
    correct: 1,
    explain: {
      ro: 'Caninii (Eckzähne) sunt adaptarea carnivorelor.',
      de: 'Die Eckzähne sind die Anpassung der Fleischfresser.',
    },
  },
  {
    q: {
      ro: 'Ce fac molarii și premolarii?',
      de: 'Was tun Molaren und Prämolaren?',
    },
    options: [
      { ro: 'taie hrana', de: 'Sie schneiden die Nahrung' },
      { ro: 'mărunțesc hrana (carne sau plante cu fibre)', de: 'Sie zermalen die Nahrung (Fleisch oder faserreiche Pflanzen)' },
      { ro: 'sfâșie prada', de: 'Sie zerreißen die Beute' },
      { ro: 'produc salivă', de: 'Sie bilden Speichel' },
    ],
    correct: 1,
    explain: {
      ro: 'Au suprafețe crestate („cocoașe”) și mărunțesc bine hrana.',
      de: 'Sie haben Höcker und zermalen die Nahrung gut.',
    },
  },
  {
    q: {
      ro: 'Ce dinți lipsesc sau sunt foarte reduși la erbivore?',
      de: 'Welche Zähne fehlen bei Pflanzenfressern oder sind stark zurückgebildet?',
    },
    options: [
      { ro: 'molarii', de: 'die Molaren' },
      { ro: 'caninii', de: 'die Eckzähne' },
      { ro: 'premolarii', de: 'die Prämolaren' },
      { ro: 'toți', de: 'alle' },
    ],
    correct: 1,
    explain: {
      ro: 'Erbivorele nu vânează, deci nu au nevoie de canini ascuțiți.',
      de: 'Pflanzenfresser jagen nicht und brauchen keine scharfen Eckzähne.',
    },
  },
  {
    q: {
      ro: 'Câte camere are stomacul unei rumegătoare (de exemplu vaca)?',
      de: 'Wie viele Kammern hat der Magen eines Wiederkäuers (zum Beispiel der Kuh)?',
    },
    options: [
      { ro: 'una', de: 'eine' },
      { ro: 'două', de: 'zwei' },
      { ro: 'patru', de: 'vier' },
      { ro: 'șase', de: 'sechs' },
    ],
    correct: 2,
    explain: {
      ro: 'Stomacul rumegătoarelor este tetracameral: ierbar, ciur, foios, cheag.',
      de: 'Der Magen der Wiederkäuer hat vier Kammern: Pansen, Netzmagen, Blättermagen, Labmagen.',
    },
  },
  {
    q: {
      ro: 'Care e ordinea corectă a camerelor stomacului la rumegătoare?',
      de: 'Wie ist die richtige Reihenfolge der Magenkammern bei Wiederkäuern?',
    },
    options: [
      { ro: 'cheag, foios, ciur, ierbar', de: 'Labmagen, Blättermagen, Netzmagen, Pansen' },
      { ro: 'ierbar, ciur, foios, cheag', de: 'Pansen, Netzmagen, Blättermagen, Labmagen' },
      { ro: 'ciur, ierbar, cheag, foios', de: 'Netzmagen, Pansen, Labmagen, Blättermagen' },
      { ro: 'foios, cheag, ierbar, ciur', de: 'Blättermagen, Labmagen, Pansen, Netzmagen' },
    ],
    correct: 1,
    explain: {
      ro: 'Esofag → ierbar → ciur → foios → cheag → intestin.',
      de: 'Speiseröhre → Pansen → Netzmagen → Blättermagen → Labmagen → Darm.',
    },
  },
  {
    q: {
      ro: 'De ce pot erbivorele să folosească celuloza din plante?',
      de: 'Warum können Pflanzenfresser die Zellulose der Pflanzen nutzen?',
    },
    options: [
      { ro: 'au enzima care o descompune', de: 'Sie haben das Enzym, das sie zersetzt' },
      { ro: 'bacteriile din stomac o transformă prin fermentație', de: 'Bakterien im Magen wandeln sie durch Gärung um' },
      { ro: 'o elimină nedigerată', de: 'Sie scheiden sie unverdaut aus' },
      { ro: 'o mestecă de zece ori', de: 'Sie kauen sie zehnmal' },
    ],
    correct: 1,
    explain: {
      ro: 'Erbivorele nu au enzima necesară; bacteriile din primele două camere ajută la fermentația celulozei.',
      de: 'Pflanzenfresser haben das nötige Enzym nicht; Bakterien in den ersten beiden Kammern helfen bei der Gärung der Zellulose.',
    },
  },
  {
    q: {
      ro: 'Care animal este nerumegător?',
      de: 'Welches Tier ist ein Nichtwiederkäuer?',
    },
    options: [
      { ro: 'vaca', de: 'die Kuh' },
      { ro: 'oaia', de: 'das Schaf' },
      { ro: 'capra', de: 'die Ziege' },
      { ro: 'iepurele', de: 'das Kaninchen' },
    ],
    correct: 3,
    explain: {
      ro: 'Iepurele, calul și koala au stomac cu o singură cameră; digestia se încheie în intestinul gros.',
      de: 'Kaninchen, Pferd und Koala haben einen Magen mit nur einer Kammer; die Verdauung endet im Dickdarm.',
    },
  },
  {
    q: {
      ro: 'Cum este intestinul subțire al erbivorelor față de cel al carnivorelor?',
      de: 'Wie ist der Dünndarm der Pflanzenfresser im Vergleich zu dem der Fleischfresser?',
    },
    options: [
      { ro: 'mult mai lung', de: 'viel länger' },
      { ro: 'mult mai scurt', de: 'viel kürzer' },
      { ro: 'la fel de lung', de: 'gleich lang' },
      { ro: 'lipsește', de: 'er fehlt' },
    ],
    correct: 0,
    explain: {
      ro: 'Hrana vegetală e greu de digerat, deci intestinul subțire al erbivorelor este mult mai lung.',
      de: 'Pflanzennahrung ist schwer verdaulich, deshalb ist der Dünndarm der Pflanzenfresser viel länger.',
    },
  },
];
