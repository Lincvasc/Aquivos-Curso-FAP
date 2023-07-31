/*Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.*/

const readline = require('readline-sync');

function obterIdade(anoNascimento) {
  const anoAtual = new Date().getFullYear();
  return anoAtual - anoNascimento;
}

function validarAno(ano) {
  return !isNaN(ano) && ano >= 1922 && ano <= 2021;
}

function obterAnoNascimento() {
  let anoNascimento;
  do {
    anoNascimento = readline.question("Digite o seu ano de nascimento (entre 1922 e 2021):");
    anoNascimento = parseInt(anoNascimento);
  } while (!validarAno(anoNascimento));

  return anoNascimento;
}

function yearAndName() {
  const nomeCompleto = readline.question("Digite o seu nome:");
  const anoNascimento = obterAnoNascimento();

  const idade = obterIdade(anoNascimento);
  console.log(`Nome: ${nomeCompleto}`);
  console.log(`Idade: ${idade} anos`);
}

yearAndName ();


