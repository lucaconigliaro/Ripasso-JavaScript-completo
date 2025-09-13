// Espressioni e Istruzioni in JavaScript

// Introduzione:
// Espressioni e istruzioni sono i mattoni fondamentali del codice JavaScript.
// Capire la differenza aiuta a scrivere codice più chiaro e corretto.

// Definizione di Espressioni:
// Un'espressione produce sempre un valore.
// Può essere un valore letterale, una variabile, un'operazione o una funzione che restituisce un risultato.

5;               // un valore letterale
'Hello, World!'; // stringa
true;            // booleano
x;               // variabile (se definita)
myFunction();    // chiamata funzione che restituisce un valore

// Espressioni aritmetiche:
5 + 5;           // 10
x * y;           // prodotto di x e y

// Espressioni logiche:
x > 10;
y === 'test';
x && y;

// Espressioni con operatori:
!false;          // true
typeof x;        // tipo di x come stringa

// Definizione di Istruzioni:
// Le istruzioni sono comandi che eseguono azioni ma potrebbero non restituire un valore.
// Controllano il flusso del programma o alterano lo stato.

let x = 10;      // dichiarazione variabile (istruzione)
const y = 'Hello'; // dichiarazione costante

// Istruzioni di controllo:
if (x > 10) {
    console.log('x è maggiore di 10');
}

// Cicli:
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Funzioni:
function myFunction() {
    console.log('Questa è una funzione');
}

// Differenza chiave:
// Le espressioni sempre producono un valore.
// Le istruzioni eseguono azioni e non sempre restituiscono valori.

// Esempio combinato:
let xVar = 5;                    // istruzione
let yVar = xVar * 2;             // istruzione con espressione (xVar * 2)
console.log(yVar);               // istruzione che produce output (ma non restituisce valore)

/*
Note importanti:
- Espressioni possono essere usate ovunque sia richiesto un valore (es. assegnamenti, parametri).
- Alcune istruzioni si basano su espressioni per funzionare (es. if usa espressione condizionale).
- Alcune istruzioni non restituiscono un valore (void), altre come le espressioni restituiscono un valore.
- Capire questo aiuta a progettare codice più leggibile e funzionale.
*/
