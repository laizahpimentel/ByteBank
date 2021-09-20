class Cliente {
    nome;
    cpf;
    

}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo  >= valor){
            this.saldo -= valor;
        }   
    }
    
    depositar(valor){
        if(valor >0){
            this.saldo+= valor;
            
        }
    }



}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 1112223309;



const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 8882223309;



const contaCorrenteRicardo = new  ContaCorrente();
contaCorrenteRicardo.saldo =  10000; //falando sobre salado/priavado
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar (100);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);



