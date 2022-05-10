// await manda aguarda um resultado para executar a tarefa

function somarComDelay(a,b) {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(a+b);
        }, 4000);
    })
}

async function resSoma(a,b,c) {
    let x = somarComDelay(a,b);
    let y = c
    return await x + y;
}

resSoma(1,2,3).then(value => console.log(value));