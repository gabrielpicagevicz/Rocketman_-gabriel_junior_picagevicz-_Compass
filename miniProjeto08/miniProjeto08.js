// Exercicio nota Escolar
// Obter a média a partir de  um array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: D
// 90-100: A

const array = [70, 70, 80]; //73,33

console.log(mediaDoAluno(array));


function mediaDoAluno(notas){

  let soma = 0;

  for(let i = 0; i < notas.length; i++){
    soma += notas[i] / 3;
  }
  if(soma <= 59){
    return 'F'
  } else if (soma >= 60 && soma <= 69){
    return 'D'
  } else if (soma >= 70 && soma <= 79){
    return 'C'
  } else if (soma >= 70 && soma <= 89){
    return 'D'
  }else if (soma >= 70 && soma <= 89){
    return 'A'
  }

}