// Le stringhe sono sequenze immutabili di caratteri, fondamentali per rappresentare e manipolare testi.
// Possono essere definite con apici singoli, doppi o backticks (template literals) che consentono interpolazioni e multilinea.
// JavaScript offre numerosi metodi per la gestione efficiente delle stringhe, che restituiscono nuove stringhe o altri valori senza modificarne l’originale.

// Creazione di stringhe con apici singoli e doppi
let saluto = 'Ciao mondo!';
let risposta = "Benvenuti su 'JavaScript'!";
console.log(saluto);
console.log(risposta);

// Template literals per interpolazione ed espressioni
let nome = 'Alice';
let salutoTpl = `Ciao, ${nome}!`;
console.log(salutoTpl);

let prezzo = 10;
let tassa = 0.25;
let messaggio = `Il prezzo finale è: ${prezzo * (1 + tassa)} euro.`;
console.log(messaggio);

// Concatenazioni con + e concat()
let stringa1 = 'Ciao, ';
let stringa2 = 'come stai?';
let concatenazionePlus = stringa1 + stringa2; // semplice concatenazione
console.log(concatenazionePlus);

let parte1 = 'Buongiorno';
let parte2 = 'a tutti';
let concatenazioneConcat = parte1.concat(' ', parte2, '!');
console.log(concatenazioneConcat);

// Template literals per concatenazioni leggibili
let fullName = `${parte1} ${parte2}!`;
console.log(fullName);

// Accesso ai caratteri tramite indice
let frase = 'Ciao mondo!';
console.log(frase[6]);  // 'm'

// Proprietà length e metodi fondamentali
console.log(frase.length);            // 11, lunghezza
console.log(frase.toUpperCase());     // 'CIAO MONDO!'
console.log(frase.toLowerCase());     // 'ciao mondo!'
console.log(frase.includes('a'));     // true
console.log(frase.slice(0, 5));       // 'Ciao '

// Metodi avanzati per stringhe

// split() – divide una stringa in un array, separando con il delimitatore
let lista = 'mela,banana,arancia';
console.log(lista.split(','));         // ['mela', 'banana', 'arancia']

// replace() e replaceAll() – sostituiscono la prima o tutte le occorrenze di una sottostringa o regex
let testo = 'ciao ciao ciao';
console.log(testo.replace('ciao', 'hello'));      // 'hello ciao ciao'
console.log(testo.replaceAll('ciao', 'hello'));   // 'hello hello hello'

// trim() – rimuove spazi iniziali e finali
let spazi = '   spazio libero   ';
console.log(spazi.trim());            // 'spazio libero'

// startsWith() e endsWith() – verifica inizio o fine della stringa
let titolo = 'JavaScript è fantastico!';
console.log(titolo.startsWith('Java'));    // true
console.log(titolo.endsWith('tastico!')); // true

// charAt() e accesso tramite indice
console.log(frase.charAt(0));        // 'C'
console.log(frase[0]);               // 'C' equivalente

// repeat() – ripete la stringa un numero di volte
console.log('ha'.repeat(3));         // 'hahaha'

// match() – ricerca tramite espressioni regolari, restituisce gli abbinamenti
let testoRegex = 'La casa è bella';
console.log(testoRegex.match(/ca./g));  // ['cas']

// Stringhe Unicode e emoji
const unicodeChar = '\u00C6';  // Æ
const emoji = '😀';
console.log(unicodeChar, emoji);

// Stringhe multilinea (template literals)
let multilinea = `Prima riga
Seconda riga
Terza riga`;
console.log(multilinea);

// Stringhe multilinea con backslash (versione più vecchia)
let multilineaBackslash = "Prima riga \
Seconda riga \
Terza riga";
console.log(multilineaBackslash);

/*
Note importanti:
- Le stringhe sono immutabili, i metodi non modificano l'originale ma ne restituiscono una copia.
- L'uso di template literals migliora leggibilità, supporta multilinea e interpolazione.
- La concatenazione può avvenire con +, concat(), o template literals.
- split() trasforma la stringa in array, fondamentale per elaborazioni su dati separati.
- replace() cambia la prima occorrenza, replaceAll() tutte; con supporto a espressioni regolari.
- includes(), startsWith(), endsWith() sono metodi utili per verifiche su contenuto e posizioni.
- trim() permette di rimuovere spazi indesiderati dagli input.
- repeat() facilita ripetizioni senza dover usare cicli.
- match() consente ricerche complesse con espressioni regolari.
- Il supporto Unicode permette di usare caratteri speciali e emoji senza problemi.
*/
