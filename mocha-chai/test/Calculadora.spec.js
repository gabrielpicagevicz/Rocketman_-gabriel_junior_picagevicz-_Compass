import assert from "assert";
import chai from "chai";
import Calculadora from "../src/Calculadora.js";

const expect = chai.expect;

//Smoke Test (testar metodos);
describe("Smoke Tests - (metodos)", () => {
  describe("Smoke Tests - Soma", () => {
    it("Espero que a `soma` seja uma função", () => {
      expect(Calculadora.soma).to.be.a("function");
    });
  });

  describe("Smoke Tests - Subtração", () => {
    it("Espero que a `sub` seja uma função", () => {
      expect(Calculadora.sub).to.be.a("function");
    });
  });

  describe("Smoke Tests - Multiplicação", () => {
    it("Espero que a `mult` seja uma função", () => {
      expect(Calculadora.mult).to.be.a("function");
    });
  });

  describe("Smoke Tests - Divisão", () => {
    it("Espero que a `div` seja uma função", () => {
      expect(Calculadora.div).to.be.a("function");
    });
  });
});

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
});
