import type { Question } from '../data';

// Testul de la finalul lecției „Paralelism: drepte paralele și unghiuri formate cu o secantă”.
export const paralelismTest: Question[] = [
  {
    q: { ro: 'Două drepte coplanare nu au niciun punct comun. Cum sunt ele?', de: 'Zwei koplanare Geraden haben keinen gemeinsamen Punkt. Wie liegen sie?' },
    options: [
      { ro: 'concurente', de: 'sie schneiden sich' },
      { ro: 'coincid', de: 'sie fallen zusammen' },
      { ro: 'paralele', de: 'parallel' },
      { ro: 'perpendiculare', de: 'senkrecht' },
    ],
    correct: 2,
    explain: { ro: 'Definiția: două drepte coplanare fără niciun punct comun sunt paralele (a ∩ b = ∅).', de: 'Definition: Zwei koplanare Geraden ohne gemeinsamen Punkt sind parallel (a ∩ b = ∅).' },
  },
  {
    q: { ro: 'Câte drepte paralele cu o dreaptă d putem duce printr-un punct A din afara ei?', de: 'Wie viele Parallelen zu einer Geraden d kann man durch einen Punkt A außerhalb von ihr zeichnen?' },
    options: [
      { ro: 'oricâte', de: 'beliebig viele' },
      { ro: 'două', de: 'zwei' },
      { ro: 'niciuna', de: 'keine' },
      { ro: 'una singură', de: 'genau eine' },
    ],
    correct: 3,
    explain: { ro: 'Axioma paralelelor (postulatul lui Euclid): printr-un punct exterior se poate duce o singură paralelă la o dreaptă dată.', de: 'Parallelenaxiom (Postulat von Euklid): Durch einen Punkt außerhalb gibt es genau eine Parallele zu einer gegebenen Geraden.' },
  },
  {
    q: { ro: 'La construcția paralelei cu echerul și rigla, ce facem cu echerul de-a lungul riglei?', de: 'Was tut man bei der Konstruktion der Parallelen mit Geodreieck und Lineal mit dem Geodreieck am Lineal entlang?' },
    options: [
      { ro: 'îl translatăm (îl alunecăm fără să-l rotim)', de: 'man verschiebt es (ohne es zu drehen)' },
      { ro: 'îl rotim în jurul punctului A', de: 'man dreht es um den Punkt A' },
      { ro: 'îl răsturnăm pe partea cealaltă', de: 'man klappt es um' },
      { ro: 'îl lăsăm pe loc și mutăm rigla', de: 'man lässt es liegen und bewegt das Lineal' },
    ],
    correct: 0,
    explain: { ro: 'Translația păstrează direcția muchiei, de aceea dreapta trasată prin A este paralelă cu a.', de: 'Die Verschiebung erhält die Richtung der Kante, deshalb ist die gezeichnete Gerade durch A parallel zu a.' },
  },
  {
    q: { ro: 'Se știe că a ∥ b, b ∥ c și c ∥ d. Ce proprietate folosim ca să afirmăm că a ∥ d?', de: 'Es gilt a ∥ b, b ∥ c und c ∥ d. Welche Eigenschaft nutzen wir, um a ∥ d zu folgern?' },
    options: [
      { ro: 'reflexivitatea', de: 'die Reflexivität' },
      { ro: 'tranzitivitatea', de: 'die Transitivität' },
      { ro: 'simetria', de: 'die Symmetrie' },
      { ro: 'axioma paralelelor', de: 'das Parallelenaxiom' },
    ],
    correct: 1,
    explain: { ro: 'Tranzitivitatea: a ∥ b și b ∥ c ⇒ a ∥ c; apoi a ∥ c și c ∥ d ⇒ a ∥ d.', de: 'Transitivität: a ∥ b und b ∥ c ⇒ a ∥ c; dann a ∥ c und c ∥ d ⇒ a ∥ d.' },
  },
  {
    q: { ro: 'Care dintre perechile de unghiuri formate de o secantă cu două drepte (numerotate ca în manual) sunt alterne interne?', de: 'Welche Winkelpaare an einer Transversalen (nummeriert wie im Buch) sind innere Wechselwinkel?' },
    options: [
      { ro: '∢1 și ∢5', de: '∢1 und ∢5' },
      { ro: '∢4 și ∢5', de: '∢4 und ∢5' },
      { ro: '∢4 și ∢6', de: '∢4 und ∢6' },
      { ro: '∢1 și ∢8', de: '∢1 und ∢8' },
    ],
    correct: 2,
    explain: { ro: '∢4 și ∢6 sunt între cele două drepte și de părți diferite ale secantei. ∢1 și ∢5 sunt corespondente, ∢4 și ∢5 sunt interne de aceeași parte, ∢1 și ∢8 sunt externe de aceeași parte.', de: '∢4 und ∢6 liegen zwischen den Geraden und auf verschiedenen Seiten der Transversalen. ∢1 und ∢5 sind Stufenwinkel, ∢4 und ∢5 innere Winkel auf derselben Seite, ∢1 und ∢8 äußere Winkel auf derselben Seite.' },
  },
  {
    q: { ro: 'Dreptele a și b formează cu o secantă două unghiuri interne de aceeași parte, de 70° și 110°. Ce putem spune?', de: 'Die Geraden a und b bilden mit einer Transversalen zwei innere Winkel auf derselben Seite von 70° und 110°. Was folgt?' },
    options: [
      { ro: 'a ∥ b, pentru că 70° + 110° = 180°', de: 'a ∥ b, weil 70° + 110° = 180°' },
      { ro: 'a și b se taie, pentru că unghiurile sunt diferite', de: 'a und b schneiden sich, weil die Winkel verschieden sind' },
      { ro: 'a ∥ b, pentru că unghiurile sunt congruente', de: 'a ∥ b, weil die Winkel kongruent sind' },
      { ro: 'nu putem spune nimic', de: 'man kann nichts sagen' },
    ],
    correct: 0,
    explain: { ro: 'Unghiuri interne de aceeași parte suplementare (suma 180°) ⇒ dreptele sunt paralele. Egale ar trebui să fie alternele sau corespondentele, nu acestea.', de: 'Innere Winkel auf derselben Seite, die supplementär sind (Summe 180°) ⇒ die Geraden sind parallel. Gleich sein müssten Wechsel- oder Stufenwinkel, nicht diese.' },
  },
  {
    q: { ro: 'a ∥ b, iar o secantă formează ∢1 = 65°. Cât măsoară ∢5, corespondentul lui ∢1?', de: 'a ∥ b, und eine Transversale bildet ∢1 = 65°. Wie groß ist ∢5, der Stufenwinkel zu ∢1?' },
    options: [
      { ro: '115°', de: '115°' },
      { ro: '25°', de: '25°' },
      { ro: '295°', de: '295°' },
      { ro: '65°', de: '65°' },
    ],
    correct: 3,
    explain: { ro: 'La drepte paralele, unghiurile corespondente sunt congruente: ∢5 = ∢1 = 65°.', de: 'Bei parallelen Geraden sind Stufenwinkel kongruent: ∢5 = ∢1 = 65°.' },
  },
  {
    q: { ro: 'a ∥ b. Unghiurile ∢3 = 2x + 10° și ∢6 = 130° − x sunt interne de aceeași parte. Cât este x?', de: 'a ∥ b. Die Winkel ∢3 = 2x + 10° und ∢6 = 130° − x sind innere Winkel auf derselben Seite. Wie groß ist x?' },
    options: [
      { ro: '40°', de: '40°' },
      { ro: '60°', de: '60°' },
      { ro: '30°', de: '30°' },
      { ro: '20°', de: '20°' },
    ],
    correct: 0,
    explain: { ro: 'Interne de aceeași parte, deci suma 180°: (2x + 10°) + (130° − x) = 180° ⇒ x + 140° = 180° ⇒ x = 40°.', de: 'Innere Winkel auf derselben Seite, also Summe 180°: (2x + 10°) + (130° − x) = 180° ⇒ x + 140° = 180° ⇒ x = 40°.' },
  },
  {
    q: { ro: 'Un unghi de 50° și un unghi obtuz au laturile respectiv paralele. Cât măsoară unghiul obtuz?', de: 'Ein Winkel von 50° und ein stumpfer Winkel haben paarweise parallele Schenkel. Wie groß ist der stumpfe Winkel?' },
    options: [
      { ro: '130°', de: '130°' },
      { ro: '50°', de: '50°' },
      { ro: '40°', de: '40°' },
      { ro: '140°', de: '140°' },
    ],
    correct: 0,
    explain: { ro: 'Unul ascuțit și unul obtuz, cu laturile respectiv paralele, sunt suplementare: 180° − 50° = 130°.', de: 'Ein spitzer und ein stumpfer Winkel mit paarweise parallelen Schenkeln sind supplementär: 180° − 50° = 130°.' },
  },
];
