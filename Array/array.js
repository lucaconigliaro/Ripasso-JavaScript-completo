// Gli array sono strutture dati fondamentali che permettono di raccogliere elementi ordinati.
// Ogni elemento è accessibile tramite un indice numerico a partire da 0.
// JavaScript consente array dinamici, quindi possono crescere o ridursi in dimensione durante l'esecuzione.

// Creazione di un array con i giorni della settimana
const DAYS = [
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
    'SUNDAY',
];

console.log(DAYS[0]);      // Accesso al primo elemento: MONDAY
console.log(DAYS.length);  // Lunghezza dell'array: 7

// Modifica di un elemento esistente
DAYS[1] = 'TUESDAY MODIFIED';

// Aggiunta di un elemento in coda con push()
DAYS.push('LUNES');

console.log(DAYS);        // Array aggiornato

// Rimozione di elementi

// pop(): rimuove l'ultimo elemento e lo ritorna
let removed = DAYS.pop();
console.log(removed);     // LUNES
console.log(DAYS.length); // 7 (dopo la rimozione)

// shift(): rimuove il primo elemento e lo ritorna
removed = DAYS.shift();
console.log(removed);     // MONDAY
console.log(DAYS.length); // 6

// Metodi utili per manipolare gli array

let fruits = ['Apple', 'Banana', 'Orange'];

// Push - aggiunge elementi in fondo
fruits.push('Kiwi');

// Pop - rimuove e restituisce l'ultimo elemento
const lastFruit = fruits.pop();

// Shift - rimuove e restituisce il primo elemento
const firstFruit = fruits.shift();

// Unshift - aggiunge elementi in testa
fruits.unshift('Strawberry');

console.log(fruits);

// Ricerca degli elementi

// indexOf - restituisce l'indice del primo elemento trovato o -1
console.log(fruits.indexOf('Banana'));     // 1
console.log(fruits.indexOf('Pineapple'));  // -1

// includes - verifica se un elemento esiste nell'array
console.log(fruits.includes('Orange'));   // true
console.log(fruits.includes('Papaya'));   // false

// Join - trasforma l'array in una stringa separando gli elementi
console.log(fruits.join(', '));   // "Strawberry, Banana, Orange"

// Slice - estrae una porzione dell'array senza modificarlo
const sliceFruits = fruits.slice(1, 3);
console.log(sliceFruits);         // ['Banana', 'Orange']

// Splice - modifica l'array rimuovendo o inserendo elementi
// Qui rimuovo 1 elemento dall'indice 1 e inserisco "Peach" e "Pineapple"
fruits.splice(1, 1, 'Peach', 'Pineapple');
console.log(fruits);

// Iterazione sugli array

// forEach - esegue una funzione per ogni elemento dell'array, senza modificarlo
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// map - crea un nuovo array applicando una funzione a ogni elemento
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);

// filter - crea un nuovo array con elementi che soddisfano una condizione
const fruitsWithA = fruits.filter(fruit => fruit.toLowerCase().includes('a'));
console.log(fruitsWithA);

// find - trova il primo elemento che soddisfa una condizione
const firstWithA = fruits.find(fruit => fruit.toLowerCase().includes('a'));
console.log(firstWithA);

// Iterazione con entries - ottieni indice e valore
for (let [index, fruit] of fruits.entries()) {
    console.log(`${index} - ${fruit}`);
}

/*
Note importanti:
- Gli array JavaScript sono flessibili e consentono la manipolazione dinamica dei dati.
- I metodi push, pop, shift, unshift, splice, slice sono essenziali per la gestione efficiente degli array.
- Gli operatori funzionali come map, filter, find permettono di scrivere codice conciso e leggibile.
- È fondamentale ricordare che l'indicizzazione degli array parte da zero.
*/
