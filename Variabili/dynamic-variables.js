let test;
console.log(test, typeof test); // undefined, perché non è stato assegnato valore

test = "'Javascript'";
console.log(test, typeof test); // string, è una stringa con virgolette incluse

test = 49;
console.log(test, typeof test); // number, un valore numerico

test = [4, 'a', 'test'];
console.log(test, typeof test); // object, gli array sono considerati oggetti

test = { name: 'Javascript', version: 2108, releases: ['ES5', 'ES6', 2018] };
console.log(test, typeof test); // object, gli oggetti hanno tipo object

test = function myFunc() { };
console.log(test, typeof test); // function, le funzioni hanno tipo speciale "function"

/*
Note importanti:
- typeof restituisce una stringa che rappresenta il tipo del valore o variabile.
- undefined indica variabile dichiarata ma non inizializzata.
- string, number rappresentano rispettivamente stringhe e numeri.
- Array e oggetti hanno tipo "object" (la differenza si controlla con Array.isArray()).
- Le funzioni hanno tipo "function", che è un tipo speciale distinto da object.
- typeof null restituisce "object" per una storica peculiarezza.
- Conoscere il risultato di typeof aiuta a gestire controlli di tipo dinamici in JavaScript.
*/
