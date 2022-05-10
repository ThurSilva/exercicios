// promise é a promessa, separação de algo sera feito quando chamado
function verificarNum (num){
    return new Promise((resolve, reject)=> {
        if(num==2){
            resolve(console.log(`o numero é ${num}`));
        }else{
            reject(new Error('falhou'));
        }
    });
}

verificarNum(2);
verificarNum(3);