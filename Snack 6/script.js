// Array Numeri Interi
var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// variabile per la somma degli elementi in posizione dispari
var sommaDispari = 0;

// sommiamo gli elementi in posizione dispari
for (var i = 0; i < numeri.length; i++) {
    if (i % 2 !== 0) {
        sommaDispari += numeri[i];
    }
}

// restituisci la somma degli elementi in posizione dispari sulla console
console.log("La somma degli elementi in posizione dispari dell'array è: " + sommaDispari);
