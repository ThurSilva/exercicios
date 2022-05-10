let obj = {
    key1: 2
}

let obj2 = obj;

let obj3 = {
    key1: 2 
} 

console.log(obj == obj2);
console.log(obj3 == obj);
console.log(obj3 == obj2);


obj2.key1= 3

console.log(obj);

obj.key1= 4

console.log(obj2);