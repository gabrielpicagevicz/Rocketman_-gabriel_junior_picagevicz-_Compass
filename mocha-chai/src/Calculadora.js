export default class Calculadora {
    static calcularSoma(a, b){
        return a + b;
    }

    static calcularSubtracao(a, b){
        return a - b;
    }

    static calcularMultiplicacao(a, b){
        return a * b;
    }
    
    static calcularDivisao(a, b){
        return a / b;
    }

    static raiz(a){
       return Math.sqrt(a);
    }

    static numeroQuadrado(a){
        return a * a;
    }

    static calculateCircumference(radius) {
        return 2 * Math.PI * radius;
        //metodo visto em:
        //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
    }

    static mathPi(){
        return Math.PI;
    }

    static porcentagem(a , b){
        var aux = 0;
        aux = b / 100;
        return  aux * a;
    }

    static getTan(a) {
        return Math.tan(a);
     }

     static getCosseno(a){
      return  Math.cos(a); 
     }
     

         
    
}