// Date è un oggetto integrato per la gestione di date e orari.
// Permette di creare rappresentazioni temporali, estrarre o modificare componenti di data e ora.
// JavaScript conta i mesi da 0 (Gennaio) a 11 (Dicembre).
// Gli orari sono in tempo locale di sistema, o si può lavorare in UTC con metodi specifici.

// Creazione di un oggetto Date con anno, mese, giorno
// Nota: mese è zero-based (7 = Agosto)
let data = new Date(1972, 7, 23);
console.log(data.toString());

// Modificare i componenti della data
data.setFullYear(2016);     // Cambia anno
data.setMonth(3);           // Cambia mese ad Aprile (3)
data.setDate(17);           // Cambia giorno
data.setHours(12);          // Cambia ore
data.setMinutes(34);        // Cambia minuti
data.setSeconds(44);        // Cambia secondi
console.log(data.toString());

// Ottenere il giorno della settimana
let giorni = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
alert(data.getDay());            // Restituisce indice del giorno (DOMENICA=0,...)

// Usare l'indice per avere il nome del giorno
alert(giorni[data.getDay()]);

// Metodi principali di Date (locale):
// getFullYear() - Anno a 4 cifre
// getMonth() - Mese (0-11)
// getDate() - Giorno del mese (1-31)
// getDay() - Giorno della settimana (0-6, domenica=0)
// getHours() - Ore (0-23)
// getMinutes() - Minuti (0-59)
// getSeconds() - Secondi (0-59)
// getMilliseconds() - Millisecondi (0-999)

// Metodi set corrispondenti per modificare i componenti (es: setFullYear(), setMonth(), ecc.)

// Metodi UTC equivalenti con prefisso getUTC/setUTC

// Altri metodi utili:
// Date.now() - Numero di millisecondi passati dal 1 gennaio 1970 (timestamp)
// toISOString() - Data in formato ISO 8601 standard con fuso orario UTC
// toLocaleString() - Data e ora formattati secondo le impostazioni locali

/*
Note importanti:
- Gli oggetti Date facilitano il lavoro con data e ora ma hanno alcune peculiarità come il mese zero-based.
- I metodi get/set permettono manipolazione precisa delle singole componenti di data e ora.
- getDay() fornisce il giorno della settimana con domenica indicato da 0.
- Convertire date da e verso stringhe avviene con metodi come toString(), toISOString() e toLocaleString().
- Il timestamp restituito da Date.now() è utile per calcoli temporali o misure.
- Usare UTC o locale a seconda del contesto evita errori di fuso orario.
*/
