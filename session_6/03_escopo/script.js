//posso declarar a mesma variavel dentro e fora de uma function que elas terão valores diferentes

let y = 10;

function imp(){
    let y =2;
    console.log(y);
}

imp();

console.log(y);