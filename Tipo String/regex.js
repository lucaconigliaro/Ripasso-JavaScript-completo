
// Le espressioni regolari (Regex) sono pattern utilizzati per cercare, abbinare e manipolare stringhe.
// Si rappresentano come sequenze di caratteri con syntax speciale che descrive il tipo di testo da trovare.
// In JavaScript esistono due modi per creare un'espressione regolare:
// 1. Utilizzo del letterale regex delimitato da slashes: /pattern/flags
// 2. Costruttore RegExp: new RegExp("pattern", "flags")

// Esempi di creazione
const regexLiteral = /abc/;               // Pattern semplice, cerca 'abc'
const regexWithFlags = /abc/gi;           // Cerca 'abc' globalmente e senza distinzione tra maiuscole/minuscole
const regexConstructor = new RegExp('abc');  // Equivalente a /abc/

// Flag comuni:
// g - global, cerca tutte le occorrenze
// i - ignore case, ricerca case-insensitive
// m - multiline, per lavorare con stringhe su più righe

// Applicazioni di base

const testo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

// Metodo test() - controlla se la regex è presente nella stringa, restituisce true o false
console.log(/ipsum/.test(testo));        // true
console.log(/hello/.test(testo));        // false

// Metodo exec() - restituisce array con informazioni della prima occorrenza, o null se non trovata
const result = /dolor/.exec(testo);
console.log(result);                      // ['dolor', index: 12, ...]
console.log(result.index);                // 12 (posizione trovata)


// Metodi String con regex integrata

// match() - trova tutte le occorrenze che matchano la regex in una stringa
const matches = testo.match(/o./g);      // tutte le occorrenze di 'o' seguite da un carattere
console.log(matches);                    // ['or', 'op', 'or']

// search() - restituisce l'indice della prima sottostringa che matcha o -1
console.log(testo.search(/consectetur/)); // 28

// replace() - sostituisce la prima occorrenza regex trovata
var text2 = 'ciao ciao ciao';
console.log(text2.replace(/ciao/, 'hello'));  // 'hello ciao ciao'

// replaceAll() - sostituisce tutte le occorrenze regex (ECMAScript 2021+)
console.log(text2.replaceAll(/ciao/g, 'hello')); // 'hello hello hello'

// split() - divide la stringa secondo il pattern regex
let csv = 'mela;banana;arancia';
console.log(csv.split(/;/));                   // ['mela','banana','arancia']

// Pattern e metacaratteri comuni
// .       - qualsiasi carattere tranne newline
// \d      - un numero (digit)
// \D      - un non-number
// \w      - carattere alfanumerico o underscore
// \W      - non carattere alfanumerico
// \s      - spazio bianco (spazi, tab)
// \S      - non spazio bianco
// ^       - inizio stringa
// $       - fine stringa
// *       - 0 o più ripetizioni
// +       - 1 o più ripetizioni
// ?       - 0 o 1 ripetizione
// {n}     - esattamente n ripetizioni
// {n,}    - almeno n ripetizioni
// {n,m}   - tra n e m ripetizioni
// []      - definizione intervallo/insieme caratteri, es [a-z]
// |       - OR logico fra pattern

// Esempio regex semplice che verifica se una stringa è un numero di telefono nel formato xxx-xxx-xxxx
const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
let phone1 = '123-456-7890';
let phone2 = '1234567890';
console.log(phonePattern.test(phone1)); // true
console.log(phonePattern.test(phone2)); // false

// Esempio complesso: validazione email base (non completa)
const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
console.log(emailPattern.test('test@example.com'));  // true
console.log(emailPattern.test('test.example.com'));  // false

/*
Note importanti:
- Le regex sono potenti e flessibili, ma richiedono pratica per gestire sintassi e pattern complessi.
- Esistono due modi per creare regex: letterale (/) e costruttore RegExp.
- Le flag modificano il comportamento delle regex, rendendo la ricerca globale, case insensitive o multilinea.
- Metodi come test(), exec() valutano le stringhe contro le regex.
- Metodi stringa come match(), replace(), replaceAll(), split() possono usare regex per operazioni avanzate.
- Per pattern complessi usare caratteri speciali, quantificatori e gruppi.
*/
