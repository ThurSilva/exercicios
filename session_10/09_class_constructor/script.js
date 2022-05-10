//construindo classes de maneira facil PQP

class Cachorro {
   constructor(raca, pata, cor){
    this.raca = raca;
    this.pata = pata;
    this.cor = cor;
   }
}

//criando o prototype por new 
let husky = new Cachorro("husky", 4 , "cinza");

console.log(husky);