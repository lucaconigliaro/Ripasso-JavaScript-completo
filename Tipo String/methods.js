// slice, substring e substr in JavaScript
// Tutti e tre i metodi estraggono parti di stringa senza modificare l'originale, ma hanno comportamenti diversi.

const sciogli = "Date del pane al pazzo cane del paese";

// slice(start, end)
// Estrae dal carattere "start" fino (ma escluso) "end". Supporta indici negativi (conta dalla fine della stringa).
const quattro = sciogli.slice(0, 4); // 'Date'
console.log(quattro);

const pIndex = sciogli.indexOf('pazzo');
const pazzo = sciogli.slice(pIndex, pIndex + 5); // 'pazzo'
console.log(pazzo);

let luogo = sciogli.slice(0);           // Copia l'intera stringa
console.log(luogo);

luogo = sciogli.slice();                // Copia l'intera stringa
console.log(luogo);

luogo = sciogli.slice(4444);            // Indice troppo grande -> stringa vuota
console.log(luogo);

luogo = sciogli.slice(-200, -198);      // Indici negativi troppo piccoli -> stringa vuota
console.log(luogo);

// substring(start, end)
// Simile a slice, MA:
// - valori negativi/NaN vengono trasformati a 0
// - se start > end li inverte automaticamente
const testo = "Una rana nera e rara sulla rena errò una sera";

console.log(testo.substring(-4, 4));    // Equivale a .substring(0, 4): 'Una '
console.log(testo.substring(4, 0));     // 'Una ' (vengono invertiti)

// substr(start, length) [DEPRECATO]
// Estrae una sottostringa, dal punto "start" per una data "length" (non indice finale!)
// Indici negativi partono dalla fine, length negativa = 0 (stringa vuota)
const ranaIndex = testo.indexOf('rana');
const ranaString = testo.substr(ranaIndex, 4); // 'rana'
console.log(ranaString);

// console.log(testo.substr(-8, 3));    // estrae dalla fine 3 lettere dopo -8

// search(regExp | string)
// Restituisce l’indice della prima corrispondenza o -1 se non trovato. Permette regex.
const frase = " trentini entrarono a Trento 33";
let tre = frase.search('tre');  // 1 (prima occorrenza 'tre' minuscolo)
console.log(tre);

tre = frase.search('Tre');      // 22 (maiucolo, trova 'Tre' in 'Trento')
console.log(tre);

const numero = frase.search(/\d/); // cerca la prima cifra
console.log('Il numero sta a: ' + numero);


/*
NOTE IMPORTANTI:
- slice(start, end): accetta valori negativi e restituisce parte di stringa da "start" a "end" (escluso). Se start > end: stringa vuota.
- substring(start, end): non accetta negativi (diventano 0), inverte automaticamente start con end se start > end.
- substr(start, length): deprecato, la "lunghezza" non è un indice di fine ma numero di caratteri da estrarre. Negativi conteggiano dalla fine.
- search accetta stringa semplice o regex per trovare posizione della prima occorrenza.
- Tutti questi metodi NON modificano la stringa originale, restituiscono sempre una nuova stringa.
*/
