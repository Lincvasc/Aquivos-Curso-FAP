const segundosParaExplodir = 10

console.log("Iniciando a contagem regressiva...")

for (let i = segundosParaExplodir; i >= 0; i--) {
  for (let j = 0; j < 1000000000; j++) {
  }
  console.log(i + " segundos...")
}

console.log("BUM!")