// nenhum nexo apenas para ver a identação

let x = 2;
let z = 3;

if(x == 2 && z == 6){
    let z = 5;
    if(z<10){
        console.log(z);
        for(i=0;i<5;i=i+5){
            console.log(i);
            if(i==2){
                console.log('i é igual a dois')
            }
        }
    }
}


for (i=0;i<100;i=i+2){
    console.log(`A soma de i + 2 é ${i+2}`);
}