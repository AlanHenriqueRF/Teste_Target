import IsFibonacci from "exercicio2";

describe("Exércicio 2 tests", () => {
  it("should work", async () => {
    expect(true).toBe(true);
  });

  it("should return that the number is not part of sequence of Fibonacci ", async () => {
    const n = 56;
    const exercicio2 = IsFibonacci(n);

    expect(exercicio2).toBe(`Infelizmente, o número ${n} não pertence a senquência de Fibonacci`);
  });
  it("should return that the number is part of sequence of Fibonacci ", async () => {
    const n = 55;
    const exercicio2 = IsFibonacci(n);

    expect(exercicio2).toBe(`Que legal! O número ${n} pertence a senquência de Fibonacci`);
  });
})