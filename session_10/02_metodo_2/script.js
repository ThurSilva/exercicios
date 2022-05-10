const dog = {
    raca: 'SRD',
    uivar: function(){
        console.log("auuuuu");
    },
    rosnar: function(){
        console.log("raaaaw");
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return'A raça é '+ this.raca;
    }
}
// SRD, pois nada foi alterado
console.log(dog.raca);
// setando uma nova raça pela função 
dog.setRaca('Pastor Alemão');
// imprimindo a raça setada
console.log(dog.raca);
// retornando agora em uma outra função com "frase" sobre esssa raça setada
console.log(dog.getRaca());