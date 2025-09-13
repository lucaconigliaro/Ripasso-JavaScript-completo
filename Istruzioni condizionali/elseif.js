{
    const name = 'de';

    // Controlla se 'name' ha un valore truthy (es. non è stringa vuota, undefined, null, ecc.)
    if (name) {
        // Se nome ha più di 3 caratteri, stampa il nome
        if (name.length > 3) {
            console.log(`Your name is ${name}`);
        }
        // Altrimenti non fa nulla (potrebbe essere aggiunta una gestione)
    } else {
        // Se 'name' è falsy, chiede di inserire un nome corretto
        console.log('Please, enter a correct name. Minum length 3 chars');
    }
}

console.clear();
console.log('--------------------------');

// Definizione del voto/grade
const grade = 13;

// Controlla se il voto è inferiore a 6
if (grade < 6) {
    console.log(' you did not pass the exam');
} 
// Se il voto è compreso tra 6 e 7 inclusi
else if (grade >= 6 && grade <= 7) {
    console.log(' you did good');
} 
// Se il voto è maggiore di 7 e fino a 10
else if (grade > 7 && grade <= 10) {
    console.log(' excellent!');
} 
// Per qualsiasi altro valore (ad esempio oltre 10)
else {
    console.log(' wrong grade !');
}

/*
Note importanti:
- Il primo blocco usa un'if annidato per controllare la presenza del nome e la sua lunghezza.
- L'if esterno verifica se la variabile 'name' è truthy per evitare errori su stringhe vuote o valori null.
- L'else dell'if esterno gestisce il caso di nome non valido o non inserito.
- Il secondo blocco usa if-else if-else per differenziare risposte in base al valore di 'grade'.
- L'uso di && permette di controllare intervalli numerici con condizioni composte.
- L'ultimo else gestisce i casi limite o valori non validi.
- È importante progettare condizioni in modo esaustivo per evitare comportamenti imprevisti.
*/
