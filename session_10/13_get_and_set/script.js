// symbol seta um valor imutavel a uma propriedade

class Cachorro {
   constructor(raca, cor){
    this.raca = raca;
    this.cor = cor;
   }
   latir(){
      console.log("au au");
   }
   get getCor(){
      return this.cor;
   }
   set setCor(cor){
      this.cor = cor;
   }
}

let husky = new Cachorro("husky","sem cor");

console.log(husky);

husky.setCor = 'cinza'

console.log(husky.getCor);