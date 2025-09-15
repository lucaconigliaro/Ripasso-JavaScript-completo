'use strict';

// Introduzione a Fetch API
// La Fetch API è uno standard moderno per effettuare richieste HTTP asincrone nel browser tramite JavaScript.
// Consente di contattare server, recuperare o inviare dati e gestire le risposte in maniera semplice e pulita, grazie all'utilizzo delle Promise.
// Essendo basata su Promise, permette di scrivere codice asincrono più leggibile rispetto a XMLHttpRequest.

// Esempio base di codice commentato con Fetch API:

let postUrl = 'https://jsonplaceholder.typicode.com/posts/';

// Effettuare una richiesta GET semplice con Fetch
fetch(postUrl + 1)
  .then((result) => {
    // result è un oggetto Response che contiene informazioni sulla risposta HTTP
    console.dir(result);

    // Verifico che la risposta sia HTTP ok (status 200-299)
    if (result.ok) {
      // Controllo che il Content-Type sia application/json
      if (result.headers.get('Content-Type').includes('application/json')) {
        // Converto la risposta JSON in oggetto JavaScript
        return result.json();
      }
      // Se il contenuto non è JSON, genero un errore
      throw new Error('response type is not json');
    } else {
      // Se la risposta HTTP non è ok, lancio errore
      throw new Error('response failed');
    }
  })
  .then((json) => {
    // Qui uso i dati JSON ricevuti dal server
    console.log(json);
  })
  .catch((err) => {
    // Gestione degli errori di rete o parsing
    console.error('Fetch error:', err);
  });

// Promise.all: gestire più promise contemporaneamente

// Creiamo tre Promise di esempio, che si risolvono con valori dopo tempi diversi
const p1 = new Promise((resolve) => setTimeout(() => resolve('Primo'), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve('Secondo'), 2000));
const p3 = new Promise((resolve) => setTimeout(() => resolve('Terzo'), 1500));

// Promise.all aspetta che tutte le Promise si risolvano per passare i risultati insieme
Promise.all([p1, p2, p3])
  .then(results => {
    console.log('Risultati di Promise.all:', results); 
    // Stampa: ['Primo', 'Secondo', 'Terzo']
  })
  .catch(error => {
    console.error('Errore in Promise.all:', error);
  });

/*
Note importanti sulla Fetch API e Promise.all:

- fetch() ritorna una Promise che risolve con l’oggetto Response.
- È fondamentale controllare response.ok per gestire correttamente gli errori HTTP.
- response.json() legge il corpo della risposta e ritorna un’altra Promise che risolve con il JSON.
- .catch() gestisce errori di rete o errori nei then.
- Promise.all permette di eseguire più operazioni asincrone in parallelo e attendere che tutte finiscano.
- Se una Promise in Promise.all viene rifiutata, tutto il gruppo viene rifiutato.
- Grazie a Promise e Fetch è possibile scrivere codice asincrono chiaro, efficiente e facile da mantenere.
*/
