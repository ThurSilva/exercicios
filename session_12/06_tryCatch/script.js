try {
    let a = 2 + b;
} catch (e){
    console.log(e);
}

//dará erro por b nao estar declarada, mas nao ira travar, diferente do throw new Error
console.log('teste');