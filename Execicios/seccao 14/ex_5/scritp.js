const user = /\w+_-\d[0-9]{3,16}/; 

//const user = /^(?=.{3,16}$)[a-z0-9-_]/; 

console.log(user.test("artur_-5824825")); 

