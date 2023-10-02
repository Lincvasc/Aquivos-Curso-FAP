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

  this.buscarSaldo = function() {
      return this.saldo;
  };

  this.deposito = function(valor) {
      this.saldo += valor;
  };

  this.saque = function(valor) {
      if (this.saldo >= valor) {
          this.saldo -= valor;
      } else {
          console.log('Saldo insuficiente');
      }
  };

  this.numeroConta = function() {
      return this.conta;
  };
}


let banco = new Banco('123456', 1000, 'Corrente', '001');

console.log(banco.buscarSaldo()); 
banco.deposito(500); 
console.log(banco.buscarSaldo());
banco.saque(200); 
console.log(banco.buscarSaldo()); 
console.log(banco.numeroConta()); 
