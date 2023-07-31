/*Faça uma função em javascript calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.*/
 

function calculadora(n1, n2, op) {
  switch (op) {
    case 1: 
      return n1 + n2;
    case 2: 
      return n1 - n2;
    case 3: 
      return n1 * n2;
    case 4: 
      return n2 !== 0 ? n1 / n2 : 0;
    default:
      return 0;
  }
}

console.log(calculadora(6, 3, 1)); // Soma: 6 + 3 = 9
console.log(calculadora(6, 3, 2)); // Subtração: 6 - 3 = 3
console.log(calculadora(6, 3, 3)); // Multiplicação: 6 * 3 = 18
console.log(calculadora(6, 3, 4)); // Divisão: 6 / 3 = 2
console.log(calculadora(6, 3, 5)); // Operação inexistente

