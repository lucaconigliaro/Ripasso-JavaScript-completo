// Un Set è una collezione di valori unici, simile a un array ma che impedisce duplicati.

// Creazione di un Set vuoto e aggiunta di elementi con add()
const flavors = new Set();
flavors.add(4);
flavors.add('Name');
let myFunc = () => {};
flavors.add(myFunc);
flavors.add({name: 'Luca', lastname: 'Conigliaro'});
flavors.add(4); // Il duplicato non viene aggiunto

console.log(flavors);

// Verificare presenza elemento con has()
console.log(flavors.has(4)); // true

// Rimuovere un elemento con delete()
flavors.delete(4);
console.log(flavors);

// Iterare con forEach()
flavors.forEach(val => console.log(val));

// Iterare con valori con values() (equivalente a keys() per Set)
for (let val of flavors.values()) {
    console.log(val);
}

// Iterare con chiavi (per Set sono uguali ai valori)
for (let k of flavors.keys()) {
    console.log('k=' + k);
}

// Iterare con coppie [chiave, valore] (per Set le coppie sono [valore, valore])
for (let [k, v] of flavors.entries()) {
    console.log(k + ' = ' + v);
}

// Svuotare il Set con clear()
flavors.clear();
console.log(flavors); // Set vuoto

// Creazione da array: rimuove duplicati automaticamente
let myArray = [3, 5, 5, 6, 6, 7];
let uniqueValues = new Set(myArray);
console.log(uniqueValues); // Set(4) {3, 5, 6, 7}

/*
Metodi principali di Set:
- add(value): aggiunge un valore unico
- has(value): verifica se c'è un valore
- delete(value): elimina un valore specifico
- clear(): elimina tutti gli elementi
- forEach(callback): esegue callback per ogni elemento
- values(), keys(), entries(): permettono di iterare su valori o coppie (per Set key=valore)

Note importanti:
- Set immagazzina solo valori unici (duplicati ignorati).
- Permette di gestire insiemi di dati senza duplicazioni in modo semplice ed efficiente.
- Gli iteratori di Set rispettano l'ordine di inserimento.
- Funziona con qualsiasi tipo di valore, inclusi oggetti e funzioni (ma attenzione ai riferimenti).
*/
