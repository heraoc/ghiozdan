import type { Question } from '../data';

// Testul de la finalul lecției „Mari oameni ai Renașterii”.
export const mariOameniAiRenasteriiTest: Question[] = [
  {
    q: {
      ro: 'Cine a pictat Mona Lisa și Cina cea de Taină?',
      de: 'Wer malte die Mona Lisa und das Abendmahl?',
    },
    options: [
      { ro: 'Michelangelo', de: 'Michelangelo' },
      { ro: 'Leonardo da Vinci', de: 'Leonardo da Vinci' },
      { ro: 'Galileo Galilei', de: 'Galileo Galilei' },
      { ro: 'Machiavelli', de: 'Machiavelli' },
    ],
    correct: 1,
    explain: {
      ro: 'Leonardo da Vinci (1452–1519): pictor, om de știință și inventator.',
      de: 'Leonardo da Vinci (1452–1519): Maler, Wissenschaftler und Erfinder.',
    },
  },
  {
    q: {
      ro: 'Ce proiect al lui Leonardo seamănă cu un elicopter?',
      de: 'Welcher Entwurf Leonardos ähnelt einem Hubschrauber?',
    },
    options: [
      { ro: 'Șurubul aerian', de: 'Die Luftschraube' },
      { ro: 'Pompa hidraulică', de: 'Die Wasserpumpe' },
      { ro: 'Sistemul de baricade', de: 'Das Barrikadensystem' },
      { ro: 'Instrumentul muzical', de: 'Das Musikinstrument' },
    ],
    correct: 0,
    explain: {
      ro: 'Șurubul aerian a fost un proiect de mașină de zburat, inspirat probabil din mecanismul morilor de vânt.',
      de: 'Die Luftschraube war der Entwurf einer Flugmaschine, wahrscheinlich vom Mechanismus der Windmühlen inspiriert.',
    },
  },
  {
    q: {
      ro: 'Care dintre aceste lucrări este singura semnată de Michelangelo?',
      de: 'Welches dieser Werke ist das einzige, das Michelangelo signierte?',
    },
    options: [
      { ro: 'David', de: 'David' },
      { ro: 'Judecata de Apoi', de: 'Das Jüngste Gericht' },
      { ro: 'Mona Lisa', de: 'Mona Lisa' },
      { ro: 'Pietà', de: 'Pietà' },
    ],
    correct: 3,
    explain: {
      ro: 'Pietà, din Bazilica Sfântul Petru. Mona Lisa este a lui Leonardo.',
      de: 'Die Pietà im Petersdom. Die Mona Lisa ist von Leonardo.',
    },
  },
  {
    q: {
      ro: 'Cât a durat pictarea plafonului Capelei Sixtine?',
      de: 'Wie lange dauerte die Bemalung der Decke der Sixtinischen Kapelle?',
    },
    options: [
      { ro: 'Un an', de: 'Ein Jahr' },
      { ro: 'Patru ani', de: 'Vier Jahre' },
      { ro: 'Zece ani', de: 'Zehn Jahre' },
      { ro: 'O lună', de: 'Einen Monat' },
    ],
    correct: 1,
    explain: {
      ro: 'Patru ani; apoi a pictat Judecata de Apoi pe ultimul zid, în cinci ani.',
      de: 'Vier Jahre; danach malte er das Jüngste Gericht an die letzte Wand, in fünf Jahren.',
    },
  },
  {
    q: {
      ro: 'Pentru ce a fost ars pe rug Giordano Bruno, în 1600?',
      de: 'Wofür wurde Giordano Bruno 1600 verbrannt?',
    },
    options: [
      { ro: 'Pentru că a furat o carte', de: 'Weil er ein Buch gestohlen hatte' },
      { ro: 'Pentru ideile sale (Univers infinit) și pentru spiritul liber', de: 'Wegen seiner Ideen (unendliches Universum) und seines freien Geistes' },
      { ro: 'Pentru că a construit un telescop', de: 'Weil er ein Fernrohr gebaut hatte' },
      { ro: 'Pentru că a scris Principele', de: 'Weil er den Fürsten geschrieben hatte' },
    ],
    correct: 1,
    explain: {
      ro: 'Inchiziția Romană l-a acuzat de erezie și l-a ars pe rug în Campo dei Fiori, la Roma.',
      de: 'Die römische Inquisition beschuldigte ihn der Ketzerei und verbrannte ihn auf dem Campo dei Fiori in Rom.',
    },
  },
  {
    q: {
      ro: 'Prin ce a devenit celebru Galileo Galilei?',
      de: 'Wodurch wurde Galileo Galilei berühmt?',
    },
    options: [
      { ro: 'Prin pictarea Capelei Sixtine', de: 'Durch die Bemalung der Sixtinischen Kapelle' },
      { ro: 'Prin tipărirea cărților', de: 'Durch das Drucken von Büchern' },
      { ro: 'Prin perfecționarea telescopului și observațiile astronomice', de: 'Durch die Verbesserung des Fernrohrs und astronomische Beobachtungen' },
      { ro: 'Prin scrierea tragediilor', de: 'Durch das Schreiben von Tragödien' },
    ],
    correct: 2,
    explain: {
      ro: 'Galilei a observat Luna, sateliții lui Jupiter, fazele lui Venus și petele solare.',
      de: 'Galilei beobachtete den Mond, die Jupitermonde, die Phasen der Venus und die Sonnenflecken.',
    },
  },
  {
    q: {
      ro: 'Ce expresie este atribuită lui Machiavelli?',
      de: 'Welcher Ausdruck wird Machiavelli zugeschrieben?',
    },
    options: [
      { ro: '„Omul este măsura tuturor lucrurilor”', de: '„Der Mensch ist das Maß aller Dinge“' },
      { ro: '„Scopul scuză mijloacele”', de: '„Der Zweck heiligt die Mittel“' },
      { ro: '„A fi sau a nu fi”', de: '„Sein oder Nichtsein“' },
      { ro: '„Și totuși se mișcă”', de: '„Und sie bewegt sich doch“' },
    ],
    correct: 1,
    explain: {
      ro: 'De la ea vine și „machiavelism”. „A fi sau a nu fi” este din Hamlet, de Shakespeare.',
      de: 'Daher kommt auch „Machiavellismus“. „Sein oder Nichtsein“ stammt aus Hamlet von Shakespeare.',
    },
  },
  {
    q: {
      ro: 'Care piesă a lui Shakespeare pornește de la ura dintre două familii?',
      de: 'Welches Stück Shakespeares geht vom Hass zwischen zwei Familien aus?',
    },
    options: [
      { ro: 'Regele Lear', de: 'König Lear' },
      { ro: 'Hamlet', de: 'Hamlet' },
      { ro: 'Romeo și Julieta', de: 'Romeo und Julia' },
      { ro: 'Othello', de: 'Othello' },
    ],
    correct: 2,
    explain: {
      ro: 'Romeo și Julieta. Regele Lear: nerecunoștința copiilor; Hamlet: răzbunarea; Othello: gelozia.',
      de: 'Romeo und Julia. König Lear: Undank der Kinder; Hamlet: Rache; Othello: Eifersucht.',
    },
  },
  {
    q: {
      ro: 'Care umanist a înființat o tipografie la Brașov și a desenat harta Transilvaniei?',
      de: 'Welcher Humanist gründete in Kronstadt eine Druckerei und zeichnete die Karte Siebenbürgens?',
    },
    options: [
      { ro: 'Nicolaus Olahus', de: 'Nicolaus Olahus' },
      { ro: 'Johannes Honterus', de: 'Johannes Honterus' },
      { ro: 'Dimitrie Cantemir', de: 'Dimitrie Cantemir' },
      { ro: 'Erasmus din Rotterdam', de: 'Erasmus von Rotterdam' },
    ],
    correct: 1,
    explain: {
      ro: 'Johannes Honterus (1498–1549), umanist, tipograf, cartograf și reformator.',
      de: 'Johannes Honterus (1498–1549), Humanist, Drucker, Kartograf und Reformator.',
    },
  },
  {
    q: {
      ro: 'Care dintre ei a fost domn al Moldovei și autorul Istoriei ieroglifice?',
      de: 'Wer war Fürst der Moldau und Autor der Hieroglyphischen Geschichte?',
    },
    options: [
      { ro: 'Nicolaus Olahus', de: 'Nicolaus Olahus' },
      { ro: 'Johannes Honterus', de: 'Johannes Honterus' },
      { ro: 'Giordano Bruno', de: 'Giordano Bruno' },
      { ro: 'Dimitrie Cantemir', de: 'Dimitrie Cantemir' },
    ],
    correct: 3,
    explain: {
      ro: 'Dimitrie Cantemir (1673–1723). Istoria ieroglifică (1705) este considerată primul roman românesc.',
      de: 'Dimitrie Cantemir (1673–1723). Die Hieroglyphische Geschichte (1705) gilt als erster rumänischer Roman.',
    },
  },
];
