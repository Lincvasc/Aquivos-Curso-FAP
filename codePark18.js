/*Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.

Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.*/



let animalInfo = [
  ["Gato", "Felino", 5],
  ["Hipopótamo", "Mamífero", 10],
  ["Golfinho", "Mamífero", 3],
  ["Falcão", "Ave", 7]
];

function printAnimalInformation(animais) {
  console.log("Nome | Espécie | Idade");
  console.log("=========================");
  for (let i = 0; i < animais.length; i++) {
    let [nome, especie, idade] = animais[i];
    console.log(`${nome} | ${especie} | ${idade}`);
  }
}

printAnimalInformation(animalInfo);
