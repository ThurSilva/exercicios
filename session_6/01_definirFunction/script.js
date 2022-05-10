// \/ essa parte é apenas de declaração da função, nada será executado ou exibido

function imprimir(){
    console.log("ola mundo!");
}

// agr sim estou invocando a função e ela será executada conforme oq deve ser feito nela
imprimir();

function imprimir2(n){
    console.log("o numero é: " + n);
}

imprimir2(10);
imprimir2(101);
imprimir2(1054);
imprimir2(105);
imprimir2(1058);

const num = function(){
    console.log(Math.random());
}

num();
num();
num();