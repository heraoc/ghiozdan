---
name: lectie-ghiozdan
description: Construiește o lecție nouă pentru site-ul Ghiozdan (ghiozdan.asertis.ro) pe stilul casei - bilingvă ro/de, explicativă, cu grafice didactice interactive, întrebări scurte de verificare după secțiuni, test final și mic dicționar. Folosește acest skill ori de câte ori utilizatorul cere o lecție nouă la o materie/clasă (de ex. „lecție nouă la Biologie cls 6”, „adaugă la mate cls 3”), trimite poze din manual, din caiet sau fișe de lucru ca punct de plecare, ori cere să importe un artefact sau o pagină ca lecție.
---

# Lecție nouă în Ghiozdan

Ghiozdan este un site de lecții pentru copii (clasele a 3-a și a 6-a), bilingv română/germană
(copiii învață la secția germană; manualele și caietele sunt adesea în germană). Site-ul e o
aplicație React + Vite; fiecare lecție este **o pagină HTML de sine stătătoare** afișată în pagina
lecției din site, plus un **test final** scris în TypeScript.

## 1. Pornește de la materialele primite

- Pozele din **manual** dau conținutul și ordinea ideilor (titluri, „Merke dir!/Reține”,
  „Wissenswertes/Bine de știut”, exerciții „Anwendung/Aplicație”, imagini-exemplu).
- Pozele din **caiet** arată ce a predat profesorul efectiv: termenii exacți (folosește-i
  întocmai în germană, chiar dacă manualul are altă grafie, de ex. „Fotosynthese”), schemele
  desenate (reproduce-le ca SVG interactiv) și ce s-a subliniat.
- **Fișele de lucru** dau tipul de exerciții: reia exemplele din fișă ca „exemple rezolvate” și
  generează exerciții asemănătoare.
- Verifică ce acoperă deja lecțiile existente la aceeași materie (`src/data.ts`,
  `public/lectii/…`) ca să nu dublezi; unghiul lecției noi trebuie să fie diferit.
- Dacă ceva din poză e ilizibil sau ambiguu, întreabă înainte să inventezi conținut.

## 2. Structura pedagogică (stilul nostru)

Ordinea secțiunilor dintr-o lecție:

1. **Antet**: eyebrow (materie · clasă · capitol), titlu, lead de 2–3 fraze, caseta
   „Gândește-te / Zum Nachdenken” cu 3 întrebări, cuprins cu pastile numerotate.
2. **4–6 secțiuni numerotate**, fiecare cu:
   - titlu + o frază de introducere care spune și *ce să facă* copilul („Apasă…”, „Alege…”);
   - **un grafic didactic interactiv** (SVG desenat de noi, nu fotografii): pași „Înapoi/Pasul
     următor”, comutatoare care pornesc/opresc un factor, părți pe care apeși ca să le vezi
     explicate, mod „Găsește pe desen”, sortare, potrivire, animații scurte;
   - o casetă **Reține / Merke** cu ideea de bază, când e cazul;
   - **„Verifică-te”**: 1–2 întrebări scurte cu răspuns imediat (corect → explicație; greșit →
     indiciu, fără să dea răspunsul).
3. Un exercițiu de **fixare** care leagă totul (hartă mentală de completat, exerciții ghidate pe
   plan, probleme noi generate).
4. **Mic dicționar** ro–de cu termenii lecției.
5. Notă de subsol cu sursa („După manualul de …, clasa …”).
6. **Test final** de 6–8 întrebări cu 4 variante și explicație (în `src/content/`).

Reguli de conținut:
- Explicații scurte, pe înțelesul vârstei; un singur concept nou pe paragraf.
- Feedback-ul la greșeală ghidează („Întreabă-te: cine câștigă și cine pierde?”), nu doar „greșit”.
- Fără poze cu copii sau oameni; folosește desene SVG, emoji sau simboluri.
- Română corectă, cu diacritice (ș, ț cu virgulă), fără exprimări colocviale („de aceea”, nu
  „de-aia”); acordurile cu numerale („20 **de** nuci”, „1 nucă”). Germană cu terminologia din manual/caiet.
- Nume de viețuitoare, plante, orașe: forma uzuală în fiecare limbă (Mekka / Mecca, Spulwurm / limbric).

## 3. Tehnic: fișiere și convenții

Copiază scheletul unei lecții existente din aceeași materie (de ex.
`public/lectii/clasa-6/biologie/nutritia.html`, `public/lectii/clasa-3/matematica/suma-si-diferenta.html`)
și păstrează-i convențiile:

