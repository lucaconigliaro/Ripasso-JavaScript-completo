// JavaScript utilizza un unico tipo numerico chiamato Number, che rappresenta sia numeri interi che a virgola mobile
// secondo lo standard IEEE 754 a doppia precisione. Questo comporta alcune peculiarità, tra cui problemi di precisione sui numeri floating point.

// 1. Tipologia Unica dei Numeri
let intero = 10;
let float = 3.14;

// 2. Problemi di Precisione nei Numeri Floating Point
let a = 0.1;
let b = 0.2;
let somma = a + b;
console.log(somma);  // Stampa: 0.30000000000000004 (non esattamente 0.3)

// 3. Valori Speciali Numerici in JavaScript
console.log(Infinity);      // Infinito positivo
console.log(-Infinity);     // Infinito negativo
console.log(NaN);           // Not a Number (Risultato di operazioni non numeriche)

// 4. Operazioni Aritmetiche di Base
let x = 10;
let y = 20;
console.log(x + y); // 30
console.log(y / x); // 2

// Operatori di Incremento e Decremento
x++;
console.log(x); // 11
y--;
console.log(y); // 19

// 5. Numeri Grandi con BigInt (Introdotto in ECMAScript 2020)
let grande = 1234567890123456789012345678901234567890n;
console.log(grande + 1n); // 1234567890123456789012345678901234567891n

// 6. Funzioni Numeriche Utili dall'Oggetto Math
console.log(Math.round(0.6));  // Arrotonda 0.6 → 1
console.log(Math.floor(0.6));  // Arrotonda per difetto 0.6 → 0
console.log(Math.ceil(0.4));   // Arrotonda per eccesso 0.4 → 1
console.log(Math.random());    // Numero casuale tra 0 (incluso) e 1 (escluso)

// Note importanti sui numeri
/*
- In JavaScript, numeri interi e floating point condividono lo stesso tipo Number.
- Problemi di precisione derivano dalla rappresentazione binaria dei float.
- BigInt permette di scrivere numeri interi molto grandi senza perdita di precisione.
- Infinity e NaN rappresentano casi numerici particolari (es. overflow o errori).
- I metodi di Math offrono funzioni per arrotondamenti e generazione di casuali.
- Attenzione a non mischiare BigInt e Number senza conversione esplicita.
*/

// Esempio di NaN (Not a Number) e verifica con isNaN() vs Number.isNaN()
const value = 12;
const userValue = '123a';           // Stringa non convertibile in numero valido
const result = value * userValue;   // Risultato calcolo → NaN
console.log(result);                // Stampa NaN

console.log(isNaN('test'));          // true, la funzione globale converte e valuta NaN
console.log(Number.isNaN('test'));   // false, Number.isNaN valuta solo il valore NaN "vero"

/*
Note importanti su NaN:
- isNaN() converte prima il valore in numero, quindi restituisce true anche per stringhe non numeriche.
- Number.isNaN() è più rigoroso: restituisce true solo se il valore è precisamente NaN.
- Poiché NaN non è uguale a sé stesso, non si usa == o === per verificarlo.
- Usare preferibilmente Number.isNaN() per controlli affidabili.
*/

// Numeri in diversi sistemi numerici in JavaScript

// Numero decimale
const num = 10;

// Numero esadecimale (base 16)
const hexNum = 0xff;            // 255 in decimale
console.log(hexNum);
console.log(hexNum * num);      // 255 * 10 = 2550

// Numero ottale (base 8)
const numOct = 0o56;            // 46 in decimale
console.log('octal', numOct);

// Numero binario (base 2)
const numBin = 0b1101;          // 13 in decimale
console.log('bin', numBin);

const price = 127.34;           // Numero decimale con virgola mobile

const myBigNumber = 199999n;    // BigInt, indicato dalla n finale
console.log(typeof myBigNumber); // 'bigint'

console.log(typeof hexNum);      // 'number'

console.log(price * hexNum);     // Moltiplicazione decimal * number

// BigInt * BigInt (con conversione explicita)
console.log(myBigNumber * BigInt(hexNum));

/*
Note importanti:
- JavaScript utilizza i prefissi 0x per esadecimale, 0o per ottale, 0b per binario.
- BigInt è un diverso tipo per numeri interi molto grandi, non mescolabile senza conversione.
- Questa flessibilità permette di lavorare con numeri in diversi formati e precisioni.
- Usare con attenzione per evitare errori di tipo in operazioni miste.
*/
