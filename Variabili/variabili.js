// Diversi Tipi di Variabili e Tipizzazione Debole o Dinamica in JavaScript

// Introduzione:
// JavaScript è a tipizzazione dinamica: non serve dichiarare il tipo delle variabili.
// È anche a tipizzazione debole: i tipi si convertendo automaticamente, a volte con risultati inaspettati.

// Tipi Primitivi:
// Stringa - sequenza di caratteri
let stringa = "Ciao mondo!";

// Number - numeri interi e decimali
let numero = 42;

// BigInt - numeri interi molto grandi
let grandeIntero = 9007199254740991n;

// Boolean - true o false
let booleano = true;

// Undefined - variabile non inizializzata
let indefinito;

// Null - rappresenta valore vuoto intenzionalmente
let vuoto = null;

// Symbol - valori unici per identificatori
let simbolo = Symbol("desc");

// Oggetti - collezioni chiave-valore, le funzioni sono speciali oggetti
let oggetto = { chiave: "valore" };

// ----------- Tipizzazione Debole e Dinamica -----------

// Esempio di concatenazione, "3" è stringa, 2 è number: JS converte 2 in stringa
let risultato = "3" + 2;  
console.log(risultato);   // Stampa: "32"

// Esempio di moltiplicazione, JS converte stringhe in numeri
risultato = "3" * "2";
console.log(risultato);   // Stampa: 6

// ----------- Buone Pratiche -----------

// 1. Validare tipi con typeof o instanceof per evitare errori
console.log(typeof stringa);   // "string"
console.log(typeof numero);    // "number"
console.log(oggetto instanceof Object); // true

// 2. Mantenere coerenza nei tipi per ridurre bug

// 3. Usare strumenti come TypeScript o JSDoc per il controllo dei tipi nei progetti complessi

/*
Note importanti:
- La tipizzazione dinamica rende JavaScript molto flessibile ma può creare confusione.
- La conversione automatica può portare a risultati inattesi se non si sta attenti.
- È buona norma controllare e validare i tipi dei dati durante lo sviluppo.
- In progetti più grandi è consigliato usare sistemi di tipizzazione statica come TypeScript.
*/
