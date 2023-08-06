/*Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.

Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo. */


let array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
let searchedValue = 20;

let index = binarySearch(array, searchedValue);

if (index === -1) {
  console.log("O valor não foi encontrado.");
} else {
  console.log(`O valor ${searchedValue} foi encontrado no índice`, index);
}

function binarySearch(array, value) {
  let low = 0;
  let high = array.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (array[mid] === value) {
      return mid;
    } else if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

