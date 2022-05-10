class Endereco {
    constructor(rua, bairro, cidade, estado){
     this.rua = rua;
     this.bairro = bairro;
     this.cidade = cidade;
     this.estado = estado;

    }
    set novaRua(novaRua){
        this.rua = novaRua;
    }
    set novoBairro(novoBairro){
        this.bairro = novoBairro;
    }
    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }
    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }
}


let endereco = new Endereco('rua berlim','pq sampaio','caracas','sp');
 
console.log(endereco);
 
endereco.novaRua = 'Rua joao de barro';
 
console.log(endereco);

endereco.novoBairro = 'Jd. elzinha';
 
console.log(endereco);

endereco.novaCidade = 'Osasco';
 
console.log(endereco);

endereco.novoEstado= 'RJ';
 
console.log(endereco);