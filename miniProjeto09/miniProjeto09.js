// criar uma função que exibe a quantidade de * que aquela linha possui

exibirAsteristicos(10);

function exibirAsteristicos(linhas){
 
 let aux = '';
 
  for(let i = 1; i <= linhas; i++){
    aux += '*';
    console.log(aux);
  }
}