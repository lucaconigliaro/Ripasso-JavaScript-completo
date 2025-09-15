// Gli eventi in JavaScript sono segnali generati dal browser quando succede qualcosa sulla pagina
// (ad esempio: l'utente clicca, muove il mouse, preme un tasto, cambia contenuto di un input, ecc).
// Permettono di rendere le pagine web interattive, reagendo alle azioni dell'utente o a cambiamenti nel documento.

// 1. Assegnare gestori di eventi con addEventListener

const btn = document.getElementById('myButton');

// click evento: funzione eseguita quando il bottone viene cliccato
btn.addEventListener('click', function(event) {
  console.log('Hai cliccato il bottone!');
  // event è l’oggetto evento, contiene informazioni utili come event.type, event.target, ecc.
});

// mouseover: si attiva quando il mouse passa sopra l’elemento
btn.addEventListener('mouseover', function(event) {
  btn.style.backgroundColor = 'lightblue';
});

// 2. Alcuni eventi comuni

// keydown: tasto premuto su tastiera
document.addEventListener('keydown', function(event) {
  console.log('Tasto premuto:', event.key);
});

// input: valore di un campo input cambia
const campo = document.getElementById('campoTesto');
campo.addEventListener('input', function(event) {
  console.log('Nuovo valore:', event.target.value);
});

// submit: invio di un form
const form = document.getElementById('mioForm');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // impedisce invio classico
  console.log('Form inviato!');
});

// 3. Evento DOMContentLoaded
// Si attiva quando l’albero DOM è caricato e pronto per manipolazioni
document.addEventListener('DOMContentLoaded', function() {
  console.log('Il DOM è pronto!');
});

// 4. Note su gestione eventi

// Puoi rimuovere l’evento con removeEventListener
function gestoreClick() {
  console.log('Clic!');
}
btn.addEventListener('click', gestoreClick);
// btn.removeEventListener('click', gestoreClick);

// L’oggetto event contiene informazioni diverse a seconda del tipo (es: click, tastiera, input...).

// 5. Propagazione e delega

// Gli eventi si propagano (bubbling) dalla foglia verso il padre.
// Puoi catturare eventi su contenitori per gestire molti elementi simili (event delegation):

document.getElementById('lista').addEventListener('click', function(event) {
  if(event.target.tagName === 'LI') {
    console.log('Hai cliccato su', event.target.textContent);
  }
});

/*
Note importanti:
- Il cuore dell'interattività JS: gli eventi collegano interazione utente e codice.
- addEventListener permette gestione multipla e ordinata degli eventi.
- L’oggetto event fornisce dettagli sul tipo, target, coordinate e altri dati dell’evento.
- La delega e la propagazione sono strumenti avanzati per gestire strutture dinamiche ed efficienti.
- Usare removeEventListener permette di controllare la durata dei listener e risparmiare risorse.
*/
