// Array vuoto che conterrà i numeri dispari
let numeriDispari = [];

// Chiediamo all'utente di inserire un numero per 6 volte
for (let i = 0; i < 6; i++) {
    let numero = parseInt(prompt("Inserisci un numero:"));

    // Verifichiamo se il numero è dispari e lo aggiungiamo all'array
    if (numero % 2 !== 0) {
        numeriDispari.push(numero);
    }
}

// restituiamo in console l'array con numeri dispari nella console
console.log("Numeri dispari inseriti:", numeriDispari);
