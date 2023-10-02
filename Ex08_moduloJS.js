/* Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta. 

Observações: 
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto; 
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
-o número da conta  deve retornar o número da conta.
*/


function Banco(conta, saldo, tipoConta, agencia) {
  this.conta = conta;
  this.saldo = saldo;
  this.tipoConta = tipoConta;
  this.agencia = agencia;

  this.buscarSaldo = function () {
    return this.saldo;
  };

  this.deposito = function (valor) {
    this.saldo += valor;
    return `Depósito Realizado: R$${valor}
    Saldo Atualizado: R$${this.saldo}`;
  };

  this.saque = function (valor) {
    if (valor > this.saldo) {
      return "Saldo insuficiente.";
    }

    this.saldo -= valor;
    return `Saque Realizado: R$${valor}
    Saldo Atualizado: R$${this.saldo}`;
  };

  this.numeroConta = function () {
    return this.conta;
  };
}


const minhaConta = new Banco('1234-5', 2000, "Corrente", "001");
console.log(`Conta n°: ${minhaConta.numeroConta()}`);
console.log(`Saldo Anterior: R$${minhaConta.buscarSaldo()}`);
console.log(minhaConta.deposito(1000));
console.log(minhaConta.saque(300));
