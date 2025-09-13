// switch Clause
const n = 1;
switch (n) {
    case 1:
    // Nessun break qui, quindi in caso di match con 1, 
    // l'esecuzione continua nei case successivi fino al primo break o fine switch
    // console.log(1);
    case console.log('this is a case'): 
        // Qui viene eseguito il console.log, che stampa 'this is a case' immediatamente
        console.log(3);  // Questo viene eseguito per i case 1 e quello sopra

    case 5:
    case 7:
    case 9:
        console.log(n + ' is odd');  // Viene eseguito se n è 1, 5, 7 o 9 (ma qui n=1)
        break;                      // Interrompe l'esecuzione a questo punto

    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
        console.log(n + ' is even');
        break;

    default:                      // Se nessun case corrisponde
        console.log(n + ' is not a number or is not between 1 and 10');
}

/*
Note importanti:
- In uno switch, se non è presente il break dopo un case, l'esecuzione "cade" nei case successivi (fall-through).
- Qui, case 1 non ha break, perciò subito dopo viene eseguita la chiamata console.log('this is a case') che è una espressione eseguita direttamente come case.
- Questo è un esempio non convenzionale: case può avere espressioni valutate immediatamente.
- È importante mettere il break per evitare esecuzioni accidentali di codice non desiderato.
- I case possono essere raggruppati senza interruzioni per eseguire lo stesso blocco di codice (es. 5,7,9).
- Il default viene eseguito solo se nessun case corrisponde all’espressione dello switch.
- Questo esempio dimostra come si possono sfruttare i fall-through, ma è bene usare con attenzione per evitare bug.
*/
