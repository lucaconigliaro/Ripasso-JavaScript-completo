/**
 *
 *  OPERATORI LOGICI
 * --------------------------
 *   &&          AND (E)
 * --------------------------
 *   ||          OR (O)
 * --------------------------
 *   !           NOT (NEGAZIONE)
 * --------------------------
 */

// && (AND)
// Attenzione: se uno degli operandi è falsy (false, '', null, undefined, 0, NaN) restituisce immediatamente quel valore
let result,
    val1 = 0,         // 0 è valore falsy
    val2 = null;      // null è valore falsy

result = val1 && val2;           // Restituisce val1 (0), perché è falsy e AND si ferma al primo operando falsy
console.log(result);              // Stampa: 0

console.clear();

result = false && 2 + 2;         // false è falsy → risultato: false senza calcolare la seconda parte
console.log(result);             // Stampa: false

console.clear();

// || (OR)
// Valuta da sinistra a destra: restituisce il primo valore truthy, oppure l’ultimo se sono tutti falsy
result = 'test' || console.log('The first operand is false');
// Siccome 'test' è una stringa non vuota (truthy), la seconda parte non viene valutata, console.log NON viene eseguito
console.log(result);             // Stampa: test

// ! (NOT)
// Inverte il valore booleano: !true → false, !false → true
result = !(4 < 5);               // 4 < 5 è true → !true restituisce false
console.log('result is ', result); // Stampa: result is false

// !! (Double NOT)
// Usato per convertire esplicitamente un qualsiasi valore in booleano: !!val
result = !!((2 && 3) || 4 > 3);  // (2 && 3) = 3 (truthy), 4 > 3 = true, quindi (3 || true) → 3 (truthy), !!3 → true
console.log('result is ', result); // Stampa: result is true

result = !!(4);                  // 4 è truthy, !!4 → true
console.log('result is ', result); // Stampa: result is true

/*
Note importanti:
- L'operatore AND (&&) restituisce il primo valore falsy che incontra, o l'ultimo valore se tutti sono truthy.
- L'operatore OR (||) restituisce il primo valore truthy che incontra, o l'ultimo valore se tutti sono falsy.
- L'operatore NOT (!) inverte il valore booleano dell'espressione: true diventa false, false diventa true.
- Il doppio NOT (!!) converte qualunque valore in un booleano (true o false), utile per forzare una valutazione booleana.
- Questi operatori sono fondamentali per controllare flussi logici e condizioni nel codice, sfruttando la valutazione short-circuit (la valutazione si interrompe non appena il risultato è noto).
*/
