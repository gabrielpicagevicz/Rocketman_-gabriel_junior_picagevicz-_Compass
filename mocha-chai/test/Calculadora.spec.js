import assert from "assert";
import chai from "chai";
import Calculadora from "../src/Calculadora.js";

const expect = chai.expect;

//Calculadora
describe("Calculadora", () => {
  describe("Calculadora - Soma", () => {
    it("Deve retornar 9 quando a soma(4,5)", () => {
      expect(Calculadora.soma(4, 5)).to.be.eq(9);
    });
  });

  describe("Calculadora - Subtração", () => {
    it("Deve retornar 5 quando sub(10,5)", () => {
      expect(Calculadora.sub(10, 5)).to.be.eq(5);
    });
  });

  describe("Calculadora - Multiplicação", () => {
    it("Deve retornar 15 quando mult(3,5)", () => {
      expect(Calculadora.mult(3, 5)).to.be.eq(15);
    });
  });

  describe("Calculadora - Divisão", () => {
    it("Deve retornar 5 quando div(10,2)", () => {
      expect(Calculadora.div(10, 2)).to.be.eq(5);
    });
  });

  describe("Calculadora - Raiz", () => {
    it("Deve retornar 1.4142135623730951 quando raiz(2)", () => {
      expect(Calculadora.raiz(2)).to.be.eq(1.4142135623730951);
    });
  });

  describe("Calculadora - Número ao quadrado", () => {
    it("Deve retornar 81 quando numeroQuadrado(9)", () => {
      expect(Calculadora.numeroQuadrado(9)).to.be.equals(81);
    });
  });

  describe("Calculadora - Calcular Circuferencia", () => {
    it("Deve retornar 62.83185307179586 quando calculateCircumference(10)", () => {
      expect(Calculadora.calculateCircumference(10)).to.be.eq(62.83185307179586);
    });
  });

  describe("Calculadora - PI", () => {
    it("Deve retornar 3.141592653589793 quando chamar o método Math.PI", () => {
      expect(Calculadora.mathPi()).to.be.eq(3.141592653589793);
    });
  });


  
});