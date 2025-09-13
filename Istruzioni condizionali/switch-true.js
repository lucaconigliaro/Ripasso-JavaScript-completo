const firstName = 'Hidran';

// Lo switch qui valuta l'espressione true
switch (true) {

    // Primo case: controlla se la stringa firstName contiene la lettera 'm'
    // Il metodo includes restituisce true o false, quindi se true entra in questo case
    case firstName.includes('m'):
        console.log('it contains H');   // Se contiene 'm', stampa questa frase
        break;                          // break per uscire dallo switch dopo questo blocco

    // Secondo case: controlla se la stringa firstName contiene la lettera 'i'
    case firstName.includes('i'):
        console.log('it contains a vowel');  // Se contiene 'i', stampa questa frase
        break;                              // break per uscire dallo switch dopo questo blocco

    // default: casistica se nessun case precedente corrisponde
    default:
        break;                              // Non fa nulla in questo esempio
}

/*
Note importanti:
- Usare switch con espressione `true` permette di valutare condizioni multiple booleane in alternativa a if-else.
- Ogni case valuta se la condizione booleana è vera, quindi esegue il codice corrispondente.
- Il break dopo ogni case è fondamentale per evitare che l'esecuzione prosegua nei case successivi (fall-through).
- Questo stile è utile per condizioni multiple complesse che vogliono semplificare la leggibilità rispetto a molti if-else nidificati.
- Tuttavia per condizioni semplici o poche, gli if-else possono risultare più immediati e leggibili.
- È importante valutare sempre la chiarezza e la manutenzione del codice quando si sceglie tra switch e if-else.
*/
