// Numero untente, numero di array da generare
let N = prompt("Inserisci un numero N:");

// Convalida l'input dell'utente (se è un numero oppure se è 0)
if (isNaN(N) || N <= 0) {
    console.log("Input non valido. Assicurati di inserire un numero maggiore di 0.");
} else {
    // Genera N array di numeri casuali da 1 a 100
    for (let i = 0; i < N; i++) {
        let array = []; // creiamo un nuovo array vuoto

        for (let j = 0; j < 10; j++) { // Genera 10 numeri e li aggiunge alla array
            array.push(Math.floor(Math.random() * 100) + 1);
        }
        // risultato sulla console
        console.log("Array " + (i + 1) + ": " + array.join(", "));
    }
}
