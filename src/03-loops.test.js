import {
  sumOfIntegers50to100,
  sevenTimes1to9,
  arithmeticMeanOdds,
} from "./03-loops";

describe("03-loops.js", () => {
  let originalConsoleLog;
  let originalPrompt;
  beforeEach(() => {
    originalConsoleLog = console.log;
    originalPrompt = window.prompt;
  });
  afterEach(() => {
    console.log = originalConsoleLog;
    window.prompt = originalPrompt;
  });

  describe("sumOfIntegers50to100", () => {
    it("is a function", () => {
      expect(typeof sumOfIntegers50to100).toBe("function");
    });
    it("console.log a number", () => {
      console.log = jest.fn();
      sumOfIntegers50to100();
      expect(typeof console.log.mock.calls[0][0]).toBe("number");
    });
    it("console.log 3825", () => {
      console.log = jest.fn();
      sumOfIntegers50to100();
      expect(console.log.mock.calls[0][0]).toBe(3825);
    });
  });

  describe("sevenTimes1to9", () => {
    it("is a function", () => {
      expect(typeof sevenTimes1to9).toBe("function");
    });
    it("console.log a string", () => {
      console.log = jest.fn();
      sevenTimes1to9();
      expect(typeof console.log.mock.calls[0][0]).toBe("string");
    });
    it('console.log first line "7 x 1 = 7"', () => {
      console.log = jest.fn();
      sevenTimes1to9();
      expect(console.log.mock.calls[0][0]).toBe("7 x 1 = 7");
    });
    it('console.log last/ninth line "7 x 9 = 63"', () => {
      console.log = jest.fn();
      sevenTimes1to9();
      expect(console.log.mock.calls[8][0]).toBe("7 x 9 = 63");
    });
    it('console.log 9 for a number of lines logged"', () => {
      console.log = jest.fn();
      sevenTimes1to9();
      expect(console.log.mock.calls).toHaveLength(9);
    });
  });

  describe("arithmeticMeanOdds", () => {
    it("is a function", () => {
      expect(typeof arithmeticMeanOdds).toBe("function");
    });
    it("console.log a number", () => {
      console.log = jest.fn();
      arithmeticMeanOdds();
      jest.spyOn(window, "prompt").mockReturnValue("3");
      expect(typeof console.log.mock.calls[0][0]).toBe("number");
    });
    it("console.log 2 for 3", () => {
      console.log = jest.fn();
      jest.spyOn(window, "prompt").mockReturnValue("3");
      arithmeticMeanOdds();
      expect(console.log.mock.calls[0][0]).toBe(2);
    });
    it("console.log 500 for 1000", () => {
      console.log = jest.fn();
      jest.spyOn(window, "prompt").mockReturnValue("1000");
      arithmeticMeanOdds();
      expect(console.log.mock.calls[0][0]).toBe(500);
    });
    it("console.log 3 for float 5.5", () => {
      console.log = jest.fn();
      jest.spyOn(window, "prompt").mockReturnValue("5.5");
      arithmeticMeanOdds();
      expect(console.log.mock.calls[0][0]).toBe(3);
    });
    it("console.log NaN for string", () => {
      console.log = jest.fn();
      jest.spyOn(window, "prompt").mockReturnValue("string");
      arithmeticMeanOdds();
      expect(console.log.mock.calls[0][0]).toBeNaN();
    });
    it("console.log NaN for empty input", () => {
      console.log = jest.fn();
      jest.spyOn(window, "prompt").mockReturnValue("");
      arithmeticMeanOdds();
      expect(console.log.mock.calls[0][0]).toBeNaN();
    });
    it("console.log NaN for a negative", () => {
      console.log = jest.fn();
      jest.spyOn(window, "prompt").mockReturnValue(-3);
      arithmeticMeanOdds();
      expect(console.log.mock.calls[0][0]).toBeNaN();
    });
  });
});
