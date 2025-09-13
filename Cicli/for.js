// for loop example - decrementing from 10 to 1
for (let count = 10; count > 0; --count) {
    // Questo ciclo parte da 10, controlla che count sia maggiore di 0, poi decrementa count di 1 ogni iterazione.
    // console.log(count, '\n');
}

// for loop example - incrementing from 1 to 10
for (let count = 1; count <= 10; ++count) {
    // Questo ciclo parte da 1, continua finché count è minore o uguale a 10,
    // incrementa count di 1 ad ogni iterazione e stampa il valore corrente.
    console.log(count, '\n');
}

/*
Note importanti:
- Un ciclo for ha 3 espressioni:
  1. Inizializzazione: eseguita una sola volta all'inizio (es. let count = 10).
  2. Condizione: valutata prima di ogni iterazione, il ciclo continua se true (es. count > 0).
  3. Aggiornamento: eseguito dopo ogni iterazione, tipicamente incremento o decremento (es. --count).
- È possibile usare ++count (prefisso) o count++ (postfisso) per incrementare; in questo contesto sono equivalenti.
- I loop for sono utili per eseguire codice ripetutamente un certo numero di volte in modo controllato.
- I loop decrementali (da valori alti a bassi) o incrementali sono entrambi comuni e utili in base al contesto.
*/
