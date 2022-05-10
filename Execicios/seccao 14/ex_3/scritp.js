const marca = /Marca: Nike|Adidas|Puma|Asics/;  // o \b elege o que termina no padrao

console.log(marca.test("Marca: nike")); 