let count = 1;

// Ciclo for senza espressioni nella testa → loop infinito teorico
// Il ciclo continua all’infinito finché non incontra un break interno
for (;;) {
    console.log(count, '\n');   // Stampa il valore corrente di count seguito da una nuova linea

    if (count >= 100) {         // Condizione che ferma manualmente il ciclo
        break;                  // Interrompe il ciclo se count è maggiore o uguale a 100
    }

    ++count;                   // Incrementa count di 1 dopo ogni iterazione
}

/*
Note importanti:
- Un for loop senza condizioni (for (;;) {}) è teoricamente un loop infinito.
- Per evitare che vada avanti all’infinito, serve un break interno basato su una condizione.
- Questo schema si usa quando la condizione di uscita necessita di calcoli complessi o input esterni.
- Attenzione a non creare loop infiniti accidentali, che possono bloccare il browser o l’ambiente di esecuzione.
- È buona pratica assicurarsi sempre che il ciclo abbia una condizione di uscita raggiungibile.
*/
