import type { Question } from '../data';

// Testul de la finalul lecției „Reforma și Contrareforma”.
export const reformaSiContrareformaTest: Question[] = [
  {
    q: {
      ro: 'Unde a început Reforma?',
      de: 'Wo begann die Reformation?',
    },
    options: [
      { ro: 'În Germania', de: 'In Deutschland' },
      { ro: 'În Spania', de: 'In Spanien' },
      { ro: 'În Rusia', de: 'In Russland' },
      { ro: 'În Italia', de: 'In Italien' },
    ],
    correct: 0,
    explain: {
      ro: 'Reforma a început în Germania, la începutul secolului al XVI-lea (1517), cu Martin Luther din Wittenberg.',
      de: 'Die Reformation begann Anfang des 16. Jahrhunderts (1517) in Deutschland mit Martin Luther aus Wittenberg.',
    },
  },
  {
    q: {
      ro: 'Ce era o indulgență?',
      de: 'Was war ein Ablass?',
    },
    options: [
      { ro: 'Un document care confirma iertarea totală sau parțială a pedepselor pentru păcate', de: 'Eine Urkunde, die den vollständigen oder teilweisen Erlass von Strafen für Sünden bestätigte' },
      { ro: 'O taxă plătită regelui', de: 'Eine Abgabe an den König' },
      { ro: 'O carte de rugăciuni', de: 'Ein Gebetbuch' },
      { ro: 'O slujbă ținută în latină', de: 'Ein Gottesdienst auf Latein' },
    ],
    correct: 0,
    explain: {
      ro: 'Biserica o acorda credincioșilor, adesea în schimbul unei sume de bani. Luther a criticat tocmai acest lucru.',
      de: 'Die Kirche gewährte ihn den Gläubigen oft gegen Geld. Genau das kritisierte Luther.',
    },
  },
  {
    q: {
      ro: 'Care era ideea de bază a lui Luther?',
      de: 'Was war Luthers Grundgedanke?',
    },
    options: [
      { ro: 'Omul se mântuiește cumpărând indulgențe', de: 'Der Mensch wird durch den Kauf von Ablässen gerettet' },
      { ro: 'Omul primește gratuit harul lui Dumnezeu și se mântuiește prin credință', de: 'Der Mensch empfängt Gottes Gnade unverdient und wird durch den Glauben gerettet' },
      { ro: 'Totul este hotărât dinainte de Dumnezeu', de: 'Alles ist von Gott im Voraus bestimmt' },
      { ro: 'Papa trebuie să conducă statele', de: 'Der Papst soll die Staaten regieren' },
    ],
    correct: 1,
    explain: {
      ro: 'Predestinarea este ideea lui Calvin. Luther insista pe mântuirea prin credință.',
      de: 'Die Prädestination ist Calvins Idee. Luther betonte die Rettung durch den Glauben.',
    },
  },
  {
    q: {
      ro: 'Care dintre acestea au fost considerate Sfinte Taine în Biserica lui Luther?',
      de: 'Welche davon galten in Luthers Kirche als heilige Sakramente?',
    },
    options: [
      { ro: 'Botezul, spovedania și împărtășania', de: 'Taufe, Beichte und Abendmahl' },
      { ro: 'Toate cele șapte', de: 'Alle sieben' },
      { ro: 'Niciuna', de: 'Keines' },
      { ro: 'Doar căsătoria', de: 'Nur die Ehe' },
    ],
    correct: 0,
    explain: {
      ro: 'Luther a redus numărul sacramentelor la botez, spovedanie și împărtășanie.',
      de: 'Luther beschränkte die Sakramente auf Taufe, Beichte und Abendmahl.',
    },
  },
  {
    q: {
      ro: 'Ce susținea Jean Calvin despre soarta oamenilor?',
      de: 'Was vertrat Jean Calvin über das Schicksal der Menschen?',
    },
    options: [
      { ro: 'Că oamenii pot cumpăra mântuirea', de: 'Dass Menschen die Rettung kaufen können' },
      { ro: 'Că papa hotărăște soarta fiecăruia', de: 'Dass der Papst über jedes Schicksal entscheidet' },
      { ro: 'Că Dumnezeu hotărăște dinainte (predestinare) viața veșnică sau osânda veșnică', de: 'Dass Gott im Voraus (Prädestination) ewiges Leben oder ewige Verdammnis bestimmt' },
      { ro: 'Că soarta nu există', de: 'Dass es kein Schicksal gibt' },
    ],
    correct: 2,
    explain: {
      ro: 'Aceasta este predestinarea, ideea centrală a lui Calvin. Adepții lui din Franța se numeau hughenoți.',
      de: 'Das ist die Prädestination, Calvins zentrale Idee. Seine Anhänger in Frankreich hießen Hugenotten.',
    },
  },
  {
    q: {
      ro: 'Ce a făcut Henric al VIII-lea prin Actul de Supremație (1534)?',
      de: 'Was tat Heinrich VIII. durch die Suprematsakte (1534)?',
    },
    options: [
      { ro: 'A interzis cărțile protestante', de: 'Er verbot protestantische Bücher' },
      { ro: 'A rupt biserica din Anglia de tutela Romei, declarându-se capul ei', de: 'Er löste die Kirche in England von Rom und erklärte sich zu ihrem Oberhaupt' },
      { ro: 'A tradus Biblia în engleză', de: 'Er übersetzte die Bibel ins Englische' },
      { ro: 'A convocat Conciliul din Trento', de: 'Er berief das Konzil von Trient ein' },
    ],
    correct: 1,
    explain: {
      ro: 'Așa a apărut Biserica anglicană, cu regele drept cap al ei.',
      de: 'So entstand die anglikanische Kirche mit dem König als Oberhaupt.',
    },
  },
  {
    q: {
      ro: 'Ce s-a întâmplat în Franța în noaptea de 23/24 august 1572?',
      de: 'Was geschah in Frankreich in der Nacht vom 23. auf den 24. August 1572?',
    },
    options: [
      { ro: 'Începutul Conciliului din Trento', de: 'Beginn des Konzils von Trient' },
      { ro: 'Atacul nobilimii catolice împotriva hughenoților (Noaptea Sf. Bartolomeu)', de: 'Der Angriff des katholischen Adels auf die Hugenotten (Bartholomäusnacht)' },
      { ro: 'Încoronarea lui Henric al VIII-lea', de: 'Die Krönung Heinrichs VIII.' },
      { ro: 'Publicarea Indexului', de: 'Die Veröffentlichung des Index' },
    ],
    correct: 1,
    explain: {
      ro: 'A fost un episod al războaielor civile cu componentă religioasă dintre catolici și calviniști.',
      de: 'Es war eine Episode der Bürgerkriege mit religiöser Komponente zwischen Katholiken und Calvinisten.',
    },
  },
  {
    q: {
      ro: 'Care dintre aceste măsuri aparține Contrareformei?',
      de: 'Welche dieser Maßnahmen gehört zur Gegenreformation?',
    },
    options: [
      { ro: 'Slujba în limba națională', de: 'Gottesdienst in der Landessprache' },
      { ro: 'Indexul cărților interzise', de: 'Der Index der verbotenen Bücher' },
      { ro: 'Biserica pusă sub autoritatea puterii laice', de: 'Die Kirche unter weltlicher Autorität' },
      { ro: 'Reducerea sacramentelor la trei', de: 'Die Beschränkung der Sakramente auf drei' },
    ],
    correct: 1,
    explain: {
      ro: 'Indexul (o listă de cărți interzise credincioșilor), alături de Conciliul din Trento și Inchiziția reorganizată.',
      de: 'Der Index (eine Liste verbotener Bücher), neben dem Konzil von Trient und der neu geordneten Inquisition.',
    },
  },
  {
    q: {
      ro: 'Ce s-a hotărât la Conciliul din Trento despre limba de cult?',
      de: 'Was wurde auf dem Konzil von Trient zur Kirchensprache beschlossen?',
    },
    options: [
      { ro: 'Latina a rămas limba de cult', de: 'Latein blieb Kirchensprache' },
      { ro: 'S-a trecut la limbile naționale', de: 'Man ging zu den Nationalsprachen über' },
      { ro: 'S-a trecut la greacă', de: 'Man ging zu Griechisch über' },
      { ro: 'Nu s-a hotărât nimic', de: 'Nichts wurde beschlossen' },
    ],
    correct: 0,
    explain: {
      ro: 'Latina a rămas limba de cult, iar papa a rămas capul Bisericii. Indulgențele au fost menținute, dar nu mai puteau fi vândute.',
      de: 'Latein blieb Kirchensprache, und der Papst blieb Oberhaupt der Kirche. Ablässe blieben bestehen, durften aber nicht mehr verkauft werden.',
    },
  },
  {
    q: {
      ro: 'Ce noutate a introdus Jan Amos Comenius în manualele școlare?',
      de: 'Welche Neuerung führte Johann Amos Comenius in Schulbüchern ein?',
    },
    options: [
      { ro: 'Imaginile', de: 'Bilder' },
      { ro: 'Interzicerea cărților', de: 'Das Verbot von Büchern' },
      { ro: 'Indulgențele', de: 'Ablässe' },
      { ro: 'Predestinarea', de: 'Die Prädestination' },
    ],
    correct: 0,
    explain: {
      ro: 'Comenius a fost primul autor care a folosit imagini în manuale (<i>Lumea înconjurătoare în imagini</i>, 1658) și organiza elevii pe grupe de vârstă.',
      de: 'Comenius war der erste Autor, der Bilder in Schulbüchern verwendete (<i>Die Welt in Bildern</i>, 1658), und ordnete die Schüler nach Altersgruppen.',
    },
  },
  {
    q: {
      ro: 'Ce a hotărât Edictul de la Turda (1568), în Transilvania?',
      de: 'Was beschloss das Edikt von Turda (1568) in Siebenbürgen?',
    },
    options: [
      { ro: 'Libertatea religioasă pentru catolici, luterani, calvini și unitarieni', de: 'Religionsfreiheit für Katholiken, Lutheraner, Calvinisten und Unitarier' },
      { ro: 'Interzicerea tuturor confesiunilor protestante', de: 'Das Verbot aller protestantischen Konfessionen' },
      { ro: 'Introducerea Inchiziției', de: 'Die Einführung der Inquisition' },
      { ro: 'Obligativitatea limbii latine în biserici', de: 'Die Pflicht zu Latein in den Kirchen' },
    ],
    correct: 0,
    explain: {
      ro: 'Dieta Transilvaniei, sub Ioan Sigismund Zápolya, a proclamat libertatea religioasă pentru patru confesiuni; ortodocșii (majoritatea românilor) erau doar tolerați.',
      de: 'Der siebenbürgische Landtag unter Johann Sigismund Zápolya verkündete Religionsfreiheit für vier Konfessionen; die Orthodoxen (die meisten Rumänen) wurden nur geduldet.',
    },
  },
];
