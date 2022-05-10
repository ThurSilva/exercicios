function saudacao(nome){
    if(typeof nome != 'string') {
        throw new Error('o fela, tu coloco o parametro errado');
    }else{
        console.log(`ola ${nome}.`);
    }
}

saudacao('artur');
saudacao(4);
// console para mostrar que a execução irá parar no erro.
console.log('teste')