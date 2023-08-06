/*Crie uma lista encadeada em que cada elemento representa uma pessoa.

Ela precisa conter informações como nome, idade e referência ao filho dela.

Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.*/

class pessoa {
  constructor(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.filho = null;
  }
}

function printPeople(pessoa) {
  let current = pessoa;
  while (current !== null) {
    console.log(`Nome: ${current.nome}\nIdade: ${current.idade} anos`);
    if (current.filho) {
      const filhoOuFilha = current.filho.sexo === "masculino" ? "Seu filho é" : "Sua filha é";
      console.log(`${filhoOuFilha}: ${current.filho.nome}`);
    } else {
      console.log(`${current.nome} não tem filho.`);
    }
    console.log("------------------------");
    current = current.filho;
  }
}

let pessoa1 = new pessoa("Paulo", 60, "masculino");
let pessoa2 = new pessoa("Cláudia", 42, "feminino");
let pessoa3 = new pessoa("Aldo", 24, "masculino");
let pessoa4 = new pessoa("Rayane", 5, "feminino");

pessoa1.filho = pessoa2;
pessoa2.filho = pessoa3;
pessoa3.filho = pessoa4;


printPeople(pessoa1);

