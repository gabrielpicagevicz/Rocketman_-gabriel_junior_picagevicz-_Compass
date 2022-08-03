import assert from "assert";
import chai from "chai";
import Calculadora from "../src/Calculadora.js";

const expect = chai.expect;

//Smoke Test (testar metodos);
 describe("Smoke Tests - (metodos)", () => {
  describe("Smoke Tests - Soma", () => {
    it("Espero que a `soma` seja uma função", () => {
      expect(Calculadora.calcularSoma).to.be.a("function");
    });
  });

  describe("Smoke Tests - Subtração", () => {
    it("Espero que a `sub` seja uma função", () => {
      expect(Calculadora.calcularSubtracao).to.be.a("function");
    });
  });
  
  describe("Smoke Tests - Multiplicação", () => {
    it("Espero que a `mult` seja uma função", () => {
      expect(Calculadora.calcularMultiplicacao).to.be.a("function");
    });
  });

  describe("Smoke Tests - Divisão", () => {
    it("Espero que a `div` seja uma função", () => {
      expect(Calculadora.calcularDivisao).to.be.a("function");
    });
  });

  describe("Smoke Tests - Raiz Quadrada", () => {
    it("Espero que a funcao `raiz` seja uma funcao", () =>{
      expect(Calculadora.raiz).to.be.a("function");
    })
  })

  describe("Smoke Tests - Numero ao quadrado", () => {
    it("Espero que a funcao `numeroQuadrado` seja uma funcao", () =>{
      expect(Calculadora.numeroQuadrado).to.be.a("function");
    })
  })

  describe("Smoke Tests - Calcular Circurferencia", () => {
    it("Espero que a funcao `calculateCircumference` seja uma funcao", () =>{
      expect(Calculadora.calculateCircumference).to.be.a("function");
    })
  })

  describe("Smoke Tests - PI", () => {
    it("Espero que a funcao `mathPi` seja uma funcao", () =>{
      expect(Calculadora.mathPi).to.be.a("function");
    })
  })

  describe("Smoke Tests - Porcentagem", () => {
    it("Espero que a funcao `Porcentagem` seja uma funcao", () =>{
      expect(Calculadora.porcentagem).to.be.a("function");
    })
  })





}); 
