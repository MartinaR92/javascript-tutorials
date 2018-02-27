// let stringa = "asasd";
// let buleani = true;
// let numero = 9;

// let arrei = [1, 2, 3, 4, "ciccio", true, false, 6];
// console.log(arrei.length);
// console.log(arrei[4]);

// arrei = [];
// console.log(arrei.length);

// arrei.push(5);
// arrei.push(6);

// console.log(arrei.length);

// for (let index = 0; index < arrei.length; index++) {
//     const element = arrei[index];
//     console.log(element);
// }

// questa funzione deve fare le seguenti cose:
// 1. se l'array passato come parametro è vuoto, scrivere "array vuoto";
// 2. se l'array passato come parametro contiene il numero 5, scrivere "questo array contiene il numero 5!"
// 3. altrimenti, scrivere "nada, non ho trovato il 5"

function questoArrayContiene5(arr) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element == 5) {
            return true;
        }

    }
    return false;
}

function stub(arr) {

    if (arr.length == 0) {
        console.log("array vuoto");
        return;
    }

    if (arr.indexOf(5) >= 0) {
        console.log("questo array contiene 5");
    }
    else {
        console.log("nada");
    }

    // for (let index = 0; index < arr.length; index++) {
    //     const element = arr[index];
    //     if (element == 5) {
    //         return;
    //     }

    // }

}

stub([1, 2, 3, 4, 5]); // caso 2
stub([5]); // caso 2
stub([5, 2, 5, 4, 5]); // caso 2
stub([]); // caso 1
stub(["6", "gino", 4, 7]); // caso 3
stub([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]); // caso 3