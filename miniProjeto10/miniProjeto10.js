// Criar funcao para mostrar os números primos


exibirNumerosPrimos(15)

function exibirNumerosPrimos(limite){
  for(let j = 2; j <= limite; j++){
    aux = true;

    for(let i = 2; i <= limite; i++){
      
      if(j % i === 0){
        aux = false;
        break;
      }
  
      if(aux) console.log(j);
  
    }
  }
 
}