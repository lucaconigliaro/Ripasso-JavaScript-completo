/**
 * Operator di confronto in JavaScript:
 *   <    minore
 *   <=   minore o uguale
 *   >    maggiore
 *   >=   maggiore o uguale
 *   ==   uguaglianza debole (con coercizione dei tipi)
 *   !=   disuguaglianza debole (con coercizione)
 *   ===  uguaglianza stretta (tipo e valore)
 *   !==  disuguaglianza stretta (tipo o valore)
 */

let result = false;

// Operatori minore e maggiore restituiscono true o false
result = 4 < 5;                   // vero perchè 4 è minore di 5
console.log(result);              // true

result = 4 > 5;                   // falso perchè 4 non è maggiore di 5
console.log(result);              // false

result = 5 > 5;                   // falso perchè 5 non è maggiore di 5 (è uguale)
console.log(result);              // false

console.clear();
console.log('-------------------------');

let val1 = 5;
let val2 = '5';

// Uguaglianza debole (==) confronta i valori con coercizione del tipo
result = val1 == val2;            // true perchè '5' viene convertito a 5 (numero) e confrontato
console.log(result);              // true

// Uguaglianza stretta (===) confronta valore e tipo
result = val1 === val2;           // false perchè val1 è numero, val2 è stringa
console.log(result);              // false

val1 = 0;
val2 = '';

console.log('-------------------------');
// Uguaglianza debole tra 0 e stringa vuota
result = val1 == val2;            // true perchè entrambi considerati falsy e coerenti tra loro
console.log(result);              // true

result = val1 != val2;            // false perchè sono considerati uguali nel confronto debole
console.log(result);              // false

console.log('-------------------------');
// Uguaglianza stretta tra 0 e stringa vuota
result = val1 === val2;           // false perchè tipi diversi (number vs string)
console.log(result);              // false

result = val1 !== val2;           // true perchè non sono uguali per tipo o valore
console.log(result);              // true

console.log('-------------------------');
console.clear();

val1 = 1;
val2 = '1';

result = val1 == val2;            // true perchè la stringa '1' viene convertita a numero 1 e confrontata
console.log(result);              // true

result = val1 !== val2;           // true perchè val1 è number, val2 è string, tipi diversi
console.log(result);              // true

console.log(Number(val2));        // Conversione esplicita di val2 da stringa '1' a numero 1

/*
Note importanti:
- Gli operatori di confronto restituiscono sempre un valore booleano (true o false).
- Gli operatori <, >, <=, >= confrontano valori numerici o coerenti numericamente.
- L’operatore == (uguaglianza debole) confronta i valori dopo aver fatto una conversione implicita dei tipi (coercizione), per questo '5' == 5 è true.
- L’operatore === (uguaglianza stretta) confronta valore e tipo insieme, quindi '5' === 5 è false.
- Si consiglia generalmente di usare sempre === e !== per evitare risultati imprevisti dovuti alla coercizione implicita.
- Gli operatori != e !== sono gli inversi di == e === rispettivamente.
- Il confronto tra valori di tipi diversi senza corrispondenza può portare a risultati inattesi se si usa ==.
- Quando si confrontano stringhe che rappresentano numeri è meglio convertire esplicitamente con Number() per chiarezza.
*/
