import type { Question } from '../data';

// Testul de la finalul lecției „Statele și harta politică a lumii” (Geografie, clasa a 6-a).
export const stateleSiHartaPoliticaTest: Question[] = [
  {
    q: {
      ro: 'Care dintre acestea NU este o condiție pentru ca un teritoriu să fie stat?',
      de: 'Welche dieser Bedingungen gehört NICHT dazu, damit ein Gebiet ein Staat ist?',
    },
    options: [
      { ro: 'populație permanentă', de: 'ständige Bevölkerung' },
      { ro: 'conducere politică suverană', de: 'souveräne politische Führung' },
      { ro: 'granițe recunoscute internațional', de: 'international anerkannte Grenzen' },
      { ro: 'ieșire la mare', de: 'Zugang zum Meer' },
    ],
    correct: 3,
    explain: {
      ro: 'Multe state nu au ieșire la mare (Austria, Mongolia), dar sunt state.',
      de: 'Viele Staaten haben keinen Zugang zum Meer (Österreich, Mongolei), sind aber Staaten.',
    },
  },
  {
    q: {
      ro: 'Care dintre acestea nu este un stat independent?',
      de: 'Welches davon ist kein unabhängiger Staat?',
    },
    options: [
      { ro: 'Vatican', de: 'Vatikan' },
      { ro: 'Groenlanda', de: 'Grönland' },
      { ro: 'Tuvalu', de: 'Tuvalu' },
      { ro: 'Islanda', de: 'Island' },
    ],
    correct: 1,
    explain: {
      ro: 'Groenlanda este un teritoriu dependent de Danemarca, rămășiță a unui fost imperiu colonial.',
      de: 'Grönland ist ein von Dänemark abhängiges Gebiet, ein Rest eines früheren Kolonialreichs.',
    },
  },
  {
    q: {
      ro: 'Ce este granița, în realitate?',
      de: 'Was ist die Grenze in Wirklichkeit?',
    },
    options: [
      { ro: 'doar linia desenată pe hartă', de: 'nur die Linie auf der Karte' },
      { ro: 'un zid de-a lungul țării', de: 'eine Mauer entlang des Landes' },
      { ro: 'un plan vertical imaginar: suprafață, subsol și spațiu aerian', de: 'eine gedachte senkrechte Fläche: Oberfläche, Untergrund und Luftraum' },
      { ro: 'o fâșie de pământ de 1 km', de: 'ein Landstreifen von 1 km' },
    ],
    correct: 2,
    explain: {
      ro: 'Planul vertical delimitează teritoriul statului, subsolul și spațiul aerian de deasupra lui.',
      de: 'Die senkrechte Fläche grenzt das Staatsgebiet, den Untergrund und den Luftraum darüber ab.',
    },
  },
  {
    q: {
      ro: 'Care este un exemplu de graniță naturală?',
      de: 'Welches ist ein Beispiel für eine natürliche Grenze?',
    },
    options: [
      { ro: 'o linie dreaptă trasată după o paralelă', de: 'eine gerade Linie entlang eines Breitenkreises' },
      { ro: 'o graniță stabilită printr-un tratat, fără legătură cu relieful', de: 'eine durch Vertrag festgelegte Grenze ohne Bezug zum Relief' },
      { ro: 'Pirineii dintre Franța și Spania', de: 'die Pyrenäen zwischen Frankreich und Spanien' },
      { ro: 'o graniță aeriană', de: 'eine Luftgrenze' },
    ],
    correct: 2,
    explain: {
      ro: 'Granițele naturale urmează cursuri de apă sau culmi montane.',
      de: 'Natürliche Grenzen folgen Flüssen oder Gebirgskämmen.',
    },
  },
  {
    q: {
      ro: 'Care sunt statele „imense”, cu peste 6 milioane km²?',
      de: 'Welche Staaten sind „riesig“, mit über 6 Millionen km²?',
    },
    options: [
      { ro: 'România, Polonia, Ungaria', de: 'Rumänien, Polen, Ungarn' },
      { ro: 'Rusia, Canada, China, SUA, Brazilia, Australia', de: 'Russland, Kanada, China, USA, Brasilien, Australien' },
      { ro: 'Vatican, Monaco, Nauru', de: 'Vatikan, Monaco, Nauru' },
      { ro: 'India, Argentina, Algeria', de: 'Indien, Argentinien, Algerien' },
    ],
    correct: 1,
    explain: {
      ro: 'India, Argentina, Algeria sunt „foarte mari”; Vatican, Monaco, Nauru sunt ministate.',
      de: 'Indien, Argentinien, Algerien sind „sehr groß“; Vatikan, Monaco, Nauru sind Zwergstaaten.',
    },
  },
  {
    q: {
      ro: 'Ce spune despre un stat faptul că este monarhie?',
      de: 'Was sagt es über einen Staat, dass er eine Monarchie ist?',
    },
    options: [
      { ro: 'conducerea se transmite ereditar', de: 'die Führung wird vererbt' },
      { ro: 'este foarte mare', de: 'er ist sehr groß' },
      { ro: 'nu are granițe', de: 'er hat keine Grenzen' },
      { ro: 'este insular', de: 'er ist ein Inselstaat' },
    ],
    correct: 0,
    explain: {
      ro: 'Belgia, Spania, Arabia Saudită sunt monarhii. România, SUA, Egipt sunt republici.',
      de: 'Belgien, Spanien, Saudi-Arabien sind Monarchien. Rumänien, die USA, Ägypten sind Republiken.',
    },
  },
  {
    q: {
      ro: 'Ce înseamnă că harta politică a lumii are un „caracter istoric”?',
      de: 'Was bedeutet es, dass die politische Weltkarte einen „historischen Charakter“ hat?',
    },
    options: [
      { ro: 'se modifică permanent, în funcție de evenimente', de: 'sie verändert sich ständig mit den Ereignissen' },
      { ro: 'arată doar state vechi', de: 'sie zeigt nur alte Staaten' },
      { ro: 'nu s-a schimbat niciodată', de: 'sie hat sich nie verändert' },
      { ro: 'arată doar relieful', de: 'sie zeigt nur das Relief' },
    ],
    correct: 0,
    explain: {
      ro: 'Războaie, destrămări de imperii și independența coloniilor au schimbat harta politică.',
      de: 'Kriege, der Zerfall von Reichen und die Unabhängigkeit der Kolonien haben die politische Karte verändert.',
    },
  },
  {
    q: {
      ro: 'Pe ce continent a crescut cel mai mult numărul statelor între 1945 și 1989?',
      de: 'Auf welchem Kontinent stieg die Zahl der Staaten zwischen 1945 und 1989 am stärksten?',
    },
    options: [
      { ro: 'Europa', de: 'Europa' },
      { ro: 'America', de: 'Amerika' },
      { ro: 'Africa', de: 'Afrika' },
      { ro: 'Australia și Oceania', de: 'Australien und Ozeanien' },
    ],
    correct: 2,
    explain: {
      ro: 'Africa a avut 4 state în 1945 și 51 în 1989: coloniile au devenit independente.',
      de: 'Afrika hatte 1945 vier Staaten und 1989 einundfünfzig: Die Kolonien wurden unabhängig.',
    },
  },
  {
    q: {
      ro: 'La scara 1 : 40 000 000, două orașe sunt la 5 cm distanță pe hartă. Cât sunt în realitate?',
      de: 'Beim Maßstab 1 : 40 000 000 liegen zwei Städte auf der Karte 5 cm auseinander. Wie weit sind sie in Wirklichkeit entfernt?',
    },
    options: [
      { ro: '200 km', de: '200 km' },
      { ro: '2 000 km', de: '2 000 km' },
      { ro: '20 000 km', de: '20 000 km' },
      { ro: '800 km', de: '800 km' },
    ],
    correct: 1,
    explain: {
      ro: '1 cm pe hartă = 400 km, deci 5 cm = 5 × 400 = 2 000 km.',
      de: '1 cm auf der Karte = 400 km, also 5 cm = 5 × 400 = 2 000 km.',
    },
  },
  {
    q: {
      ro: 'Pe harta pe care 1 cm = 400 km, cât reprezintă în realitate un pătrat cu latura de 1 cm?',
      de: 'Auf der Karte, auf der 1 cm = 400 km ist: Wie viel stellt ein Quadrat mit 1 cm Seitenlänge in Wirklichkeit dar?',
    },
    options: [
      { ro: '400 km²', de: '400 km²' },
      { ro: '16 000 km²', de: '16 000 km²' },
      { ro: '160 000 km²', de: '160 000 km²' },
      { ro: '1 600 000 km²', de: '1 600 000 km²' },
    ],
    correct: 2,
    explain: {
      ro: 'Latura are 400 km, deci suprafața este 400 × 400 = 160 000 km².',
      de: 'Die Seite ist 400 km lang, also ist die Fläche 400 × 400 = 160 000 km².',
    },
  },
];
