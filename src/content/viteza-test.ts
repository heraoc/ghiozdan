import type { Question } from '../data';

// Testul de la finalul lecției „Viteza: medie, momentană, direcție și sens”.
export const vitezaTest: Question[] = [
  {
    q: {
      ro: 'Cum se calculează viteza medie a unui mobil?',
      de: 'Wie berechnet man die mittlere Geschwindigkeit eines Körpers?',
    },
    options: [
      { ro: 'durata împărțită la distanța parcursă', de: 'Dauer geteilt durch zurückgelegte Strecke' },
      { ro: 'distanța parcursă înmulțită cu durata', de: 'zurückgelegte Strecke mal Dauer' },
      { ro: 'distanța parcursă împărțită la durată', de: 'zurückgelegte Strecke geteilt durch Dauer' },
      { ro: 'media vitezelor citite pe vitezometru', de: 'der Mittelwert der am Tachometer abgelesenen Werte' },
    ],
    correct: 2,
    explain: {
      ro: 'v = d : Δt. Viteza medie arată câți metri se parcurg, în medie, într-o secundă.',
      de: 'v = d : Δt. Die mittlere Geschwindigkeit zeigt, wie viele Meter im Mittel in einer Sekunde zurückgelegt werden.',
    },
  },
  {
    q: {
      ro: 'Un biciclist parcurge 90 m în 15 s. Care este viteza lui medie?',
      de: 'Ein Radfahrer legt 90 m in 15 s zurück. Wie groß ist seine mittlere Geschwindigkeit?',
    },
    options: [
      { ro: '1 350 m/s', de: '1 350 m/s' },
      { ro: '6 m/s', de: '6 m/s' },
      { ro: '0,17 m/s', de: '0,17 m/s' },
      { ro: '75 m/s', de: '75 m/s' },
    ],
    correct: 1,
    explain: {
      ro: 'v = 90 m : 15 s = 6 m/s.',
      de: 'v = 90 m : 15 s = 6 m/s.',
    },
  },
  {
    q: {
      ro: 'Un tren merge cu 80 km/h timp de 3 ore. Ce distanță parcurge?',
      de: 'Ein Zug fährt 3 Stunden lang mit 80 km/h. Welche Strecke legt er zurück?',
    },
    options: [
      { ro: '240 km', de: '240 km' },
      { ro: '27 km', de: '27 km' },
      { ro: '83 km', de: '83 km' },
      { ro: '26,7 km', de: '26,7 km' },
    ],
    correct: 0,
    explain: {
      ro: 'd = v · Δt = 80 km/h · 3 h = 240 km.',
      de: 'd = v · Δt = 80 km/h · 3 h = 240 km.',
    },
  },
  {
    q: {
      ro: 'Cât fac 90 km/h în m/s?',
      de: 'Wie viel sind 90 km/h in m/s?',
    },
    options: [
      { ro: '324 m/s', de: '324 m/s' },
      { ro: '90 m/s', de: '90 m/s' },
      { ro: '15 m/s', de: '15 m/s' },
      { ro: '25 m/s', de: '25 m/s' },
    ],
    correct: 3,
    explain: {
      ro: 'Din km/h în m/s se împarte la 3,6: 90 : 3,6 = 25 m/s.',
      de: 'Von km/h in m/s wird durch 3,6 geteilt: 90 : 3,6 = 25 m/s.',
    },
  },
  {
    q: {
      ro: 'Ce este mai repede: 15 m/s sau 50 km/h?',
      de: 'Was ist schneller: 15 m/s oder 50 km/h?',
    },
    options: [
      { ro: '15 m/s (= 54 km/h)', de: '15 m/s (= 54 km/h)' },
      { ro: '50 km/h (= 13,9 m/s)', de: '50 km/h (= 13,9 m/s)' },
      { ro: 'sunt egale', de: 'sie sind gleich' },
      { ro: 'nu se pot compara', de: 'man kann sie nicht vergleichen' },
    ],
    correct: 0,
    explain: {
      ro: 'Se compară în aceeași unitate: 15 m/s · 3,6 = 54 km/h, mai mult decât 50 km/h.',
      de: 'Man vergleicht in derselben Einheit: 15 m/s · 3,6 = 54 km/h, mehr als 50 km/h.',
    },
  },
  {
    q: {
      ro: 'O mașină parcurge 240 km în 3 ore, iar vitezometrul arată la un moment dat 110 km/h. Ce reprezintă cei 110 km/h?',
      de: 'Ein Auto fährt 240 km in 3 Stunden, und der Tachometer zeigt zu einem Zeitpunkt 110 km/h. Was sind diese 110 km/h?',
    },
    options: [
      { ro: 'viteza medie pe tot drumul', de: 'die mittlere Geschwindigkeit auf der ganzen Strecke' },
      { ro: 'viteza momentană la acel moment', de: 'die Momentangeschwindigkeit zu diesem Zeitpunkt' },
      { ro: 'distanța parcursă până atunci', de: 'die bis dahin zurückgelegte Strecke' },
      { ro: 'o greșeală de măsurare', de: 'ein Messfehler' },
    ],
    correct: 1,
    explain: {
      ro: 'Vitezometrul arată viteza momentană. Viteza medie este 240 km : 3 h = 80 km/h.',
      de: 'Der Tachometer zeigt die Momentangeschwindigkeit. Die mittlere Geschwindigkeit ist 240 km : 3 h = 80 km/h.',
    },
  },
  {
    q: {
      ro: 'Două mașini circulă cu câte 90 km/h pe aceeași autostradă, una spre Constanța, cealaltă spre București. Ce au diferit?',
      de: 'Zwei Autos fahren mit je 90 km/h auf derselben Autobahn, eines nach Konstanza, das andere nach Bukarest. Was ist verschieden?',
    },
    options: [
      { ro: 'mărimea vitezei', de: 'der Betrag der Geschwindigkeit' },
      { ro: 'direcția vitezei', de: 'die Richtung der Geschwindigkeit' },
      { ro: 'sensul vitezei', de: 'der Richtungssinn der Geschwindigkeit' },
      { ro: 'nimic, vitezele sunt egale', de: 'nichts, die Geschwindigkeiten sind gleich' },
    ],
    correct: 2,
    explain: {
      ro: 'Mărimea (90 km/h) și direcția (autostrada) sunt la fel, dar sensurile sunt opuse, deci vitezele nu sunt egale.',
      de: 'Betrag (90 km/h) und Richtung (die Autobahn) sind gleich, aber die Richtungssinne sind entgegengesetzt, die Geschwindigkeiten sind also nicht gleich.',
    },
  },
  {
    q: {
      ro: 'Cum se reprezintă viteza unui mobil?',
      de: 'Wie stellt man die Geschwindigkeit eines Körpers dar?',
    },
    options: [
      { ro: 'printr-un punct', de: 'durch einen Punkt' },
      { ro: 'printr-un cerc', de: 'durch einen Kreis' },
      { ro: 'printr-un segment cu săgeată, a cărui lungime e proporțională cu mărimea vitezei', de: 'durch eine Strecke mit Pfeilspitze, deren Länge proportional zum Betrag der Geschwindigkeit ist' },
      { ro: 'printr-o curbă oarecare', de: 'durch eine beliebige Kurve' },
    ],
    correct: 2,
    explain: {
      ro: 'Săgeata arată direcția și sensul, lungimea ei arată mărimea, iar capătul de plecare este punctul de aplicație.',
      de: 'Der Pfeil zeigt Richtung und Richtungssinn, seine Länge den Betrag, und das Anfangsende ist der Angriffspunkt.',
    },
  },
];
