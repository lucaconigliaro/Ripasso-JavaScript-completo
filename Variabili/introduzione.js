// Introduzione alle Variabili in JavaScript
// Una variabile è un contenitore per memorizzare dati che possono variare durante l'esecuzione del programma.
// In JavaScript, le variabili non richiedono la dichiarazione esplicita del tipo di dato (tipizzazione dinamica).
// Le tre parole chiave principali per dichiarare variabili sono: var, let e const.

// Dichiarazione di variabili con var (vecchia scuola)
var nomeVariabile;
nomeVariabile = 10;  // Assegnazione del valore

console.log(nomeVariabile); // 10

// Dichiarazione e assegnazione sulla stessa riga
var eta = 25;
console.log(eta); // 25

// Dichiarazione di variabili con let (consigliato oggi)
// let ha scope di blocco (cioè visibilità limitata al blocco in cui è dichiarato)
let nome = "Alice";
console.log(nome); // "Alice"

// let permette di riassegnare valori
nome = "Marco";
console.log(nome); // "Marco"

// Dichiarazione con const (costante, non riassegnabile)
const PI = 3.14159;
console.log(PI); // 3.14159

// PI = 3.14; // Errore! Non si può riassegnare un const

// Variabili possono contenere dati di qualsiasi tipo: numeri, stringhe, boolean, array, oggetti...
let numero = 10;           // number
let stringa = "ciao";      // string
let booleano = true;       // boolean
let array = [1, 2, 3];     // array
let oggetto = {nome: "Anna"}; // oggetto

// Esempio di variabile non inizializzata
let variabileTipoUndefined;
console.log(variabileTipoUndefined); // undefined

// È buona pratica dichiarare una variabile prima di usarla per evitare errori o comportamenti inattesi

// Esempio di dichiarazione multipla (sconsigliata per chiarezza)
let x = 1, y = 2, z = 3;
console.log(x, y, z);

// Cambiamento dinamico del tipo di variabile
let variabile = 5;        // number
console.log(typeof variabile); // number

variabile = "test";       // ora stringa
console.log(typeof variabile); // string

/*
Note importanti:
- Usare let invece di var per evitare problemi di scope e migliorare la manutenzione.
- Usare const per valori che non devono cambiare.
- JavaScript è un linguaggio a tipizzazione dinamica, quindi il tipo di una variabile può cambiare nel corso del programma.
- Dichiarare sempre le variabili prima di usarle per evitare problemi di ambito e asseganzione implicita.
- Nomi variabili devono rispettare regole: non possono iniziare con numeri, non possono contenere spazi o caratteri speciali (tranne _ e $).
- Evitare di dichiarare molte variabili sulla stessa riga per migliorare leggibilità.
*/
