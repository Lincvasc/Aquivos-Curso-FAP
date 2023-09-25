/*Crie um programa que contenha os seguintes tipos de funções: 

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro; 

2. uma função tradicional com parâmetros e um retorno de valor; 

3. uma arrow function com parâmetros e que retorne um valor. 

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora. */



// 1.Função sem parâmetros
function appName() {
  alert("CALCULADORA");
}

// 2.Função com parâmetros e retorno de valor
function sum(n1, n2) {
  return n1 + n2;
}

// Arrow function com parâmetros e retorno de valor
const subtract = (a, b) => a - b;

appName();

let num1 = parseFloat(prompt("Digite o primeiro número: "));
let operation = prompt("Digite 1 para SOMA e 2 para SUBTRAÇÃO: ");
let num2 = parseFloat(prompt("Digite o segundo número: "));

const sumResult = sum(num1, num2);
const subtractionResult = subtract(num1, num2);

if (operation == 1) {
  alert(`Resultado da soma: ${sumResult}`);
} else {
  alert(`Resultado da subtração: ${subtractionResult}`);
}
