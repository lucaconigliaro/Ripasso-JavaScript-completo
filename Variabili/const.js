// Dichiarare Costanti in JavaScript con const

// Introduzione:
// const dichiara variabili che non possono essere riassegnate dopo l’inizializzazione.
// Il valore stesso può essere modificabile se è un oggetto o un array, ma non il riferimento.

// Esempio base con numero:
const PI = 3.14159;
console.log(PI); // 3.14159

// PI = 3.14; // Errore! Non si può riassegnare una costante

// Esempio con oggetti:
const persona = { nome: "Giovanni", età: 30 };
console.log(persona); // { nome: "Giovanni", età: 30 }

// È possibile modificare proprietà di oggetti anche se dichiarati con const
persona.età = 31;
console.log(persona); // { nome: "Giovanni", età: 31 }

// Ma non è possibile riassegnare l’intero oggetto
// persona = { nome: "Francesco", età: 29 }; // Errore!

// Esempio con array:
const numeri = [1, 2, 3];
console.log(numeri); // [1, 2, 3]

// Possiamo modificare l’array, ad esempio aggiungendo un elemento
numeri.push(4);
console.log(numeri); // [1, 2, 3, 4]

// Ma non possiamo riassegnare l’intero array
// numeri = [5, 6, 7]; // Errore!

// Buone pratiche:
// - Usa const quando non serve riassegnare variabili, così riduci errori involontari.
// - Preferisci const a let quando possibile, per un codice più sicuro.
// - Ricorda che gli oggetti e array const possono essere modificati internamente.
// - Per oggetti immutabili usa librerie o tecniche specifiche.

// Nota:
// const ha scope di blocco, proprio come let, quindi non è visibile fuori dal blocco in cui è dichiarata.

/*
Note importanti:
- const impedisce la riassegnazione del riferimento, non della struttura dati interna.
- Usare const per le costanti migliora leggibilità e previene errori.
- Oggetti o array dichiarati con const possono comunque essere modificati nelle loro proprietà o elementi.
*/
