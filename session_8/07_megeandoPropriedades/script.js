let carro = {
    portas: 2,
    portamalas: '200l',
    motor: '2.0'
}
let adicionais = {
    tetoSolar: true,
    arCond: true
}

console.log(carro);

// object.assign = mergea as propriedades de dois objetos em um só
Object.assign(carro,adicionais);

console.log(carro);