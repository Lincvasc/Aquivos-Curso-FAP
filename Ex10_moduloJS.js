/* Com base no que estudamos, escolha dois objetos materiais e dois abstratos. Em seguida, faça uma lista com, pelo menos, três atributos e três métodos para cada tipo de objeto. Para finalizar, demonstre esses objetos em JavaScript e exemplifique as suas características e ações.
*/

//Objetos Materiais.........................

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    ligar: function() {
      console.log("O carro está ligado");
    },
    desligar: function() {
      console.log("O carro está desligado");
    },
    buzinar: function() {
      console.log("Beep! Beep!");
    }
  };
  
  let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    paginas: 1200,
    abrir: function() {
      console.log("O livro está aberto");
    },
    fechar: function() {
      console.log("O livro está fechado");
    },
    ler: function() {
      console.log("Lendo o livro");
    }
  };
  //.........................Objetos Materiais


//Objetos Abstratos.........................

let contaBancaria = {
    numeroDaConta: "12345678",
    saldo: 5000,
    depositar: function(valor) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    },
    sacar: function(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
      } else {
        console.log("Saldo insuficiente para o saque");
      }
    },
    consultarSaldo: function() {
      console.log(`Saldo atual: R$${this.saldo}`);
    }
  };

  let curso = {
    nome: "JavaScript para Iniciantes",
    duracaoEmHoras: 20,
    concluido: false,
    iniciar: function() {
      console.log("Curso iniciado");
    },
    pausar: function() {
      console.log("Curso pausado");
    },
    concluir: function() {
      this.concluido = true;
      console.log("Curso concluído");
    }
  };

  //.........................Objetos Abstratos


  