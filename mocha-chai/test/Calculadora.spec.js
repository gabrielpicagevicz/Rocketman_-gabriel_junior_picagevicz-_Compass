import assert from "assert";
import chai from "chai";
import Calculadora from "../src/Calculadora.js";
const expect = chai.expect;

describe("Testes de Soma", () => {
  it("Deve somar 4 e 5 resultando em 9", () => {
    let resultado = Calculadora.soma(4, 5);
    expect(resultado).to.be.eq(9);
  });

  it("Deve somar -4 e 5 resultando em 1", () => {
    let resultado = Calculadora.soma(-4, 5);
    expect(resultado).to.be.eq(1);
  });
});

describe("Testes de subtração", () => {
  it("Deve subtrair 4 e 5 resultando em -1", () => {
    let resultado = Calculadora.sub(4, 5);
    expect(resultado).to.be.eq(-1);
  });
});

describe("Testes de Multiplicação", () => {
    it("Deve subtrair 3 e 5 resultando em 15", () => {
      let resultado = Calculadora.mult(3, 5);
      expect(resultado).to.be.eq(15);
    });
});

describe("Testes de Divisão", () => {
    it("Deve subtrair 10 por 2 resultando em 5", () => {
      let resultado = Calculadora.div(10, 2);
      expect(resultado).to.be.eq(5);
    });
});