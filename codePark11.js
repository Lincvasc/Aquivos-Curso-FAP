let quantidadedeRodas = 4;
let pesoBrutoKg = 2800;
let quantidadedePessoas = 5;
let categoriaHabilitacao;
if (quantidadedeRodas === 2 || quantidadedeRodas === 3) {
  categoriaHabilitacao = 'Categoria A: Veículos com duas ou três rodas';
} else if (quantidadedeRodas === 4 && quantidadedePessoas <= 8 && pesoBrutoKg <= 3500) {
  categoriaHabilitacao = 'Categoria B: Veículos com quatro rodas, que acomodam até oito pessoas e peso até 3500 kg';
} else if (quantidadedeRodas >= 4 && pesoBrutoKg > 3500 && pesoBrutoKg <= 6000) {
  categoriaHabilitacao = 'Categoria C: Veículos com quatro rodas ou mais e peso entre 3500 e 6000 kg';
} else if (quantidadedeRodas >= 4 && quantidadedePessoas > 8) {
  categoriaHabilitacao = 'Categoria D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas';
} else if (quantidadedeRodas >= 4 && pesoBrutoKg > 6000) {
  categoriaHabilitacao = 'Categoria E: Veículos com quatro rodas ou mais e com mais de 6000 kg';
} else {
  categoriaHabilitacao = 'Não foi possível determinar a categoria de habilitação para este veículo.';
}
console.log(categoriaHabilitacao);
