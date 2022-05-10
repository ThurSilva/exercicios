const digitor = /\d+/; 

console.log(digitor.exec('tem o numero 100')); // ao utilizar o .exec ele retorna mais informações quando o padrao for encontrado
// caso contrario, sera apenas null
console.log(digitor.exec('tem o numero'));
