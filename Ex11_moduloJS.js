/* Utilizando a linguagem JavaScript, crie uma situação matemática na qual os números precisam ser informados pelo usuário. Além disso, deve ocorrer uma exceção dentro do código. Utilize os métodos try(), catch() e finally() para realizar a captura e o tratamento dessa exceção. */

function calcularDivisao(numero1, numero2) {
  try {
    if (numero2 === 0) {
      throw new Error("O segundo número não pode ser zero");
    }

    return numero1 / numero2;
  } catch (erro) {
    console.log(erro.message);
    return null;
  } finally {
    console.log("Fim da execução");
  }
}

const numero1 = Number(prompt("Informe o primeiro número: "));
const numero2 = Number(prompt("Informe o segundo número: "));

const resultado = calcularDivisao(numero1, numero2).toFixed(2);

if (resultado !== null) {
  console.log("O resultado é: " + resultado);
}
