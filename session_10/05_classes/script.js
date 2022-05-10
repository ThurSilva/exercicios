// o objeto passa a se tornar uma classe a ser utilizada (o pai) por outros filhos
let cachorro ={
    patas:4,
    raca:'SRD',
    latir: function(){
        console.log('auau');
    }
}

// labrador terá as propriedades do pai, porem com nova raça
let labrador = Object.create(cachorro);

//a partir da classe ele utilizará a função latir
labrador.latir();
// 
labrador.raca = "labrador";

// demonstrando que labrador terá sua raça
console.log(labrador.raca);
// mas o pai cachorro não
console.log(cachorro.raca);

let pastor = Object.create(cachorro);

pastor.latir();
pastor.raca = "Pastor Alemao";
console.log(pastor.raca);