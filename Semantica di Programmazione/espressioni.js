// Le espressioni sono frammenti di codice che sempre restituiscono un valore, a prescindere dalla loro complessità.
// Istruzioni sono comandi che eseguono azioni, non sempre ritornano valori. Entrambi sono fondamentali per sviluppare codice funzionale.

// Definizione di Espressioni
5;                // Valore letterale (numero)
'Hello, World!';  // Stringa
true;             // Booleano
x;                // Variabile (se definita)
myFunction();     // Chiamata funzione che restituisce valore

// Espressioni aritmetiche
5 + 5;            // Somma → 10
x * y;            // Moltiplicazione variabili

// Espressioni logiche
x > 10;
y === 'test';
x && y;

// Espressioni con operatori
!false;           // Negazione → true
typeof x;         // Tipo di x (stringa)

// Definizione di Istruzioni
let x = 10;       // Dichiarazione variabile
const y = 'Hello'; // Dichiarazione costante

// Istruzioni di controllo
if (x > 10) {
    console.log('x è maggiore di 10');
}

// Cicli
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Funzioni
function myFunction() {
    console.log('Questa è una funzione');
}

// Differenza Chiave
// Espressioni sempre producono un valore,
// Istruzioni eseguono azioni e non sempre restituiscono un valore

// Esempio combinato
let xVar = 5;                // Istruzione: dichiarazione variabile
let yVar = xVar * 2;         // Istruzione con espressione (xVar * 2)
console.log(yVar);           // Istruzione per output (non restituisce valore)

// Esempio di commenti e console.log in JavaScript

// Commento singolo
// console.log('commento');

// Commento multiplo multilinea
/*
  Questo è un commento
  multiplo
  su più righe
*/

console.log("first1 ','  output1");
console.log('first2 \':\' output2');
console.log("first3 ', ' output3");
console.log("first4 \": \" output4");

console.log(2 + 3);
console.log('Hello world');
console.log(47);

let age = 29;
console.log(age);
console.log(age);

let name = 'Luca';
console.log(name, ' ha ', age, ' anni');
console.log(name + ' ha ' + age + ' anni');

console.clear();

console.
log('test');

console
.log('test2');

if (age > 50) {
  console.log('You are older than 20');
} else {
  console.log('You are younger than 30');
}

/*
Note importanti:
- I commenti aiutano a spiegare e rendere leggibile il codice.
- console.log() stampa valori anche multipli e strutture complesse.
- La sintassi multilinea su console.log() è permessa se correttamente scritta.
- console.clear() è utile per pulire la console durante il debug.
- Le condizioni if-else permettono controllo del flusso di esecuzione a seconda di condizioni.
*/
