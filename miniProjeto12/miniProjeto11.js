// Igualdade de Objetos

//Para comparar os objetos usei o método citado em:
//https://pt.stackoverflow.com/questions/291203/como-comparar-se-dois-objetos-javascript-são-iguais

function Endereco(rua, cidade, CEP){
    this.rua = rua,
    this.cidade = cidade,
    this.CEP = CEP
}

const primeiroEndereco = new Endereco ('Blumenau', 'Braganey', '123456');
const segundoEndereco = new Endereco ('Blumenau', 'Braganey', '123456');

function compararObjetos(primeiroEndereco, segundoEndereco){
  let aChaves = Object.keys(primeiroEndereco),
        bChaves = Object.keys(segundoEndereco);
        if (aChaves.length != bChaves.length) {
          return false;
      }
      let saoDiferentes = aChaves.some((chave) => {
        return primeiroEndereco[chave] !== segundoEndereco[chave];
    });
    return !saoDiferentes;
  }

function enderecoMemoriaIguais(primeiroEndereco, segundoEndereco){
  if(primeiroEndereco === segundoEndereco){
    return true;
  } else {
    return false;
  }
}

console.log("Os objetos são iguais? "+compararObjetos(primeiroEndereco, segundoEndereco));
console.log("Possui endereço iguais? "+enderecoMemoriaIguais(primeiroEndereco, segundoEndereco));
