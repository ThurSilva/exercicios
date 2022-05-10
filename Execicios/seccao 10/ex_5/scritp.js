class Conta {
    constructor(saldoCC, saldoCP, juros){
     this.saldoCC = saldoCC;
     this.saldoCP = saldoCP;
     this.juros = juros;
    }
    deposito(valor){
        this.saldoCC += valor;
    }
    saque(valor){
        this.saldoCC -= valor;
    }
    transCP(valor){
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }
    transCC(valor){
        this.saldoCP -= valor;
        this.saldoCC += valor;
    }
    jurosDeAniv(){
        let juros =(this.saldoCP * this.juros) / 100;
        this.saldoCP += juros;
    }
}

class ContaEspecial extends Conta{
    constructor(saldoCC,saldoCP,juros){
        super(saldoCC, saldoCP, juros*2);
    }
}

let conta = new Conta(1000,5000,1);
console.log(conta);

conta.saque(500);
console.log(conta);

conta.deposito(5000);
console.log(conta);

conta.transCP(3000);
console.log(conta);

conta.jurosDeAniv();
console.log(conta);

let conta2 = new ContaEspecial(10000,5000,1);
console.log(conta2);

conta2.saque(5000);
console.log(conta2);

conta2.jurosDeAniv();
console.log(conta2);