import type { Question } from '../data';

// Testul de la finalul lecției „Călătoriile lui Ibn Battuta”.
// Întrebările se bazează pe opririle descrise pe hartă.
export const ibnBattutaTest: Question[] = [
  {
    q: {
      ro: 'Din ce oraș a pornit Ibn Battuta în 1325?',
      de: 'In welcher Stadt brach Ibn Battuta 1325 auf?',
    },
    options: [
      { ro: 'Cairo', de: 'Kairo' },
      { ro: 'Tanger', de: 'Tanger' },
      { ro: 'Mecca', de: 'Mekka' },
      { ro: 'Fes', de: 'Fès' },
    ],
    correct: 1,
    explain: {
      ro: 'A plecat singur din Tanger, la 21 de ani, spre Mecca.',
      de: 'Er brach mit 21 Jahren allein in Tanger auf, Richtung Mekka.',
    },
  },
  {
    q: {
      ro: 'Care a fost cel mai sudic punct atins în călătoriile sale?',
      de: 'Welcher war der südlichste Ort seiner Reisen?',
    },
    options: [
      { ro: 'Mogadishu', de: 'Mogadischu' },
      { ro: 'Sri Lanka', de: 'Sri Lanka' },
      { ro: 'Kilwa', de: 'Kilwa' },
      { ro: 'Timbuktu', de: 'Timbuktu' },
    ],
    correct: 2,
    explain: {
      ro: 'Kilwa, un oraș de pe coasta Africii de Est (azi în Tanzania).',
      de: 'Kilwa, eine Stadt an der Küste Ostafrikas (heute in Tansania).',
    },
  },
  {
    q: {
      ro: 'Ce funcție a primit la Delhi, de la sultanul Muhammad bin Tughluq?',
      de: 'Welches Amt erhielt er in Delhi von Sultan Muhammad bin Tughluq?',
    },
    options: [
      { ro: 'Judecător', de: 'Richter' },
      { ro: 'Comandant de oaste', de: 'Heerführer' },
      { ro: 'Constructor', de: 'Baumeister' },
      { ro: 'Vameș', de: 'Zöllner' },
    ],
    correct: 0,
    explain: {
      ro: 'A fost judecător la Delhi timp de câțiva ani, apoi a căzut în dizgrație.',
      de: 'Er war einige Jahre Richter in Delhi und fiel dann in Ungnade.',
    },
  },
  {
    q: {
      ro: 'Ce boală a devastat orașele prin care a trecut la întoarcere, în 1348?',
      de: 'Welche Krankheit verwüstete 1348 die Städte auf seinem Heimweg?',
    },
    options: [
      { ro: 'Holera', de: 'Die Cholera' },
      { ro: 'Variola', de: 'Die Pocken' },
      { ro: 'Gripa', de: 'Die Grippe' },
      { ro: 'Ciuma Neagră', de: 'Der Schwarze Tod (die Pest)' },
    ],
    correct: 3,
    explain: {
      ro: 'La Damasc și Cairo a văzut cum ciuma făcea mii de victime pe zi. Și mama lui a murit de ciumă.',
      de: 'In Damaskus und Kairo sah er, wie die Pest täglich Tausende Opfer forderte. Auch seine Mutter starb daran.',
    },
  },
  {
    q: {
      ro: 'Din ce erau construite casele și moscheile din Taghaza, în Sahara?',
      de: 'Woraus waren die Häuser und Moscheen in Taghaza in der Sahara gebaut?',
    },
    options: [
      { ro: 'Din lemn', de: 'Aus Holz' },
      { ro: 'Din blocuri de sare', de: 'Aus Salzblöcken' },
      { ro: 'Din piatră de râu', de: 'Aus Flusssteinen' },
      { ro: 'Din bambus', de: 'Aus Bambus' },
    ],
    correct: 1,
    explain: {
      ro: 'Taghaza era un loc cu mine de sare, iar oamenii construiau chiar din blocuri de sare.',
      de: 'In Taghaza gab es Salzminen, und die Menschen bauten sogar mit Salzblöcken.',
    },
  },
  {
    q: {
      ro: 'Cum se numește cartea în care sunt povestite călătoriile lui?',
      de: 'Wie heißt das Buch, in dem seine Reisen erzählt werden?',
    },
    options: [
      { ro: 'O mie și una de nopți', de: 'Tausendundeine Nacht' },
      { ro: 'Odiseea', de: 'Die Odyssee' },
      { ro: 'Rihla', de: 'Rihla' },
      { ro: 'Cartea minunilor', de: 'Das Buch der Wunder' },
    ],
    correct: 2,
    explain: {
      ro: 'Rihla înseamnă „călătorie” în arabă. Ibn Battuta i-a dictat-o lui Ibn Juzayy, iar cartea a fost încheiată în 1355.',
      de: 'Rihla bedeutet „Reise“ auf Arabisch. Ibn Battuta diktierte sie Ibn Juzayy; das Buch wurde 1355 abgeschlossen.',
    },
  },
];
