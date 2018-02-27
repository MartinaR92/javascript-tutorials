// ciclare i numeri da 0 a 100
// se il numero è divisibile per 2 e per 3, scrivi "sei"
// se il numero è divisibile per 2, scrivi "due"
// se il numero è divisibile per 3, scrivi "tre"
// se non viene rispettata nessuna di queste condizioni, non scrivere niente

function testNumero(index) {

    if (index == 0) {
        return;
    }
    
    if (index % 2 == 0 && index % 3 == 0) {
        console.log("sei");
    }
    else if (index % 2 == 0) {
        console.log("due");
    }
    else if (index % 3 == 0) {
        console.log("tre");
    }

}

for (let index = 0; index <= 10; index++) {
    testNumero(index);
}




// for (let index = 0; index <= 10; index++) {

//     console.log(index);


//     break;
// }

// let index2;

// for (index2 = 0; index2 <= 3; index2++) {
//     console.log("a");
//     break;
// }

// console.log(index2);

// let status = "rotto";

// while (status == "rotto") {
//     status = aggiusta();
// }

// function saluto(nome) {

//     switch (nome) {
//         case "Martina":
//         case "martina":
//         case "Gino":
//             console.log("ciao");
//             break;
//         case "Paolo":
//             console.log("addio");
//             break;
//         default:
//             console.log("non so chi tu sia");
//             break;
//     }

// }

// saluto("Martina");
// saluto("martina");
// saluto("Paolo");
// saluto("Gino");

