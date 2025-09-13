// null e undefined in JavaScript

let myName;                 // Variabile dichiarata ma non inizializzata => undefined
console.log(myName);        // undefined

let lastName = 'Smith';
console.log(typeof lastName);  // string
console.log(typeof myName);    // undefined

// Controllo esplicito del tipo undefined
if (typeof myName === 'undefined') {
    console.log('not defined');
}

let age = null;             // null significa intenzionalmente "nessun valore"
console.log(age === myName); // false, null e undefined sono diversi

console.log(typeof age);    // object (peculiarità storica di JS)

/*
Note importanti:
- undefined indica che una variabile è stata dichiarata ma non inizializzata.
- null è un valore che dev’essere assegnato esplicitamente per indicare "assenza di valore".
- typeof undefined restituisce "undefined".
- typeof null restituisce "object": è una peculiarità storica del linguaggio.
- null e undefined sono falsy, ma non sono uguali con === (false) e sono uguali con == (true).
- Usare null per rappresentare dati mancanti in modo esplicito è una buona pratica.
- undefined spesso indica errori o variabili dimenticate o mancanti.
*/
