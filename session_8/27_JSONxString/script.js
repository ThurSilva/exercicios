let pssoa ={
    "nome": "artur",
    "age": 20,
    "prof": "autor",
    "altura": "1.71",
    "hobbies":["jogar","brincar"]
}

let dados = JSON.stringify(pssoa);
console.log(dados);
// console.lob(dados.nome)   não vai funcionar apenas voltando para o json

let pssoajson = JSON.parse(dados);
console.log(pssoajson);
console.log(pssoajson.nome);
console.log(pssoajson.hobbies[1]);