// Gli oggetti sono insiemi di proprietà e metodi che rappresentano entità complesse in modo strutturato.
// Una proprietà è una coppia "chiave: valore", la chiave è quasi sempre una stringa, il valore può essere qualsiasi tipo.
// I metodi sono funzioni associate a un oggetto, in grado di agire sulle sue proprietà.

// 1. Creazione di oggetti

// Oggetto letterale: modo più semplice e diretto di definire un oggetto con proprietà e metodi
const persona = {
  nome: 'Mario',
  cognome: 'Rossi',
  eta: 30,
  // Metodo che stampa saluto usando "this" per accedere alle proprietà
  saluta() {
    console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
  }
};
persona.saluta(); // Ciao, sono Mario Rossi

// 2. Accesso e manipolazione proprietà
console.log(persona.nome);        // Mario
console.log(persona['cognome']);  // Rossi

persona.lavoro = 'Sviluppatore';  // Aggiunta proprietà
persona.eta = 31;                 // Modifica proprietà
delete persona.lavoro;            // Eliminazione proprietà


// 3. Metodi utili per oggetti

// Object.keys(obj): array delle chiavi
console.log(Object.keys(persona));

// Object.values(obj): array dei valori
console.log(Object.values(persona));

// Object.entries(obj): array di coppie [chiave, valore]
console.log(Object.entries(persona));

// Object.assign(target, sources...): copia proprietà da uno o più oggetti a target
const extra = { hobby: 'calcio' };
const copia = Object.assign({}, persona, extra);
console.log(copia);


// 4. Serializzazione JSON

// JSON.stringify(obj): converte oggetto JS in stringa JSON
const jsonStr = JSON.stringify(persona);
console.log(jsonStr); // Senza funzioni/Simboli

// JSON.parse(str): converte stringa JSON in oggetto JS
const objDaJson = JSON.parse(jsonStr);
console.log(objDaJson.nome);


// 5. Copie profonde con structuredClone (ES2021+)

const clonePersona = structuredClone(persona);
clonePersona.nome = 'Luigi';
console.log(persona.nome);       // Mario (non modificata)
console.log(clonePersona.nome);  // Luigi (nuovo oggetto clone)


// 6. Classi (Sintassi ES6 per oggetti con costruttore e metodi)

class Persona {
  constructor(nome, cognome, eta) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
  }
  saluta() {
    console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
  }
}

const p1 = new Persona('Anna', 'Bianchi', 25);
p1.saluta(); // Ciao, sono Anna Bianchi


// 7. Controllo mutabilità degli oggetti

// Object.freeze(obj): blocca modifiche su tutta la struttura
const objFreeze = { a: 1 };
Object.freeze(objFreeze);
objFreeze.a = 2; // Ignorato o errore
console.log(objFreeze.a); // 1

// Object.seal(obj): blocca aggiunte e rimozioni di proprietà ma permette modifiche esistenti
const objSeal = { b: 2 };
Object.seal(objSeal);
objSeal.b = 3; // Modifica permessa
// objSeal.c = 4; // Ignorato o errore
console.log(objSeal.b); // 3


// 8. Ciclo sulle proprietà con for...in e hasOwnProperty

for (const prop in persona) {
  if (persona.hasOwnProperty(prop)) {
    console.log(`${prop}: ${persona[prop]}`);
  }
}

// 9. Lavorare con array di oggetti

const utenti = [
  { id: 1, nome: 'Luca' },
  { id: 2, nome: 'Maria' }
];
const nomiUtenti = utenti.map(u => u.nome);
console.log(nomiUtenti); // ['Luca', 'Maria']

/*
Note importanti:
- Gli oggetti permettono di organizzare dati e funzioni associati in strutture leggibili e riutilizzabili.
- Le proprietà sono chiavi (stringhe o simboli) legate a valori di qualsiasi tipo, inclusi metodi (funzioni).
- Il valore di "this" in un metodo fa riferimento all'oggetto che ha invocato la funzione.
- JSON.stringify e JSON.parse sono essenziali per la serializzazione e deserializzazione degli oggetti, ma ignorano metodi e simboli.
- structuredClone consente di fare copie profonde di oggetti annidati evitando modifiche condivise.
- La sintassi class ES6 semplifica la creazione di modelli di oggetti con costruttori e metodi.
- Object.freeze e Object.seal utilizzati per controllare la mutabilità degli oggetti, migliorando affidabilità.
- Iterare sulle proprietà con for...in e hasOwnProperty permette gestione precisa di dati.
- Mappare array di oggetti è frequente per estrarre o trasformare dati in liste o visualizzazioni.
*/
