// Il DOM è una rappresentazione ad oggetti della struttura di un documento HTML o XML.
// Modella la pagina web come un albero gerarchico di nodi (elementi, attributi, testo, ecc).
// Permette a JavaScript di accedere, manipolare e modificare il contenuto, la struttura e lo stile della pagina dinamicamente.

// Il DOM rappresenta ogni elemento HTML come un "nodo" in una struttura ad albero.
// Attraverso il DOM, possiamo selezionare elementi, modificarne proprietà e contenuto, aggiungerne di nuovi o eliminare quelli esistenti.
// È la base per creare pagine web dinamiche e interattive.

// L'accesso all'insieme del documento avviene tramite l'oggetto globale `document` che rappresenta il DOM della pagina corrente.

// -----------------------

// document.DOMDocumentLoaded (evento DOMContentLoaded)

// Questo evento viene lanciato quando il documento HTML è stato completamente caricato e analizzato,
// ma prima che tutte le risorse esterne come immagini, fogli di stile o frame siano stati caricati.

// È utile per eseguire codice JavaScript che agisce sulla struttura DOM senza dover aspettare il caricamento completo della pagina.
// Questo rende più veloce l'inizializzazione delle interazioni sull'HTML.

// Esempio di uso:

document.addEventListener('DOMContentLoaded', function() {
  console.log('Il DOM è completamente caricato e pronto!');
  // Qui possiamo manipolare gli elementi HTML in sicurezza
  const titolo = document.getElementById('titolo');
  if (titolo) {
    titolo.style.color = 'blue';
  }
});

// Differenza con window.onload:
// - window.onload aspetta che TUTTO sia caricato, comprese immagini e script esterni
// - DOMContentLoaded si attiva appena il DOM è pronto, quindi più velocemente

/*
Note importanti:
- Il DOM è il modello standard per interagire con documenti web tramite programmazione.
- document è l'oggetto principale per accedere e modificare la struttura della pagina.
- DOMContentLoaded è l’evento perfetto per inizializzare script che manipolano il DOM in modo efficiente.
- La manipolazione del DOM è alla base delle web app moderne e di molte librerie/framework.
*/
