// symbol seta um valor imutavel a uma propriedade

class Cachorro {
   constructor(raca, cor){
    this.raca = raca;
    this.cor = cor;
   }
   latir(){
      console.log("au au");
   }
}

Cachorro.prototype.raca = 'SRD';

// setando com symbol
let pasta = Symbol();
Cachorro.prototype[pata]=4;

let husky = new Cachorro("husky","cinza");

console.log(husky.pata);

husky.latir();

console.log(Cachorro.prototype.raca);
console.log(husky.raca);

// acessando symbol  1° pai / 2° filho
console.log(Cachorro.prototype[pata]);
console.log(husky[pata]);