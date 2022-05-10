let lista = document.createElement('ul'); // crie um lista

for (i=0; i<5; i++){  // para essa repetição
    let item =document.createElement('li'); //crie um item
    let texto =document.createTextNode('texto lista'+i); // crie esse texto
    item.appendChild(texto); // item pega o texto
    lista.appendChild(item); // lista pega o item
}

let container = document.getElementById('container-principal'); //nesta parte

container.appendChild(lista); // ao fim dessa parte