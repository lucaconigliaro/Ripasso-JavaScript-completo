{
    const val1 = 4 < 3;   // val1 sarà false, perché 4 non è minore di 3
    console.log(val1);    // Stampa: false

    // if controlla se val1 è falso con l'operatore NOT (!) che inverte il valore booleano
    if (!val1) {
        console.log('Please enter a value'); // val1 è false → !val1 è true → esegue questo blocco
    } else {
        console.log(`You entered ${val1}`);
    }

    console.log(val1);    // Stampa nuovamente false, val1 non è stato modificato
}

/*
Note importanti:
- L'istruzione if valuta una condizione booleana e esegue il blocco di codice se la condizione è veritiera (true).
- L'operatore NOT (!) inverte la verità della condizione: !false è true e !true è false.
- Qui, 4 < 3 è false, quindi !val1 diventa true e si esegue il primo blocco dell'if.
- Il valore di val1 rimane invariato, console.log dopo l'if conferma il suo valore.
- Questo schema è molto comune per controllare condizioni negative prima di procedere.
*/
