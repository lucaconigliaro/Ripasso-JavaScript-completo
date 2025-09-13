// Stringhe con apici singoli, doppi e unicode in JavaScript

const firstName = '"Luca"';    // Stringa con virgolette doppie dentro apici singoli
const lastName = "'Conigliaro'";      // Stringa con apici singoli dentro doppi apici
const grade = 'A';               // Singolo carattere come stringa
const uni = '\u00C6';            // Codice unicode per il carattere Æ
const emoji = '😀';              // Emoji come carattere Unicode

console.log(uni, emoji);         // Stampa Æ e l'emoji

//console.log(firstName, '\n', lastName, '\n', grade); // Stampa commentata

/*
Note importanti:
- Le stringhe possono includere virgolette singole e doppie senza doverle scappare, se usi il tipo opposto di apice.
- Puoi rappresentare caratteri Unicode con sequenze di escape come \uXXXX.
- Le emoji sono semplici caratteri Unicode e possono essere inserite direttamente nelle stringhe.
- Questo permette flessibilità nella rappresentazione di testo e simboli internazionali in JavaScript.
*/
