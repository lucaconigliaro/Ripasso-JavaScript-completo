// Il Math object è un oggetto statico fornito da JavaScript che contiene proprietà e metodi per eseguire operazioni matematiche comuni.
// Non è possibile creare un'istanza di Math: si usano direttamente i suoi metodi e proprietà.
// Lavora solo con tipi Number ed è essenziale per calcoli, arrotondamenti, generazione numeri casuali e funzioni trigonometriche.

// Esempi e spiegazioni dei metodi più usati:

// Math.min(...numeri)
// Ritorna il valore minimo fra i parametri specificati.
console.log(Math.min(4, 66, 12, 98));  // 4

// Math.max(...numeri)
// Ritorna il valore massimo fra i parametri specificati.
console.log(Math.max(4, 66, 12, 98));  // 98

// Math.abs(x)
// Restituisce il valore assoluto di x (sempre positivo).
console.log(Math.abs(-2));               // 2

// Math.random()
// Ritorna un numero pseudo-casuale tra 0 (incluso) e 1 (escluso).
console.log(Math.random());

// Per numeri interi in un intervallo da 0 a 99 (escluso 100)
console.log(Math.floor(Math.random() * 100));

// Math.sqrt(x)
// Calcola la radice quadrata di x
console.log(Math.sqrt(16));              // 4

// Math.pow(base, esponente)
// Eleva base alla potenza esponente
console.log(Math.pow(4, 2));             // 16

// Math.exp(x)
// Restituisce e elevato alla potenza x, ovvero e^x
console.log(Math.exp(2));                // approssimato 7.389

// Math.round(x)
// Arrotonda x al numero intero più vicino
console.log(Math.round(4.5));            // 5
console.log(Math.round(4.4));            // 4

// Math.floor(x) - Arrotonda per difetto
console.log(Math.floor(4.9));             // 4

// Math.ceil(x) - Arrotonda per eccesso
console.log(Math.ceil(4.2));              // 5

// Math.sin(x), Math.cos(x)
// Restituiscono rispettivamente seno e coseno di x, dove x è in radianti
console.log(Math.sin(30 * Math.PI / 180)); // circa 0.5
console.log(Math.cos(0));                   // 1

// Math.atan(x)
// Ritorna l'arctangente di x in radianti
console.log(Math.atan(30 * Math.PI / 180));

// Math.trunc(x)
// Restituisce la parte intera di x eliminando la parte decimale senza arrotondare
console.log(Math.trunc(4.9));               // 4
console.log(Math.trunc(-4.9));              // -4

/*
Note importanti:
- Math è un oggetto statico: non serve istanziare, si usa con notazione Math.metodo().
- Fornisce funzioni per min/max, arrotondamenti, radici, potenze, esponenziali, trigonometria e numeri casuali.
- Generare numeri casuali in intervalli specifici richiede la combinazione di Math.random() con arrotondamento e scalatura.
- Alcuni metodi come round, floor, ceil modificano il modo di arrotondare numeri.
- La trigonometria lavora in radianti, occorre convertire gradi in radianti (grado * Math.PI / 180).
- Math.trunc è utile per rimuovere la parte frazionaria senza arrotondare.
- Le funzioni di Math sono fondamentali per operazioni matematiche in applicazioni reali, giochi, simulazioni e analisi dati.
*/
