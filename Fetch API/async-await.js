// Async/Await è una sintassi moderna per gestire codice asincrono in modo più leggibile e simile al codice sincrono tradizionale.
// Permette di "attendere" la risoluzione di una Promise prima di procedere, evitando la complessità del chaining di .then().

// La parola chiave async definisce una funzione asincrona che ritorna una Promise.
// La parola chiave await sospende l'esecuzione della funzione async finché la Promise non si risolve o viene rifiutata.

// Esempio base async/await con fetch API

async function fetchPost(id) {
  try {
    // Attende la risposta della fetch
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok'); // Gestione errore HTTP
    }
    // Attende la conversione del corpo in JSON
    const data = await response.json();
    return data;
  } catch (error) {
    // Gestione errori di rete o parsing
    console.error('Fetch error:', error);
    throw error;  // Rilancia per gestioni successive
  }
}

// Uso di async/await con Promise.all

async function fetchMultiplePosts(ids) {
  try {
    // Mappa array di id in array di Promise
    const promises = ids.map(id => fetchPost(id));

    // Attende tutte le Promise con Promise.all
    const results = await Promise.all(promises);

    console.log('Posts caricati:', results);
    return results;
  } catch (error) {
    console.error('Errore in Promise.all:', error);
  }
}

// Invocazione esempi
(async () => {
  const post = await fetchPost(1);
  console.log('Post singolo:', post);

  const posts = await fetchMultiplePosts([1, 2, 3]);
  console.log('Più post:', posts);
})();

/*
Note importanti:
- Async/await rende il codice asincrono più facile da leggere e scrivere rispetto a .then() e callback.
- Await può essere usato solo dentro funzioni dichiarate async.
- Gestire gli errori è semplice con try/catch.
- Promise.all permette di eseguire più Promise in parallelo e attendere che tutte finiscano.
- Async/await è basato su Promise, ma offre sintassi più pulita.
- È ampiamente supportato nei browser moderni ed è raccomandato per codice asincrono complesso.
*/
