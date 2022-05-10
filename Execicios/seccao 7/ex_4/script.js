    // função para numeros aleatorios com o limite
function a (x){
    // math.floor fará com que traga apenas numeros inteiros e o +1 pra arredondar para cima (0,5 = 1)
    return Math.floor(Math.random() * x) + 1;
}

console.log(a(10));
console.log(a(5));