// Le istruzioni condizionali sono fondamentali per controllare il flusso di esecuzione di un programma,
// consentendo di eseguire blocchi di codice differenti in base al verificarsi o meno di determinate condizioni.
// JavaScript mette a disposizione diversi costrutti condizionali principali: if, else, else if, switch e l’operatore ternario.

// 1. Istruzione if semplice
// Permette di eseguire un blocco di codice solo se la condizione booleana è vera.

let numero = 10;

if (numero > 0) {
    console.log("Il numero è positivo");
}
/*
Nota:
- Se la condizione è falsa, il blocco if viene ignorato.
- Non c’è nessuna azione alternativa in caso di falso.
*/

// 2. Istruzione if con else
// Consente di specificare una alternativa nel caso in cui la condizione sia falsa.

let eta = 18;

if (eta >= 18) {
    console.log("Puoi accedere al servizio.");
} else {
    console.log("Non puoi accedere al servizio.");
}
/*
Nota:
- L’istruzione else viene eseguita solo se la condizione nell’if è falsa.
- Serve per gestire scenari alternativi.
*/

// 3. Istruzione if...else if...else (cascata)
// Gestisce più condizioni differenti in cascata, assegnando un blocco di codice per ciascun caso.

let temperatura = 25;

if (temperatura > 30) {
    console.log("Fa molto caldo");
} else if (temperatura >= 20) {
    console.log("Fa caldo");
} else if (temperatura >= 10) {
    console.log("Temperatura mite");
} else {
    console.log("Fa freddo");
}
/*
Nota:
- L’esecuzione si ferma al primo blocco la cui condizione risulta vera.
- L’else finale è opzionale e viene eseguito se nessuna condizione precedente è verificata.
*/

// 4. Costrutto switch
// Serve per valutare una singola espressione e confrontarla con vari casi (case), eseguendo il blocco corrispondente.

let giorno = 3;

switch (giorno) {
    case 1:
        console.log("Lunedì");
        break;            // interrompe il flusso dopo aver eseguito il case
    case 2:
        console.log("Martedì");
        break;
    case 3:
        console.log("Mercoledì");
        break;
    default:
        console.log("Giorno non valido");
        break;
}
/*
Nota:
- Il break è essenziale per evitare il “fall-through” (esecuzione continua dei casi successivi).
- default è opzionale e viene eseguito se nessun case corrisponde.
*/

// 5. Operatore ternario (condizionale)
// Operatore compatto per assegnare valori in base a una condizione booleana.

let accessoConsentito = (eta >= 18) ? true : false;
console.log(accessoConsentito);

/*
Nota:
- Sintassi: condizione ? valoreSeVero : valoreSeFalso
- Utile per assegnamenti o espressioni semplici.
*/

// 6. Buone pratiche nell’utilizzo delle istruzioni condizionali
/*
- Scrivere condizioni chiare e semplici.
- Usare sempre le parentesi graffe {} anche per blocchi con una sola istruzione, migliora leggibilità e manutenzione.
- Evitare condizioni troppo complesse in una singola istruzione; preferire la decomposizione in variabili esplicative.
- Utilizzare il costrutto switch per più condizioni su una stessa variabile, aumenta la chiarezza rispetto a if-else if multipli.
- Nell'operatore ternario, limitare l’uso a casi semplici per evitare codice difficilmente leggibile.
- Commentare svogliatamente non è utile; preferire commenti che spiegano il "perché", non solo il "cosa".
*/

// Riepilogo esempi con combinazione di più tipi di istruzioni condizionali

let score = 75;
let message;

if (score >= 90) {
    message = "Eccellente";
} else if (score >= 75) {
    message = "Buono";
} else if (score >= 50) {
    message = "Passabile";
} else {
    message = "Insufficiente";
}

console.log(`Il punteggio è ${score}, valutazione: ${message}`);

let userRole = "admin";

switch (userRole) {
    case "admin":
        console.log("Accesso all'area amministrativa");
        break;
    case "editor":
        console.log("Accesso all'area editoriale");
        break;
    case "guest":
        console.log("Accesso limitato come ospite");
        break;
    default:
        console.log("Utente non riconosciuto");
        break;
}

/*
================================================================================
                               Note finali
================================================================================
- Le istruzioni condizionali permettono di dirigere il flusso logico e prendere decisioni.
- Utilizzare condizioni chiare e ben documentate evita errori difficili da individuare.
- La varietà di controlli disponibili (if, else, switch, ternario) consente di scegliere la forma più espressiva e leggibile.
- È importante strutturare la logica condizionale in modo che sia il più possibile lineare e intuitivo.
- Commenti efficaci facilitano la comprensione e manutenzione del codice.
*/
