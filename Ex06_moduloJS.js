
function sum(n1, n2) {
    return n1 + n2;
  }
  
  
  function subtraction(n1, n2) {
    return n1 - n2;
  }
  
  
  function multiplication(n1, n2) {
    return n1 * n2;
  }
  
  
  function division(n1, n2) {
    const quotient = n1 / n2; 
    const remainder = n1 % n2; 
    return [quotient, remainder];
  }
  
  
  const value1 = parseFloat(prompt("Digite o primeiro valor: "));
  const value2 = parseFloat(prompt("Digite o segundo valor: "));
  
  
  const operator = prompt("Digite o operator (+, -, *, /): ");
  
  let result;
  
  
  if (operator === '+') {
    result = sum(value1, value2);
  } else if (operator === '-') {
    result = subtraction(value1, value2);
  } else if (operator === '*') {
    result = multiplication(value1, value2);
  } else if (operator === '/') {
    const [quotient, remainder] = division(value1, value2);
    alert(`resultado da divisão: ${quotient}\nresto da divisão: ${remainder}`);
  } else {
    alert("operador inválido");
  }
  
  
  if (operator !== '/') {
    alert(`resultado da operação: ${result}`);
  }
  

  