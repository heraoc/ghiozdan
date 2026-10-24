import type { Question } from '../data';

// Testul de la finalul lecției „Divizibilitate, numere prime, factori primi”.
export const numerePrimeTest: Question[] = [
  {
    q: { ro: 'Care dintre afirmații este adevărată?', de: 'Welche Aussage ist wahr?' },
    options: [
      { ro: '4 | 22', de: '4 | 22' },
      { ro: '22 ⋮ 6', de: '22 ⋮ 6' },
      { ro: '40 ⋮ 10', de: '40 ⋮ 10' },
      { ro: '3 | 28', de: '3 | 28' },
    ],
    correct: 2,
    explain: {
      ro: '40 = 10 · 4, deci 40 ⋮ 10. La celelalte împărțirea are rest: 22 = 4 · 5 + 2, 22 = 6 · 3 + 4, 28 = 3 · 9 + 1.',
      de: '40 = 10 · 4, also 40 ⋮ 10. Bei den anderen bleibt ein Rest: 22 = 4 · 5 + 2, 22 = 6 · 3 + 4, 28 = 3 · 9 + 1.',
    },
  },
  {
    q: { ro: 'Care este mulțimea D₇₅, a divizorilor lui 75?', de: 'Was ist die Menge D₇₅, die Teilermenge von 75?' },
    options: [
      { ro: '{1, 3, 5, 15, 25, 75}', de: '{1, 3, 5, 15, 25, 75}' },
      { ro: '{3, 5, 15, 25}', de: '{3, 5, 15, 25}' },
      { ro: '{0, 75, 150, 225, …}', de: '{0, 75, 150, 225, …}' },
      { ro: '{1, 5, 15, 25, 75}', de: '{1, 5, 15, 25, 75}' },
    ],
    correct: 0,
    explain: {
      ro: 'Perechile cu produsul 75 sunt 1 · 75, 3 · 25 și 5 · 15, deci D₇₅ = {1, 3, 5, 15, 25, 75}. A treia variantă este M₇₅, mulțimea multiplilor.',
      de: 'Die Paare mit Produkt 75 sind 1 · 75, 3 · 25 und 5 · 15, also D₇₅ = {1, 3, 5, 15, 25, 75}. Die dritte Antwort ist M₇₅, die Vielfachenmenge.',
    },
  },
  {
    q: { ro: 'Care este mulțimea M₀, a multiplilor lui 0?', de: 'Was ist die Menge M₀, die Vielfachenmenge von 0?' },
    options: [
      { ro: '∅', de: '∅' },
      { ro: 'ℕ', de: 'ℕ' },
      { ro: '{1}', de: '{1}' },
      { ro: '{0}', de: '{0}' },
    ],
    correct: 3,
    explain: {
      ro: 'Multiplii lui 0 sunt 0 · 0, 0 · 1, 0 · 2, … și toți sunt egali cu 0. Deci M₀ = {0}.',
      de: 'Die Vielfachen von 0 sind 0 · 0, 0 · 1, 0 · 2, … und alle sind gleich 0. Also M₀ = {0}.',
    },
  },
  {
    q: { ro: 'Care dintre aceste numere este prim?', de: 'Welche dieser Zahlen ist eine Primzahl?' },
    options: [
      { ro: '51', de: '51' },
      { ro: '57', de: '57' },
      { ro: '91', de: '91' },
      { ro: '59', de: '59' },
    ],
    correct: 3,
    explain: {
      ro: '59 nu se împarte la 2, 3, 5 sau 7, deci are doar divizorii 1 și 59. Celelalte sunt compuse: 51 = 3 · 17, 57 = 3 · 19, 91 = 7 · 13.',
      de: '59 ist durch 2, 3, 5 und 7 nicht teilbar, hat also nur die Teiler 1 und 59. Die anderen sind zusammengesetzt: 51 = 3 · 17, 57 = 3 · 19, 91 = 7 · 13.',
    },
  },
  {
    q: { ro: 'Care dintre perechile de numere conține numai numere care nu sunt nici prime, nici compuse?', de: 'Welches Zahlenpaar besteht nur aus Zahlen, die weder prim noch zusammengesetzt sind?' },
    options: [
      { ro: '0 și 1', de: '0 und 1' },
      { ro: '1 și 2', de: '1 und 2' },
      { ro: '2 și 3', de: '2 und 3' },
      { ro: '4 și 9', de: '4 und 9' },
    ],
    correct: 0,
    explain: {
      ro: 'Numerele 0 și 1 sunt neprime, dar nu sunt compuse (1 are un singur divizor). 2 și 3 sunt prime, iar 4 și 9 sunt compuse.',
      de: 'Die Zahlen 0 und 1 sind keine Primzahlen, aber auch nicht zusammengesetzt (1 hat nur einen Teiler). 2 und 3 sind prim, 4 und 9 sind zusammengesetzt.',
    },
  },
  {
    q: { ro: 'Care este descompunerea în factori primi a lui 360?', de: 'Was ist die Primfaktorzerlegung von 360?' },
    options: [
      { ro: '2³ · 3² · 5', de: '2³ · 3² · 5' },
      { ro: '2² · 3² · 10', de: '2² · 3² · 10' },
      { ro: '2³ · 3 · 15', de: '2³ · 3 · 15' },
      { ro: '2³ · 3³ · 5', de: '2³ · 3³ · 5' },
    ],
    correct: 0,
    explain: {
      ro: '360 : 2 = 180, : 2 = 90, : 2 = 45, : 3 = 15, : 3 = 5, : 5 = 1. Avem trei de 2, doi de 3 și un 5: 360 = 2³ · 3² · 5. În celelalte apar numere neprime (10, 15) sau exponenți greșiți.',
      de: '360 : 2 = 180, : 2 = 90, : 2 = 45, : 3 = 15, : 3 = 5, : 5 = 1. Wir haben drei 2er, zwei 3er und eine 5: 360 = 2³ · 3² · 5. In den anderen kommen Nichtprimzahlen (10, 15) oder falsche Exponenten vor.',
    },
  },
  {
    q: { ro: 'Cât este 6² · 10³, scris ca produs de puteri de numere prime?', de: 'Was ist 6² · 10³, geschrieben als Produkt von Primzahlpotenzen?' },
    options: [
      { ro: '2⁵ · 3² · 5³', de: '2⁵ · 3² · 5³' },
      { ro: '2⁶ · 3² · 5³', de: '2⁶ · 3² · 5³' },
      { ro: '2⁵ · 3⁵ · 5³', de: '2⁵ · 3⁵ · 5³' },
      { ro: '2⁴ · 3² · 5³', de: '2⁴ · 3² · 5³' },
    ],
    correct: 0,
    explain: {
      ro: '6² = (2 · 3)² = 2² · 3² și 10³ = (2 · 5)³ = 2³ · 5³. Adunăm exponenții lui 2: 2 + 3 = 5. Rezultă 2⁵ · 3² · 5³.',
      de: '6² = (2 · 3)² = 2² · 3² und 10³ = (2 · 5)³ = 2³ · 5³. Wir addieren die Exponenten von 2: 2 + 3 = 5. Es ergibt sich 2⁵ · 3² · 5³.',
    },
  },
  {
    q: { ro: 'Câți divizori primi diferiți are numărul n = 2³ · 3 · 5²?', de: 'Wie viele verschiedene Primteiler hat die Zahl n = 2³ · 3 · 5²?' },
    options: [
      { ro: '6', de: '6' },
      { ro: '3', de: '3' },
      { ro: '5', de: '5' },
      { ro: '2', de: '2' },
    ],
    correct: 1,
    explain: {
      ro: 'Divizorii primi sunt bazele puterilor: 2, 3 și 5. Exponenții (3, 1, 2) arată de câte ori apare fiecare, nu câți factori primi diferiți sunt.',
      de: 'Die Primteiler sind die Basen der Potenzen: 2, 3 und 5. Die Exponenten (3, 1, 2) zeigen, wie oft jeder vorkommt, nicht wie viele verschiedene es sind.',
    },
  },
  {
    q: { ro: 'Câți divizori naturali are numărul n = 2³ · 3²?', de: 'Wie viele natürliche Teiler hat die Zahl n = 2³ · 3²?' },
    options: [
      { ro: '5', de: '5' },
      { ro: '12', de: '12' },
      { ro: '6', de: '6' },
      { ro: '72', de: '72' },
    ],
    correct: 1,
    explain: {
      ro: 'Adăugăm 1 la fiecare exponent și înmulțim: (3 + 1) · (2 + 1) = 4 · 3 = 12. Nu adunăm exponenții și nu calculăm n.',
      de: 'Wir addieren 1 zu jedem Exponenten und multiplizieren: (3 + 1) · (2 + 1) = 4 · 3 = 12. Wir addieren nicht die Exponenten und berechnen auch nicht n.',
    },
  },
  {
    q: { ro: 'Cum arăți că 113 este număr prim?', de: 'Wie zeigst du, dass 113 eine Primzahl ist?' },
    options: [
      { ro: 'Verifici că nu se împarte exact la 2, 3, 5 și 7 (pentru că 11² = 121 > 113)', de: 'Du prüfst, dass es nicht durch 2, 3, 5 und 7 teilbar ist (weil 11² = 121 > 113)' },
      { ro: 'Verifici că e impar', de: 'Du prüfst, dass es ungerade ist' },
      { ro: 'Îl împarți doar la 3', de: 'Du teilst nur durch 3' },
      { ro: 'Verifici că se termină în 3', de: 'Du prüfst, dass es auf 3 endet' },
    ],
    correct: 0,
    explain: {
      ro: 'Încercăm numerele prime p cu p² ≤ 113, adică 2, 3, 5, 7. Niciunul nu îl împarte exact, deci 113 este prim. Un număr impar sau care se termină în 3 poate fi compus (de ex. 63).',
      de: 'Wir probieren die Primzahlen p mit p² ≤ 113, also 2, 3, 5, 7. Keine teilt genau, also ist 113 prim. Eine ungerade Zahl oder eine, die auf 3 endet, kann zusammengesetzt sein (z. B. 63).',
    },
  },
  {
    q: { ro: 'Numerele prime x și y au suma 39. Cât este produsul x · y?', de: 'Die Primzahlen x und y haben die Summe 39. Was ist das Produkt x · y?' },
    options: [
      { ro: '114', de: '114' },
      { ro: '190', de: '190' },
      { ro: '74', de: '74' },
      { ro: '38', de: '38' },
    ],
    correct: 2,
    explain: {
      ro: 'Suma 39 este impară, deci unul dintre numere este par. Singurul prim par este 2, deci x = 2 și y = 37 (prim). Produsul este 2 · 37 = 74.',
      de: 'Die Summe 39 ist ungerade, also ist eine der Zahlen gerade. Die einzige gerade Primzahl ist 2, also x = 2 und y = 37 (prim). Das Produkt ist 2 · 37 = 74.',
    },
  },
  {
    q: { ro: 'Numerele prime a și b verifică 3a + 16b = 54. Cât este a + b?', de: 'Die Primzahlen a und b erfüllen 3a + 16b = 54. Was ist a + b?' },
    options: [
      { ro: '9', de: '9' },
      { ro: '7', de: '7' },
      { ro: '5', de: '5' },
      { ro: '11', de: '11' },
    ],
    correct: 2,
    explain: {
      ro: '16b este par și 54 este par, deci 3a este par, deci a este par. Cum a este prim, a = 2. Atunci 6 + 16b = 54, deci 16b = 48 și b = 3 (prim). Rezultă a + b = 5.',
      de: '16b ist gerade und 54 ist gerade, also ist 3a gerade, also ist a gerade. Da a prim ist, gilt a = 2. Dann 6 + 16b = 54, also 16b = 48 und b = 3 (prim). Es folgt a + b = 5.',
    },
  },
  {
    q: { ro: 'Suma a două numere prime, ambele mai mari decât 2, este întotdeauna …', de: 'Die Summe zweier Primzahlen, beide größer als 2, ist immer …' },
    options: [
      { ro: 'un număr impar', de: 'un număr impar' },
      { ro: 'un număr par mai mare decât 2, deci compus', de: 'un număr par mai mare decât 2, deci compus' },
      { ro: 'un număr prim', de: 'un număr prim' },
      { ro: 'uneori prim, uneori compus', de: 'uneori prim, uneori compus' },
    ],
    correct: 1,
    explain: {
      ro: 'Numerele prime mai mari decât 2 sunt impare, iar suma a două numere impare este pară. Un număr par mai mare decât 2 se împarte și la 2, deci este compus.',
      de: 'Primzahlen größer als 2 sind ungerade, und die Summe zweier ungerader Zahlen ist gerade. Eine gerade Zahl größer als 2 ist auch durch 2 teilbar, also zusammengesetzt.',
    },
  },
  {
    q: { ro: 'A = 2³ · 3⁵ · 7 și B = 2² · 3 · 7. Cât este A : B, scris ca produs de puteri de numere prime?', de: 'A = 2³ · 3⁵ · 7 und B = 2² · 3 · 7. Was ist A : B, geschrieben als Produkt von Primzahlpotenzen?' },
    options: [
      { ro: '2⁵ · 3⁶ · 7²', de: '2⁵ · 3⁶ · 7²' },
      { ro: '2 · 3⁴', de: '2 · 3⁴' },
      { ro: '2 · 3⁴ · 7', de: '2 · 3⁴ · 7' },
      { ro: '2⁶ · 3⁵ · 7²', de: '2⁶ · 3⁵ · 7²' },
    ],
    correct: 1,
    explain: {
      ro: 'La împărțire scădem exponenții aceluiași număr prim: 2³⁻² = 2, 3⁵⁻¹ = 3⁴, 7¹⁻¹ = 7⁰ = 1. Deci A : B = 2 · 3⁴. Prima variantă este produsul A · B (exponenții se adună).',
      de: 'Bei der Division subtrahieren wir die Exponenten derselben Primzahl: 2³⁻² = 2, 3⁵⁻¹ = 3⁴, 7¹⁻¹ = 7⁰ = 1. Also A : B = 2 · 3⁴. Die erste Antwort ist das Produkt A · B (Exponenten werden addiert).',
    },
  },
  {
    q: { ro: 'Câți divizori naturali are numărul 450?', de: 'Wie viele natürliche Teiler hat die Zahl 450?' },
    options: [
      { ro: '9', de: '9' },
      { ro: '12', de: '12' },
      { ro: '18', de: '18' },
      { ro: '24', de: '24' },
    ],
    correct: 2,
    explain: {
      ro: '450 : 2 = 225, : 3 = 75, : 3 = 25, : 5 = 5, : 5 = 1, deci 450 = 2 · 3² · 5². Numărul divizorilor este (1 + 1) · (2 + 1) · (2 + 1) = 2 · 3 · 3 = 18.',
      de: '450 : 2 = 225, : 3 = 75, : 3 = 25, : 5 = 5, : 5 = 1, also 450 = 2 · 3² · 5². Die Anzahl der Teiler ist (1 + 1) · (2 + 1) · (2 + 1) = 2 · 3 · 3 = 18.',
    },
  },
  {
    q: { ro: 'Care este mulțimea divizorilor lui 48?', de: 'Was ist die Teilermenge von 48?' },
    options: [
      { ro: '{1, 2, 3, 4, 6, 8, 12, 24, 48}', de: '{1, 2, 3, 4, 6, 8, 12, 24, 48}' },
      { ro: '{2, 3, 4, 6, 8, 12, 16, 24}', de: '{2, 3, 4, 6, 8, 12, 16, 24}' },
      { ro: '{1, 2, 3, 4, 6, 8, 12, 16, 24}', de: '{1, 2, 3, 4, 6, 8, 12, 16, 24}' },
      { ro: '{1, 2, 3, 4, 6, 8, 12, 16, 24, 48}', de: '{1, 2, 3, 4, 6, 8, 12, 16, 24, 48}' },
    ],
    correct: 3,
    explain: {
      ro: 'Perechile cu produsul 48 sunt 1 · 48, 2 · 24, 3 · 16, 4 · 12 și 6 · 8, deci D₄₈ are 10 elemente. Verificare cu formula: 48 = 2⁴ · 3, deci (4 + 1) · (1 + 1) = 10 divizori.',
      de: 'Die Paare mit Produkt 48 sind 1 · 48, 2 · 24, 3 · 16, 4 · 12 und 6 · 8, also hat D₄₈ 10 Elemente. Kontrolle mit der Formel: 48 = 2⁴ · 3, also (4 + 1) · (1 + 1) = 10 Teiler.',
    },
  },
  {
    q: { ro: 'Care este cel mai mic număr de trei cifre care are exact trei divizori?', de: 'Was ist die kleinste dreistellige Zahl mit genau drei Teilern?' },
    options: [
      { ro: '100', de: '100' },
      { ro: '101', de: '101' },
      { ro: '121', de: '121' },
      { ro: '125', de: '125' },
    ],
    correct: 2,
    explain: {
      ro: 'Un număr are exact trei divizori dacă este pătratul unui număr prim: p² are divizorii 1, p și p². Primul p² de trei cifre cu p prim este 11² = 121 (100 = 10² nu merge, pentru că 10 nu este prim).',
      de: 'Eine Zahl hat genau drei Teiler, wenn sie das Quadrat einer Primzahl ist: p² hat die Teiler 1, p und p². Das erste dreistellige p² mit Primzahl p ist 11² = 121 (100 = 10² geht nicht, da 10 nicht prim ist).',
    },
  },
  {
    q: { ro: 'Fără să efectuezi înmulțirea, află în câte zerouri se termină numărul 5625 · 1728.', de: 'Ohne die Multiplikation auszuführen: Auf wie viele Nullen endet die Zahl 5625 · 1728?' },
    options: [
      { ro: '2', de: '2' },
      { ro: '3', de: '3' },
      { ro: '4', de: '4' },
      { ro: '6', de: '6' },
    ],
    correct: 2,
    explain: {
      ro: '5625 = 5⁴ · 3² și 1728 = 2⁶ · 3³. Fiecare pereche 2 · 5 dă un zero (10 = 2 · 5). Avem patru de 5 și șase de 2, deci patru perechi: numărul se termină în 4 zerouri.',
      de: '5625 = 5⁴ · 3² und 1728 = 2⁶ · 3³. Jedes Paar 2 · 5 ergibt eine Null (10 = 2 · 5). Wir haben vier 5er und sechs 2er, also vier Paare: Die Zahl endet auf 4 Nullen.',
    },
  },
  {
    q: { ro: 'Cu ce produs de numere prime se divide orice număr de forma abcabc (de exemplu 234234)?', de: 'Durch welches Produkt von Primzahlen ist jede Zahl der Form abcabc teilbar (zum Beispiel 234234)?' },
    options: [
      { ro: '2 · 3 · 5', de: '2 · 3 · 5' },
      { ro: '3 · 5 · 7', de: '3 · 5 · 7' },
      { ro: '11 · 13 · 17', de: '11 · 13 · 17' },
      { ro: '7 · 11 · 13', de: '7 · 11 · 13' },
    ],
    correct: 3,
    explain: {
      ro: 'abcabc = abc · 1001, iar 1001 = 7 · 11 · 13. Deci orice număr de forma abcabc conține factorii 7, 11 și 13, indiferent de cifre.',
      de: 'abcabc = abc · 1001, und 1001 = 7 · 11 · 13. Also enthält jede Zahl der Form abcabc die Faktoren 7, 11 und 13, egal welche Ziffern.',
    },
  },
  {
    q: { ro: 'Numerele naturale x și y verifică x² · (y + 3) = 275. Care dintre perechile (x; y) este o soluție?', de: 'Die natürlichen Zahlen x und y erfüllen x² · (y + 3) = 275. Welches Paar (x; y) ist eine Lösung?' },
    options: [
      { ro: '(5; 11)', de: '(5; 11)' },
      { ro: '(11; 2)', de: '(11; 2)' },
      { ro: '(1; 275)', de: '(1; 275)' },
      { ro: '(5; 8)', de: '(5; 8)' },
    ],
    correct: 3,
    explain: {
      ro: '275 = 5² · 11. Pătratele perfecte care îl divid pe 275 sunt 1 și 25. Pentru x = 5: y + 3 = 275 : 25 = 11, deci y = 8. Verificare: 25 · 11 = 275. (Pentru x = 1 se obține y = 272.)',
      de: '275 = 5² · 11. Die Quadratzahlen, die 275 teilen, sind 1 und 25. Für x = 5: y + 3 = 275 : 25 = 11, also y = 8. Kontrolle: 25 · 11 = 275. (Für x = 1 erhält man y = 272.)',
    },
  },
  {
    q: { ro: 'Câte numere prime dau câtul 12 la împărțirea cu 8?', de: 'Wie viele Primzahlen ergeben bei der Division durch 8 den Quotienten 12?' },
    options: [
      { ro: '1', de: '1' },
      { ro: '2', de: '2' },
      { ro: '3', de: '3' },
      { ro: '4', de: '4' },
    ],
    correct: 2,
    explain: {
      ro: 'Dacă n : 8 are câtul 12, atunci n = 8 · 12 + r = 96 + r, cu restul r de la 0 la 7. Deci n este unul dintre 96, 97, …, 103. Numerele prime dintre ele sunt 97, 101 și 103: trei.',
      de: 'Hat n : 8 den Quotienten 12, dann ist n = 8 · 12 + r = 96 + r mit Rest r von 0 bis 7. Also ist n eine der Zahlen 96, 97, …, 103. Die Primzahlen darunter sind 97, 101 und 103: drei.',
    },
  },
];
