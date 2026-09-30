import type { Question } from '../data';

// Testul de la finalul lecției „Descoperirea lumii” (Geografie, clasa a 6-a).
export const descoperireaLumiiTest: Question[] = [
  {
    q: {
      ro: 'Care popor explora mai ales pentru colonii și comerț?',
      de: 'Welches Volk erkundete vor allem für Kolonien und Handel?',
    },
    options: [
      { ro: 'romanii', de: 'die Römer' },
      { ro: 'fenicienii', de: 'die Phönizier' },
      { ro: 'vikingii', de: 'die Wikinger' },
      { ro: 'arabii', de: 'die Araber' },
    ],
    correct: 1,
    explain: {
      ro: 'Fenicienii și grecii au întemeiat colonii și au făcut comerț pe mare. Romanii purtau războaie de cucerire.',
      de: 'Phönizier und Griechen gründeten Kolonien und trieben Handel zur See. Die Römer führten Eroberungskriege.',
    },
  },
  {
    q: {
      ro: 'De unde a pornit Himilcon ca să exploreze coasta atlantică a Europei?',
      de: 'Von wo aus erforschte Himilkon die atlantische Küste Europas?',
    },
    options: [
      { ro: 'din Roma', de: 'von Rom' },
      { ro: 'din Lisabona', de: 'von Lissabon' },
      { ro: 'din Cartagina', de: 'von Karthago' },
      { ro: 'din Islanda', de: 'von Island' },
    ],
    correct: 2,
    explain: {
      ro: 'Cartagina era un oraș în nordul Africii, întemeiat de fenicieni.',
      de: 'Karthago war eine Stadt in Nordafrika, gegründet von den Phöniziern.',
    },
  },
  {
    q: {
      ro: 'Ce înseamnă „Ultima Thule”?',
      de: 'Was bedeutet „Ultima Thule“?',
    },
    options: [
      { ro: 'insula de la capătul lumii', de: 'die Insel am Ende der Welt' },
      { ro: 'marea înghețată', de: 'das gefrorene Meer' },
      { ro: 'drumul spre India', de: 'der Weg nach Indien' },
      { ro: 'Capul Bunei Speranțe', de: 'das Kap der Guten Hoffnung' },
    ],
    correct: 0,
    explain: {
      ro: 'Așa au numit scriitorii Antichității insula din nord la care a ajuns Pytheas.',
      de: 'So nannten die Schriftsteller des Altertums die nördliche Insel, die Pytheas erreichte.',
    },
  },
  {
    q: {
      ro: 'Cine a descoperit Groenlanda?',
      de: 'Wer entdeckte Grönland?',
    },
    options: [
      { ro: 'Leif Eriksson', de: 'Leif Eriksson' },
      { ro: 'Pytheas', de: 'Pytheas' },
      { ro: 'Marco Polo', de: 'Marco Polo' },
      { ro: 'Erik cel Roșu', de: 'Erik der Rote' },
    ],
    correct: 3,
    explain: {
      ro: 'Erik cel Roșu a descoperit Groenlanda; fiul său, Leif Eriksson, a ajuns apoi în America de Nord.',
      de: 'Erik der Rote entdeckte Grönland; sein Sohn Leif Eriksson gelangte später nach Nordamerika.',
    },
  },
  {
    q: {
      ro: 'Care este o strâmtoare străbătută de vikingi?',
      de: 'Welche ist eine Meerenge, die die Wikinger durchquerten?',
    },
    options: [
      { ro: 'Marea Baltică', de: 'die Ostsee' },
      { ro: 'Bosforul', de: 'der Bosporus' },
      { ro: 'Islanda', de: 'Island' },
      { ro: 'Marea Neagră', de: 'das Schwarze Meer' },
    ],
    correct: 1,
    explain: {
      ro: 'Bosforul e o trecere îngustă de apă între Europa și Asia, spre Bizanț.',
      de: 'Der Bosporus ist ein schmaler Wasserweg zwischen Europa und Asien, nach Byzanz.',
    },
  },
  {
    q: {
      ro: 'Cine a ajuns primul pe mare în India, în 1498?',
      de: 'Wer gelangte 1498 als Erster auf dem Wasserweg nach Indien?',
    },
    options: [
      { ro: 'Cristofor Columb', de: 'Christoph Kolumbus' },
      { ro: 'Bartolomeu Diaz', de: 'Bartolomeu Díaz' },
      { ro: 'Vasco da Gama', de: 'Vasco da Gama' },
      { ro: 'Fernando Magellan', de: 'Fernando Magellan' },
    ],
    correct: 2,
    explain: {
      ro: 'Vasco da Gama a ocolit Africa și a ajuns pe coasta Malabar, în vestul Indiei.',
      de: 'Vasco da Gama umrundete Afrika und erreichte die Malabar-Küste im Westen Indiens.',
    },
  },
  {
    q: {
      ro: 'Ce căutau europenii în „India” la sfârșitul secolului al XV-lea?',
      de: 'Was suchten die Europäer Ende des 15. Jahrhunderts in „Indien“?',
    },
    options: [
      { ro: 'mirodenii, precum scorțișoara, piperul și cuișoarele', de: 'Gewürze wie Zimt, Pfeffer und Nelken' },
      { ro: 'gheață și sare', de: 'Eis und Salz' },
      { ro: 'lemn pentru corăbii', de: 'Holz für Schiffe' },
      { ro: 'cai', de: 'Pferde' },
    ],
    correct: 0,
    explain: {
      ro: 'Mirodeniile erau foarte căutate și scumpe; drumul pe mare spre ele a dus la Marile Descoperiri.',
      de: 'Gewürze waren sehr begehrt und teuer; der Seeweg dorthin führte zu den Großen Entdeckungen.',
    },
  },
  {
    q: {
      ro: 'De ce Mexicul, America Centrală și America de Sud se numesc „America Latină”?',
      de: 'Warum heißen Mexiko, Mittel- und Südamerika „Lateinamerika“?',
    },
    options: [
      { ro: 'pentru că le-a descoperit un navigator pe nume Latinus', de: 'weil ein Seefahrer namens Latinus sie entdeckte' },
      { ro: 'pentru că sunt la sud de Ecuator', de: 'weil sie südlich des Äquators liegen' },
      { ro: 'pentru că acolo se vorbea latina înainte de Columb', de: 'weil man dort vor Kolumbus Latein sprach' },
      {
        ro: 'pentru că au fost cucerite de Spania și Portugalia, ale căror limbi provin din latină',
        de: 'weil sie von Spanien und Portugal erobert wurden, deren Sprachen aus dem Lateinischen stammen',
      },
    ],
    correct: 3,
    explain: {
      ro: 'Azi se vorbește acolo mai ales spaniola și portugheza, limbi care provin din latină.',
      de: 'Dort spricht man heute vor allem Spanisch und Portugiesisch, Sprachen, die aus dem Lateinischen stammen.',
    },
  },
];
