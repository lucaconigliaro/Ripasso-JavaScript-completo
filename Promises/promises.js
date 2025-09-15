// Una Promise rappresenta un'operazione asincrona che potrà essere completata (risolta) o fallire (rifiutata) in futuro.
// Serve per gestire async JS senza annidare callback (callback hell).

// Stati possibili di una Promise:
// - pending (in attesa)
// - fulfilled (completata con successo)
// - rejected (fallita)

// CREARE UNA PROMISE
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const successo = true; // prova a mettere false per test!
    if (successo) resolve('OK!');
    else reject('Errore!');
  }, 1000);
});

// CONSUMARE UNA PROMISE

myPromise
  .then(result => {
    // Successo: eseguito se la promise è risolta
    console.log('Promessa risolta:', result);
  })
  .catch(error => {
    // Fallimento: eseguito se la promise è rifiutata
    console.error('Promessa rifiutata:', error);
  })
  .finally(() => {
    // Eseguito comunque, sempre alla fine
    console.log('Operazione terminata.');
  });

// CATENE DI PROMISE: puoi collegare operazioni asincrone in sequenza
const doppiaPromise = new Promise((resolve) => {
  setTimeout(()=> resolve(5), 700);
});

doppiaPromise
  .then(val => val * 2)
  .then(val => {
    console.log('Valore dopo catena:', val); // stampa 10
    return val;
  })
  .catch(e => console.error(e));

// PROMISE ALL: attendere più Promise in parallelo
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(values => {
    console.log('Tutte risolte:', values); // [1,2,3]
  })
  .catch(e => {
    console.error('Una promise è stata rifiutata:', e);
  });

/*
Note importanti:
- Una Promise semplifica la scrittura asincrona: niente callback annidate!
- .then gestisce il successo, .catch gestisce l’errore, .finally è sempre chiamato.
- Promise.all aspetta che tutte (o almeno una rifiutata) siano completate.
- Utile per fetch dati API, timer, animazioni, codice asincrono in generale.
- Le Promises sono la base di async/await.
*/
