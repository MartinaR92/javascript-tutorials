// scrivere una funzione che dato un numero in input restituisca "basso" se è minore di 5, 
// "alto" se è maggiore di 5, oppure "cinque" se uguale a 5.
// invocare la funzione tre volte, con i numero 2, 6 e 5, e scrivere il risultato in console.log

let result = "ciao";

function testNumero(numero) {

    let result;
    if (numero == 5) {
        result = "cinque";
    }

    if (numero > 5) {
        result = "alto";
    }

    if (numero < 5) {
        result = "basso";
    }

    return result;
}

function test2(n) {
    if (numero == 5) {
        return "cinque";
    }
    if (numero > 5) {
        return "alto";
    }
    return "basso";
}

console.log(testNumero(5));
console.log(testNumero(2));
console.log(testNumero(6));

console.log(result);

