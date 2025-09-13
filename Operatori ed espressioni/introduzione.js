// In JavaScript, gli operatori sono simboli che manipolano valori (operandi) per produrre nuovi valori.
// Le espressioni sono combinazioni di operatori e operandi valutate dal motore JavaScript.

// 1. Operatori Aritmetici
// Questi operatori permettono di eseguire calcoli matematici.

// +  Addizione
// -  Sottrazione
// *  Moltiplicazione
// /  Divisione
// %  Modulo (resto della divisione)
// ** Esponenziazione (potenza)

// Esempi:
let a = 5;
let b = 10;
let c = a + b;  // 15
console.log(c);

let diff = b - a;  // 5
console.log(diff);

let prod = a * b;  // 50
console.log(prod);

let div = b / a;   // 2
console.log(div);

let mod = b % a;   // 0
console.log(mod);

let exp = 2 ** 8;  // 256
console.log(exp);


// 2. Operatori Logici e di Confronto

// &&   AND logico: vero se entrambi operandi veri
// ||   OR logico: vero se almeno un operando è vero
// !    NOT logico: inverte valore booleano

let result = (a < b) && (b > 0);  // true
console.log(result);

result = false || true;  // true
console.log(result);

result = !false;         // true
console.log(result);


// 3. Operatori di Assegnazione Combinati

// += , -= , *= , /= , %= , **=
// Sintassi compatta per combinare operazioni e assegnazione

let x = 10;

// x = x + 20;
x += 20;
console.log(x);  // 30

x *= 2;
console.log(x);  // 60

x -= 10;
console.log(x);  // 50


// 4. Incremento e Decremento

// ++   Incremento di 1 (prefisso o postfisso)
// --   Decremento di 1 (prefisso o postfisso)

let count = 5;

console.log(++count);  // 6 prefisso: incrementa prima
console.log(count++);  // 6 postfisso: usa poi incrementa
console.log(count);    // 7

console.log(--count);  // 6 prefisso: decrementa prima
console.log(count--);  // 6 postfisso: usa poi decrementa
console.log(count);    // 5


// 5. Esempi con NaN e conversioni numeriche

let xStr = '26qq';
let yNum = 12;

let z = Number(xStr) + yNum;  // NaN + 12 = NaN
console.log('sum = ', z);

z = xStr * yNum;             // NaN
console.log('multiplication = ', z);

z = xStr / yNum;             // NaN
console.log('division = ', z);

z = xStr % yNum;             // NaN
console.log('modulus = ', z);

z = 2 ** 8;                  // 256
console.log('exp = ', z);


// 6. Operatori di Confronto

console.log(4 < 5);          // true
console.log(4 > 5);          // false

let val1 = 5;
let val2 = '5';

console.log(val1 == val2);   // true (uguaglianza debole)
console.log(val1 === val2);  // false (uguaglianza stretta)

val1 = 0;
val2 = '';

console.log(val1 == val2);   // true
console.log(val1 != val2);   // false
console.log(val1 === val2);  // false
console.log(val1 !== val2);  // true

val1 = 1;
val2 = '1';

console.log(val1 == val2);   // true
console.log(val1 !== val2);  // true

console.log(Number(val2));   // 1 conversione esplicita

/*
Note importanti:
- Gli operatori aritmetici permettono di fare calcoli matematici base e avanzati.
- Gli operatori di confronto sono usati per valorizzare condizioni booleane, con differenza tra uguaglianza debole e stretta.
- Gli operatori logici permettono di combinare più condizioni boolean.
- Gli operatori di assegnazione combinati semplificano le espressioni.
- Gli operatori di incremento e decremento modificano il valore delle variabili di 1 con comportamento prefisso e postfisso.
- Le conversioni implicite possono generare NaN, bisogna fare attenzione ai dati.
*/
