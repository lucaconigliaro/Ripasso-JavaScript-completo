// Esempio e spiegazione dettagliata dei metodi call, apply e comportamento di this nelle funzioni

// Funzione generica che usa 'this' e riceve due parametri: money e city
function myCallFunction(money = 0, city = '') {
    console.log(this.name + ' is ' + this.age + ' old ' + 'and has ' + money + ' and lives in ' + city);
}

// Oggetto di esempio
const myData = {
    name: 'Luca Conigliaro',
    age: 29,
    showAge: function() {
        console.log(this.age);
    },
    showName: function() {
        console.log(this.name);
    },
    getName: function() {
        return this.name;
    }
};

// Differenza tra call() e apply():
// - call() chiama la funzione specificando il valore di this e passando i parametri separati da virgola.
// - apply() fa lo stesso ma i parametri devono essere dati come array.
// Entrambe servono per eseguire una funzione impostando manualmente chi sarà 'this' all'interno della funzione.

myCallFunction.call(myData, 100, 'Roma');     // call: argomenti separati da virgola
myCallFunction.apply(myData, [100, 'Roma']);  // apply: argomeni come array

// Entrambe stampano: "Luca Conigliaro is 29 old and has 100 and lives in Roma"

myData.showName(); // 'Luca Conigliaro'
myData.showAge();  // 29

// ------------------
// ATTENZIONE ESEMPIO
// ------------------

// Assegnare un metodo di un oggetto a una variabile "perde" il collegamento con l'oggetto (quindi perde il this)
const newShowName = myData.showName;
newShowName();    // undefined (this non si riferisce più a myData)

// Per ricollegare il contesto this, usa call o apply:
const obj2 = { name: 'Javascript' };
newShowName.call(myData); // 'Luca Conigliaro'
newShowName.call(obj2);   // 'Javascript'

// Note importanti:
/*
- call() e apply permettono di eseguire una funzione specificando manualmente chi sarà "this" all'interno.
- call: function.call(thisArg, arg1, arg2, ...)  → gli argomenti dopo il primo sono passati singolarmente.
- apply: function.apply(thisArg, [arg1, arg2, ...])  → gli argomenti dopo il primo sono passati in un array.
- Useful quando si vuole "prendere in prestito" un metodo di un oggetto per un altro oggetto, o quando si usa una funzione generica su dati diversi.
- Se assegni un metodo oggetto a una variabile, perde il suo legame con l'oggetto (this = undefined/null) se non recuperato con call/apply/bind.
- Il metodo bind(), diverso da call/apply, restituisce una nuova funzione con il this pre-impostato, ma che deve poi essere invocata separatamente.
*/
