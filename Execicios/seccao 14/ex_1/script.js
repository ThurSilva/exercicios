const letrasM = /[A-Z]/;

console.log(letrasM.test("avemaria")); //FALSE
console.log(letrasM.test("AVEMARIA"));
console.log(letrasM.test("ave maria")); // FALSE
console.log(letrasM.test("AVE MARIA"));
console.log(letrasM.test("Ave Maria")); 