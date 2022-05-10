let arr = [1,2,3,4,5];
let arr2 = [2,15,12];

function iterarArray(arr){
    if(arr.length == 0){
        throw new Error('o array precisa de argumentos');
    }else{
        for(let i = 0 ; i < arr.length; i++){
            console.log(i);
        }
    }
}

function arrayVazio(arr){
    if(arr.lenght > 0){
        throw new Error('o array não pode ter elementos');
    }else{
        console.log('deu bom vazio');
    }
}

iterarArray(arr);
iterarArray(arr2);