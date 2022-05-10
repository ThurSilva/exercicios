function soma (x,y) {
   if(x === undefined || y === undefined) {
   console.log("An argument is missing!");
   } else {
    return x + y;
   }
}

console.log(soma(1));

console.log(soma(1,2));

function nomeIdade (nome,idade) {
    if(idade === undefined) {
     console.log("Ola " + nome);
    } else {
     console.log("Ola " + nome + " você tem " + idade + " anos!");
    }
 }
 
nomeIdade("Artur");
 
nomeIdade("Artur",30);