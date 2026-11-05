import type { Question } from '../data';

// Testul de la finalul lecției „Distanța parcursă și durata mișcării”.
export const distantaSiDurataTest: Question[] = [
  {
    q: {
      ro: 'Ce este originea distanțelor?',
      de: 'Was ist der Nullpunkt der Strecken?',
    },
    options: [
      { ro: 'punctul final al drumului', de: 'der Endpunkt des Weges' },
      { ro: 'punctul față de care se măsoară toate distanțele', de: 'der Punkt, von dem aus alle Strecken gemessen werden' },
      { ro: 'cel mai înalt punct al traiectoriei', de: 'der höchste Punkt der Bahn' },
      { ro: 'locul unde mobilul se oprește', de: 'der Ort, an dem der Körper anhält' },
    ],
    correct: 1,
    explain: {
      ro: 'Pe șosele, originea distanțelor este kilometrul zero.',
      de: 'Auf Straßen ist der Nullpunkt der Strecken Kilometer null.',
    },
  },
  {
    q: {
      ro: 'Un camion se află la 80 km de A. Localitatea B este la 45 km de A, pe același drum. Ce poziție are camionul dacă originea distanțelor este în B?',
      de: 'Ein Lkw ist 80 km von A entfernt. Ort B liegt 45 km von A entfernt, auf derselben Straße. Welche Lage hat der Lkw, wenn der Nullpunkt in B liegt?',
    },
    options: [
      { ro: '125 km', de: '125 km' },
      { ro: '80 km', de: '80 km' },
      { ro: '35 km', de: '35 km' },
      { ro: '45 km', de: '45 km' },
    ],
    correct: 2,
    explain: {
      ro: 'x = 80 − 45 = 35 km: distanța se măsoară acum de la B.',
      de: 'x = 80 − 45 = 35 km: Die Entfernung wird jetzt von B aus gemessen.',
    },
  },
  {
    q: {
      ro: 'O mașină trece de borna de 110 km, apoi de cea de 146 km. Ce distanță a parcurs între ele?',
      de: 'Ein Auto passiert den Kilometerstein 110 km und danach den Stein 146 km. Welche Strecke hat es dazwischen zurückgelegt?',
    },
    options: [
      { ro: '256 km', de: '256 km' },
      { ro: '36 km', de: '36 km' },
      { ro: '146 km', de: '146 km' },
      { ro: '30 km', de: '30 km' },
    ],
    correct: 1,
    explain: {
      ro: 'd = Δx = 146 km − 110 km = 36 km.',
      de: 'd = Δx = 146 km − 110 km = 36 km.',
    },
  },
  {
    q: {
      ro: 'Un om merge 30 m spre est, 60 m spre vest, 90 m spre nord și 50 m spre sud. Care este distanța parcursă?',
      de: 'Ein Mensch geht 30 m nach Osten, 60 m nach Westen, 90 m nach Norden und 50 m nach Süden. Wie groß ist die zurückgelegte Strecke?',
    },
    options: [
      { ro: '50 m', de: '50 m' },
      { ro: '120 m', de: '120 m' },
      { ro: '190 m', de: '190 m' },
      { ro: '230 m', de: '230 m' },
    ],
    correct: 3,
    explain: {
      ro: 'Se adună toate etapele: 30 + 60 + 90 + 50 = 230 m. Deplasarea, în linie dreaptă, este doar 50 m.',
      de: 'Alle Etappen werden addiert: 30 + 60 + 90 + 50 = 230 m. Die Verschiebung in gerader Linie beträgt nur 50 m.',
    },
  },
  {
    q: {
      ro: 'Care dintre afirmații indică un MOMENT de timp?',
      de: 'Welche Aussage nennt einen ZEITPUNKT?',
    },
    options: [
      { ro: 'Trenul a plecat la ora 2:30.', de: 'Der Zug fuhr um 2:30 Uhr ab.' },
      { ro: 'Spectacolul a durat 2 ore.', de: 'Die Aufführung dauerte 2 Stunden.' },
      { ro: 'Drumul a ținut 45 de minute.', de: 'Die Fahrt dauerte 45 Minuten.' },
      { ro: 'Pauza a fost de 10 minute.', de: 'Die Pause dauerte 10 Minuten.' },
    ],
    correct: 0,
    explain: {
      ro: '„La ora 2:30” spune când are loc evenimentul; celelalte spun cât timp ține.',
      de: '„Um 2:30 Uhr“ sagt, wann das Ereignis stattfindet; die anderen sagen, wie lange es dauert.',
    },
  },
  {
    q: {
      ro: 'O mașină pleacă la 13 h 20 min și ajunge la 13 h 50 min. Cât este durata mișcării?',
      de: 'Ein Auto fährt um 13 h 20 min ab und kommt um 13 h 50 min an. Wie lang ist die Dauer der Bewegung?',
    },
    options: [
      { ro: '30 min', de: '30 min' },
      { ro: '13 h 30 min', de: '13 h 30 min' },
      { ro: '27 h 10 min', de: '27 h 10 min' },
      { ro: '1 h 30 min', de: '1 h 30 min' },
    ],
    correct: 0,
    explain: {
      ro: 'Δt = t₂ − t₁ = 13 h 50 min − 13 h 20 min = 30 min.',
      de: 'Δt = t₂ − t₁ = 13 h 50 min − 13 h 20 min = 30 min.',
    },
  },
  {
    q: {
      ro: 'Un meci începe la 20:30 la Lisabona și la 22:30 în București. De ce diferă orele?',
      de: 'Ein Spiel beginnt um 20:30 Uhr in Lissabon und um 22:30 Uhr in Bukarest. Warum unterscheiden sich die Uhrzeiten?',
    },
    options: [
      { ro: 'meciul începe de două ori', de: 'das Spiel beginnt zweimal' },
      { ro: 'ceasurile merg diferit', de: 'die Uhren gehen verschieden' },
      { ro: 'localitățile au origini ale timpului diferite, cu 2 ore', de: 'die Orte haben um 2 Stunden verschiedene Nullpunkte der Zeit' },
      { ro: 'în București ziua are mai multe ore', de: 'in Bukarest hat der Tag mehr Stunden' },
    ],
    correct: 2,
    explain: {
      ro: 'Este același moment, dar fiecare fus orar își numără ora de la propriul miez de noapte.',
      de: 'Es ist derselbe Zeitpunkt, aber jede Zeitzone zählt ihre Uhrzeit ab ihrer eigenen Mitternacht.',
    },
  },
  {
    q: {
      ro: 'Temperatura scade de la 18 °C la 7 °C. Cât este Δθ?',
      de: 'Die Temperatur sinkt von 18 °C auf 7 °C. Wie groß ist Δθ?',
    },
    options: [
      { ro: '+11 °C', de: '+11 °C' },
      { ro: '−11 °C', de: '−11 °C' },
      { ro: '25 °C', de: '25 °C' },
      { ro: '−25 °C', de: '−25 °C' },
    ],
    correct: 1,
    explain: {
      ro: 'Δθ = valoarea finală − valoarea inițială = 7 − 18 = −11 °C. Minusul arată o scădere.',
      de: 'Δθ = Endwert − Anfangswert = 7 − 18 = −11 °C. Das Minus zeigt eine Abnahme.',
    },
  },
];
