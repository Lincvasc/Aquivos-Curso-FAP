/*Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?

Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.*/

let array = [3, 7, 9, 1, 0];

// Esvaziar a fila
let fila = [];
for (let element of array) {
  fila.push(element);
}
console.log("Sequência de remoção da fila:");
while (fila.length > 0) {
  console.log(fila.shift());
}

// Esvaziar a lista
let lista = [];
for (let element of array) {
  lista.push(element);
}
console.log("Sequência de remoção da lista:");
while (lista.length > 0) {
  console.log(lista.pop());
}

// Esvaziar a pilha
let pilha = [];
for (let element of array) {
  pilha.push(element);
}
console.log("Sequência de remoção da pilha:");
while (pilha.length > 0) {
  console.log(pilha.pop());
}