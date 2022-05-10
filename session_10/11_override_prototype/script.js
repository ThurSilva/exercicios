class Cachorro {
   constructor(raca, pata, cor){
    this.raca = raca;
    this.pata = pata;
    this.cor = cor;
   }
//criando o metodo para o filho
   latir(){
      console.log("au au");
   }
}

Cachorro.prototype.raca = 'SRD';
Cachorro.prototype.pata = 4;

//criando o prototype por new 
let husky = new Cachorro("husky","cinza");

// como setado default 4, ele herdará do pai \/ comprovando
console.log(husky.pata);

// atribuindo o metodo ao objeto filho
husky.latir();

//demonstrando a raca default
console.log(Cachorro.prototype.raca);
//demonstrando a raca setada
console.log(husky.raca);