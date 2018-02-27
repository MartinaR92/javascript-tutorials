// una funzione che dato un voto da A ad E restituisca una frase consona al voto
// tipo: A = "grande!", B = "potevi fare di meglio"; C = "ha del potenziale ma non si applica", ecc..
// non solo, la funzione deve accettare anche numeri da 1 a 5, ed emettere lo stesso risultato dei voti da A ad E, 
// dove A corrisponde ad 5 ed E a 1
// se l'input non è compreso tra A ed E o tra 1 e 5, restituire "ERRORE"

function esercizio(input) {
    switch (input) {
        case "A":
        case "a":
        case 5:
        case "5":
            return "grande!";
        case "B":
        case "b":
        case 4:
        case "4":
            return "potevi fare meglio";
        default:
            return "ERRORE";
    }

}

// casi che devono funzionare
console.log(esercizio("A"));
console.log(esercizio("a"));
console.log(esercizio("B"));
console.log(esercizio("c"));
console.log(esercizio("2"));
console.log(esercizio(2));
console.log(esercizio("E"));
console.log(esercizio("d"));
console.log(esercizio(1));
console.log(esercizio(1 + 2));
console.log(esercizio(4));

// casi che devono dare errore
console.log(esercizio(0));
console.log(esercizio("uno"));
console.log(esercizio("F"));
console.log(esercizio(2 * 3));
console.log(esercizio());
