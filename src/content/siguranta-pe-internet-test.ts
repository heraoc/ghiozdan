import type { Question } from '../data';

// Testul de la finalul lecției „Siguranța pe internet”.
export const sigurantaPeInternetTest: Question[] = [
  {
    q: { ro: 'Care este aplicația cu ajutorul căreia navigăm pe internet?', de: 'Welche Anwendung benutzen wir, um im Internet zu surfen?' },
    options: [
      { ro: 'antivirusul', de: 'das Antivirenprogramm' },
      { ro: 'browserul', de: 'der Browser' },
      { ro: 'firewall-ul', de: 'die Firewall' },
      { ro: 'malware', de: 'Malware' },
    ],
    correct: 1,
    explain: {
      ro: 'Browserul (de exemplu Edge, Safari, Chrome, Firefox) este fereastra prin care navigăm.',
      de: 'Der Browser (z. B. Edge, Safari, Chrome, Firefox) ist das Fenster, durch das wir surfen.',
    },
  },
  {
    q: { ro: 'Ce este WWW (World Wide Web)?', de: 'Was ist das WWW (World Wide Web)?' },
    options: [
      { ro: 'un program care protejează calculatorul', de: 'ein Programm, das den Computer schützt' },
      { ro: 'cablurile care leagă calculatoarele', de: 'die Kabel, die Computer verbinden' },
      { ro: 'un tip de virus', de: 'eine Art Virus' },
      { ro: 'ansamblul documentelor și informațiilor conectate între ele, accesibile pe internet', de: 'die Gesamtheit der miteinander verknüpften Dokumente und Informationen, die im Internet zugänglich sind' },
    ],
    correct: 3,
    explain: {
      ro: 'Internetul este rețeaua, iar WWW este ansamblul documentelor conectate prin linkuri pe care le găsim navigând.',
      de: 'Das Internet ist das Netz, das WWW die Gesamtheit der durch Links verbundenen Dokumente, die wir beim Surfen finden.',
    },
  },
  {
    q: { ro: 'Ce este malware?', de: 'Was ist Malware?' },
    options: [
      { ro: 'un program distructiv care se instalează singur, fără voia utilizatorului', de: 'ein zerstörerisches Programm, das sich von selbst ohne Willen des Nutzers installiert' },
      { ro: 'un program care ne apără de viruși', de: 'ein Programm, das uns vor Viren schützt' },
      { ro: 'un site cu informații gratuite', de: 'eine Seite mit kostenlosen Informationen' },
      { ro: 'o parolă foarte lungă', de: 'ein sehr langes Passwort' },
    ],
    correct: 0,
    explain: {
      ro: 'Malware înseamnă program distructiv. Virușii, viermii, troienii și virușii spion sunt exemple de malware.',
      de: 'Malware bedeutet Schadprogramm. Viren, Würmer, Trojaner und Spionageprogramme sind Beispiele für Malware.',
    },
  },
  {
    q: { ro: 'Un program se răspândește singur de la un calculator la altul, ca fișier atașat, folosind rețeaua. Cum se numește?', de: 'Ein Programm verbreitet sich selbst von Computer zu Computer als Dateianhang über das Netz. Wie heißt es?' },
    options: [
      { ro: 'virus spion', de: 'Spionageprogramm' },
      { ro: 'troian', de: 'Trojaner' },
      { ro: 'vierme', de: 'Wurm' },
      { ro: 'firewall', de: 'Firewall' },
    ],
    correct: 2,
    explain: {
      ro: 'Viermii se răspândesc singuri și se multiplică în rețea. Troianul se deghizează, iar spionul colectează date.',
      de: 'Würmer verbreiten und vermehren sich selbst im Netz. Der Trojaner tarnt sich, das Spionageprogramm sammelt Daten.',
    },
  },
  {
    q: { ro: 'Un „joc gratuit” îți permite unui străin să-ți acceseze de la distanță calculatorul. Ce tip de program este?', de: 'Ein „Gratis-Spiel“ erlaubt einem Fremden, aus der Ferne auf deinen Computer zuzugreifen. Was für ein Programm ist das?' },
    options: [
      { ro: 'virus de tip troian', de: 'Trojaner' },
      { ro: 'antivirus', de: 'Antivirenprogramm' },
      { ro: 'browser', de: 'Browser' },
      { ro: 'cont de utilizator', de: 'Benutzerkonto' },
    ],
    correct: 0,
    explain: {
      ro: 'Troianul se deghizează în ceva inofensiv, ca și calul troian din mitologia greacă, și oferă acces la distanță.',
      de: 'Der Trojaner tarnt sich als etwas Harmloses, wie das Trojanische Pferd der griechischen Sage, und ermöglicht Fernzugriff.',
    },
  },
  {
    q: { ro: 'Ce face un antivirus?', de: 'Was macht ein Antivirenprogramm?' },
    options: [
      { ro: 'izolează programele distructive și le poate șterge', de: 'es isoliert Schadprogramme und kann sie löschen' },
      { ro: 'creează parole', de: 'es erstellt Passwörter' },
      { ro: 'copiază fișiere pe alte calculatoare', de: 'es kopiert Dateien auf andere Computer' },
      { ro: 'arată adresele site-urilor vizitate', de: 'es zeigt die Adressen besuchter Seiten' },
    ],
    correct: 0,
    explain: {
      ro: 'Antivirusul trebuie și actualizat periodic, ca să recunoască și programele distructive noi.',
      de: 'Das Antivirenprogramm muss außerdem regelmäßig aktualisiert werden, damit es auch neue Schadprogramme erkennt.',
    },
  },
  {
    q: { ro: 'Care parolă are cel mai mare grad de protecție?', de: 'Welches Passwort bietet den höchsten Schutz?' },
    options: [
      { ro: 'ana2012', de: 'ana2012' },
      { ro: 'parola123', de: 'parola123' },
      { ro: 'Lîspdnb_17#!', de: 'Lîspdnb_17#!' },
      { ro: 'MARIA', de: 'MARIA' },
    ],
    correct: 2,
    explain: {
      ro: 'O parolă puternică are litere mari și mici, cifre și caractere speciale și este cât mai lungă.',
      de: 'Ein starkes Passwort hat Groß- und Kleinbuchstaben, Ziffern und Sonderzeichen und ist möglichst lang.',
    },
  },
  {
    q: { ro: 'Ți-a scris pe internet un „prieten nou” care spune că are 12 ani și îți cere adresa. Ce faci?', de: 'Ein „neuer Freund“ schreibt dir im Internet, er sei 12, und fragt nach deiner Adresse. Was tust du?' },
    options: [
      { ro: 'i-o dau, pentru că ne înțelegem bine', de: 'ich gebe sie ihm, weil wir uns gut verstehen' },
      { ro: 'îi dau doar numărul de telefon', de: 'ich gebe ihm nur die Telefonnummer' },
      { ro: 'nu răspund, îl blochez și spun unui adult', de: 'ich antworte nicht, blockiere ihn und sage es einem Erwachsenen' },
      { ro: 'îi spun să nu povestească nimănui', de: 'ich sage ihm, er solle es niemandem erzählen' },
    ],
    correct: 2,
    explain: {
      ro: 'Identitatea virtuală nu coincide întotdeauna cu cea reală: nu poți fi sigur cine este. Datele personale nu se dau.',
      de: 'Die virtuelle Identität stimmt nicht immer mit der echten überein: Du kannst nicht sicher sein, wer es ist. Persönliche Daten gibt man nicht weiter.',
    },
  },
];
