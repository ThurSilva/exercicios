const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);
console.log(pessoa.hasOwnProperty('maos'));

// criando um objeto filho que terá as mesmas caracteristicas do pai
const pessoaNova = Object.create(pessoa);

// mostrando que o filho herdou as propriedades
console.log(pessoaNova.maos);

// verificando propriedade herdada vem do pai = dará falso pois pessoaNova, não tem a propriedade e sim o pai
console.log(pessoaNova.hasOwnProperty('maos'));

// verificando se filho corresponde ao pai
console.log(Object.getPrototypeOf(pessoaNova) === pessoa);