const myName = 'Peter';
const lastName = 'Smith';

// Concatenazione con l'operatore +
let fullName = '';
fullName = myName + ' ' + lastName;  // "Peter Smith"

// Calcolo prezzo totale con moltiplicazione
const price = 400;
let items = 4;
const total = items * price;  // 1600

const val1 = '100';
const val2 = '250';

// Conversione a numero e somma
// console.log(Number(val1) + Number(val2)); // 350

// Concatenazione con template literal (più leggibile)
fullName = `My name is ${myName} ${lastName}`;

// Stringa multilinea con backslash per continuare sulla linea successiva
fullName =
    "is simply dummy text of the printing \
and typesetting industry.Lorem Ipsum has been the\
 industry's standard dummy text ever since the 1500s,\
  when an unknown printer took a galley of type and \
  scrambled it to make a type specimen book.It has \
  survived not only five centuries, but also the leap\
   into electronic typesetting, remaining essentially\
unchanged.It was popularised in the 1960s with the \
release of Letraset sheets containing Lorem Ipsum\
passages, and more recently with desktop publishing \
software like Aldus PageMaker including versions\
 of Lorem Ipsum.";

console.log(fullName);

/*
Note importanti:
- L'operatore + unisce stringhe, ma bisogna aggiungere spazi manualmente se servono.
- I template literals (stringhe con backticks) permettono interpolazioni e multilinea più semplici.
- Per creare stringhe multilinea con apici o doppi apici si usano i backslash \ per continuare sulla linea successiva.
- Convertire stringhe in numeri (es. con Number()) è necessario per fare somme aritmetiche corrette.
- Template literals migliorano la leggibilità e manutenzione del codice rispetto alla concatenazione manuale.
*/
