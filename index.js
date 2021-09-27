import {Cliente} from"./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo",1112223309);


const cliente2 = new Cliente("Alice",8882223309);


const contaCorrenteRicardo = new  ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 102;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(cliente2);


