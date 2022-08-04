import assert from "assert";
import chai from "chai";
import Calculadora from "../src/Calculadora.js";

const expect = chai.expect;

//Calculadora
describe("Calculadora", () => {
  describe("Calculadora - Soma", () => {
    it("Deve retornar 9 quando a soma(4,5)", () => {
      expect(Calculadora.calcularSoma(4, 5)).to.be.eq(9);
    });

    it("Deve retornar -4 quando a soma(-2,-2)", () => {
      expect(Calculadora.calcularSoma(-2, -2)).to.be.eq(-4);
    });

    it("Deve retornar -5,1 quando a soma(-2,-3,1)", () => {
      expect(Calculadora.calcularSoma(-2, -3,1)).to.be.equals(-5,1);
    });

    it("Deve retornar -5,1 quando a soma(-2,7)", () => {
      expect(Calculadora.calcularSoma(-2, 7)).to.be.equals(5);
    });
  });

  describe("\nCalculadora - Subtração", () => {
    it("Deve retornar 5 quando sub(10,5)", () => {
      expect(Calculadora.calcularSubtracao(10, 5)).to.be.eq(5);
    });
  });

  describe("\nCalculadora - Multiplicação", () => {
    it("Deve retornar 15 quando mult(3,5)", () => {
      expect(Calculadora.calcularMultiplicacao(3, 5)).to.be.eq(15);
    });

    it("Deve retornar -24 quando calcularMultiplicacao(-3,8)", () => {
      expect(Calculadora.calcularMultiplicacao(-3, 8)).to.be.eq(-24);
    });

    it("Deve retornar -35 quando calcularMultiplicacao(-5,-7)", () => {
      expect(Calculadora.calcularMultiplicacao(-5, -7)).to.be.eq(35);
    });

    it("Deve retornar 202.5 quando calcularMultiplicacao(-16.2,-12.5)", () => {
      expect(Calculadora.calcularMultiplicacao(-16.2,-12.5)).to.be.eq(202.5);
    });
  });

  describe("\nCalculadora - Divisão", () => {
    it("Deve retornar 5 quando div(10,2)", () => {
      expect(Calculadora.calcularDivisao(10, 2)).to.be.eq(5);
    });
    it("Deve retornar Infinity quando div(2,0)", () => {
      expect(Calculadora.calcularDivisao(2, 0)).to.be.eq(Infinity);
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division
    });
  });

  describe("\nCalculadora - Raiz", () => {
    it("Deve retornar 1.4142135623730951 quando raiz(2)", () => {
      expect(Calculadora.raiz(2)).to.be.eq(1.4142135623730951);
    });
  });

  describe("\nCalculadora - Número ao quadrado", () => {
    it("Deve retornar 81 quando numeroQuadrado(9)", () => {
      expect(Calculadora.numeroQuadrado(9)).to.be.equals(81);
    });
  });

  describe("\nCalculadora - Calcular Circuferencia", () => {
    it("Deve retornar 62.83185307179586 quando calculateCircumference(10)", () => {
      expect(Calculadora.calculateCircumference(10)).to.be.eq(62.83185307179586);
    });
  });

  describe("\nCalculadora - PI", () => {
    it("Deve retornar 3.141592653589793 quando chamar o método Math.PI", () => {
      expect(Calculadora.mathPi()).to.be.eq(3.141592653589793);
    });
  });

  describe("\nCalculadora - %", () => {
    it("Deve retornar (900)60% de 1500 quando chamar o método porcentagem(60,1500)", () => {
      expect(Calculadora.porcentagem(60,1500)).to.be.eq(900);
    });
  })

  describe("\nCalculadora - Tangente", () => {
    it("Deve retornar 1.15782128235 de 4 quando chamar o método getTan(4)", () => {
      expect(Calculadora.getTan(4)).to.be.eq(1.1578212823495777);
    });
  })

  describe("\nCalculadora - Cosseno", () => {
    it("Deve retornar 0.5403023058681398 de 1 quando chamar o método getCos(1)", () => {
      expect(Calculadora.getCosseno(1)).to.be.eq(0.5403023058681398);
    });
  })

  describe("\nCalculadora - Hypot", () => {
    it("Deve retornar 7.0710678118654755 quando chamar o método hypot(3,4,5)", () => {
      expect(Calculadora.hypot(3, 4, 5)).to.be.eq(7.0710678118654755);
    });
  })

  describe("\nCalculadora - Area do triangulo retangulo", () => {
    it("Deve retornar 5 quando chamar o método areaTrianguloRetangulo(2,5)", () => {
      expect(Calculadora.areaTrianguloRetangulo(2, 5)).to.be.eq(5);
    });
  })

  describe("\nCalculadora - Exponenciação", () => {
    it("Deve retornar 81 quando chamar o método areaTrianguloRetangulo(3,4)", () => {
      expect(Calculadora.exponenciacao(3, 4)).to.be.eq(81);
    });
  })

});
