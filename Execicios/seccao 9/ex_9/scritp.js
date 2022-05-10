let nome = 'artur joventino da silva'

let palavras = nome.split(" ");

console.log(palavras);

for(let i = 0; i < palavras.length; i++){
    console.log(palavras[i] + ': é parte do meu nome');
}