// Operatori +, -, ++, --
// Valori falsy in JavaScript: false, 0, undefined, null, ''
// Valori truthy come true

let x = true;
console.log(typeof x);    // 'boolean'

// Convertire il booleano true in numero usando l'operatore unario +
// +true diventa 1, +false diventa 0
x = +x;
console.log(x, typeof x);  // Stampa: 1 'number'

x = x + 1;                 // Somma normale: 1 + 1 = 2
console.log(x);

x += 1;                    // Incremento abbreviato: 2 + 1 = 3
console.log(x);

++x;                       // Incremento prefisso: aumenta prima di usare il valore (ora 4)
console.log(x);

let y = x++;               // Incremento postfisso: assegna prima a y il valore 4, poi incrementa x a 5
console.log(y, x);          // Stampa: 4 5

y = ++x;                   // Incremento prefisso: incrementa x prima (da 5 a 6) poi assegna y = 6
console.log(y, x);          // Stampa: 6 6

console.log('--------decrement---------');

--x;                       // Decremento prefisso: decrementa prima (da 6 a 5)
console.log(x);

y = x--;                   // Decremento postfisso: assegna y=5 e poi decrementa x a 4
console.log(y, x);          // Stampa: 5 4

y = --x;                   // Decremento prefisso: decrementa x da 4 a 3, assegna y=3
console.log(y, x);

/*
Note importanti:
- L'operatore unario + viene utilizzato per convertire i valori booleani in numeri: true diventa 1, false diventa 0.
- Gli operatori ++ e -- sono operatori di incremento e decremento rispettivamente che modificano il valore della variabile di 1.
- La differenza tra prefisso (++x, --x) e postfisso (x++, x--) è quando avviene l'incremento/decremento rispetto all'uso del valore:
  * Prefisso: incrementa/decrementa prima di restituire il valore.
  * Postfisso: restituisce il valore corrente poi incrementa/decrementa.
- Questi operatori sono molto usati nei cicli e nelle condizioni per gestire contatori.
*/
