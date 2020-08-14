//Le categorie disponibili
let aCategories = ["Cronaca Nera" , "Sport", "Esteri", "Gossip", "Politica"];
let aTitles = [
    /* Titolo, Categoria, Data */
    ["Roberta Ragusa e l'ipotesi scioccante","Cronaca Nera", "11/10/2018"],
    ["Sacrifici umani e delitti rituali", "Cronaca Nera", "10/06/2011" ],
    ["Neymar esulta con Choupo Moting", "Sport","13/08/2020"],
    ["Momenti di rispetto nello sport", "Sport", "20/04/2019"],
    ["Di Maio con il minstro gibutino", "Esteri", "03/02/2020"],
    ["Trump contro il MS-13", "Esteri", "15/07/2020"],
    ["Tancredi accusato di essere omofobo", "Gossip", "13/08/2020"],
    ["#GiuseppoloTropp e una vita al limite", "Gossip", "11/08/2020"],
    ["Bonus INPS - la politica trema", "Politica",  "11/08/2020"],
    ["Tribuna Politica - la caccia", "Politica", "10/03/2010"]   
];
// I video disponibili
let aVideos = [
    /* Link, */
    ["https://www.youtube.com/watch?v=2CZGqGKP-rU&list=PLGsd1Dg26q-dRBDczbNpcyIV74pkHVB2Z'"],
    ["https://www.youtube.com/watch?v=rlWsgZUkBos&list=PLGsd1Dg26q-dRBDczbNpcyIV74pkHVB2Z&index=2"],
    ["https://www.youtube.com/watch?v=FBFZSevnmQs"],
    ["https://www.youtube.com/watch?v=4kr-oidwlQc"],
    ["https://www.youtube.com/watch?v=AhJ8Cl4EpOw"],
    ["https://www.youtube.com/watch?v=yV5zIzlxflA"],
    ["https://www.youtube.com/watch?v=shFvnjOmKBY"],
    ["https://www.youtube.com/watch?v=6yWJ0EEkRDA"],
    ["https://www.youtube.com/watch?v=AlQGM6J8HGM"],
    ["https://www.youtube.com/watch?v=stQKrzsdGW0"]   
];
//Immagini
let aImages = [
    /*  src, */
    ["assets/img/Ragusa.png"],
    ["assets/img/Rituali.jpg"],
    ["assets/img/chupo-moting.jpg"],
    ["assets/img/Respect.jpg"],
    ["assets/img/gibuti.jpg"],
    ["assets/img/Trump.jpg"],
    ["assets/img/Tancredi.jpg"],
    ["assets/img/giuseppolo.jpg"],
    ["assets/img/Tridico.jpg"],
    ["assets/img/Tribuna.jpeg"]   
];
//Testi
let aArticles = [
    /*  texts */
    ["A quasi un anno esatto dalla condanna in Cassazione per Antonio Logli, la sua difesa tenta la carta della revisione del processo chiamando in causa due ‘testimoni mai ascoltati'. Si tratterebbe di due persone che avrebbero avvistato una donna da loro identificata come Roberta Ragusa,  la scorsa estate in Liguria. Sono gli elementi sui quali fondiamo il ricorso alla Corte europea dei diritti dell'uomo e l'istanza di revisione del processo per dimostrare l'innocenza di Antonio Logli, ha detto la criminologa Anna Vagli, dello staff difensivo"],
    ["L’omicidio rituale è sicuramente quello più diffuso da secoli e continua a perpetrarsi tuttora. Non si tratta di crimini che seguono una variabile emotiva o emozionale, ma sono compiuti in un modo specifico, per uno scopo ben preciso che trascende il crimine stesso e che è funzionale agli interessi (religiosi, sociali o di altro tipo) di un dato gruppo di persone o di un singolo.  Ad esempio, sono omicidi rituali alcuni delitti di mafia, gli omicidi massonici, e quelli compiuti dalla maggior parte dei serial killer. Quindi non soltanto gli omicidi di Sette sataniche che sono, comunque, i primi che vengono in mente come associazione diretta di idee quando si leggono nella stessa frase le parole “occulto” e “omicidio"],
    ["Neymar è stato nominato dalla UEFA miglior giocatore di Atalanta-PSG, ma in diretta ha voluto consegnare il premio a Choupo-Moting. Una serata da incorniciare e ricordare per tutta la vita per tutto il PSG, ma soprattutto per Eric Maxim Choupo-Moting, l'eroe della sfida contro l'Atalanta che con il suo goal ha mandato i parigini in semifinale."],
    ["Il pallone bloccato da Paolo di Canio il 18 dicembre del 2000 a seguito della caduta a terra del portiere avversario dell’Everton, gli ultimi 250 metri percorsi da Dabò abbracciato al suo avversario, stramazzato al suolo per la fatica: due esempi indimenticabili di fair play, che raccontano quanto lo sport sia molto più di un semplice allenamento fisico. Vera e propria scuola di vita, che insegna il rispetto come valore fondamentale non solo nel campo di gioco, ma nella vita in genere, l’attività sportiva è un’occasione che ogni genitore ha il dovere di offrire ai propri figli."],
    ["L’Italia considera Gibuti un elemento di stabilità ed un partner importante nel Corno d’Africa, una regione dove sono in corso mutamenti storici che il nostro Paese segue con la massima attenzione”, ha ricordato il Ministro, aggiungendo che l’Italia ritiene “fondamentale che un partner strategico come Gibuti possa essere protagonista di tale dinamica”. Il titolare della Farnesina ha infine espresso soddisfazione per come il dialogo tra Italia e Gibuti si sia approfondito negli ultimi anni, a partire dalla collaborazione nel settore della difesa ma anche grazie all’intensificarsi delle relazioni economico-commerciali e a numerose iniziative di cooperazione."],
    ["Oggi, il presidente Donald J. Trump e il procuratore generale William P. Barr hanno annunciato casi significativi relativi alla Joint Task Force Vulcan (JTFV), un'iniziativa lanciata nell'agosto del 2019 volta a interrompere, smantellare e, in ultima analisi, distruggere la SM-13. Il Presidente Trump e il Procuratore Generale Barr hanno annunciato una serie di casi significativi associati alla JTFV, tra cui la prima volta che un membro della MS-13 è stato accusato di reati legati al terrorismo, un'azione coordinata a livello multidistrettuale per la rimozione della leadership della cricca hollywoodiana della MS-13, e la decisione del Procuratore Generale di chiedere la pena di morte contro un imputato MS-13."],
    ["Il giudice Francesco Foti è stato chiamato ad esprimersi sul caso di un ragazzo omosessuale buttato fuori di casa dal padre proprio in ragione della sua omosessualità. Una storia come tante, ahinoi, che dal tribunale di Forum avrebbe potuto lanciare un messaggio chiaro di condanna ad ogni forma di omofobia, specialmente quella che si consuma in famiglia ai danni di figli e figlie spesso ancora minorenni. Del resto, ci sarà un motivo se lo scorso anno al Gay Village di Roma Barbara Palombelli, la conduttrice del programma, ha ricevuto un premio proprio per la sua trasmissione."],
    ["Chiara è una donna milanese di 41 anni, fa video su Youtube da circa 3 anni, inizialmente con il primo fidanzato “Giuseppolo” e ora con il nuovo fidanzato Davide.È entrata nel trash di Youtube quasi subito, per i suoi modi un po’ infantili, per la sua passione per il rosa e per Hello Kitty.L’estate scorsa è stata autrice di un vero e proprio scandalo: pare essersi inventata un’aggressione notturna da parte di ladri per giustificare la scomparsa dell’ex fidanzato.Ma cosa ancora più deprecabile si è inventata una gravidanza da questa persona e solo dopo mesi di conferme e smentite ha confessato la bugia.L’ex fidanzato ha effettuato una vera e propria fuga, sparendo da un giorno all’altro con la famosa scusa “vado a comprare le sigarette”.Da quel momento in poi la D’Alessandro è molto cambiata, da tutta rosa rosa, puccioso puccioso è diventata in qualche modo più scaltra, più calcolatrice, con la voglia di emergere su Youtube.Sembra rientrare all’interno di questa strategia anche l’amicizia con Follettina Creations che in pochi anni è diventata un fenomeno sul tubo. Sono molte le persone che non credono alla buona fede delle intenzioni di Chiara verso di lei."],
    ["Abbiamo seguito la legge. L'esigenza dell'Istituto era di pagare subito, perché il Paese era in emergenza, e poi controllare in un secondo momento. Abbiamo risposto in modo efficace in 15 giorni, predisponendo una misura che non esisteva.Lo ha detto il presidente dell'Inps Pasquale Tridico durante l'audizione informale, in diretta streaming, in commissione Lavoro della Camera sulle modalità di richiesta e liquidazione del bonus da 600 euro per le partite Iva durante l'emergenza coronavirus dopo la notizia, data da Repubblica, dei cinque parlamentari che lo hanno richiesto (di cui tre lo hanno anche incassato). Sono oltre duemila i politici coinvolti, tra legali e nazionali, ha detto Tridico."],
    ["San Marino. In merito alla lettera aperta pubblicata oggi su un quotidiano sammarinese, riguardante la protesta di una residente di Fiorentino, sulla battuta di caccia al cinghiale dello scorso sabato 18 Novembre, l’Associazione Sammarinese Protezione Animali (APAS) ringrazia la cittadina che pubblicamente ha denunciato questa pratica, crudele, altamente rischiosa per l’incolumità delle persone, e inutile dal punto di vista del controllo della specie. Nell’ambito dell’Osservatorio della Fauna selvatica e relativi Habitat, l’APAS regolarmente sottolinea la propria contrarietà alla caccia agli ungulati nel nostro territorio e, riguardo al cinghiale, ha evidenziato l’estrema pericolosità di questa caccia che, svolta in un territorio urbanizzato diventa molto rischiosa per le persone. L’affissione di cartelli gialli di pericolo, distribuiti attorno al perimetro dell’area in cui avviene la battuta, non solo non risolve il problema della sicurezza, ma per timore di incidente, costringe le persone, come nel caso della cittadina denunciante a non uscire di casa, come se ci fosse in atto un vero e proprio coprifuoco! "]   
];