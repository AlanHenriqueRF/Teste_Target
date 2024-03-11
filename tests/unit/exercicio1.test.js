import InteraAteIndiceeQuardaSoma from "../../src/exercicio1.js";

describe("Exércicio 1 tests", () => {
  it("should work", async () => {
    expect(true).toBe(true);
  });

  it("should return 91", async () => {
    const exercicio1 = InteraAteIndiceeQuardaSoma();

    expect(exercicio1).toBe(91);
  });
})