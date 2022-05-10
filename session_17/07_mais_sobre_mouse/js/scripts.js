let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

btn1.addEventListener('mousedown',function(){
    console.log('apertou');
});

btn1.addEventListener('mouseup',function(){
    console.log('soltou');
});

btn2.addEventListener('dblclick',function(){
    console.log('clicou 2x');
});

btn2.addEventListener('contextmenu',function(e){
    e.preventDefault();
    console.log('botao direito');
});