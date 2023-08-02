/*Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.

 
Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.*/


nomes = ["Ana","Pedro","Juliana","Paulo","Mariana","Lucas","Gabriela","Rafael","Isabela","Matheus"]
idades = [25, 32, 19, 40, 22, 17, 28, 36, 21, 30]
coresFavoritas = ["azul", "vermelho", "amarelo", "verde", "roxo", "laranja", "rosa", "preto", "branco", "cinza"];

function percorrerArrays(nomes,idades,cores) {
  console.log("Nomes:", nomes);
  console.log("Idades:", idades);
  console.log("Cores Favoritas:", cores);
}

percorrerArrays(nomes, idades, coresFavoritas);
  
idades[2] = 39
coresFavoritas[1] = "laranja"

function arraysModificados(nomes,idades,cores) {
  console.log("Nomes:", nomes);
  console.log("Idades:", idades);
  console.log("Cores Favoritas:", cores);
}

arraysModificados(nomes, idades, coresFavoritas);