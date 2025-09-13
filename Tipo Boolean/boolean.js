// Il tipo booleano rappresenta due valori: true o false.
// Viene principalmente usato per valutare condizioni e controllare il flusso logico nel codice.

// Esempio di variabile booleana e controllo condizionale
let isAdmin = true;

if (isAdmin) {
    console.log('Accesso consentito');
} else {
    console.log('Accesso negato');
}

// Alcuni valori valutati come falsy in JavaScript includono:
// false, 0, NaN, '', null, undefined

// Dichiarazioni di variabili booleane e valutazioni
let condition = true;       // Valore booleano vero
const result = 4 > 5;       // false perché 4 non è maggiore di 5
const result2 = 5 > 4;      // true perché 5 è maggiore di 4
const negativeCondition = false;

console.log(typeof condition);         // 'boolean'
console.log(typeof result);            // 'boolean'
console.log(typeof result2);           // 'boolean'
console.log(typeof negativeCondition); // 'boolean'

// Cambia valore a 'undefined' (valore falsy)
condition = undefined;
console.log(typeof condition);         // 'undefined'

// Controllo condizionale che valuta la 'truthiness' di condition
if (condition) {
    console.log('The result is true');  // Non verrà eseguito perché undefined è falsy
} else {
    console.log('The result is false'); // Questo verrà stampato
}

// Conversione esplicita a booleano con la funzione Boolean()
const castValue = Boolean('hello');    // Stringa non vuota è truthy → true
console.log(castValue);                 // true

/*
Note importanti:
- Esistono solo sei valori falsy in JavaScript: false, 0, NaN, '', null, undefined.
- Qualunque altro valore è truthy e sarà valutato come true nelle condizioni booleane.
- La funzione Boolean() consente di ottenere esplicitamente un valore booleano da qualsiasi dato.
- Le condizioni if valutano automaticamente la "truthiness" o "falsiness" di un'espressione.
- L'operatore typeof restituisce il tipo primitivo del valore (ad esempio 'boolean' o 'undefined').
*/
