// Operatori di assegnazione combinati: +=  -=   *=   /=   **=

let x = 10;        // Inizializza x con il valore 10

x = x + 20;        // Assegnazione standard: aggiunge 20 a x (diventa 30)
console.log(x);    // Stampa: 30

x += 10;           // Assegnazione con addizione: x = x + 10 (diventa 40)
console.log(x);    // Stampa: 40

x = x * 10;        // Assegnazione standard: moltiplica x per 10 (diventa 400)
console.log(x);    // Stampa: 400

x *= 10;           // Assegnazione con moltiplicazione: x = x * 10 (diventa 4000)
console.log(x);    // Stampa: 4000

x /= 20;           // Assegnazione con divisione: x = x / 20 (diventa 200)
console.log(x);    // Stampa: 200

x **= 2;           // Assegnazione con esponenziazione: x = x ** 2, cioè 200 al quadrato (diventa 40000)
console.log(x);    // Stampa: 40000

/*
Note importanti:
- Gli operatori di assegnazione combinati permettono di eseguire un'operazione e assegnare il risultato alla stessa variabile in modo più conciso.
- Sono equivalenti a scrivere l'operazione seguita da una normale assegnazione, ad esempio: x += 10 è uguale a x = x + 10.
- Questi operatori possono essere usati con numeri e, in alcuni casi, con stringhe (per concatenazione con +=).
- Sono fondamentali per scrivere codice più pulito e leggibile evitando ripetizioni e rendendo il codice più efficiente.
*/
