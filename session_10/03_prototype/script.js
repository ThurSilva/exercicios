// verificando que o objeto pai e filho tem as mesmas propriedades

const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);
console.log(pessoa.hasOwnProperty('maos'));