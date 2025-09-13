// Variabili di Tipo String in JavaScript

// Introduzione:
// Le stringhe rappresentano una sequenza di caratteri e sono un tipo primitivo in JS.
// Possono essere create con apici singoli, doppi o backticks (template literals).

// 1. Creazione di stringhe con apici singoli e doppi
let saluto = 'Ciao mondo!';
let risposta = "Benvenuti su 'JavaScript'!";
console.log(saluto);
console.log(risposta);

// 2. Template Literals (backticks) - permettono interpolazioni ed espressioni
let nome = 'Alice';
let salutoTpl = `Ciao, ${nome}!`;
console.log(salutoTpl);  // Ciao, Alice!

let prezzo = 10;
let tassa = 0.25;
let messaggio = `Il prezzo finale è: ${prezzo * (1 + tassa)} euro.`;
console.log(messaggio);  // Il prezzo finale è: 12.5 euro.

// Operazioni su stringhe

// Concatenazione con + (unisce stringhe)
let stringa1 = 'Ciao, ';
let stringa2 = 'come stai?';
let unione = stringa1 + stringa2;
console.log(unione); // Ciao, come stai?

// Accesso ai caratteri tramite indice (simile ad array)
let frase = 'Ciao mondo!';
let carattere = frase[6]; // carattere alla posizione 6 (indice 0-based)
console.log(carattere);   // 'm'

// Proprietà e metodi utili sulle stringhe
console.log(frase.length);          // lunghezza della stringa (11)
console.log(frase.toUpperCase());   // converte in maiuscolo: CIAO MONDO!
console.log(frase.toLowerCase());   // converte in minuscolo: ciao mondo!
console.log(frase.includes('a'));   // verifica se la stringa contiene 'a': true
console.log(frase.slice(0, 5));     // estrae sottostringa da indice 0 a 5 (escluso): 'Ciao ' (con spazio)

// Esempio con frase diversa
let frase2 = 'Benvenuti a tutti!';
console.log(frase2.length);          // 17
console.log(frase2.toUpperCase());   // BENVENUTI A TUTTI!
console.log(frase2.includes('a'));   // true
console.log(frase2.slice(0, 9));     // Benvenuti

/*
Note importanti:
- Stringhe possono essere create con apici singoli, doppi o backticks (per template literals).
- Template literals migliorano la leggibilità e permettono interpolazioni dinamiche.
- Le stringhe in JavaScript sono immutabili, quindi metodi come toUpperCase() restituiscono una nuova stringa.
- Concatenare stringhe con l'operatore + è semplice e molto usato.
- Accedere ai caratteri tramite indice è possibile, ma l'indice non può superare la lunghezza -1.
- Metodi come includes(), slice(), toUpperCase(), toLowerCase() sono essenziali per manipolare stringhe.
*/
