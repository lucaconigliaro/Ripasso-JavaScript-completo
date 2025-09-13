// true false
// Valori falsy in JavaScript: false, 0, NaN, '', null, undefined

let condition = true;                // Dichiarazione e inizializzazione di una variabile booleana (true)
const result = 4 > 5;                // result sarà false, perché la condizione 4 > 5 è falsa
const result2 = 5 > 4;               // result2 sarà true, perché la condizione 5 > 4 è vera
const negativeCondition = false;     // Dichiarazione di una variabile booleana inizializzata a false

console.log(typeof condition);        // Stampa il tipo della variabile, che all'inizio è 'boolean'
console.log(typeof result);           // Stampa 'boolean', perché 4 > 5 restituisce false (di tipo boolean)
console.log(typeof result2);          // Stampa 'boolean', perché 5 > 4 restituisce true (di tipo boolean)
console.log(typeof negativeCondition);// Stampa 'boolean', perché negativeCondition è un boolean

condition = undefined;                // Cambia il valore di 'condition' a undefined (uno dei valori falsy)

console.log(typeof condition);        // Stampa 'undefined', infatti typeof undefined è 'undefined'

// Un controllo condizionale: solo se condition è truthy entra nell'if
if (condition) { 
    console.log('The result is true'); // Questo codice NON verrà eseguito, perché 'undefined' è falsy
} else {
    console.log('The result is false'); // Questo verrà stampato, perché 'condition' vale undefined
}

// Conversione esplicita: qualsiasi stringa non vuota è truthy
const castValue = Boolean('hello');    // 'hello' è una stringa non vuota, quindi Boolean('hello') restituisce true
console.log(castValue);                // Stampa true

/*
Note importanti:
- In JavaScript solo sei valori sono considerati falsy: false, 0, NaN, '', null e undefined.
- Tutti gli altri valori sono considered truthy e vengono valutati come true in un contesto booleano.
- Il tipo booleano può essere esplicitamente ottenuto con la funzione Boolean().
- Le condizioni if valutano la "truthiness" o "falsiness" del valore per decidere il flusso di esecuzione.
- typeof restituisce il tipo primitivo di un valore (boolean, undefined, number, string, ecc.).
*/
