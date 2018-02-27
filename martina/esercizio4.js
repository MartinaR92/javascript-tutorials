
function numeroACaso() {
    return Math.floor(Math.random() * 20) + 1; 
}

// data la funzione numeroACaso che restituisce un numero casuale tra 1 e 30
// continuare a richiamare la funzione e scrivere il numero restituito
// 1. se esce un numero maggiore di 15, non scrvere niente e smettere di chiamare la funzione

// 2. quando esce il numero 20, invece di scrivere "20", scrivere "VENTI" e smettere di chiamare la funzione
let numero = numeroACaso();

while (numero != 20) {
    console.log(numero);
    numero = numeroACaso();
}

console.log("VENTI");
