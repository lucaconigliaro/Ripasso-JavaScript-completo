// Metodi principali dell'oggetto document per manipolare il DOM:

// 1. Selezione elementi

// getElementById(id): seleziona un elemento tramite il suo attributo id (unico)
const elemById = document.getElementById('myElement');

// getElementsByClassName(className): seleziona tutti gli elementi con una classe (HTMLCollection)
const elemsByClass = document.getElementsByClassName('myClass');

// getElementsByTagName(tagName): seleziona tutti gli elementi con un certo tag (HTMLCollection)
const elemsByTag = document.getElementsByTagName('div');

// querySelector(selector): seleziona il primo elemento che corrisponde a un selettore CSS
const firstMatch = document.querySelector('.myClass:first-child');

// querySelectorAll(selector): seleziona tutti gli elementi che corrispondono a un selettore CSS (NodeList)
const allMatches = document.querySelectorAll('div.myClass');

// 2. Creazione e inserimento elementi

// createElement(tagName): crea un nuovo elemento HTML
const nuovoDiv = document.createElement('div');

// createTextNode(text): crea un nodo di testo
const testo = document.createTextNode('Testo di esempio');

// appendChild(child): aggiunge un nodo figlio alla fine dell'elemento
nuovoDiv.appendChild(testo);
document.body.appendChild(nuovoDiv);

// insertBefore(newNode, referenceNode): inserisce newNode prima di referenceNode nell'elemento padre
const parent = document.getElementById('container');
const refNode = document.getElementById('ref');
parent.insertBefore(nuovoDiv, refNode);

// 3. Modifica contenuti e attributi

// innerHTML: testo HTML interno (rimuove/aggiunge contenuti dinamicamente)
document.body.innerHTML += '<p>Paragrafo inserito</p>';

// textContent: solo testo (senza interpretare HTML)
const p = document.querySelector('p');
p.textContent = 'Nuovo testo';

// setAttribute(name, value), getAttribute(name), removeAttribute(name)
p.setAttribute('class', 'newClass');
console.log(p.getAttribute('class'));
p.removeAttribute('class');

// 4. Gestione classi

// classList: interface per gestire classi CSS di un elemento
p.classList.add('evidenziato');
p.classList.remove('vecchiaClasse');
p.classList.toggle('attivo');

// 5. Rimozione elemento
// remove(): rimuove l'elemento dal DOM
p.remove();

// 6. Eventi

// addEventListener(type, callback, options)
// Permette di ascoltare eventi (click, input, load, ecc)
const btn = document.getElementById('myButton');
btn.addEventListener('click', function(event) {
  alert('Hai cliccato il bottone!');
});

// 7. Navigazione tra nodi

// parentNode, childNodes, firstChild, lastChild, nextSibling, previousSibling
const parentElem = p.parentNode;
const children = parentElem.childNodes;

// 8. Altri metodi utili

// contains(node): verifica se un nodo è discendente
console.log(document.body.contains(p));  // true

// cloneNode(deep): clona un nodo; deep=true clona anche i figli
const clone = p.cloneNode(true);
document.body.appendChild(clone);

/*
Note importanti:
- I metodi per selezionare elementi sono fondamentali per trovare nodi DOM da manipolare.
- Creare, modificare e rimuovere elementi dinamicamente consente di costruire interfacce interattive.
- Gestire classi via classList è più semplice e performante rispetto a manipolare attributi class direttamente.
- addEventListener permette di reagire alle azioni dell'utente o eventi del sistema.
- Navigare tra nodi e usarne metodi aiuta a strutturare la manipolazione del DOM in modo preciso.
*/
