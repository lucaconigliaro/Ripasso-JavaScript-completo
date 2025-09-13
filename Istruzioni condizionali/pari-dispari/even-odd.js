// switch Clause con input da prompt e controllo su valori numerici

const value = prompt('Insert a number');      // Chiede all'utente di inserire un numero come stringa
const n = Number(value);                       // Converte la stringa in numero

// Controllo se la conversione ha prodotto NaN (valore non numerico)
if (Number.isNaN(n)) {
    alert(value + ' is not a number');         // Avvisa l’utente che il valore inserito non è un numero valido
} else {
    // Switch per controllare se il numero è dispari, pari o fuori dai casi previsti
    switch (n) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
            alert(n + ' is odd');               // Numero dispari tra 1 e 9
            break;
        case 2:
        case 4:
        case 6:
        case 8:
        case 10:
            alert(n + ' is even');              // Numero pari tra 2 e 10
            break;
        default:
            alert(n + ' is not a number or is not between 1 and 10'); // Numero non gestito nello switch
    }
}

/*
Note importanti:
- Il prompt restituisce sempre una stringa; serve quindi la conversione con Number().
- Number.isNaN() verifica che la conversione a numero sia valida e non produca NaN.
- Lo switch raggruppa i case per numeri dispari e pari usando il fall-through (assenza di break per case consecutivi).
- L’uso del default gestisce valori fuori dall’intervallo specificato o numeri non trattati.
- Questo schema combina controlli di input con gestione pulita dei casi, migliorando sicurezza e usabilità.
*/
