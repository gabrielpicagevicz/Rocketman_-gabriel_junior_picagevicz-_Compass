import assert from "assert";
import chai from "chai";
import FizzBuzz from "../src/FizzBuzz.js";

const expect = chai.expect;

describe("FizzBuzz", () => {
  describe("FizzBuzz - Numero divisível por 3", () => {
    it("Deve retornar `Fizz` quando chamar o método fizzBuzz(3)", () => {
      expect(FizzBuzz.fizzBuzz(3)).to.be.equals("Fizz");
    });
  });
   
  describe("\nFizzBuzz - Numero divisível por 5", () => {
    it("Deve retornar `Buzz` quando chamar o método fizzBuzz(5)", () => {
      expect(FizzBuzz.fizzBuzz(5)).to.be.equals("Buzz");
    });
  });

  describe("\nFizzBuzz - Numero divisível por 15", () => {
    it("Deve retornar `FizzBuzz` quando chamar o método fizzBuzz(15)", () => {
      expect(FizzBuzz.fizzBuzz(15)).to.be.equals("FizzBuzz");
    });
  });
    
  describe("\nFizzBuzz - Retornar o valor de entrada", () => {
    it("Deve retornar `o valor de entrada` quando chamar o método fizzBuzz(11)", () => {
      expect(FizzBuzz.fizzBuzz(11)).to.be.equals(11);
    });
  });
  
  })