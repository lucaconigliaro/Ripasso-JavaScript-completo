// In JavaScript, Number può essere un valore primitivo o un oggetto wrapper.
// È fortemente sconsigliato usare new Number(), perché crea un oggetto complesso anziché un primitivo.

// Esempi di creazione di numeri

// Valore primitivo numero
const num = Number("2");          // Conversione stringa a numero primitivo
console.log(num, typeof num);     // 2 'number'

// Valore con parseFloat
const num2 = Number.parseFloat("4.5");
console.log(num2, typeof num2);   // 4.5 'number'

// valore di un oggetto wrapper (in caso si usa new Number(), qui solo dimostrativo)
// console.log('value is ' + num.valueOf());

// Differenze di uguaglianza
console.log(num == 2);  // true (coercizione di tipo)
console.log(num === 2); // true (entrambi sono primitivi)

// Conversione rapida di stringhe a numeri con operatore unario +
var age = "22";
age = +age; 
console.log(age, typeof age);  // 22 'number'

// Conversione esplicita con parseInt
age = parseInt(age);
console.log(age, typeof age);  // 22 'number'

// Metodi di Number

// toFixed(decimali): restituisce stringa formattata con numero fisso di decimali
console.log(2..toFixed(2));      // "2.00"
console.log(num.toFixed(2));     // "2.00"
console.log((2.0).toFixed(2));   // "2.00"

// Costanti di Number
console.log('Number.MAX_VALUE:', Number.MAX_VALUE);
console.log('Number.MIN_VALUE:', Number.MIN_VALUE);
console.log('Number.MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER);
console.log('Number.MIN_SAFE_INTEGER:', Number.MIN_SAFE_INTEGER);
console.log('Number.NaN:', Number.NaN);
console.log('Number.POSITIVE_INFINITY:', Number.POSITIVE_INFINITY);
console.log('Number.NEGATIVE_INFINITY:', Number.NEGATIVE_INFINITY);

// Metodi statici utili

console.log(Number.isNaN(NaN));           // true
console.log(Number.isFinite(10));          // true
console.log(Number.isInteger(10));         // true
console.log(Number.isSafeInteger(9007199254740991));  // true

console.log(Number.parseInt("10px"));      // 10
console.log(Number.parseFloat("3.14abc")); // 3.14

/*
Note importanti:
- Usare sempre Number(x) senza "new" per ottenere un primitivo numero, non un oggetto Number.
- Per convertire stringhe in numeri, Number(), parseInt(), parseFloat() e operatore + sono strumenti comuni.
- toFixed converte un numero in stringa specificando decimali visualizzati.
- Le costanti Number definiscono limiti e valori speciali del tipo Number.
- I metodi statici aiutano a verificare il tipo o la validità dei numeri.
- Differenza tra == e === è che === verifica anche il tipo, evitando coercizioni di tipo implicite.
*/
