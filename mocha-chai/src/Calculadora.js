export default class Calculadora {
  static calcularSoma(a, b) {
    return a + b;
  }

  static calcularSubtracao(a, b) {
    return a - b;
  }

  static calcularMultiplicacao(a, b) {
    return a * b;
  }

  static calcularDivisao(a, b) {
    return a / b;
  }

  static raiz(a) {
    return Math.sqrt(a);
  }

  static numeroQuadrado(a) {
    return a * a;
  }

  static calculateCircumference(radius) {
    return 2 * Math.PI * radius;
    //metodo visto em:
    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
  }

  static mathPi() {
    return Math.PI;
  }

  static porcentagem(a, b) {
    var aux = 0;
    aux = b / 100;
    return aux * a;
  }

  static getTan(a) {
    return Math.tan(a);
  }

  static getCosseno(a) {
    return Math.cos(a);
  }

  static hypot(a, b, c) {
    return Math.hypot(a, b, c);
  }

  static areaTrianguloRetangulo(base, altura) {
    return (base * altura) / 2;
  }

  static exponenciacao(a, b) {
    return a ** b;
  }

  static bhaskara(a, b, c) {
    //https://gist.github.com/almirb/4070cb178c5b8b8111d64bfcb44f8fec
    //codigo baseado acima, adaptei o array para retornar os dois coeficientes

    //https://social.msdn.microsoft.com/Forums/pt-BR/9b8f5f8a-d091-4900-908a-bd019d30eb19/frmula-de-bhaskara?forum=504
    //validei que os calculos não batiam, portanto, adaptei olhando esse código
    let coeficiente, coeficiente2;

    let delta = (b * b - 4 * a * c);
    if (delta < 0) {
      return "Para Delta negativo, não existem raízes reais";
    } else {
      coeficiente = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
      coeficiente2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

      let coeficientes = [coeficiente, coeficiente2];

      return coeficientes;
    }
  
}
}

/*
function bhaskara(a, b, c) {
    let coeficiente, coeficiente2;

    let delta = (b * b - 4 * a * c);

    if (delta < 0) {
      return "Para Delta negativo, não existem raízes reais";
    } else {
      coeficiente = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
      coeficiente2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

      let coeficientes = [coeficiente, coeficiente2];

      return coeficientes;
    }
  }
console.log(bhaskara(-3,7,5));
*/