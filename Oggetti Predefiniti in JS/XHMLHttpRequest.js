// XMLHttpRequest è un oggetto built-in di JavaScript che permette di effettuare richieste HTTP asincrone.
// Viene usato per caricare dati dal server senza ricaricare la pagina (base di AJAX).

// Passaggi per usare XMLHttpRequest:

// 1. Creare un'istanza
const xhr = new XMLHttpRequest();

// 2. Configurare la richiesta: open(metodo, URL, asincrono)
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

// 3. Impostare azioni su eventi (caricamento, errore, progresso)

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        // Successo: la risposta è in xhr.responseText
        console.log('Risposta ricevuta:', xhr.responseText);

        // Se la risposta è JSON, la si può convertire in oggetto JS
        const data = JSON.parse(xhr.responseText);
        console.log('Titolo:', data.title);
    } else {
        console.error('Errore HTTP:', xhr.status, xhr.statusText);
    }
};

xhr.onerror = function() {
    console.error('Errore di rete o impossibile completare la richiesta');
};

xhr.onprogress = function(event) {
    if (event.lengthComputable) {
        console.log(`Caricati ${event.loaded} di ${event.total} bytes`);
    } else {
        console.log(`Caricati ${event.loaded} bytes`);
    }
};

// 4. Inviare la richiesta
xhr.send();

// ------------ Esempi metodi HTTP diversi ------------

// 5. POST - inviare dati al server (creazione risorsa)
const xhrPost = new XMLHttpRequest();
xhrPost.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
xhrPost.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
xhrPost.onload = function() {
  if (xhrPost.status >= 200 && xhrPost.status < 300) {
    console.log('POST Success:', JSON.parse(xhrPost.responseText));
  } else {
    console.error('POST Error:', xhrPost.status, xhrPost.statusText);
  }
};
xhrPost.onerror = function() {
  console.error('Network error during POST');
};
xhrPost.send(JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }));

// 6. PUT - aggiornare completamente una risorsa esistente
const xhrPut = new XMLHttpRequest();
xhrPut.open('PUT', 'https://jsonplaceholder.typicode.com/posts/1', true);
xhrPut.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
xhrPut.onload = function() {
  if (xhrPut.status >= 200 && xhrPut.status < 300) {
    console.log('PUT Success:', JSON.parse(xhrPut.responseText));
  } else {
    console.error('PUT Error:', xhrPut.status, xhrPut.statusText);
  }
};
xhrPut.onerror = function() {
  console.error('Network error during PUT');
};
xhrPut.send(JSON.stringify({ title: 'updated title', body: 'updated body', userId: 1 }));

// 7. PATCH - aggiornare parzialmente una risorsa
const xhrPatch = new XMLHttpRequest();
xhrPatch.open('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', true);
xhrPatch.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
xhrPatch.onload = function() {
  if (xhrPatch.status >= 200 && xhrPatch.status < 300) {
    console.log('PATCH Success:', JSON.parse(xhrPatch.responseText));
  } else {
    console.error('PATCH Error:', xhrPatch.status, xhrPatch.statusText);
  }
};
xhrPatch.onerror = function() {
  console.error('Network error during PATCH');
};
xhrPatch.send(JSON.stringify({ title: 'partially updated title' }));

// 8. DELETE - eliminare una risorsa
const xhrDelete = new XMLHttpRequest();
xhrDelete.open('DELETE', 'https://jsonplaceholder.typicode.com/posts/1', true);
xhrDelete.onload = function() {
  if (xhrDelete.status >= 200 && xhrDelete.status < 300) {
    console.log('DELETE Success:', xhrDelete.responseText);
  } else {
    console.error('DELETE Error:', xhrDelete.status, xhrDelete.statusText);
  }
};
xhrDelete.onerror = function() {
  console.error('Network error during DELETE');
};
xhrDelete.send();

// --------------------------------------------------

// Note importanti:
// - XMLHttpRequest supporta tutti i metodi HTTP: GET, POST, PUT, PATCH, DELETE, ecc.
// - open() prepara la richiesta; send() la invia.
// - readyState e status permettono di controllare lo stato della richiesta.
// - Eventi come onload, onerror e onprogress gestiscono risposte, errori e feedback progressivo.
// - Per inviare dati POST, PUT o PATCH si usa send(body) con header Content-Type appropriato.
// - Nell'era moderna, Fetch API è un'alternativa più semplice e potente; XMLHttpRequest rimane usato per compatibilità.
// - Usare XMLHttpRequest richiede gestione manuale degli stati e callback, mentre Fetch usa Promise per codice più leggibile.
