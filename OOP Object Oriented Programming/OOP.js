// Programmazione Orientata agli Oggetti (OOP) in JavaScript

// La OOP è un paradigma che organizza il codice attorno agli "oggetti", che rappresentano entità con dati e comportamenti.
// In JavaScript, gli oggetti sono collezioni di proprietà e metodi. Questi ultimi sono funzioni usate per definire il comportamento.
// JavaScript è un linguaggio basato su prototipi, non su classi tradizionali come in altri linguaggi, ma con ES6 la sintassi classica è stata introdotta.

// Concetti chiave della OOP:
// 1. Incapsulamento: raggruppamento di dati e funzioni che operano su di essi in un'entità unica, l'oggetto.
// 2. Ereditarietà: meccanismo per creare nuovi oggetti basati su altri esistenti, riutilizzandone struttura e comportamento.
// 3. Polimorfismo: la stessa funzione o metodo può comportarsi diversamente in classi diverse tramite override dei metodi.

// 1. Oggetti letterali e metodi
var dog = {
    type: 'DOG',
    name: 'Laika',
    legs: 4,
    bark() {
        console.log('Dog barked');
    },
    getName() {
        console.log(this.name);
    },
    favoriteFriends: ['JIMMY', 'johny', 'PIGGY'],
    id: {
        dogId: '1212121212',
        address: 'corso racconigi, Torino',
        country: 'Italy'
    },
    displayDogId() {
        console.log(this.id.dogId);
    }
};

dog.bark();               // Dog barked
dog.getName();            // Laika
dog.displayDogId();       // 1212121212
dog.favoriteFriends.push('Giorgi');
console.log(dog.favoriteFriends);

// 2. Funzione esterna usata come metodo
function displayId() {
    console.log(this.id);
}
dog.displayDogId = displayId;
dog.displayDogId();       // Oggetto id dell'istanza dog

// 3. Classi ES6
// Le classi sono modelli per creare oggetti con proprietà e metodi comuni. Si utilizza il costruttore per inizializzare istanze.

class Enemy {
    constructor(type = 'Alien', lives = 12) {
        this.type = type;
        this.lives = lives;
    }
    shout() {
        return 'grrrrrrrr!';
    }
    static getType() {
        return 'Enemy';
    }
}

const enemy1 = new Enemy();
console.log(enemy1.type); // Alien

// 4. Ereditarietà con extends e super
// Creepers estende Enemy, ereditando proprietà e metodi, ma aggiunge health e ridefinisce shout
class Creepers extends Enemy {
    constructor(type = 'Creeper', lives = 20) {
        super(type, lives);     // Chiama il costruttore della classe base
        this.health = 60;
    }
    shout() {
        this.calledShout = true;
        console.log(super.shout() + ', zzzzzzzzzzzzzzz');
    }
    static getType() {
        return 'Enemy';
    }
}

const creeper1 = new Creepers();
creeper1.shout(); // grrrrrrrr!, zzzzzzzzzzzzzzz

// 5. Funzione costruttrice classica e prototipi
function Alien() {
    this.type = 'Alien';
    this.lives = 10;
    this.health = 60;
}
Alien.prototype.shoot = function () {
    this.health--;
    console.log('fired');
};

const alien1 = new Alien();
console.log(alien1.type);  // Alien
alien1.shoot();            // fired

// Concetti aggiuntivi importanti:

// 'this' in metodi e classi si riferisce all'istanza attuale che invoca il metodo.

// OOP permette di modellare entità reali/astratte con dati e comportamenti in modo modulare e riusabile.

// Ereditarietà riduce duplicazione codice e facilita estensione e specializzazione degli oggetti.

// Le classi ES6 semplificano la sintassi rispetto ai prototipi e sono lo standard moderno per OOP in JS.

// Metodi statici sono funzioni legate alla classe, non all'istanza.

// Comprendere OOP è cruciale per sviluppare applicazioni scalabili e ben organizzate in JavaScript.
