function multip(x,y,z){
    return x*y*z;
}

console.log(multip(2,3,1));

const mult = multip(2,5,8);

console.log("o valor da multiplicação é: "+ mult);

function dirigir(age,cnh){
    if(age>=18&&cnh==true){
        console.log("pode dirigir!");
    }else{
        console.log("pode nao");
    }
}
// 0 pode ser considerado um false, e 1 considera um true
console.log(dirigir(19,true));
console.log(dirigir(19,false));
console.log(dirigir(19,1));
console.log(dirigir(19,0));
console.log(dirigir(17,true));
console.log(dirigir(17,false));