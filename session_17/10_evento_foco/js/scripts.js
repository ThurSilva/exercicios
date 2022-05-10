let input = document.querySelector('#input1');

input.addEventListener('focus',function(){
    console.log('entrou');
});

input.addEventListener('blur',function(){
    console.log('saiu')
})