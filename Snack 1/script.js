// inserimento dell'utente dei due numeri
let numero1 = prompt("Inserisci il primo numero:");
let numero2 = prompt("Inserisci il secondo numero:");

let maggiore;



// Verifica quale numero è maggiore
if (numero1 > numero2) {
    maggiore = numero1;
    console.log(numero1);
} else if (numero2 > numero1) {
    maggiore = numero2;
    console.log(numero2);
} else {
    maggiore = "I numeri sono uguali";
}

// Stampare il risultato
console.log("Il numero maggiore è: " + maggiore);
