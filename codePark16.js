/*Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. */

const readlineSync = require('readline-sync');


let candidato_X = 0;
let candidato_Y = 0;
let candidato_Z = 0;
let branco = 0;
let nulo = 0;

function obterVoto() {
  const voto = readlineSync.question("Digite o número do candidato que deseja votar:\n889 - Candidato_X\n847 - Candidato_Y\n515 - Candidato_Z\n0 - Branco\n5 - Nulo\nPara finalizar a votação, digite 6.");

  if (voto === "6") {
  finalizarVotacao();
  return;
}

  const votoInt = parseInt(voto);
  if (isNaN(votoInt) || votoInt < 1 || votoInt > 5) {
    console.log("Voto inválido! Por favor, vote novamente.");
    obterVoto();
  } else {
    switch (votoInt) {
      case 1:
        candidato_X++;
        break;
      case 2:
        candidato_Y++;
        break;
      case 3:
        candidato_Z++;
        break;
      case 4:
        branco++;
        break;
      case 5:
        nulo++;
        break;
    }

    console.log("Voto registrado com sucesso!");
    obterVoto();
  }
}

function finalizarVotacao() {
  console.log("Votação finalizada!\n");

  console.log("Resultado da eleição:");
  console.log("Candidato_X: " + candidato_X + " votos");
  console.log("Candidato_Y: " + candidato_Y + " votos");
  console.log("Candidato_Z: " + candidato_Z + " votos");
  console.log("Branco: " + branco + " votos");
  console.log("Nulo: " + nulo + " votos");

  if (candidato_X > candidato_Y && candidato_X > candidato_Z) {
    console.log("O vencedor é o Candidato_X!");
  } else if (candidato_Y > candidato_X && candidato_Y > candidato_Z) {
    console.log("O vencedor é o Candidato_Y!");
  } else if (candidato_Z > candidato_X && candidato_Z > candidato_Y) {
    console.log("O vencedor é o Candidato_Z!");
  } else {
    console.log("Houve empate ou não houve votos para os candidatos.");
  }
}

obterVoto();
