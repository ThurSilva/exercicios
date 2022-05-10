let n = 1
let n1 = 2
let n2 = 3

function impnum(...agrs){
    for(let i = 0 ; i < agrs.length; i++){
        console.log(agrs[i])
    }
}
impnum(n,n1,n2);
console.log('parou');
impnum(1,5.8,3,1,5,1,5,86,1,2)