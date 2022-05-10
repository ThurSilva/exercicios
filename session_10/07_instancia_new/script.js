//estanciando classes 
//o objeto já é para criar novos (filhos) por new

function Cachorro(raca, pata, cor){
    this.raca = raca;
    this.pata = pata;
    this.cor = cor;
    this.latir = function(){
        console.log("au au");
    }
}

//criando o prototype por new 
let husky = new Cachorro("husky", 4 , "cinza");

console.log(husky);

husky.latir();