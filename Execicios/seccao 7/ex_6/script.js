function a (x){
    if (typeof x === "number"){
        console.log("isso é um number")
    } else if (typeof x === "string"){
        console.log("isso é uma string")
    } else {
        console.log("isso é um booolenao")
    }
}

a(18);
a(true);
a('artur');