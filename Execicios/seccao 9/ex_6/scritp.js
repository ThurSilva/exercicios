let contatos = ['joao','maria','artur','joao','maria','artur'];
let contatos2 = ['joao','maria','artur'];

//console.log(contatos.length);

function contador (agr){
if (agr.length < 5){
    console.log("Poucos elementos em contatos")
} else {
    console.log("Muitos elementos em contatos")
}
}

contador(contatos);
contador(contatos2);
