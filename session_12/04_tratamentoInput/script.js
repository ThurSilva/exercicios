//Validação de dados por uma função

/* function checarNum(num){
    let number = Number(number); // para tornar um char numerico '5' = 5 
    if(Number.isNaN(number)) {   // identifica se realmente é um numero
        console.log("por favor, apenas numeros")
    }else{
        return number;
    }
}

checarNum(5);
checarNum('ass'); */


function checarNum(num){
    let number = Number(num); // para tornar um char numerico '5' = 5 
    if(Number.isNaN(number)) {   // identifica se realmente é um numero
        alert("por favor, apenas numeros")
    }else{
        return number;
    }
}

let number = prompt('Digite um numero');
checarNum(number);