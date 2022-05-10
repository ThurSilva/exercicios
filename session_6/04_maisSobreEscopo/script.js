//posso declarar a mesma variavel dentro e fora de um escopo que elas terão valores diferentes

let y = 10;

if (y > 5){
    let y = 20;
    y++;
    console.log(y);
}

console.log(y);