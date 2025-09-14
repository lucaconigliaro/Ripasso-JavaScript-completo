// Map è una collezione di coppie chiave-valore simile agli oggetti, ma le chiavi possono essere di qualsiasi tipo (stringhe, oggetti, funzioni ecc).
// Mantiene l'ordine di inserimento e permette di conoscere la dimensione con la proprietà .size.

// Creazione e aggiunta elementi
const mydict = new Map();

const name = 'string key';
const func = () => {};
const obj = { name: 'Luca', lastName: 'Conigliaro' };

mydict.set(name, 'This is a string');
mydict.set(func, 'This is a function');
mydict.set(obj, 'This is an object');

console.log('Size of my dict = ' + mydict.size);            // 3
console.log(mydict.get(obj));                                // This is an object

// Iterazione sulle chiavi e valori
for (let [k, v] of mydict.entries()) {
    console.log(typeof k, ' => ', v);
}

// Iterazione con forEach (valore, chiave)
mydict.forEach((v, k) => {
    console.log(k, '->', v);
});


// Operazioni utili su Map:

// has(key) verifica se esiste la chiave
console.log(mydict.has(name));     // true
console.log(mydict.has({}));       // false, perché {} è un oggetto diverso (diverso riferimento)

// delete(key) rimuove una coppia chiave-valore
mydict.delete(name);
console.log(mydict.has(name));     // false

// clear() rimuove tutti gli elementi
mydict.clear();
console.log(mydict.size);          // 0

// Creare una Map da un array di coppie
const provinceMap = new Map([
    ['TO', 'TORINO'],
    ['MI', 'MILANO']
]);
console.log(provinceMap.get('TO'));  // TORINO

/*
Note importanti su Map:
- Le chiavi possono essere di qualsiasi tipo, anche oggetti e funzioni.
- Mantiene l'ordine di inserimento degli elementi.
- Fornisce metodo size per sapere il numero di elementi.
- Offre metodi per aggiungere (set), leggere (get), verificare esistenza (has), cancellare (delete) elementi.
- Iterare su Map è semplice con for...of, entries(), keys(), values() e forEach.
- Map è più potente e flessibile rispetto agli oggetti per associazioni chiave-valore quando le chiavi non sono solo stringhe.
*/
