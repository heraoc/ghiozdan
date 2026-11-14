import type { Question } from '../data';

// Testul special „Probleme cu viteza”: cinci probleme de mișcare uniformă, câte 2–3 întrebări fiecare.
export const vitezaProblemeTest: Question[] = [
  {
    q: {
      ro: 'Problema 1. Un automobil trece prin A la 10 h 20 min 10 s și prin B (la 20 km de A) la 10 h 36 min 50 s. Care este viteza lui, presupusă constantă?',
      de: 'Aufgabe 1. Ein Auto fährt um 10 h 20 min 10 s an A vorbei und um 10 h 36 min 50 s an B (20 km von A entfernt). Wie groß ist seine Geschwindigkeit, wenn sie als konstant angenommen wird?',
    },
    options: [
      { ro: '2 m/s', de: '2 m/s' },
      { ro: '33,3 m/s', de: '33,3 m/s' },
      { ro: '20 m/s', de: '20 m/s' },
      { ro: '72 m/s', de: '72 m/s' },
    ],
    correct: 2,
    explain: {
      ro: 'Δt = 10 h 36 min 50 s − 10 h 20 min 10 s = 16 min 40 s = 1 000 s. v = 20 000 m : 1 000 s = 20 m/s (adică 72 km/h).',
      de: 'Δt = 10 h 36 min 50 s − 10 h 20 min 10 s = 16 min 40 s = 1 000 s. v = 20 000 m : 1 000 s = 20 m/s (also 72 km/h).',
    },
  },
  {
    q: {
      ro: 'Problema 1 (continuare). Cât a durat mișcarea de la A până la C, aflată la 100 km de A?',
      de: 'Aufgabe 1 (Fortsetzung). Wie lange dauerte die Bewegung von A bis C, das 100 km von A entfernt liegt?',
    },
    options: [
      { ro: '1 h 23 min 20 s', de: '1 h 23 min 20 s' },
      { ro: '1 h 40 min', de: '1 h 40 min' },
      { ro: '1 h 6 min 40 s', de: '1 h 6 min 40 s' },
      { ro: '5 h', de: '5 h' },
    ],
    correct: 0,
    explain: {
      ro: 'Δt = d : v = 100 000 m : 20 m/s = 5 000 s = 1 h 23 min 20 s.',
      de: 'Δt = d : v = 100 000 m : 20 m/s = 5 000 s = 1 h 23 min 20 s.',
    },
  },
  {
    q: {
      ro: 'Problema 1 (final). La ce oră trece automobilul prin C?',
      de: 'Aufgabe 1 (Schluss). Um wie viel Uhr fährt das Auto an C vorbei?',
    },
    options: [
      { ro: '12 h 00 min 10 s', de: '12 h 00 min 10 s' },
      { ro: '11 h 43 min 30 s', de: '11 h 43 min 30 s' },
      { ro: '11 h 56 min 50 s', de: '11 h 56 min 50 s' },
      { ro: '1 h 23 min 20 s', de: '1 h 23 min 20 s' },
    ],
    correct: 1,
    explain: {
      ro: 'Momentul se obține adunând durata la momentul plecării din A: 10 h 20 min 10 s + 1 h 23 min 20 s = 11 h 43 min 30 s. (1 h 23 min 20 s este o durată, nu un moment.)',
      de: 'Den Zeitpunkt erhält man, indem man die Dauer zum Abfahrtszeitpunkt in A addiert: 10 h 20 min 10 s + 1 h 23 min 20 s = 11 h 43 min 30 s. (1 h 23 min 20 s ist eine Dauer, kein Zeitpunkt.)',
    },
  },
  {
    q: {
      ro: 'Problema 2. Un mobil merge rectiliniu și uniform. Dacă viteza scade cu 24 km/h, aceeași distanță durează de 2 ori mai mult. Care este viteza inițială?',
      de: 'Aufgabe 2. Ein Mobil bewegt sich geradlinig und gleichförmig. Sinkt die Geschwindigkeit um 24 km/h, dauert dieselbe Strecke doppelt so lang. Wie groß ist die ursprüngliche Geschwindigkeit?',
    },
    options: [
      { ro: '24 km/h', de: '24 km/h' },
      { ro: '36 km/h', de: '36 km/h' },
      { ro: '72 km/h', de: '72 km/h' },
      { ro: '48 km/h', de: '48 km/h' },
    ],
    correct: 3,
    explain: {
      ro: 'd = v · Δt = (v − 24) · 2Δt ⇒ v = 2v − 48 ⇒ v = 48 km/h.',
      de: 'd = v · Δt = (v − 24) · 2Δt ⇒ v = 2v − 48 ⇒ v = 48 km/h.',
    },
  },
  {
    q: {
      ro: 'Problema 2 (continuare). Cu viteza de 48 km/h mobilul parcurge o distanță în 2 h. Cât timp îi trebuie pentru aceeași distanță cu viteza redusă (24 km/h)?',
      de: 'Aufgabe 2 (Fortsetzung). Mit 48 km/h braucht das Mobil für eine Strecke 2 h. Wie lange braucht es für dieselbe Strecke mit der verringerten Geschwindigkeit (24 km/h)?',
    },
    options: [
      { ro: '1 h', de: '1 h' },
      { ro: '3 h', de: '3 h' },
      { ro: '4 h', de: '4 h' },
      { ro: '6 h', de: '6 h' },
    ],
    correct: 2,
    explain: {
      ro: 'd = 48 km/h · 2 h = 96 km. Cu 24 km/h: Δt = 96 km : 24 km/h = 4 h, adică de 2 ori mai mult.',
      de: 'd = 48 km/h · 2 h = 96 km. Mit 24 km/h: Δt = 96 km : 24 km/h = 4 h, also doppelt so lang.',
    },
  },
  {
    q: {
      ro: 'Problema 3. Două mobile merg în același sens, cu v₁ = 10 m/s și v₂ = 20 m/s. Mobilul 2 pornește la 200 m în urma mobilului 1. Cu câți metri pe secundă se micșorează distanța dintre ele?',
      de: 'Aufgabe 3. Zwei Mobile bewegen sich in derselben Richtung, mit v₁ = 10 m/s und v₂ = 20 m/s. Mobil 2 startet 200 m hinter Mobil 1. Um wie viele Meter pro Sekunde nimmt der Abstand zwischen ihnen ab?',
    },
    options: [
      { ro: '30 m/s', de: '30 m/s' },
      { ro: '10 m/s', de: '10 m/s' },
      { ro: '15 m/s', de: '15 m/s' },
      { ro: '20 m/s', de: '20 m/s' },
    ],
    correct: 1,
    explain: {
      ro: 'Mobilul 2 câștigă în fiecare secundă v₂ − v₁ = 20 − 10 = 10 m. (Dacă ar merge în sensuri opuse, vitezele s-ar aduna.)',
      de: 'Mobil 2 holt jede Sekunde v₂ − v₁ = 20 − 10 = 10 m auf. (Bei entgegengesetzten Richtungssinnen würden sich die Geschwindigkeiten addieren.)',
    },
  },
  {
    q: {
      ro: 'Problema 3 (continuare). După cât timp distanța dintre cele două mobile este, pentru prima dată, d′ = 50 m?',
      de: 'Aufgabe 3 (Fortsetzung). Nach welcher Zeit beträgt der Abstand der beiden Mobile zum ersten Mal d′ = 50 m?',
    },
    options: [
      { ro: '25 s', de: '25 s' },
      { ro: '5 s', de: '5 s' },
      { ro: '20 s', de: '20 s' },
      { ro: '15 s', de: '15 s' },
    ],
    correct: 3,
    explain: {
      ro: '200 − 10 · t = 50 ⇒ t = 150 : 10 = 15 s.',
      de: '200 − 10 · t = 50 ⇒ t = 150 : 10 = 15 s.',
    },
  },
  {
    q: {
      ro: 'Problema 3 (final). Mobilul 2 îl depășește pe mobilul 1 și se îndepărtează de el. După cât timp de la start e din nou la 50 m de mobilul 1?',
      de: 'Aufgabe 3 (Schluss). Mobil 2 überholt Mobil 1 und entfernt sich von ihm. Nach welcher Zeit ab dem Start ist es wieder 50 m von Mobil 1 entfernt?',
    },
    options: [
      { ro: '25 s', de: '25 s' },
      { ro: '30 s', de: '30 s' },
      { ro: '35 s', de: '35 s' },
      { ro: '20 s', de: '20 s' },
    ],
    correct: 0,
    explain: {
      ro: 'Depășirea are loc la 20 s (200 : 10). Apoi 10 · t − 200 = 50 ⇒ t = 25 s.',
      de: 'Das Überholen geschieht bei 20 s (200 : 10). Dann gilt 10 · t − 200 = 50 ⇒ t = 25 s.',
    },
  },
  {
    q: {
      ro: 'Problema 4. Un autoturism merge 50 min cu 72 km/h. Ce distanță parcurge în această perioadă?',
      de: 'Aufgabe 4. Ein Auto fährt 50 min lang mit 72 km/h. Welche Strecke legt es in dieser Zeit zurück?',
    },
    options: [
      { ro: '3 600 km', de: '3 600 km' },
      { ro: '60 km', de: '60 km' },
      { ro: '72 km', de: '72 km' },
      { ro: '50 km', de: '50 km' },
    ],
    correct: 1,
    explain: {
      ro: '50 min = 5/6 h, deci d₁ = 72 km/h · 5/6 h = 60 km. (Nu înmulți direct 72 cu 50: minutele trebuie transformate în ore.)',
      de: '50 min = 5/6 h, also d₁ = 72 km/h · 5/6 h = 60 km. (Multipliziere nicht direkt 72 mit 50: Minuten müssen in Stunden umgerechnet werden.)',
    },
  },
  {
    q: {
      ro: 'Problema 4 (continuare). A doua viteză este 30 m/s. Cât este în km/h?',
      de: 'Aufgabe 4 (Fortsetzung). Die zweite Geschwindigkeit beträgt 30 m/s. Wie viel sind das in km/h?',
    },
    options: [
      { ro: '8,3 km/h', de: '8,3 km/h' },
      { ro: '30 km/h', de: '30 km/h' },
      { ro: '90 km/h', de: '90 km/h' },
      { ro: '108 km/h', de: '108 km/h' },
    ],
    correct: 3,
    explain: {
      ro: 'Din m/s în km/h se înmulțește cu 3,6: 30 · 3,6 = 108 km/h.',
      de: 'Von m/s in km/h wird mit 3,6 multipliziert: 30 · 3,6 = 108 km/h.',
    },
  },
  {
    q: {
      ro: 'Problema 4 (final). Viteza medie pe tot drumul este 86,4 km/h. Care este distanța dintre localitățile A și B?',
      de: 'Aufgabe 4 (Schluss). Die mittlere Geschwindigkeit auf der ganzen Strecke beträgt 86,4 km/h. Wie weit sind die Orte A und B voneinander entfernt?',
    },
    options: [
      { ro: '120 km', de: '120 km' },
      { ro: '60 km', de: '60 km' },
      { ro: '90 km', de: '90 km' },
      { ro: '86,4 km', de: '86,4 km' },
    ],
    correct: 0,
    explain: {
      ro: '86,4 · (5/6 + Δt₂) = 60 + 108 · Δt₂ ⇒ Δt₂ = 5/9 h = 33 min 20 s. Atunci d₂ = 108 · 5/9 = 60 km și d = 60 + 60 = 120 km.',
      de: '86,4 · (5/6 + Δt₂) = 60 + 108 · Δt₂ ⇒ Δt₂ = 5/9 h = 33 min 20 s. Dann ist d₂ = 108 · 5/9 = 60 km und d = 60 + 60 = 120 km.',
    },
  },
  {
    q: {
      ro: 'Problema 5. Un mobil face o treime din drum cu 5 m/s și 2/5 din drum cu 2 m/s. Ce parte din drum rămâne pentru a treia porțiune (144 km/h)?',
      de: 'Aufgabe 5. Ein Mobil legt ein Drittel der Strecke mit 5 m/s und 2/5 der Strecke mit 2 m/s zurück. Welcher Teil der Strecke bleibt für den dritten Abschnitt (144 km/h)?',
    },
    options: [
      { ro: '1/5', de: '1/5' },
      { ro: '4/15', de: '4/15' },
      { ro: '11/15', de: '11/15' },
      { ro: '3/8', de: '3/8' },
    ],
    correct: 1,
    explain: {
      ro: '1 − 1/3 − 2/5 = 15/15 − 5/15 − 6/15 = 4/15.',
      de: '1 − 1/3 − 2/5 = 15/15 − 5/15 − 6/15 = 4/15.',
    },
  },
  {
    q: {
      ro: 'Problema 5 (final). Care este viteza medie pe tot drumul?',
      de: 'Aufgabe 5 (Schluss). Wie groß ist die mittlere Geschwindigkeit auf der ganzen Strecke?',
    },
    options: [
      { ro: 'aproximativ 15,7 m/s (media aritmetică)', de: 'etwa 15,7 m/s (arithmetisches Mittel)' },
      { ro: '150/41 m/s, adică aproximativ 3,66 m/s', de: '150/41 m/s, also etwa 3,66 m/s' },
      { ro: '2 m/s', de: '2 m/s' },
      { ro: '40 m/s', de: '40 m/s' },
    ],
    correct: 1,
    explain: {
      ro: 'Cu d drumul total: Δt₁ = d/15, Δt₂ = d/5, Δt₃ = d/150 (144 km/h = 40 m/s). Δt = 41d/150, deci v = d : Δt = 150/41 ≈ 3,66 m/s ≈ 13,2 km/h. Media aritmetică ar fi greșită: mobilul stă cel mai mult cu viteza mică.',
      de: 'Mit d als Gesamtstrecke: Δt₁ = d/15, Δt₂ = d/5, Δt₃ = d/150 (144 km/h = 40 m/s). Δt = 41d/150, also v = d : Δt = 150/41 ≈ 3,66 m/s ≈ 13,2 km/h. Das arithmetische Mittel wäre falsch: Das Mobil ist am längsten mit der kleinen Geschwindigkeit unterwegs.',
    },
  },
];
