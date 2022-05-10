try {
    let a = 2 + b;
} catch (e){
    console.log(e);
} finally {      // mensagem a ser exibida entrando no catch ou no try .. dando bom ou ruim
    console.log('executou')
}

//dará erro por b nao estar declarada, mas nao ira travar, diferente do throw new Error
console.log('teste');