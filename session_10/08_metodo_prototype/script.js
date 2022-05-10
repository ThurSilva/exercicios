//estanciando classes e separando o metodo
//classe apenas com as propriedades 

function Cachorro(raca, pata, cor){
    this.raca = raca;
    this.pata = pata;
    this.cor = cor;
}

//criando o metodo para o filho
Cachorro.prototype.latir = function(){
    console.log("au au");
}

//criando o prototype por new 
let husky = new Cachorro("husky", 4 , "cinza");

husky.latir();