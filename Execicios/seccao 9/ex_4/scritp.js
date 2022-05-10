let onibus = {
    portas: 2, 
    rodas: 8,
    passangers: 80
};
console.log(onibus);

delete onibus.rodas;

onibus.janelas = 20;

console.log(onibus.janelas);
console.log(onibus.rodas);
console.log(onibus);