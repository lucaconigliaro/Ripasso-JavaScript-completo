// Il Web Storage offre due oggetti principali per memorizzare dati sul browser dell’utente:
// - localStorage: dati permanenti anche dopo chiusura/spegnimento browser
// - sessionStorage: dati validi solo durante la sessione, rimossi alla chiusura della scheda/finestra

// Entrambi memorizzano dati come COPPIE chiave/valore (key/value), solo sotto forma di stringa.

// METODI PRINCIPALI (uguali per entrambi):
// - setItem(key, value): salva una coppia chiave/valore
// - getItem(key): recupera un valore dalla chiave
// - removeItem(key): elimina una coppia chiave/valore
// - clear(): elimina tutti i dati salvati
// - key(index): restituisce la chiave in una posizione specifica
// - length: numero di chiavi presenti

// 1. SALVARE UN VALORE
localStorage.setItem('nome', 'Hidran');
// In sessione: sessionStorage.setItem('nome', 'Hidran');

// 2. LEGGERE UN VALORE
let nome = localStorage.getItem('nome');
console.log(nome); // 'Hidran'

// 3. CANCELLARE UN VALORE
localStorage.removeItem('nome');

// 4. PULIRE TUTTO LO STORAGE
localStorage.clear();

// 5. Salvare e leggere oggetti/array
// Attenzione: Dato che la memorizzazione è solo di stringhe, usa JSON.stringify/JSON.parse:
const user = { name: 'Hidran', role: 'admin' };
localStorage.setItem('user', JSON.stringify(user)); // Salva una stringa
const savedUser = JSON.parse(localStorage.getItem('user'));
console.log(savedUser.role); // 'admin'

// 6. Esempio pratico: contatore persistente
let count = localStorage.getItem('counter');
if (!count) count = 0;
count++;
localStorage.setItem('counter', count);
console.log('Counter:', count);

// DIFFERENZE TRA LOCALSTORAGE E SESSIONSTORAGE
/*
- localStorage: Dati persistenti tra TAB, FINESTRE e RIAVVII browser. Stesso dominio/protocollo.
- sessionStorage: Dati validi solo per LA TUA sessione (TAB o FINESTRA), persi alla chiusura della sessione.
- Capacità di archiviazione tipicamente 5-10MB, dipende dal browser.
- Entrambi NON sono sicuri per dati sensibili: leggibili via JavaScript!
- Web storage è sincrono (letture/scritture bloccanti, ma molto veloci per piccoli volumi).
*/

// NOTE
/*
- Utili per cache, preferenze utente, salvataggio dati temporanei.
- I dati sono gestibili solo dal dominio che li ha scritti.
- L’evento "storage" si attiva nelle altre finestre/schede del browser quando cambia lo storage (multi-tab communication possibile).
- Per dati sensibili usa sempre soluzioni cifrate o server-side.
*/
