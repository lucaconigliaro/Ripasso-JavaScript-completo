// undefined indica che una variabile è stata dichiarata ma non inizializzata.
// null è un valore assegnato intenzionalmente per rappresentare “assenza di valore”.

// Esempio:
let x;
console.log(x);         // undefined

let y = null;
console.log(y);         // null

// Controllo tipi
console.log(typeof x);  // undefined
console.log(typeof y);  // object (peculiarità di JavaScript)
