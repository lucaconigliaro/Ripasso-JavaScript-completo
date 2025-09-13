// Operatori aritmetici: +, -, *, /, %, **

let x, y, z;

x = '26qq';    // x è una stringa che NON rappresenta un numero valido (causa NaN nei calcoli)
y = 12;

// Number(x) restituisce NaN perché '26qq' non è convertibile a numero, Number(y) è 12
z = Number(x) + Number(y);         // NaN + 12 = NaN
console.log('sum = ', z);          // Stampa: sum = NaN

// Operatori aritmetici tentano di effettuare il cast a numero
z = x * y;                        // '26qq' * 12 = NaN (non è possibile moltiplicare una stringa non numerica)
console.log('multiplication = ', z); // Stampa: multiplication = NaN

z = x / y;                        // Stesso discorso: NaN
console.log('division = ', z);    // Stampa: division = NaN

z = x % y;                        // Anche il modulo tra NaN e qualsiasi numero è NaN
console.log('modulus = ', z);     // Stampa: modulus = NaN

z = 2 ** 8;                       // Operatore di esponenziazione: 2 elevato all'8 = 256
console.log('exp = ', z);         // Stampa: exp = 256

// Input utente tramite prompt (in browser, non funzionante su Node.js)
// Il prompt restituisce SEMPRE una stringa, quindi è importante convertire il valore
x = prompt('Insert first value');
x = Number(x);                    // Conversione della stringa a numero

y = prompt('Insert second value');
y = Number(y);                    // Conversione a numero anche per il secondo input

z = x + y;                        // Somma i due valori convertiti
alert('the sum is ' + z);         // Visualizza il risultato all’utente tramite alert

/*
Note importanti:
- Gli operatori aritmetici in JavaScript (+, -, *, /, %, **) tentano di convertire automaticamente (cast) gli operandi in numeri.
- Se un operando non è convertibile in un numero valido (come '26qq'), il risultato dell'operazione sarà NaN (Not a Number).
- Per ottenere numeri da stringhe, si possono usare funzioni come Number(), ma se la stringa contiene caratteri non numerici, Number() restituirà NaN.
- Il prompt in JavaScript restituisce sempre una stringa: è necessario convertire esplicitamente questi valori in numeri per fare operazioni aritmetiche corrette.
- L’operatore ** è l’esponenziazione, ad esempio 2 ** 8 significa 2 elevato alla potenza 8.
- Computazioni con NaN restituiscono sempre NaN, quindi è importante validare i dati prima di usarli in operazioni numeriche.
*/
