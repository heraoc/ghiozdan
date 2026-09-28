import type { Question } from '../data';

// Testul de la finalul lecției „Organismul unui mamifer și al omului”.
export const organismulOmuluiTest: Question[] = [
  {
    q: {
      ro: 'Care este ordinea corectă, de la simplu la complex?',
      de: 'Welche Reihenfolge ist richtig, vom Einfachen zum Komplexen?',
    },
    options: [
      { ro: 'țesut → celulă → organ → sistem → organism', de: 'Gewebe → Zelle → Organ → System → Organismus' },
      { ro: 'celulă → organ → țesut → sistem → organism', de: 'Zelle → Organ → Gewebe → System → Organismus' },
      { ro: 'celulă → țesut → organ → sistem → organism', de: 'Zelle → Gewebe → Organ → System → Organismus' },
      { ro: 'organ → țesut → celulă → sistem → organism', de: 'Organ → Gewebe → Zelle → System → Organismus' },
    ],
    correct: 2,
    explain: {
      ro: 'Celulele formează țesuturi, țesuturile formează organe, organele formează sisteme, iar sistemele formează organismul.',
      de: 'Zellen bilden Gewebe, Gewebe bilden Organe, Organe bilden Systeme, und die Systeme bilden den Organismus.',
    },
  },
  {
    q: {
      ro: 'De ce nu au nucleu globulele roșii mature?',
      de: 'Warum haben reife rote Blutkörperchen keinen Zellkern?',
    },
    options: [
      { ro: 'Ca să aibă mai mult loc pentru transportul oxigenului.', de: 'Damit mehr Platz für den Sauerstofftransport bleibt.' },
      { ro: 'Pentru că sunt celule moarte.', de: 'Weil sie tote Zellen sind.' },
      { ro: 'Ca să se poată înmulți mai repede.', de: 'Damit sie sich schneller vermehren können.' },
      { ro: 'Pentru că sunt prea mari.', de: 'Weil sie zu groß sind.' },
    ],
    correct: 0,
    explain: {
      ro: 'Fără nucleu și fără unele organite, globula roșie are mai mult loc pentru oxigen.',
      de: 'Ohne Kern und einige Organellen hat das rote Blutkörperchen mehr Platz für Sauerstoff.',
    },
  },
  {
    q: {
      ro: 'Care celulă are multe prelungiri, ca să comunice cu alte celule?',
      de: 'Welche Zelle hat viele Fortsätze, um mit anderen Zellen zu kommunizieren?',
    },
    options: [
      { ro: 'celula musculară', de: 'die Muskelzelle' },
      { ro: 'neuronul', de: 'das Neuron' },
      { ro: 'globula roșie', de: 'das rote Blutkörperchen' },
      { ro: 'celula hepatică', de: 'die Leberzelle' },
    ],
    correct: 1,
    explain: {
      ro: 'Neuronul, celula nervoasă, transmite informații prin prelungirile lui.',
      de: 'Das Neuron, die Nervenzelle, gibt über seine Fortsätze Informationen weiter.',
    },
  },
  {
    q: {
      ro: 'Din ce grupă de țesuturi face parte sângele?',
      de: 'Zu welcher Gewebegruppe gehört das Blut?',
    },
    options: [
      { ro: 'țesut epitelial', de: 'Epithelgewebe' },
      { ro: 'țesut muscular', de: 'Muskelgewebe' },
      { ro: 'țesut nervos', de: 'Nervengewebe' },
      { ro: 'țesut conjunctiv', de: 'Bindegewebe' },
    ],
    correct: 3,
    explain: {
      ro: 'Sângele este un țesut conjunctiv lichid, la fel cum osul este un țesut conjunctiv tare.',
      de: 'Blut ist ein flüssiges Bindegewebe, so wie Knochen ein festes Bindegewebe ist.',
    },
  },
  {
    q: {
      ro: 'Din ce sistem face parte ficatul?',
      de: 'Zu welchem System gehört die Leber?',
    },
    options: [
      { ro: 'sistemul excretor', de: 'Ausscheidungssystem' },
      { ro: 'sistemul digestiv', de: 'Verdauungssystem' },
      { ro: 'sistemul respirator', de: 'Atmungssystem' },
      { ro: 'sistemul nervos', de: 'Nervensystem' },
    ],
    correct: 1,
    explain: {
      ro: 'Ficatul produce bila, care ajută la digestia grăsimilor.',
      de: 'Die Leber bildet Galle, die bei der Fettverdauung hilft.',
    },
  },
  {
    q: {
      ro: 'Ce organe alcătuiesc sistemul excretor?',
      de: 'Welche Organe bilden das Ausscheidungssystem?',
    },
    options: [
      { ro: 'stomacul, intestinele, ficatul', de: 'Magen, Darm, Leber' },
      { ro: 'inima, arterele, venele', de: 'Herz, Arterien, Venen' },
      { ro: 'rinichii, ureterele, vezica urinară', de: 'Nieren, Harnleiter, Harnblase' },
      { ro: 'plămânii, traheea, nasul', de: 'Lungen, Luftröhre, Nase' },
    ],
    correct: 2,
    explain: {
      ro: 'Rinichii filtrează sângele, urina coboară prin uretere și se adună în vezica urinară.',
      de: 'Die Nieren filtern das Blut, der Harn fließt durch die Harnleiter in die Harnblase.',
    },
  },
  {
    q: {
      ro: 'Care dintre aceste sisteme ține de funcția de nutriție?',
      de: 'Welches dieser Systeme gehört zur Funktion Ernährung?',
    },
    options: [
      { ro: 'sistemul osos', de: 'Knochensystem' },
      { ro: 'sistemul nervos', de: 'Nervensystem' },
      { ro: 'sistemul endocrin', de: 'endokrines System' },
      { ro: 'sistemul respirator', de: 'Atmungssystem' },
    ],
    correct: 3,
    explain: {
      ro: 'La nutriție lucrează sistemele digestiv, respirator, circulator și excretor.',
      de: 'Zur Ernährung gehören Verdauungs-, Atmungs-, Kreislauf- und Ausscheidungssystem.',
    },
  },
  {
    q: {
      ro: 'Ce organe protejează coastele?',
      de: 'Welche Organe schützen die Rippen?',
    },
    options: [
      { ro: 'inima și plămânii', de: 'Herz und Lunge' },
      { ro: 'creierul', de: 'das Gehirn' },
      { ro: 'rinichii și vezica urinară', de: 'Nieren und Harnblase' },
      { ro: 'intestinele', de: 'den Darm' },
    ],
    correct: 0,
    explain: {
      ro: 'Coastele formează o cușcă în jurul inimii și al plămânilor. Creierul este apărat de craniu.',
      de: 'Die Rippen bilden einen Korb um Herz und Lunge. Das Gehirn wird vom Schädel geschützt.',
    },
  },
  {
    q: {
      ro: 'Care sunt cele trei funcții de bază ale corpului?',
      de: 'Welche drei Grundfunktionen hat der Körper?',
    },
    options: [
      { ro: 'mișcare, gândire, somn', de: 'Bewegung, Denken, Schlaf' },
      { ro: 'nutriție, relația cu mediul, reproducere', de: 'Ernährung, Beziehung zur Umwelt, Fortpflanzung' },
      { ro: 'digestie, respirație, circulație', de: 'Verdauung, Atmung, Kreislauf' },
      { ro: 'protecție, nutriție, conducere', de: 'Schutz, Ernährung, Leitung' },
    ],
    correct: 1,
    explain: {
      ro: 'Toate sistemele de organe servesc uneia dintre aceste trei funcții.',
      de: 'Alle Organsysteme dienen einer dieser drei Funktionen.',
    },
  },
];
