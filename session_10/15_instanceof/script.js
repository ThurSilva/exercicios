class Mamifero {
   constructor(pata){
    this.pata= pata;
   }
}

let husky = new Mamifero(4);

console.log(husky.pata);

class Cachorro extends Mamifero {
   constructor(pata, raca){
    super(pata, pata);
    this.raca = raca;
   }
   latir(){
      console.log("au au");
   }
}

let pug = new Cachorro( 0 , 'pug');
console.log(pug.pata);
pug.latir();


// descobrir se é filho mesmo do mamifero
console.log(new Cachorro instanceof Mamifero);
console.log(husky instanceof Mamifero);