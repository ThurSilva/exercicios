// o objeto já é para criar novos (filhos)

function criarCachorro (raca, pata, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca,
    cachorro.pata = pata,
    cachorro.cor = cor,
    cachorro.latir = function(){
        console.log("au au");
    }
    return cachorro;
}

//setando novos parametros para o objeto criado 
let doberman = criarCachorro("doberman", 4 , "preto");

console.log(doberman);

doberman.latir();