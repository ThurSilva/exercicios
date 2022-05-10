// transformando um objeto em variaveis

let obj ={
    rodas: 4,
    portas: 2,
    tetoSolar: true,
    motor:'2.0'
}

const {rodas: vrodas,
portas: vportas,
tetoSolar: vteto,
motor: vmotor}= obj;

console.log(vmotor, vportas);