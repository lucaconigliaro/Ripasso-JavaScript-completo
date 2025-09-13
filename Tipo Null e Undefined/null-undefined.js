// In JavaScript, undefined e null sono due valori primitivi usati per rappresentare rispettivamente
// la dichiarazione di variabili senza valori assegnati e l'assenza intenzionale di un valore.

// undefined: Indica che una variabile è stata dichiarata ma non inizializzata.
// Viene assegnato automaticamente da JavaScript se una variabile non riceve un valore.

let x;
console.log(x);         // undefined
console.log(typeof x);  // "undefined"

// null: Valore assegnato esplicitamente per rappresentare “nessun valore” o assenza di valore.
// È un oggetto (peculiarità storica del linguaggio) e deve essere assegnato manualmente.

let y = null;
console.log(y);         // null
console.log(typeof y);  // "object"

// Esempi di uso e confronto tra null e undefined

let myName;                 // Variabile dichiarata ma non inizializzata → undefined
console.log(myName);        // undefined

let lastName = 'Smith';
console.log(typeof lastName);  // string
console.log(typeof myName);    // undefined

if (typeof myName === 'undefined') {
    console.log('not defined');
}

let age = null;             // null come segno di assenza volontaria di valore
console.log(age === myName); // false (diversi valori e tipi)
console.log(typeof age);    // "object"

/*
Note importanti:
- undefined è valore assegnato automaticamente a variabili dichiarate ma non inizializzate.
- null deve essere assegnato esplicitamente per indicare l’assenza intenzionale di valore.
- typeof undefined restituisce "undefined".
- typeof null restituisce "object", una peculiarità storica.
- null e undefined sono falsy, ma non sono strettamente uguali (=== restituisce false).
- Nel confronto debole (==) null e undefined sono considerati uguali.
- Usare null per rappresentare dati mancanti esplicitamente è buona pratica.
- undefined spesso indica errori o variabili dimenticate.
*/
