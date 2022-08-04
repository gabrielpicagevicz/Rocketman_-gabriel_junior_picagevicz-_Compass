//Mini Projeto 11 - Array de Objetos faixa de Preço

function faixaPreco(tooltip, minimo, maximo){
  return {
    tooltip,
    minimo,
    maximo
  }
}

let faixas = [
  faixaPreco('Até 150R$', 0, 150),
  faixaPreco('De 150R$ | Até 300 R$', 150, 300),
  faixaPreco('De 300R$ | Até 1200 R$', 300, 1200),
]

console.log(faixas);