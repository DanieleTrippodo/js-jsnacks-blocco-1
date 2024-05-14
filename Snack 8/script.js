
// Array con numeri
let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Colori da applicare
let rosso = "";
let verde = "";


// Per colorarli in maniera alternata di verde o di rosso, leggendo un solo array
for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] % 2 === 0) {
        verde += numeri[i] + " ";
    } else {
        rosso += numeri[i] + " ";
    }
}


// aggiungiamo gli elementi nei div, presenti nel nostro html
document.getElementById("rosso").innerHTML = "Numeri dispari: " + rosso;
document.getElementById("verde").innerHTML = "Numeri pari: " + verde;
