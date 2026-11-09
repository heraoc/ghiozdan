import type { Question } from '../data';

// Testul de la finalul lecției „Sistemul digestiv la om”.
export const sistemulDigestivTest: Question[] = [
  {
    q: {
      ro: 'Din ce este alcătuit sistemul digestiv?',
      de: 'Woraus besteht das Verdauungssystem?',
    },
    options: [
      { ro: 'din stomac și intestine', de: 'aus Magen und Därmen' },
      { ro: 'din tub digestiv și glande anexe', de: 'aus Verdauungskanal und Anhangsdrüsen' },
      { ro: 'din esofag și ficat', de: 'aus Speiseröhre und Leber' },
      { ro: 'din gură și anus', de: 'aus Mund und After' },
    ],
    correct: 1,
    explain: {
      ro: 'Tubul digestiv e drumul hranei, iar glandele anexe (glandele salivare, ficatul, pancreasul) îi trimit sucuri digestive.',
      de: 'Der Verdauungskanal ist der Weg der Nahrung, und die Anhangsdrüsen (Speicheldrüsen, Leber, Bauchspeicheldrüse) liefern ihm Verdauungssäfte.',
    },
  },
  {
    q: {
      ro: 'Care dintre aceste organe este glandă anexă?',
      de: 'Welches dieser Organe ist eine Anhangsdrüse?',
    },
    options: [
      { ro: 'stomacul', de: 'der Magen' },
      { ro: 'esofagul', de: 'die Speiseröhre' },
      { ro: 'faringele', de: 'der Rachen' },
      { ro: 'ficatul', de: 'die Leber' },
    ],
    correct: 3,
    explain: {
      ro: 'Ficatul produce bila, dar hrana nu trece prin el.',
      de: 'Die Leber bildet die Galle, aber die Nahrung geht nicht durch sie hindurch.',
    },
  },
  {
    q: {
      ro: 'Unde se încrucișează căile digestive cu cele respiratorii?',
      de: 'Wo kreuzen sich Speise- und Atemwege?',
    },
    options: [
      { ro: 'în esofag', de: 'in der Speiseröhre' },
      { ro: 'în faringe', de: 'im Rachen' },
      { ro: 'în stomac', de: 'im Magen' },
      { ro: 'în intestinul gros', de: 'im Dickdarm' },
    ],
    correct: 1,
    explain: {
      ro: 'Faringele este locul de înghițire și intersecția celor două căi; epiglota închide calea respiratorie.',
      de: 'Der Rachen ist der Ort des Schluckens und die Kreuzung der beiden Wege; der Kehldeckel verschließt den Atemweg.',
    },
  },
  {
    q: {
      ro: 'Ce rol au caninii?',
      de: 'Welche Aufgabe haben die Eckzähne?',
    },
    options: [
      { ro: 'taie hrana', de: 'Sie schneiden die Nahrung' },
      { ro: 'sfâșie hrana', de: 'Sie zerreißen die Nahrung' },
      { ro: 'macină hrana', de: 'Sie mahlen die Nahrung' },
      { ro: 'produc salivă', de: 'Sie bilden Speichel' },
    ],
    correct: 1,
    explain: {
      ro: 'Caninii sunt ascuțiți și sfâșie, de exemplu carnea. Incisivii taie, molarii macină.',
      de: 'Die Eckzähne sind spitz und zerreißen, zum Beispiel Fleisch. Schneidezähne schneiden, Backenzähne mahlen.',
    },
  },
  {
    q: {
      ro: 'Ce se întâmplă cu amidonul în gură?',
      de: 'Was geschieht mit der Stärke im Mund?',
    },
    options: [
      { ro: 'nimic, începe abia în stomac', de: 'nichts, es beginnt erst im Magen' },
      { ro: 'enzimele din salivă încep să-l transforme', de: 'Enzyme im Speichel beginnen, sie umzuwandeln' },
      { ro: 'bila îl mărunțește', de: 'die Galle zerteilt sie' },
      { ro: 'se absoarbe în sânge', de: 'sie wird ins Blut aufgenommen' },
    ],
    correct: 1,
    explain: {
      ro: 'Saliva conține enzime care încep digestia amidonului, un glucid.',
      de: 'Der Speichel enthält Enzyme, die die Verdauung der Stärke, eines Kohlenhydrats, beginnen.',
    },
  },
  {
    q: {
      ro: 'Ce face bila în digestie?',
      de: 'Was macht die Galle bei der Verdauung?',
    },
    options: [
      { ro: 'descompune proteinele în aminoacizi', de: 'Sie zersetzt Eiweiße in Aminosäuren' },
      { ro: 'mărunțește grăsimile (transformare fizică)', de: 'Sie zerteilt Fette (physikalischer Vorgang)' },
      { ro: 'absoarbe apa', de: 'Sie nimmt Wasser auf' },
      { ro: 'transformă amidonul în glucoză', de: 'Sie wandelt Stärke in Glukose um' },
    ],
    correct: 1,
    explain: {
      ro: 'Bila, făcută de ficat, mărunțește grăsimile sub formă de picături mici: e o transformare fizică.',
      de: 'Die von der Leber gebildete Galle zerteilt die Fette in kleine Fetttröpfchen: Das ist ein physikalischer Vorgang.',
    },
  },
  {
    q: {
      ro: 'Ce rezultă din descompunerea proteinelor?',
      de: 'Was entsteht beim Zersetzen der Eiweiße?',
    },
    options: [
      { ro: 'glucoză', de: 'Glukose' },
      { ro: 'acizi grași și glicerol', de: 'Fettsäuren und Glycerin' },
      { ro: 'vitamine', de: 'Vitamine' },
      { ro: 'aminoacizi', de: 'Aminosäuren' },
    ],
    correct: 3,
    explain: {
      ro: 'Proteine → aminoacizi. Lipide → acizi grași și glicerol. Glucide → glucoză.',
      de: 'Eiweiße → Aminosäuren. Fette → Fettsäuren und Glycerin. Kohlenhydrate → Glukose.',
    },
  },
  {
    q: {
      ro: 'Care dintre aceste substanțe NU trebuie digerate înainte să fie absorbite?',
      de: 'Welcher dieser Stoffe muss NICHT verdaut werden, bevor er aufgenommen wird?',
    },
    options: [
      { ro: 'proteinele', de: 'Eiweiße' },
      { ro: 'apa', de: 'Wasser' },
      { ro: 'lipidele', de: 'Fette' },
      { ro: 'glucidele', de: 'Kohlenhydrate' },
    ],
    correct: 1,
    explain: {
      ro: 'Apa, vitaminele și mineralele sunt gata de absorbție. Proteinele, lipidele și glucidele se descompun întâi.',
      de: 'Wasser, Vitamine und Mineralien sind bereit zur Absorption. Eiweiße, Fette und Kohlenhydrate werden zuerst zersetzt.',
    },
  },
  {
    q: {
      ro: 'De ce are intestinul subțire vilozități?',
      de: 'Warum hat der Dünndarm Zotten?',
    },
    options: [
      { ro: 'ca să mărunțească hrana', de: 'um die Nahrung zu zerkleinern' },
      { ro: 'ca să producă bilă', de: 'um Galle zu bilden' },
      { ro: 'ca să mărească suprafața de absorbție', de: 'um die Absorptionsfläche zu vergrößern' },
      { ro: 'ca să oprească hrana', de: 'um die Nahrung aufzuhalten' },
    ],
    correct: 2,
    explain: {
      ro: 'Vilozitățile măresc suprafața de absorbție de circa 600 de ori, deci trec mai multe nutrimente în sânge.',
      de: 'Die Zotten vergrößern die Absorptionsfläche etwa um das 600-Fache, sodass mehr Nährstoffe ins Blut gelangen.',
    },
  },
  {
    q: {
      ro: 'Ce se întâmplă în intestinul gros?',
      de: 'Was geschieht im Dickdarm?',
    },
    options: [
      { ro: 'se digeră proteinele', de: 'Eiweiße werden verdaut' },
      { ro: 'se absoarbe cea mai mare parte a apei și se formează materiile fecale', de: 'Der größte Teil des Wassers wird aufgenommen und der Stuhl bildet sich' },
      { ro: 'se produce bila', de: 'Galle wird gebildet' },
      { ro: 'se înghite hrana', de: 'Die Nahrung wird geschluckt' },
    ],
    correct: 1,
    explain: {
      ro: 'Aici se absoarbe apa, iar bacteriile intestinale degradează resturile; rezultă materiile fecale, eliminate prin anus.',
      de: 'Hier wird Wasser aufgenommen, und Darmbakterien bauen die Reste ab; es entsteht der Stuhl, der durch den After ausgeschieden wird.',
    },
  },
  {
    q: {
      ro: 'Care dintre sucurile din intestinul subțire nu conține enzime?',
      de: 'Welcher Verdauungssaft im Dünndarm enthält keine Enzyme?',
    },
    options: [
      { ro: 'sucul intestinal', de: 'der Dünndarmsaft' },
      { ro: 'sucul pancreatic', de: 'der Bauchspeichelsaft' },
      { ro: 'bila', de: 'der Gallensaft' },
      { ro: 'sucul gastric', de: 'der Magensaft' },
    ],
    correct: 2,
    explain: {
      ro: 'Bila (Gallensaft) nu are enzime; ea emulsionează grăsimile. Sucul pancreatic și cel intestinal conțin enzime.',
      de: 'Der Gallensaft hat keine Enzyme; er emulgiert die Fette. Bauchspeichelsaft und Dünndarmsaft enthalten Enzyme.',
    },
  },
  {
    q: {
      ro: 'De ce sunt numite enzimele „foarfeci biologice”?',
      de: 'Warum nennt man Enzyme „biologische Scheren“?',
    },
    options: [
      { ro: 'pentru că taie hrana în bucăți cu dinții', de: 'weil sie die Nahrung mit den Zähnen zerschneiden' },
      { ro: 'pentru că descompun substanțele în bucăți mai mici', de: 'weil sie die Stoffe in kleinere Stücke zersetzen' },
      { ro: 'pentru că se consumă când lucrează', de: 'weil sie beim Arbeiten verbraucht werden' },
      { ro: 'pentru că sunt făcute din metal', de: 'weil sie aus Metall sind' },
    ],
    correct: 1,
    explain: {
      ro: 'Enzimele descompun substanțele complexe în substanțe mai simple, dar rămân neschimbate.',
      de: 'Enzyme zersetzen komplexe Stoffe in einfachere Stoffe, bleiben aber selbst unverändert.',
    },
  },
  {
    q: {
      ro: 'Ce conține sucul gastric?',
      de: 'Was enthält der Magensaft?',
    },
    options: [
      { ro: 'doar enzime pentru amidon', de: 'nur Enzyme für Stärke' },
      { ro: 'apă, minerale, acid clorhidric și enzime', de: 'Wasser, Mineralien, Salzsäure und Enzyme' },
      { ro: 'bilă și lipază pancreatică', de: 'Galle und Bauchspeichel-Lipase' },
      { ro: 'doar apă', de: 'nur Wasser' },
    ],
    correct: 1,
    explain: {
      ro: 'Sucul gastric are enzime care descompun proteinele și lipaza gastrică, care descompune grăsimile.',
      de: 'Der Magensaft enthält proteinspaltende Enzyme und die Magenlipase, die die Fette zersetzt.',
    },
  },
];
