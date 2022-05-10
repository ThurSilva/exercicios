let permita = prompt('qual a velocidade permitida na via?');
console.log(permita);
let velocidade = prompt('qual foi sua velocidade?');
console.log(velocidade);

let dif = (10*permita/100);
let max = (dif + permita);

if(max > velocidade){
    console.log('Você receberá a multa em breve');
} else {
    console.log('Dentro do limite de velocidade!');
}

// let dif = (20*80/100);

// console.log(dif)