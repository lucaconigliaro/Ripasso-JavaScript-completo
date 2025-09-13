'use strict';

// Array con i giorni della settimana
const DAYS = [
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
    'SUNDAY',
];

// Array che contiene elementi di tipi diversi (numero, array, stringa)
let myVals = [];
myVals[0] = 12;
myVals[1] = [1, 2, 3];
myVals[2] = 'test';

// Aggiunta di elementi in coda all'array usando il metodo push (preferibile all'assegnazione diretta)
DAYS.push('LUNES', 'MARTES');

// Estensione dell'array con assegnazione a indice alto, creando elementi undefined intermedi
DAYS[20] = 'MARTES';

console.log('length =', DAYS.length);

// Iterare su indici e valori dell'array con entries()
for (let [i, day] of DAYS.entries()) {
    // console.log(i, day, '\n'); // Riga commentata per evitare output eccessivo
}

// Creazione di un array con due elementi usando la sintassi letterale, più chiara di new Array()
let myValues = [8, 3];
console.log(myValues);

// Sovrascrittura del primo elemento
myValues[0] = 'test';

/*
Note importanti:
- Gli array sono strutture dati fondamentali usate per contenere insiemi ordinati di elementi.
- In JavaScript gli array sono dinamici e possono contenere tipi eterogenei nello stesso array.
- È buona pratica usare la sintassi letterale [] per creare array e il metodo push() per aggiungere elementi alla fine.
- Assegnare un valore a un indice elevato estende l’array inserendo elementi undefined negli indici intermedi, ma può creare "buchi" e va usato con cautela.
- Iterare un array usando entries() permette di ottenere sia l’indice che il valore in modo pulito e leggibile.
*/
