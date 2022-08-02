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
         
    static bhaskara(a, b, c) {
        var a = 44; 
        var b = 44;
        var c = -3;

        var ret = [];
        var d = delta(a, b, c);
        ret[0] = ((b * -1) - Math.sqrt(d)) / (2 * a);
        ret[1] = ((b * -1) + Math.sqrt(d)) / (2 * a);
        return ret;
       
        // calcula o delta separadamente
        function delta(a, b, c) {
            return Math.pow(b, 2) - (4 * a * c); 
        }
     }

     
    
}