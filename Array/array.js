// Gli array sono strutture dati fondamentali per raccogliere elementi ordinati, accessibili tramite indice numerico (da 0).
// JavaScript consente array dinamici: possono crescere/diminuire e contenere dati eterogenei.

// Creazione e accesso
const days = [
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SUNDAY'
];

console.log(days[0]);         // 'MONDAY'
console.log(days.length);     // 6 (numero elementi)

// Copia superficiale (duplicazione dell'array)
const arrayCopy = days.slice();
arrayCopy[1] = 'Martedì';     // Modifica non influenza l'originale

// Trasformazione in stringa con join
const giorni = days.join(";");  // "MONDAY;TUESDAY;WEDNESDAY;..."

// toString(): converte tutto l'array in una stringa separata da virgole
console.log(days.toString());     // "MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY,SUNDAY"
// a differenza di join(), non accetta parametri per cambiare il separatore (sempre ",")
// Utile per ottenere rapidamente una rappresentazione testuale dell'intero array.

// push(): aggiunge alla fine | pop(): rimuove dalla fine e restituisce
days.push('LUNEDI');
let last = days.pop();

// unshift(): aggiunge all'inizio | shift(): rimuove dal principio
days.unshift('DOMENICA');
let first = days.shift();

// splice(): inserisce/rimuove/modifica elementi all'indice scelto
days.splice(5, 0, 'SATURDAY'); // Inserisce 'SATURDAY' in posizione 5 senza rimuovere
// days.splice(indice, nElimina, el1, el2...) // Sostituisce/rimuove/aggiunge

// indexOf(): cerca la posizione di un elemento, -1 se non trovato
let indexGiovedi = days.indexOf('GIOVEDI');
if (indexGiovedi !== -1) {
    days.splice(indexGiovedi, 1); // Rimuove 'GIOVEDI'
}

// includes(): true/false se un elemento esiste
console.log(days.includes('MONDAY')); // true

// slice(start,end): restituisce porzione dell'array senza modificarlo
let middleDays = days.slice(1, 4); // Da posizione 1 a 3 incluse

// concat(): ritorna un nuovo array
let allDays = days.concat(arrayCopy);

// forEach(): itera e esegue una funzione su ogni elemento
days.forEach((day, idx) => console.log(idx + ': ' + day));

// map(): crea un nuovo array applicando la funzione a ogni elemento
let lowerDays = days.map(day => day.toLowerCase());

// filter(): nuovo array con solo elementi che soddisfano la condizione
let names = ['Anna', 'Bruno', 'Luca'];
let namesWithA = names.filter(name => name.includes('a'));

// find(): restituisce il primo elemento che verifica la condizione
let primoLungo = names.find(name => name.length > 4);

// some()/every(): verifica se almeno uno/tutti soddisfano la condizione
let almenoUno = names.some(name => name.startsWith('A')); // true
let tuttiHannoA = names.every(name => name.includes('a')); // false

// reduce(): esegue calcolo cumulativo partendo da un valore iniziale
let numbers = [2, 4, 6];
let somma = numbers.reduce((acc, curr) => acc + curr, 0);
// Per prodotto: numbers.reduce((acc, curr) => acc * curr, 1)

// Destructuring degli array
let [a, b] = [1, 2];
let arr = [4, 6, 8, 9];
function summ(...args) {
    return args.reduce((a, b) => a + b);
}
console.log(summ(...arr));

// Destructuring oggetti
let obj = { name: 'John', lastName: 'Doe' };
let { name: Nome, lastName: cognome } = obj;
({ name: nome, lastName: cognome } = { name: 'Hidran', lastName: 'Arias' });
console.log(nome, cognome);

// Arrow function e this: in arrow, this è quello del contesto esterno
let arr2 = [2, 5, 7, 9, 6, 8, 13, 15];
let arrEven = arr2.filter(num => num % 2 === 0);  // [2,6,8]
console.log(arrEven);
console.log(arrEven.map(num => num * 2));         // [4,12,16]
console.log(arrEven.reduce((a, b) => a * b));     // prodotto

// Oggetti complessi e filter/map su array di oggetti
let cities = [
    { name: 'TORINO', reg: 'PIE' },
    { name: 'ASTI', reg: 'PIE' },
    { name: 'MILANO', reg: 'LOM' },
    { name: 'COMO', reg: 'LOM' },
];
let lombardia = cities.filter(c => c.reg == 'LOM').map(c => c.name);
console.log(lombardia); // ['MILANO', 'COMO']

/*
Note importanti:
- Gli array sono strutture dati flessibili a dimensione variabile e dati eterogenei.
- Metodi principali: push/pop, shift/unshift, join, splice, slice, toString, concat, forEach, map, filter, find, some, every, reduce.
- toString() converte l'intero array in una stringa separata da virgole senza modificarlo.
- indexOf e includes permettono ricerca di un valore.
- Destructuring semplifica estrazione di valori da array/oggetti.
- Gli array sono indicizzati da zero.
- I metodi funzionali permettono manipolazioni concise e leggibili.
*/
