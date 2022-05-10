// generator  quase promises 

function* criadorId(){
    let id = 0;
    while(true){
        yield id++;
    }
}

let criarId = criadorId();

console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);
console.log('Seu novo ID é: '+(criarId.next().value));
