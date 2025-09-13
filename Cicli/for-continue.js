// Loop da 1 a 20 che stampa solo i numeri pari
for (let count = 1; count < 21; count++) {
    // Se count % 2 !== 0 (ossia count è dispari), salta l'iterazione con continue
    if (count % 2 !== 0) {
        continue;
    }
    // Questo codice verrà eseguito solo per count pari, ma è commentato
    // console.log(count, '\n');
}

// Array di valori contenente numeri positivi e negativi
const values = [1, 34, 15, -12, 11, 22, -4];
const total = values.length;

// Loop che itera tutti i valori nell'array
for (let count = 0; count < total; count++) {
    // Se il valore corrente è negativo, salta l'iterazione con continue
    if (values[count] < 0) {
        continue;
    }
    // Stampa solo i valori positivi nell'array
    console.log(values[count], '\n');
}

/*
Note importanti:
- L'operatore modulo (%) restituisce il resto della divisione: utile per verificare se un numero è pari (resto 0) o dispari (resto 1).
- La parola chiave 'continue' in un ciclo permette di saltare il resto del blocco corrente e passare all'iterazione successiva.
- Questi pattern sono molto usati per filtrare elementi in cicli o per gestire condizioni specifiche in modo efficiente.
- Iterare un array usando la sua lunghezza è una pratica comune per evitare errori fuori indice.
- I numeri negativi o altre condizioni di filtro si gestiscono spesso con 'continue' per semplificare il flusso del ciclo.
*/
