// array che contiene tutti quelli che possono entrare alla festa                 cit. L4D2 
let listaInvitati = ["Gatsby", "Ellis", "Nick", "Coach", "Dallas", "Rochelle"];


// l'utente inserisce il suo nome
let nomeUtente = prompt("Inserisci il tuo nome:");


// invito settato a false di default, e diventa True, solo e soltanto il nome corrisponde ad uno dentro l'array
let invitatoPresente = false;



// verifica se l'utente è presente nella lista paragonandolo ad ogni ciclo a unol dei contenuti dentro l'array
for (let i = 0; i < listaInvitati.length; i++) {
    if (nomeUtente === listaInvitati[i]) {
        invitatoPresente = true;
    }
}




// l'utente se può partecipare alla festa o no? controlliamo con una condizione
if (invitatoPresente) {
    console.log ("Benvenuto alla festa del Grande Gatsby!");
} else {
    console.log ("Non sei sulla lista!, non sei stato invitato alla festa.");
}
