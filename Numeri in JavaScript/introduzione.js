// I Numeri in JavaScript

// Introduzione:
// JavaScript usa un unico tipo Number per interi e numeri a virgola mobile,
// basato sullo standard IEEE 754 a doppia precisione.

// 1. Tipologia unica
let intero = 10;
let float = 3.14;

// 2. Problemi di precisione dei floating point
let a = 0.1;
let b = 0.2;
let somma = a + b;
console.log(somma);  // 0.30000000000000004 (non esattamente 0.3)

// 3. Valori speciali numerici
console.log(Infinity);      // infinito positivo
console.log(-Infinity);     // infinito negativo
console.log(NaN);           // not a number (es. 0/0 o conversione fallita)

// 4. Operazioni aritmetiche base
let x = 10;
let y = 20;
console.log(x + y); // 30
console.log(y / x); // 2

// Incremento e decremento
x++;
console.log(x); // 11
y--;
console.log(y); // 19

// 5. Numeri grandi con BigInt (ECMAScript 2020+)
let grande = 1234567890123456789012345678901234567890n;
console.log(grande + 1n); // 1234567890123456789012345678901234567891n

// 6. Funzioni utili da Math
console.log(Math.round(0.6));  // 1 - arrotonda al più vicino
console.log(Math.floor(0.6));  // 0 - arrotonda per difetto
console.log(Math.ceil(0.4));   // 1 - arrotonda per eccesso
console.log(Math.random());    // numero casuale tra 0 e 1

/*
Note importanti:
- In JavaScript numeri interi e float condividono il tipo Number.
- I problemi di precisione sono dovuti al formato binario dei floating point.
- BigInt permette di gestire interi molto grandi senza perdita di precisione.
- I valori speciali Infinity e NaN aiutano a rappresentare casi particolari nei calcoli.
- Math fornisce molti metodi utili per manipolare i numeri in modo preciso.
- Usare BigInt richiede attenzione perché non si può mescolare con Number senza conversione.
*/
