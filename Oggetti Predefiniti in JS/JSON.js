// Un oggetto è una collezione dinamica di proprietà/moduli che rappresentano dei dati e i loro comportamenti.
// Ogni proprietà è una coppia chiave/valore, i valori possono essere di qualsiasi tipo, inclusi altri oggetti o funzioni (metodi).
// Lavorare con gli oggetti permette di modellare entità del mondo reale o concetti astratti in modo leggibile e riutilizzabile.

// 1. Creazione e manipolazione di oggetti

// Oggetto letterale semplice con proprietà e metodo
const persona = {
  nome: 'Mario',
  cognome: 'Rossi',
  eta: 30,
  saluta() {
    console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
  }
};

persona.saluta();                  // Ciao, sono Mario Rossi

// Accesso alle proprietà
console.log(persona.nome);        // "Mario"
console.log(persona['cognome']);  // "Rossi"

// Aggiunta/modifica proprietà
persona.lavoro = 'Sviluppatore';
persona.eta = 31;

// Eliminazione proprietà
delete persona.lavoro;

// 2. Metodi nativi per oggetti

// Object.keys(obj): restituisce array con le chiavi
console.log(Object.keys(persona));

// Object.values(obj): restituisce array con i valori
console.log(Object.values(persona));

// Object.entries(obj): restituisce array di coppie [chiave, valore]
console.log(Object.entries(persona));

// Object.assign(target, ...sources): copia proprietà da fonti in target
const extra = { hobby: 'calcio' };
const copia = Object.assign({}, persona, extra);
console.log(copia);

// 3. JSON - JavaScript Object Notation

// JSON.stringify(obj): converte un oggetto JavaScript in una stringa JSON
const jsonString = JSON.stringify(persona);
console.log(jsonString);

// JSON.parse(str): converte una stringa JSON in un oggetto JavaScript
const jsonStr = '{"nome":"Hidran","cognome":"Arias"}';
const objParsed = JSON.parse(jsonStr);
console.log(objParsed.nome);

// 4. Copie profonde con structuredClone()

const originale = { a: 1, nested: { b: 2 } };
const cloneProfondo = structuredClone(originale);

cloneProfondo.nested.b = 3;
console.log(originale.nested.b);     // 2 (immutato)
console.log(cloneProfondo.nested.b); // 3 (modificato)

// 5. Iterare sulle proprietà di un oggetto

for (const prop in persona) {
  if (persona.hasOwnProperty(prop)) {
    console.log(`${prop}: ${persona[prop]}`);
  }
}

// 6. Lavorare con array di oggetti

const utenti = [
  { id: 1, nome: 'Anna' },
  { id: 2, nome: 'Bruno' }
];
const nomiUtenti = utenti.map(u => u.nome);
console.log(nomiUtenti);

// 7. Controllo della mutabilità

// Object.freeze(obj): rende l'oggetto immutabile
const objFreeze = { x: 10 };
Object.freeze(objFreeze);
objFreeze.x = 20; // Modifica ignorata
console.log(objFreeze.x); // 10

// Object.seal(obj): impedisce aggiunta/eliminazione proprietà, ma permette modifica valori esistenti
const objSeal = { y: 5 };
Object.seal(objSeal);
objSeal.y = 6;   // Modifica permessa
// objSeal.z = 7; // Ignorata o error under strict mode
console.log(objSeal.y); // 6

/*
Note importanti:
- Gli oggetti in JavaScript sono essenziali per strutturare dati complessi con proprietà e metodi.
- I metodi Object.keys, Object.values e Object.entries permettono di lavorare facilmente con proprietà e valori.
- JSON.stringify e JSON.parse permettono serializzazione e deserializzazione di oggetti, fondamentali per l’interscambio dati.
- structuredClone è il modo moderno per effettuare copie profonde di oggetti annidati senza riferimento condiviso.
- Usare for...in con hasOwnProperty garantisce di iterare solo su proprietà proprie dell’oggetto.
- Object.freeze e Object.seal migliorano il controllo su mutabilità degli oggetti per evitare modifiche accidentali.
- Lavorare con array di oggetti e metodi come map semplifica la manipolazione di collezioni strutturate.
*/
