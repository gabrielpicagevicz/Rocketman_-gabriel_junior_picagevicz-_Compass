export default class Calculadora {
    static soma(a, b){
        return a + b;
    }
    static sub(a, b){
        return a - b;
    }

    static mult(a, b){
        return a * b;
    }
    
    static div(a, b){
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

     static getCost(a){
      return  Math.cos(a); 
     }
     

         
    
}