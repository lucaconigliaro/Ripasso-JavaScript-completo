// Un array è una raccolta ordinata di elementi, indicizzati da 0.
// Gli array possono contenere elementi di qualsiasi tipo: numeri, stringhe, oggetti, funzioni, e altro.
// La lunghezza degli array può variare dinamicamente mentre si aggiungono o rimuovono elementi.

// Esempio:
let giorni = ['Lunedì', 'Martedì', 'Mercoledì'];
console.log(giorni[0]);  // Stampa 'Lunedì'
console.log(giorni.length);  // Stampa 3

// Modifica di un elemento
giorni[1] = 'Martedì modificato';
console.log(giorni[1]);  // Stampa 'Martedì modificato'

// Aggiunta di un elemento alla fine
giorni.push('Giovedì');
console.log(giorni);     // Stampa l’array aggiornato

// Rimozione dell'ultimo elemento
let ultimo = giorni.pop();
console.log(ultimo);     // Stampa 'Giovedì'
console.log(giorni);     // Array aggiornato senza Giovedì