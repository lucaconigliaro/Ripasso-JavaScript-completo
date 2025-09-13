// I cicli sono strutture di controllo che consentono di eseguire ripetutamente un blocco di codice
// finché una condizione è verificata. Sono indispensabili per automatizzare operazioni su dati ripetitivi,
// come ad esempio iterare gli elementi di un array o eseguire un calcolo un numero definito di volte.
//
// In JavaScript sono disponibili diverse tipologie di cicli: for, while, do-while.
// Questa guida copre esempi concreti e spiegazioni dettagliate per un uso corretto e sicuro.


// Ciclo for senza condizioni → loop infinito teorico
// Esempio di ciclo for senza espressioni nella testa del ciclo.
// Il ciclo terminerà solo grazie al break interno che interrompe manualmente il ciclo.
let count = 1;

for (;;) {
    console.log(count, '\n');   // Stampa il valore corrente

    if (count >= 100) {         // Controllo di uscita manuale
        break;                  // Interrompe il ciclo
    }

    ++count;                   // Incrementa count
}

/*
Note:
- Un ciclo for senza condizioni è un loop infinito di default.
- È fondamentale che vi sia un'istruzione break raggiungibile per evitare blocchi.
- Utile in contesti con condizioni di uscita complesse o input esterni.
- Rischio di creare loop infiniti accidentali con conseguente blocco del programma.
*/


// Ciclo for che stampa numeri pari da 1 a 20
for (let count = 1; count <= 20; count++) {
    if (count % 2 !== 0) { // Skip numeri dispari
        continue;
    }
    console.log(count, '\n'); // Stampa solo numeri pari
}

/*
Note:
- L'operatore modulo (%) serve a determinare la parità del numero.
- 'continue' consente di saltare il resto dell'iterazione corrente.
- Questo pattern è utile per applicare filtri direttamente nel ciclo.
*/


// Iterazione su array con filtro di valori negativi
const values = [1, 34, 15, -12, 11, 22, -4];
const total = values.length;

for (let count = 0; count < total; count++) {
    if (values[count] < 0) {
        continue;  // Salta i numeri negativi
    }
    console.log(values[count], '\n');  // Stampa solo i positivi
}

/*
Note:
- Iterare con l'uso della lunghezza dell'array previene errori di indice fuori limite.
- La parola chiave continue semplifica la gestione delle condizioni di filtro.
- Combinare cicli e filtri è molto comune in programmi reali.
*/


// Ciclo for decrementale
for (let count = 10; count > 0; --count) {
    console.log(count, '\n');
}

// Ciclo for incrementale da 1 a 10
for (let count = 1; count <= 10; ++count) {
    console.log(count, '\n');
}

/*
Note:
- Il ciclo for è strutturato in tre parti: inizializzazione, condizione e aggiornamento.
- L'incremento può essere prefisso (++count) o postfisso (count++), con comportamento identico nel ciclo.
- Cicli incrementali o decrementali si adattano a diverse necessità applicative.
*/


// Ciclo while che esegue con controllo preventivo
let whileCount = 12;
while (whileCount <= 10) {
    if (whileCount % 2 !== 0) {
        whileCount++;
        continue;
    }
    console.log(whileCount, '\n');
    whileCount++;
}

// Ciclo do-while con controllo posticipato,
// garantisce l'esecuzione minima di un’iterazione
let doCount = 12;
do {
    console.log(doCount, '\n');
    doCount++;
} while (doCount <= 10);

/*
Note:
- Il while verifica la condizione prima di ogni iterazione.
- Il do-while esegue almeno una volta il blocco prima di testare la condizione.
- Entrambi richiedono condizioni di uscita per evitare loop infiniti.
- continue aiuta a gestire il flusso saltando gran parte della iterazione.
*/


// Esempi di loop comuni con array "giorni"
let giorni = ['Lunedì', 'Martedì', 'Mercoledì'];

for (let i = 0; i < giorni.length; i++) {
    console.log(giorni[i]);
}

let countAux = 0;
while (countAux < 3) {
    console.log('while ciclo: ' + countAux);
    countAux++;
}

let n = 0;
do {
    console.log('do...while ciclo: ' + n);
    n++;
} while (n < 3);

/*
================================================================================
                             Riepilogo e Buone Pratiche
================================================================================
- I cicli consentono di automatizzare ripetizioni basate su condizioni logiche.
- Valutare sempre condizioni di uscita precise per prevenire loop infiniti.
- Utilizzare break e continue con consapevolezza per gestire il flusso delle iterazioni.
- Preferire cicli for per iterazioni con contatori noti; while e do-while per condizioni dinamiche.
- Il do-while assicura che il blocco venga eseguito almeno una volta.
- Prediligere codice chiaro, con commenti esplicativi per facilitare la manutenzione.
*/
