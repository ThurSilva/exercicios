let age = prompt('Qual a sua idade?');
console.log(age);
let cnh = prompt('Já possui CNH? S/N');
console.log(cnh);

if(age >= 18 && cnh == 'n'){
    console.log('Você não pode dirigir pois nao possui CNH');
} else if (age >= 18 && cnh == 's'){
    console.log('Você já pode dirigir!');
} else {
    console.log('Você não pode dirigir!');
}
