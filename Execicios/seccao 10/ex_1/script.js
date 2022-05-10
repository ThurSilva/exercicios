class Conta {
    constructor(saldo){
     this.saldo = saldo;
    }
    deposito(valor){
        this.saldo += valor;
        console.log("Deposito de R$",valor, "em conta. Saldo atual R$" ,conta.saldo);
    }
    saque(valor){
        this.saldo -= valor;
        console.log("Saque de R$",valor, "em conta. Saldo atual R$" ,conta.saldo);
    }

}
 
 let conta = new Conta(100);
 conta.deposito(20);
 conta.saque(60);