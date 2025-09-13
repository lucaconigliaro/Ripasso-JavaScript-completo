// Esempio di commenti e console.log in JavaScript

// Questo è un commento su una singola riga
//console.log('comment');

/*
  Questo è un commento
  su più righe,
  parla del linguaggio JavaScript
*/

console.log("first1 ','  output1");       // Stampa una stringa con virgoletta singola al suo interno
console.log('first2 \':\' output2');      // Stampa una stringa con virgoletta doppia sfuggita
console.log("first3 ', ' output3");       // Stampa una stringa con virgoletta singola
console.log("first4 \": \" output4");     // Stampa una stringa con doppia virgoletta sfuggita
console.log(2 + 3);                       // Stampa il risultato della somma: 5
console.log('Hello world');               // Stampa la stringa Hello world
console.log(47);                         // Stampa il numero 47

/**
 * @var age number
 * Dichiarazione variabile age di tipo number
 */
var age = 47;

console.log(age);                        // Stampa 47
console.log(age);                        // Stampa di nuovo 47

var name = 'Hidran';
console.log(name, ' ha ', age, ' anni');  // Stampa concatenando valori diversi (stringhe e numeri)
console.log(name + ' ha ' + age + ' anni'); // Concatenazione con operatori +

// Pulisce la console
console.clear();

// Scrittura su più linee, dimostrazione che console.log può essere diviso
console.
log('test');

console
.log('test2');

// Condizione if-else
if (age > 50) {
  console.log('You are older than 40');
} else {
  console.log('You are younger than 50');
}

/*
Note importanti:
- I commenti singoli (//) e multipli es. /* ... */ /* aiutano a documentare il codice.
- console.log() può stampare stringhe, numeri, variabili, espressioni, e più argomenti contemporaneamente.
- È possibile scrivere console.log su più righe, ma la sintassi deve essere corretta.
- console.clear() serve a pulire la console e avere uno schermo pulito per debug.
- Le istruzioni if-else permettono di eseguire codice condizionale con vari branch di esecuzione.
*/
