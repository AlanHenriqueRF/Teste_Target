import InvertSting from "exercicio5";

describe("Exércicio 5 tests", () => {
    it("should work", async () => {
      expect(true).toBe(true);
    });
  
    it("should return the correct invert string ", async () => {
      const s = 'nala';
      const exercicio5 = InvertSting('alan');
  
      expect(exercicio5).toBe(s);
    });
    it("should return the correct invert string", async () => {
        const s = 'tegrat';
        const exercicio5 = InvertSting('Target');
    
        expect(exercicio5).toBe(s);
      });
  })