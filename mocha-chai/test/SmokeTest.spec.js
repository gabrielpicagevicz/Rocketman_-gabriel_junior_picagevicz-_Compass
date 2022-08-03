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
  /*
  describe("Smoke Tests - Multiplicação", () => {
    it("Espero que a `mult` seja uma função", () => {
      expect(Calculadora.mult).to.be.a("function");
    });
  });

  describe("Smoke Tests - Divisão", () => {
    it("Espero que a `div` seja uma função", () => {
      expect(Calculadora.div).to.be.a("function");
    });
  });*/
}); 
