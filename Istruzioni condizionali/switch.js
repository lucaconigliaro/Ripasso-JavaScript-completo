// switch Clause
const n = 5;
switch (n) {
    case 3:
        console.log(n + ' is prime');
        console.log(' second statement for 3 ' + n);
        break;                  // Interrompe l'esecuzione del case per evitare che si eseguano gli altri case
    case 4:
        console.log(n + ' is even');
        console.log(' second statement for 4 ' + n);
        break;
    default:                    // Caso di default eseguito se nessun case precedente corrisponde a n
        console.log(n + ' is neither 3 nor 4');
}

/*
Note importanti:
- L'istruzione switch valuta un'espressione (qui `n`) una sola volta.
- Confronta il valore dell'espressione con ciascun valore specificato nei case usando uguaglianza stretta (`===`).
- Quando trova una corrispondenza, esegue il blocco di codice associato a quel case.
- Il break è fondamentale per evitare che l'esecuzione continui nei case successivi (fall-through).
- Il blocco default viene eseguito se nessun case corrisponde, ed è opzionale.
- Switch è più leggibile e gestibile rispetto a molteplici if/else quando si devono confrontare molti valori specifici.
- L'assenza di break può causare bug o comportamenti inattesi a meno che non si desideri espressamente il fall-through.
*/
