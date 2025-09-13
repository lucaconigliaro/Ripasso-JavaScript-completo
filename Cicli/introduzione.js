// I cicli sono costrutti per eseguire ripetutamente un blocco di codice fino a che una condizione è vera.
// Tipi principali: for, while, do...while.

// Esempio con for
for (let i = 0; i < giorni.length; i++) {
    console.log(giorni[i]);
}

// Esempio con while
let count = 0;
while (count < 3) {
    console.log('while ciclo: ' + count);
    count++;
}

// Esempio con do...while
let n = 0;
do {
    console.log('do...while ciclo: ' + n);
    n++;
} while (n < 3);
