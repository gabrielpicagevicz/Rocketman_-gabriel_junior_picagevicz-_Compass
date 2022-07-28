// Criar função somar que retorna a soma dos multiplos de 3 e de 5


console.log(somar(10));



function somar(limite){

  let resultado = 0;
 

  for( i = 0; i <= limite; i++){ 
    if(i % 3 === 0 || i % 5 === 0){
        resultado += i;        
      }
    
  }
  return ( resultado);
}

