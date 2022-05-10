let num = 41;
let divi = 0;

for(let i=1;i<=num;i++){

    if(num%i==0){
    divi++;
    }
}

if(divi == 2) {
    console.log(`${num} é primo!`);
} else {
    console.log(`${num} não é numero primo!`);
}
