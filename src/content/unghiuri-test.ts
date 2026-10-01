import type { Question } from '../data';

// Testul de la finalul lecției „Recapitulare: unghiuri”.
export const unghiuriTest: Question[] = [
  {
    q: { ro: 'Care este complementul unui unghi de 28°?', de: 'Wie groß ist das Komplement eines Winkels von 28°?' },
    options: [
      { ro: '152°', de: '152°' },
      { ro: '72°', de: '72°' },
      { ro: '62°', de: '62°' },
      { ro: '28°', de: '28°' },
    ],
    correct: 2,
    explain: { ro: 'Complementul lui α este 90° − α: 90° − 28° = 62°.', de: 'Das Komplement von α ist 90° − α: 90° − 28° = 62°.' },
  },
  {
    q: { ro: 'Care este suplementul unui unghi de 115°?', de: 'Wie groß ist das Supplement eines Winkels von 115°?' },
    options: [
      { ro: '65°', de: '65°' },
      { ro: '245°', de: '245°' },
      { ro: '25°', de: '25°' },
      { ro: 'nu există', de: 'es gibt keins' },
    ],
    correct: 0,
    explain: { ro: 'Suplementul lui α este 180° − α: 180° − 115° = 65°.', de: 'Das Supplement von α ist 180° − α: 180° − 115° = 65°.' },
  },
  {
    q: {
      ro: 'Două drepte se intersectează și unul dintre unghiurile formate are 50°. Ce măsuri au celelalte trei?',
      de: 'Zwei Geraden schneiden sich, und einer der Winkel ist 50° groß. Wie groß sind die anderen drei?',
    },
    options: [
      { ro: '50°, 50°, 50°', de: '50°, 50°, 50°' },
      { ro: '40°, 50°, 40°', de: '40°, 50°, 40°' },
      { ro: '130°, 130°, 50°', de: '130°, 130°, 50°' },
      { ro: '130°, 50°, 130°', de: '130°, 50°, 130°' },
    ],
    correct: 3,
    explain: {
      ro: 'Unghiul vecin este suplementul: 180° − 50° = 130°; cel opus la vârf are tot 50°, iar ultimul e opus celui de 130°. Verificare: 50 + 130 + 50 + 130 = 360.',
      de: 'Der Nebenwinkel ist das Supplement: 180° − 50° = 130°; der Scheitelwinkel ist ebenfalls 50°, der letzte liegt dem 130°-Winkel gegenüber. Probe: 50 + 130 + 50 + 130 = 360.',
    },
  },
  {
    q: {
      ro: 'Patru unghiuri în jurul unui punct măsoară 80°, 100°, 95° și x. Cât este x?',
      de: 'Vier Winkel um einen Punkt messen 80°, 100°, 95° und x. Wie groß ist x?',
    },
    options: [
      { ro: '95°', de: '95°' },
      { ro: '85°', de: '85°' },
      { ro: '180°', de: '180°' },
      { ro: '75°', de: '75°' },
    ],
    correct: 1,
    explain: { ro: 'În jurul unui punct suma este 360°: 360 − (80 + 100 + 95) = 360 − 275 = 85.', de: 'Um einen Punkt beträgt die Summe 360°: 360 − (80 + 100 + 95) = 360 − 275 = 85.' },
  },
  {
    q: {
      ro: '∢AOB = 70° și ∢BOC = 30° sunt adiacente. Cât măsoară unghiul dintre bisectoarele lor?',
      de: '∢AOB = 70° und ∢BOC = 30° sind benachbart. Wie groß ist der Winkel zwischen ihren Winkelhalbierenden?',
    },
    options: [
      { ro: '100°', de: '100°' },
      { ro: '40°', de: '40°' },
      { ro: '50°', de: '50°' },
      { ro: '20°', de: '20°' },
    ],
    correct: 2,
    explain: { ro: 'Unghiul dintre bisectoare este jumătate din sumă: (70° + 30°) : 2 = 50°.', de: 'Der Winkel zwischen den Winkelhalbierenden ist die Hälfte der Summe: (70° + 30°) : 2 = 50°.' },
  },
  {
    q: {
      ro: 'Ce unghi formează bisectoarele a două unghiuri adiacente suplementare?',
      de: 'Welchen Winkel bilden die Winkelhalbierenden zweier Nebenwinkel?',
    },
    options: [
      { ro: '90°, oricât ar măsura unghiurile', de: '90°, egal wie groß die Winkel sind' },
      { ro: '180°', de: '180°' },
      { ro: '45°', de: '45°' },
      { ro: 'depinde de unghiuri', de: 'das hängt von den Winkeln ab' },
    ],
    correct: 0,
    explain: { ro: 'Suma lor este 180°, iar jumătate din 180° este 90°. Bisectoarele sunt perpendiculare.', de: 'Ihre Summe ist 180°, die Hälfte davon ist 90°. Die Winkelhalbierenden stehen senkrecht aufeinander.' },
  },
  {
    q: {
      ro: 'Pe o dreaptă, de aceeași parte, sunt unghiurile x, 2x și 3x, cu vârful comun pe dreaptă. Cât este x?',
      de: 'Auf einer Seite einer Geraden liegen die Winkel x, 2x und 3x mit gemeinsamem Scheitel auf der Geraden. Wie groß ist x?',
    },
    options: [
      { ro: '60°', de: '60°' },
      { ro: '36°', de: '36°' },
      { ro: '45°', de: '45°' },
      { ro: '30°', de: '30°' },
    ],
    correct: 3,
    explain: { ro: 'x + 2x + 3x = 180°, deci 6x = 180°, adică x = 30°. Unghiurile sunt 30°, 60° și 90°.', de: 'x + 2x + 3x = 180°, also 6x = 180° und x = 30°. Die Winkel sind 30°, 60° und 90°.' },
  },
  {
    q: {
      ro: '∢AOB = 130° și ∢AOC = 50°, iar OC este în interiorul lui ∢AOB. Cât măsoară ∢COB?',
      de: '∢AOB = 130° und ∢AOC = 50°, wobei OC im Inneren von ∢AOB liegt. Wie groß ist ∢COB?',
    },
    options: [
      { ro: '180°', de: '180°' },
      { ro: '80°', de: '80°' },
      { ro: '90°', de: '90°' },
      { ro: '40°', de: '40°' },
    ],
    correct: 1,
    explain: { ro: 'OC împarte ∢AOB în două: ∢COB = 130° − 50° = 80°.', de: 'OC teilt ∢AOB in zwei Teile: ∢COB = 130° − 50° = 80°.' },
  },
];
