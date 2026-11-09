import type { Question } from '../data';

// Testul de la finalul lecției „Investigații despre digestie: enzime, bilă, calorii”.
export const investigatiiDigestieTest: Question[] = [
  {
    q: {
      ro: 'Care dintre acestea este un glucid complex din pâine?',
      de: 'Welches dieser Stoffe ist ein komplexes Kohlenhydrat im Brot?',
    },
    options: [
      { ro: 'apa', de: 'das Wasser' },
      { ro: 'amidonul', de: 'die Stärke' },
      { ro: 'glucoza', de: 'der Traubenzucker' },
      { ro: 'sărurile minerale', de: 'die Mineralstoffe' },
    ],
    correct: 1,
    explain: {
      ro: 'Amidonul este format din mii de unități de glucoză. Apa și mineralele sunt substanțe simple.',
      de: 'Stärke besteht aus Tausenden Glukose-Einheiten. Wasser und Mineralstoffe sind einfache Stoffe.',
    },
  },
  {
    q: {
      ro: 'Ce colorează iodul în albastru intens?',
      de: 'Was färbt Jod tiefblau?',
    },
    options: [
      { ro: 'glucoza', de: 'Glukose' },
      { ro: 'uleiul', de: 'Öl' },
      { ro: 'amidonul', de: 'Stärke' },
      { ro: 'bila', de: 'Galle' },
    ],
    correct: 2,
    explain: {
      ro: 'Iodul este reactivul care arată prezența amidonului.',
      de: 'Jod ist das Reagenz, das Stärke nachweist.',
    },
  },
  {
    q: {
      ro: 'Unde începe descompunerea amidonului din pâine?',
      de: 'Wo beginnt die Zerlegung der Stärke aus dem Brot?',
    },
    options: [
      { ro: 'în stomac', de: 'im Magen' },
      { ro: 'în gură, cu amilaza salivară', de: 'im Mund, mit der Speichelamylase' },
      { ro: 'în intestinul gros', de: 'im Dickdarm' },
      { ro: 'în ficat', de: 'in der Leber' },
    ],
    correct: 1,
    explain: {
      ro: 'Saliva conține amilază salivară, o enzimă care descompune amidonul.',
      de: 'Der Speichel enthält Speichelamylase, ein Enzym, das Stärke zerlegt.',
    },
  },
  {
    q: {
      ro: 'În experiment, eprubeta cu salivă ia o culoare galbenă după iod. Ce arată asta?',
      de: 'Im Experiment färbt sich das Glas mit Speichel nach dem Jod gelb. Was zeigt das?',
    },
    options: [
      { ro: 'amidonul a fost descompus', de: 'Die Stärke wurde zerlegt' },
      { ro: 'amidonul s-a înmulțit', de: 'Die Stärke hat sich vermehrt' },
      { ro: 'iodul s-a descompus', de: 'Das Jod wurde zerlegt' },
      { ro: 'nu s-a întâmplat nimic', de: 'Es ist nichts geschehen' },
    ],
    correct: 0,
    explain: {
      ro: 'Fără amidon, iodul nu mai dă albastru: enzima din salivă l-a descompus.',
      de: 'Ohne Stärke gibt Jod kein Blau mehr: Das Enzym im Speichel hat sie zerlegt.',
    },
  },
  {
    q: {
      ro: 'Ce se întâmplă cu o enzimă după ce descompune o substanță?',
      de: 'Was geschieht mit einem Enzym, nachdem es einen Stoff zerlegt hat?',
    },
    options: [
      { ro: 'dispare', de: 'Es verschwindet' },
      { ro: 'se transformă în glucoză', de: 'Es wird zu Glukose' },
      { ro: 'rămâne neschimbată', de: 'Es bleibt unverändert' },
      { ro: 'devine bilă', de: 'Es wird zu Galle' },
    ],
    correct: 2,
    explain: {
      ro: 'Enzima rămâne neschimbată și poate descompune alte substanțe.',
      de: 'Das Enzym bleibt unverändert und kann weitere Stoffe zerlegen.',
    },
  },
  {
    q: {
      ro: 'Ce conține bila?',
      de: 'Was enthält die Galle?',
    },
    options: [
      { ro: 'amilază', de: 'Amylase' },
      { ro: 'lipază', de: 'Lipase' },
      { ro: 'săruri biliare, dar nu enzime', de: 'Gallensalze, aber keine Enzyme' },
      { ro: 'proteine', de: 'Eiweiße' },
    ],
    correct: 2,
    explain: {
      ro: 'Bila, făcută de ficat și depozitată în vezica biliară, are săruri biliare și nu conține enzime digestive.',
      de: 'Die Galle, in der Leber gebildet und in der Gallenblase gespeichert, enthält Gallensalze und keine Verdauungsenzyme.',
    },
  },
  {
    q: {
      ro: 'Ce înseamnă emulsionarea lipidelor?',
      de: 'Was bedeutet das Emulgieren der Fette?',
    },
    options: [
      { ro: 'descompunerea în acizi grași', de: 'die Zerlegung in Fettsäuren' },
      { ro: 'desfacerea în picături foarte mici, o transformare fizică', de: 'das Zerteilen in sehr kleine Tröpfchen, ein physikalischer Vorgang' },
      { ro: 'absorbția în sânge', de: 'die Aufnahme ins Blut' },
      { ro: 'dizolvarea în apă', de: 'das Lösen in Wasser' },
    ],
    correct: 1,
    explain: {
      ro: 'Emulsionarea face din grăsime picături mici, ca lipaza să aibă o suprafață de contact mai mare.',
      de: 'Beim Emulgieren wird Fett zu kleinen Tröpfchen, damit die Lipase eine größere Kontaktfläche hat.',
    },
  },
  {
    q: {
      ro: 'Ce enzimă din sucul pancreatic continuă digestia lipidelor?',
      de: 'Welches Enzym im Bauchspeichel setzt die Verdauung der Fette fort?',
    },
    options: [
      { ro: 'lipaza', de: 'die Lipase' },
      { ro: 'amilaza salivară', de: 'die Speichelamylase' },
      { ro: 'bila', de: 'die Galle' },
      { ro: 'gluteina', de: 'das Gluten' },
    ],
    correct: 0,
    explain: {
      ro: 'Lipaza descompune lipidele în acizi grași și glicerol.',
      de: 'Die Lipase zerlegt Fette in Fettsäuren und Glycerin.',
    },
  },
  {
    q: {
      ro: 'În ce se exprimă energia pe care o conțin alimentele?',
      de: 'In welcher Einheit wird die Energie der Lebensmittel angegeben?',
    },
    options: [
      { ro: 'în grame', de: 'in Gramm' },
      { ro: 'în litri', de: 'in Litern' },
      { ro: 'în calorii (kilocalorii)', de: 'in Kalorien (Kilokalorien)' },
      { ro: 'în grade', de: 'in Grad' },
    ],
    correct: 2,
    explain: {
      ro: 'Energia din alimente se exprimă în calorii, de obicei în kilocalorii (kcal).',
      de: 'Die Energie der Lebensmittel wird in Kalorien angegeben, meist in Kilokalorien (kcal).',
    },
  },
  {
    q: {
      ro: 'Apendicele este o prelungire a…',
      de: 'Der Wurmfortsatz ist eine Verlängerung des …',
    },
    options: [
      { ro: 'stomacului', de: 'Magens' },
      { ro: 'cecumului', de: 'Blinddarms' },
      { ro: 'esofagului', de: 'der Speiseröhre' },
      { ro: 'intestinului subțire', de: 'Dünndarms' },
    ],
    correct: 1,
    explain: {
      ro: 'Apendicele pornește din cecum, primul segment al intestinului gros. Apendicita este inflamația lui.',
      de: 'Der Wurmfortsatz geht vom Blinddarm aus, dem ersten Abschnitt des Dickdarms. Die Appendizitis ist seine Entzündung.',
    },
  },
];
