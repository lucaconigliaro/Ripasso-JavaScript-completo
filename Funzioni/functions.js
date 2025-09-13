// Le funzioni sono blocchi di codice riutilizzabili che eseguono una specifica azione o calcolo.
// Possono ricevere zero o più parametri in ingresso e restituire un valore in uscita.
// JavaScript supporta diverse modalità di definizione di funzioni: dichiarazioni tradizionali, espressioni, arrow functions e IIFE.
// L'uso corretto delle funzioni migliora modularità, leggibilità e manutenzione del codice.

// 1. Funzione dichiarata (Function Declaration)
// È una funzione nominata tradizionale definita nel codice.
// Grazie all'hoisting, può essere invocata anche prima della sua definizione nel codice.
function test() {
    // Funzione senza parametri che può restituire un valore o eseguire azioni
    return 'Ciao Mondo';
}
const result = test();
console.log(result);   // undefined perché non restituisce valore

// 2. Funzione con parametri e validazione con default parameter
// Accetta un parametro e lo converte in numero. Se è non valido o <= 0 mostra alert e ritorna 0.
function hoursToSeconds(hours = 0) {
    const ore = Number(hours);
    if (!ore || ore <= 0) {
        alert('Valore non valido');
        return 0;
    }
    return ore * 3600;
}
console.log(hoursToSeconds(24));      // 86400
console.log(hoursToSeconds('2'));     // 7200
console.log(hoursToSeconds(undefined)); // 0 e alert

// 3. Funzione semplice con 2 parametri per fare sottrazione
function calcolaSomma(numero1, numero2) {
    return numero1 - numero2;
}
console.log(calcolaSomma(1, 1));              // 0
console.log(calcolaSomma('Ciao', 'Mondo'));   // NaN (operazione non valida)

// 4. Funzione con switch per operazioni matematiche semplici
// Seleziona esecuzione in base alla stringa operazione passata
function calcola(operazione, parametro1, parametro2) {
    switch (operazione) {
        case 'somma': return parametro1 + parametro2;
        case 'sottrazione': return parametro1 - parametro2;
        case 'moltiplicazione': return parametro1 * parametro2;
        case 'divisione': return parametro1 / parametro2;
        default: return null;
    }
}
console.log(calcola('somma', 2, 2));           // 4

// 5. Funzione con parametri variabili con rest operator (...)
// Accetta qualsiasi numero di argomenti e li elabora secondo operazione richiesta.
function calcolaMulti(operazione, ...parametri) {
    let result = parametri[0];
    for (let i = 1; i < parametri.length; i++) {
        switch (operazione) {
            case '+': result += parametri[i]; break;
            case '-': result -= parametri[i]; break;
            case '*': result *= parametri[i]; break;
            case '/': result /= parametri[i]; break;
            default: throw new Error('Operazione non supportata');
        }
    }
    return result;
}
console.log(calcolaMulti('-', 20, 3, 4, 5));   // 8

// 6. Scope delle variabili con hoisting (var)
// La dichiarazione di var è "sollevata" all'inizio dello scope di funzione, ma non l'inizializzazione.
// Ciò genera undefined se si tenta di usarla prima dell'assegnazione.
var userName = 'Test';
function testVar() {
    console.log(userName);        // undefined per hoisting var locale
    var userName = 'Test2';
    console.log(userName);        // 'Test2'

    function internalFunc() {
        var interVar = '2';
        console.log(userName);      // 'Test2'
        console.log(interVar);      // '2'
    }
    return internalFunc;
}
const func = testVar();
console.log('output dalla funzione interna');
func();

// 7. Scope di blocco con let
// Let e const hanno scope limitato al blocco in cui sono dichiarati, ad es. dentro {}
{
    let varTest = 5;
    console.log(varTest);       // 5
}
// console.log(varTest);       // ERRORE: varTest non visibile fuori dal blocco

// 8. Funzione come parametro (callback)
// Funzione passata come argomento e invocata all'interno di un'altra funzione.
function outPutObject(obj) {
    for (const key in obj) {
        if (Object.hasOwn(obj, key)) {
            console.log(`${key} = ${obj[key]}`);
        }
    }
}
function processObject(myObject, callback) {
    callback(myObject);
    callback.testFunction = function () {
        console.log('Chiamato testFunction');
    };
}
const objTest = { name: 'Test', lastName: 'Test2', age: 36 };
processObject(objTest, outPutObject);

// 9. Function Expression
// Funzione anonima assegnata a variabile, vantaggiosa per definizione dinamica o passaggio come argomento.
const funcName = function testFunc() {
    console.log('test');
};
funcName();

// 10. Function Declaration
// Funzione nominativa tradizionale separata nel codice.
function testFunction() {
    console.log('test func');
}
testFunction();

// 11. IIFE (Immediately Invoked Function Expression)
// Funzione auto-invocata all’istante dopo la definizione per incapsulare scope.
(function iife(param1) {
    const testVar = 'iife';
    console.log('test = ' + param1);
})('Test var');

// 12. Arrow Functions (ES6+)
// Sintassi breve e chiara per funzioni anonime con binding lessicale di 'this'.
const testArrow = () => 1;
const testArrow2 = (arg1, arg2) => {
    console.log(arg1);
    return arg1 * arg2;
};
const testArrow3 = () => 2 + 2;
const testArrow4 = (arg1, arg2) => arg1 + arg2;
const testArrow5 = arg1 => arg1 * 2;
const testArrow6 = arg1 => {
    console.log('test');
    return arg1 * 2;
};
console.log(testArrow5(7));

// 13. Default Parameters e Rest Parameters
// Parametri predefiniti per funzioni più flessibili e rest operator per parametri variabili.
function isGreater(param1 = 0, param2 = 0) {
    return param1 > param2;
}
function isGreater2(param1, param2 = 6) {
    console.log(param1, param2);
    return param1 > param2;
}

// Funzione con parametri variabili tramite rest
function calc(operation, ...args) {
    console.log(args);
}
// calc('somma', 1, 2, 3);

// Note importanti:
/*
- Le funzioni sono fondamentali per evitare ripetizione e strutturare il codice in moduli.
- Le Function Declaration sono hoistate, permettono chiamate anche prima della definizione.
- Le Function Expression offrono flessibilità e sono usate in callback, event handler, moduli.
- IIFE permettono isolamento di variabili e proteggono lo scope globale.
- Arrow Functions offrono sintassi compatta e gestiscono il contesto 'this' lessicalmente.
- Default Parameters semplificano il trattamento degli argomenti opzionali.
- Rest Parameters conferiscono dinamicità nel numero di argomenti passati.
- Comprendere lo scope e hoisting di var, let e const aiuta a prevenire errori nascosti.
- Usare nomi chiari e mantenere funzioni concise aiuta la leggibilità e manutenzione.
*/
