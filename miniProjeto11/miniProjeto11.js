//JavaScript - Objeto Endereco

let endereco = {
  rua: 'Bragantina',
  cidade: 'Braganey',
  cep: '123456'
};

function exibirEndereco(endereco){
  for(let obj in endereco)
  console.log(obj,endereco[obj]);
}

exibirEndereco(endereco);