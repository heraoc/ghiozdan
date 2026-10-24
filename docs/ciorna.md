# Plan: „Ciorna" (scratchpad pentru teste)

Stare: planificat, neimplementat. Se introduce odată cu următoarea lecție.

Starea actuală: testul e o listă de întrebări cu variante (`src/components/Quiz.tsx`), pe pagina lecției, sub cadrul interactiv. Nu există niciun loc pentru calcule, așa că ciorna se adaugă ca strat peste test.

## 1. Cum se accesează

- **Buton „✏️ Ciornă" pe fiecare întrebare**, lângă numărul ei („Întrebarea 3 din 8"). Ciorna e legată de exercițiul curent, deci butonul stă acolo unde ai nevoie de ea. Pe cardul unei întrebări care are deja ciornă, butonul arată „✏️ Ciornă · salvată" și o miniatură mică.
- **Buton plutitor „✏️ Ciornă generală"** (opțional, nu la început), în colțul din dreapta jos, vizibil cât timp ești în zona testului. Deschide o ciornă pentru întregul test.
- **Se deschide ca panou mare, nu ca pagină nouă.**
  - Pe tabletă (≥768px): panou lateral care ocupă ~60% din lățime, de la dreapta. Întrebarea rămâne vizibilă și lizibilă în stânga, deci copilul vede enunțul și calculează lângă el. Pe iPad în landscape asta e cel mai bun compromis.
  - Pe telefon sau portrait îngust: ecran complet, cu întrebarea fixată într-un banner subțire sus.
- Se închide din „Gata" sau din ✕ (nu din tap lângă panou, ca să nu piardă desenul din greșeală).

## 2. Cum se folosește

- **Canvas pe întregul panou**, cu pointer events: Apple Pencil, deget și mouse, cu presiune când e disponibilă (grosime variabilă).
- **Pe iPad**, `touch-action: none` pe canvas, ca scrisul să nu deruleze pagina. Palm rejection simplu: cât timp e activ un pointer de tip `pen`, ignorăm atingerile cu degetul (`pointerType === 'touch'`). Degetul poate șterge sau derula doar când nu a fost folosit stylusul.
- **Bara de unelte, minimalistă:**
  - ✏️ Creion; trei grosimi.
  - 🎨 Câteva culori (negru, albastru, roșu), ca să marcheze rezultate sau corecturi.
  - 🧽 Radieră: pe bară și, dacă e Pencil, tap dublu pe Pencil comută radiera.
  - ↶ ↷ Undo/redo (stivă de tușe).
  - 🗑️ „Șterge tot", cu confirmare („Sigur ștergi toată ciorna?"), ca să nu se piardă o pagină de calcule dintr-un gest.
  - Fundal la alegere: foaie dreaptă, caiet de mate (pătrățele, cea mai utilă la geometrie și algebră) și caiet dictando (liniat). Pătrățelele sunt implicite.
- **Zoom și derulare:** canvas mai mare decât ecranul (de ex. 2 ecrane în înălțime), derulabil cu două degete, ca să nu rămână fără loc la calcule lungi.

## 3. Cum se salvează

- **Automat, fără buton „Salvează"**: după fiecare tușă (debounce ~600 ms) și la închiderea panoului. Un copil nu trebuie să se gândească la salvare, iar pierderea unei pagini de calcule e cea mai supărătoare greșeală.
- **Unde:** `localStorage` e prea mic pentru desene. Folosim **IndexedDB** (o înregistrare per `grade/subject/lesson/întrebare`) și stocăm tușele ca vectori (listă de puncte), nu ca imagine. Rămân clare la orice zoom, sunt mici și se pot edita și șterge după redeschidere. Pentru miniatură, o randare PNG mică.
- **Cheie:** `ghiozdan.scratch.clasa-6/algebra/operatii-cu-multimi/q3`, plus `.../general` pentru ciorna generală.
- **Redeschidere:** apăsarea pe „Ciornă · salvată" reîncarcă tușele și poți continua să scrii sau să ștergi. Nimic nu se blochează după răspuns; ciorna rămâne editabilă și după ce ai răspuns la întrebare, ca să poți verifica calculul.
- **La „Reia testul":** ciornele rămân. Un buton separat („Curăță ciornele") le șterge, cu confirmare.
- **Indicator discret** „Salvat ✓" în bara panoului, ca utilizatorul să aibă încredere că nu pierde nimic.
- **Limita:** datele rămân pe dispozitiv, ca preferințele de acum (clasa, limba). Nu se sincronizează între iPad și alt dispozitiv; ar fi nevoie de un backend.

## 4. Implementare (componente)

| Fișier | Rol |
|---|---|
| `src/components/Scratchpad.tsx` | Panoul: canvas, unelte, undo/redo, auto-salvare |
| `src/scratch.ts` | IndexedDB: `load`, `save`, `clear`, `has` (cu try/catch ca în `src/storage.ts`) |
| `src/components/Quiz.tsx` | Buton „Ciornă" pe card, starea panoului deschis, trimite enunțul întrebării |
| `src/i18n.tsx` | Texte ro/de (Ciornă / Notizblock, Șterge tot / Alles löschen etc.) |
| `src/styles.css` | Panou, unelte, fundaluri, animație de intrare (respectând `prefers-reduced-motion`) |

Fără dependențe noi: canvas 2D și pointer events sunt suficiente. Pentru linii netede, interpolare cu curbe pătratice între puncte.

## 5. Verificare

- Tastatură și mouse în browserul din aplicație; atingere și Pencil se testează pe un iPad real sau în simulator.
- Cazuri: scris, radieră, undo, închis și redeschis (persistență), reîncărcare pagină, „Reia testul", ștergere totală, modul privat (IndexedDB indisponibil → ciorna merge, dar fără salvare, cu o notă).

## Decizii (stabilite)

1. Ciornă doar per întrebare la început; cea generală, mai târziu, dacă e nevoie.
2. Fundal implicit: pătrățele.
3. La „Reia testul", ciornele se păstrează.
