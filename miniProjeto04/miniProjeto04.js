// Medidor de Velocidade
// Velocidade Máxima de até 70
// A cada 5km acima do limite ganha 1 ponto na carteira
console.log(verificarVelocidade(180));

function verificarVelocidade(velocidade){
    if(velocidade <= 70){
        return 'ok'
    } else {
       let pontos = ((velocidade - 70) / 5);
       if(pontos > 12){
        return 'Carteira Suspendida'
       }
       return pontos;
    }
}
