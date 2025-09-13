// Numeri in diversi sistemi numerici in JavaScript
// Decimal (base 10): 0-9
// Hexadecimal (base 16): 0-9 e A-F (dove A=10, B=11, ..., F=15)
// Octal (base 8): 0-7
// Binary (base 2): 0 e 1

const num = 10;                 // Numero decimale 10

const hexNum = 0xff;            // Numero esadecimale 0xff = 15*16^0 + 15*16^1 = 255 decimale
console.log(hexNum);            // 255

console.log(hexNum * num);      // Moltiplicazione: 255 * 10 = 2550

const numOct = 0o56;            // Numero ottale 56 in base 8 = 6*8^0 + 5*8^1 = 6 + 40 = 46 decimale
console.log('octal', numOct);   // 46

const numBin = 0b1101;          // Numero binario 1101 in base 2 = 1*2^3 + 1*2^2 + 0*2^1 + 1*2^0 = 13 decimale
console.log('bin', numBin);     // 13

const price = 127.34;           // Numero decimale a virgola mobile

// BigInt per rappresentare numeri interi molto grandi (> 2^53-1)
const myBigNumber = 199999n;    // BigInt (notazione con n finale)
console.log(typeof myBigNumber); // 'bigint'

console.log(typeof hexNum);      // 'number'

console.log(price * hexNum);     // Moltiplicazione tra numero float e esadecimale (convertito a numero normale): 127.34 * 255

// Moltiplicazione tra BigInt e BigInt (hexNum convertito esplicitamente a BigInt)
console.log(myBigNumber * BigInt(hexNum));  // BigInt * BigInt

/*
Note importanti:
- I numeri in JavaScript sono di tipo `number` e seguono lo standard IEEE 754 (floating point 64 bit).
- Per rappresentare numeri in basi diverse si usano prefissi:
   * `0x` per esadecimale
   * `0o` per ottale
   * `0b` per binario
- BigInt è un tipo distinto introdotto per gestire interi molto grandi senza perdita di precisione.
- Non si può mischiare `number` e `BigInt` senza conversioni esplicite che si fanno con `BigInt()` o `Number()`.
- Questo consente precisione e flessibilità nel gestire numeri in vari contesti applicativi.
*/
