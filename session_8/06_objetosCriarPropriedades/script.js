let pessoa = {
    nome: 'artur',
    idade: 30,
    profissao: 'programmer'
}
//mostrando o nome pre definido
console.log(pessoa.nome);
//deletando nome da 'base'
delete pessoa.nome;
console.log(pessoa.nome);
console.log(pessoa);
//inputando um novo dado
pessoa.casasdo = false;
console.log(pessoa);
