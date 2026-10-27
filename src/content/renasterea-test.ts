import type { Question } from '../data';

// Testul de la finalul lecției „Renașterea: geneza spiritului modern, umanismul”.
export const renastereaTest: Question[] = [
  {
    q: {
      ro: 'Între ce secole se desfășoară Renașterea?',
      de: 'Zwischen welchen Jahrhunderten findet die Renaissance statt?',
    },
    options: [
      { ro: 'XII–XIV', de: '12.–14. Jahrhundert' },
      { ro: 'XIV–XVI', de: '14.–16. Jahrhundert' },
      { ro: 'XVI–XVIII', de: '16.–18. Jahrhundert' },
      { ro: 'XVIII–XX', de: '18.–20. Jahrhundert' },
    ],
    correct: 1,
    explain: {
      ro: 'Renașterea cuprinde secolele XIV–XVI și marchează începutul Epocii Moderne.',
      de: 'Die Renaissance umfasst das 14. bis 16. Jahrhundert und markiert den Beginn der Neuzeit.',
    },
  },
  {
    q: {
      ro: 'În ce țară au apărut primele idei renascentiste?',
      de: 'In welchem Land entstanden die ersten Ideen der Renaissance?',
    },
    options: [
      { ro: 'Franța', de: 'Frankreich' },
      { ro: 'Anglia', de: 'England' },
      { ro: 'Italia', de: 'Italien' },
      { ro: 'Spania', de: 'Spanien' },
    ],
    correct: 2,
    explain: {
      ro: 'Renașterea a pornit din Italia (Florența, Veneția, Milano, Roma) și s-a răspândit apoi în toată Europa.',
      de: 'Die Renaissance ging von Italien aus (Florenz, Venedig, Mailand, Rom) und breitete sich dann über ganz Europa aus.',
    },
  },
  {
    q: {
      ro: 'Care este noua forță socială care apare în Renaștere?',
      de: 'Welche neue gesellschaftliche Kraft entsteht in der Renaissance?',
    },
    options: [
      { ro: 'Cavalerii', de: 'Die Ritter' },
      { ro: 'Burghezia', de: 'Das Bürgertum' },
      { ro: 'Clerul', de: 'Der Klerus' },
      { ro: 'Iobagii', de: 'Die Leibeigenen' },
    ],
    correct: 1,
    explain: {
      ro: 'Burghezia, adică orășenii înstăriți, a devenit o forță importantă și a sprijinit artiștii prin mecenat.',
      de: 'Das Bürgertum, also die wohlhabenden Stadtbewohner, wurde zu einer wichtigen Kraft und unterstützte Künstler durch Mäzenatentum.',
    },
  },
  {
    q: {
      ro: 'Ce înseamnă mecenat?',
      de: 'Was bedeutet Mäzenatentum?',
    },
    options: [
      { ro: 'Colecționarea de cărți vechi', de: 'Das Sammeln alter Bücher' },
      { ro: 'Sprijinul financiar acordat artiștilor și savanților', de: 'Die finanzielle Unterstützung von Künstlern und Gelehrten' },
      { ro: 'Construirea de catedrale', de: 'Der Bau von Kathedralen' },
      { ro: 'Studiul limbilor clasice', de: 'Das Studium der klassischen Sprachen' },
    ],
    correct: 1,
    explain: {
      ro: 'Un mecena este un om bogat care plătește artiști și savanți ca să-și poată desfășura munca.',
      de: 'Ein Mäzen ist ein reicher Mensch, der Künstler und Gelehrte bezahlt, damit sie arbeiten können.',
    },
  },
  {
    q: {
      ro: 'Care era ideea de bază a umanismului?',
      de: 'Was war die Grundidee des Humanismus?',
    },
    options: [
      { ro: 'Omul este în centrul tuturor preocupărilor', de: 'Der Mensch steht im Mittelpunkt aller Interessen' },
      { ro: 'Totul depinde numai de rege', de: 'Alles hängt nur vom König ab' },
      { ro: 'Știința este inutilă', de: 'Wissenschaft ist nutzlos' },
      { ro: 'Antichitatea trebuie uitată', de: 'Die Antike muss vergessen werden' },
    ],
    correct: 0,
    explain: {
      ro: 'Potrivit principiului antic „Omul este măsura tuturor lucrurilor”, umanismul plasa omul în centrul preocupărilor.',
      de: 'Nach dem antiken Grundsatz „Der Mensch ist das Maß aller Dinge“ stellte der Humanismus den Menschen in den Mittelpunkt.',
    },
  },
  {
    q: {
      ro: 'Ce invenție a favorizat răspândirea ideilor umaniste?',
      de: 'Welche Erfindung förderte die Verbreitung humanistischer Ideen?',
    },
    options: [
      { ro: 'Busola', de: 'Der Kompass' },
      { ro: 'Praful de pușcă', de: 'Das Schießpulver' },
      { ro: 'Tiparul', de: 'Der Buchdruck' },
      { ro: 'Ceasul', de: 'Die Uhr' },
    ],
    correct: 2,
    explain: {
      ro: 'Tiparul, inventat de Johannes Gutenberg la mijlocul secolului al XV-lea, a făcut cărțile mai ușor de copiat.',
      de: 'Der Buchdruck, Mitte des 15. Jahrhunderts von Johannes Gutenberg erfunden, machte Bücher leichter zu vervielfältigen.',
    },
  },
  {
    q: {
      ro: 'Cine a susținut teoria heliocentrică?',
      de: 'Wer vertrat das heliozentrische Weltbild?',
    },
    options: [
      { ro: 'Nicolaus Copernic', de: 'Nikolaus Kopernikus' },
      { ro: 'Niccolò Machiavelli', de: 'Niccolò Machiavelli' },
      { ro: 'Francesco Petrarca', de: 'Francesco Petrarca' },
      { ro: 'Miguel de Cervantes', de: 'Miguel de Cervantes' },
    ],
    correct: 0,
    explain: {
      ro: 'Teoria heliocentrică (Soarele în centru) a fost susținută de Copernic și de Galileo Galilei.',
      de: 'Das heliozentrische Weltbild (Sonne im Zentrum) vertraten Kopernikus und Galileo Galilei.',
    },
  },
  {
    q: {
      ro: 'Care dintre operele de mai jos satirizează cavalerismul medieval?',
      de: 'Welches der folgenden Werke verspottet das mittelalterliche Rittertum?',
    },
    options: [
      { ro: 'Hamlet', de: 'Hamlet' },
      { ro: 'Elogiul nebuniei', de: 'Lob der Torheit' },
      { ro: 'Decameronul', de: 'Das Decamerone' },
      { ro: 'Don Quijote de la Mancha', de: 'Don Quijote de la Mancha' },
    ],
    correct: 3,
    explain: {
      ro: 'Miguel de Cervantes a scris Don Quijote de la Mancha. Elogiul nebuniei (Erasmus) critică moravurile și abuzurile Bisericii.',
      de: 'Miguel de Cervantes schrieb Don Quijote de la Mancha. Das Lob der Torheit (Erasmus) kritisiert Sitten und Missstände der Kirche.',
    },
  },
  {
    q: {
      ro: 'Care dintre elementele de mai jos au fost preluate din arhitectura Antichității?',
      de: 'Welche der folgenden Elemente wurden aus der Architektur der Antike übernommen?',
    },
    options: [
      { ro: 'Turnurile de apărare și șanțurile cu apă', de: 'Wehrtürme und Wassergräben' },
      { ro: 'Coloanele, frontonul și cupola', de: 'Säulen, Giebel und Kuppel' },
      { ro: 'Vitraliile și arcele ascuțite', de: 'Buntglasfenster und Spitzbögen' },
      { ro: 'Acoperișurile de paie', de: 'Strohdächer' },
    ],
    correct: 1,
    explain: {
      ro: 'Arcada, cornișa, cupola, bolta semicirculară, coloanele și frontonul vin din Antichitate.',
      de: 'Arkade, Gesims, Kuppel, Tonnengewölbe, Säulen und Giebel stammen aus der Antike.',
    },
  },
];
