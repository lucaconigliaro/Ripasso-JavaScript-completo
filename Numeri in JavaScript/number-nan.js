// Esempio NaN (Not a Number) e verifica con isNaN() e Number.isNaN()

const value = 12;
const userValue = '123a';           // Stringa non convertibile completamente in numero
const result = value * userValue;   // Moltiplicazione tra numero e stringa non numerica
console.log(result);                // Stampa: NaN (Not a Number)

console.log(isNaN('test'));          // Global isNaN() converte 'test' in numero → NaN → true
console.log(Number.isNaN('test'));   // Number.isNaN() controlla solo se il valore è effettivamente NaN → false

/*
Note importanti:
- isNaN() è una funzione globale che prima converte il valore in numero e poi verifica se è NaN. Quindi restituisce true anche per valori non numerici convertibili in NaN (es. stringhe non numeriche).
- Number.isNaN() è un metodo più rigoroso che verifica solo se il valore è effettivamente NaN senza effettuare conversioni di tipo.
- Esempio:
    isNaN('test') -> true (la stringa 'test' non può essere convertita in numero valido)
    Number.isNaN('test') -> false (perché 'test' non è il valore NaN, ma una stringa)
- Poiché NaN è un valore speciale che non è uguale a sé stesso, non si può usare == o === per verificarlo.
- Per controlli più sicuri di NaN, è preferibile usare Number.isNaN().
*/
