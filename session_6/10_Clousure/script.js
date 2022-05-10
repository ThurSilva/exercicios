function lembrarSoma (x){
   return function(y){
      return x+y;
   }
}

let soma1 = lembrarSoma(2);

console.log(soma1(5));

let soma2 = lembrarSoma(5);

console.log(soma2(7));

function contador(i){
   let cont = i;
   let somarcont = function(){
      console.log(cont);
      cont++
   }
   return somarcont;
}

let meucont = contador(5);

meucont();
meucont();
meucont();
meucont();

let meucont2 = contador(2);

meucont2();
meucont2();
meucont2();
meucont2();