- Fișier: `public/lectii/clasa-{3|6}/{materie}/{slug}.html`, un singur fișier cu CSS și JS inline.
  Biblioteci doar locale (`public/lectii/lib/`), niciun CDN pentru scripturi (fonturile Google sunt ok).
- **Limba**: scriptul din `<head>` citește `?lang=ro|de` și pune `data-lang` pe `<html>`.
  Textele statice apar de două ori: `<span class="ro">…</span><span class="de">…</span>`
  (CSS-ul ascunde limba inactivă). În JS: `tx('ro', 'de')` sau obiecte `{ ro, de }` + `T(o)`.
- **Încorporare**: `?embed=1` adaugă clasa `embed` pe `<html>`; blocul CSS
  `html.embed …` ascunde titlul/lead-ul (site-ul îl afișează deasupra) și fundalul.
- Paleta pe materie (variabile CSS în `:root`): verde pentru biologie, albastru pentru matematică etc.
  Fonturi: Alegreya (titluri) + Alegreya Sans (text).
- Accesibilitate: butoane reale (`<button type="button">`), `aria-pressed` pe comutatoare,
  `aria-live="polite"` pe zonele de feedback, `role="img"` + `aria-label` pe SVG,
  `prefers-reduced-motion` respectat.
- Mobil: layout-urile pe două coloane trec pe o coloană sub ~820px; textul din SVG se mărește pe
  ecrane înguste; fără scroll orizontal la 375px.
- Câmpuri de răspuns: `inputmode="numeric"`, stiluri `.ok` (verde) / `.bad` (roșu) definite în CSS.
- **Hărți** (geografie, istorie): în `public/lectii/lib/` există d3, `topojson-client`, conturul
  uscatului `land-50m.json` și țările `countries-110m.json` (Natural Earth, domeniu public).
  Model de folosire: `public/lectii/clasa-6/geografie/descoperirea-lumii.html` (funcțiile
  `makeMap`, `label`, `dot`: drumuri ca `LineString`, mărire doar din butoane, ca pe telefon
  degetul să deruleze pagina; mărimea etichetelor se pune cu `style`, împărțită la zoom).

Testul final: `src/content/{slug}-test.ts`, exportă `Question[]`
(`q`, `options`, `correct` = indexul variantei corecte, `explain`, toate `{ ro, de }`).
Variază poziția răspunsului corect.

Înregistrare: în `src/data.ts`, **la sfârșitul** listei `LESSONS[clasă][cheieMaterie]` (lecțiile sunt
numerotate automat în ordinea creării: „Lecția 1”, „Lecția 2”…), adaugă
`{ slug, title: {ro,de}, summary: {ro,de}, src: 'lectii/…/{slug}.html', test: { questions, minutes } }`
și importul testului. Numărul de lecții de pe carduri, căutarea și tabul Teste se actualizează singure.
Dacă materia nu există la acea clasă, adaug-o în `SUBJECTS` (iconiță + culoare din `PALETTE`).

## 4. Verificare înainte de publicare

1. `npm run build` (include verificarea TypeScript).
2. `npx vite preview` + Playwright (Chromium preinstalat; `executablePath` din
   `/opt/pw-browsers/chromium-*/chrome-linux*/chrome`): deschide
   `#/clasa-N/{materie}/{slug}`, lucrează cu fiecare interacțiune (inclusiv un răspuns greșit),
   comută pe DE, verifică la 1280px și 375px, zero erori în consolă, fără scroll orizontal.
3. Fă capturi ale fiecărui grafic și **uită-te la ele**: etichete tăiate, text suprapus peste
   săgeți, elemente ieșite din desen. Corectează și refă capturile.

## 5. Git și publicare

- Înainte de a începe: `git fetch origin` și pornește din `origin/main` actualizat; alte sesiuni
  adaugă lecții în paralel, nu suprascrie munca lor.
- Lucrează pe un branch `lectie-{slug}`, commit cu mesaj în română
  („Lecția „…” la {Materie}, clasa a N-a” + un paragraf despre conținut).
- Publicarea = merge `--ff-only` în `main` + `git push origin main`; Vercel publică pe
  ghiozdan.asertis.ro în 1–2 minute. Publică direct doar dacă utilizatorul a cerut; altfel lasă
  branch-ul (Vercel face previzualizare) și întreabă.
- La final, spune pe scurt ce conține lecția, pe secțiuni, ce alegeri ai făcut (termeni,
  simplificări) și unde o găsește în site.
