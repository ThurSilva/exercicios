// usando esse getelementesby ... é possivel ver quais eles desta existem na pagina e oq esta atribuido a ele CSS e afins
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('p'));
console.log(document.getElementsByTagName('li'));

//pelo ID do h1, recomendado deixar apenas um h1 na pag
console.log(document.getElementById('titulo-principal'));

//pela class alterando apenas os itens da classe que desejo
console.log(document.getElementsByClassName('itens-azuis'));
console.log(document.getElementsByClassName('itens-vermelhos'));
console.log(document.getElementsByClassName('itens'));


//query seletor pelo caminho 

console.log(document.querySelector('#container-principal h1')); // # para acessar id de div
console.log(document.querySelector('#segundo-principal h1'));
console.log(document.querySelector('div div p'));
console.log(document.querySelector('footer h2'));
console.log(document.querySelector('ul .itens-azuis')); //. para acessar classes