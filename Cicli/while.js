let count = 12;

// While loop: controlla prima la condizione e poi esegue il blocco
while (count <= 10) {
    // Se count è dispari, incrementa e passa all'iterazione successiva saltando il resto del blocco
    if (count % 2 !== 0) {
        count++;
        continue;
    }
    // console.log(count, '\n');
    count++;  // Incrementa count ad ogni iterazione
}

let count2 = 12;

// Do-while loop: esegue sempre almeno una volta il blocco prima di controllare la condizione
do {
    console.log(count2, '\n');  // Stampa count2 (12)
    count2++;                   // Incrementa count2
} while (count2 <= 10);         // Controlla la condizione alla fine, qui è falsa all'inizio quindi termina dopo la prima iterazione

/*
Note importanti:
- Il while verifica la condizione prima di eseguire il blocco; se falsa da subito, il blocco non viene mai eseguito.
- Il do-while esegue il blocco almeno una volta, poi controlla la condizione per eventuali ulteriori cicli.
- L'uso di continue serve a saltare il resto del codice nel ciclo e passare subito all'iterazione successiva.
- Se la condizione di uscita non è gestita correttamente, si può creare un loop infinito.
- Il do-while è utile quando si vuole che il blocco venga eseguito almeno una volta, indipendentemente dalla condizione iniziale.
*/
