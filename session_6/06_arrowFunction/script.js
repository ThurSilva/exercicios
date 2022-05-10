//posso declarar a mesma variavel dentro e fora de um escopo que elas terão valores diferentes

let consoleTeste = () => {
    console.log("olá mundo");
};

consoleTeste();

let soma = (x,y) => {
    return (x + y);
};

console.log(soma(10,20));