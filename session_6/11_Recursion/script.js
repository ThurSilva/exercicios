function nEntendi(n){
   if(n-1 < 2){
      console.log("Recursão parou!")
   }else if(n % 2 != 0){
      console.log("n impar"+n);
      nEntendi(n-1)
   }else{
      console.log("n par"+n);
      nEntendi(n-2)
   }
}


nEntendi(39);
nEntendi(10);
nEntendi(5);