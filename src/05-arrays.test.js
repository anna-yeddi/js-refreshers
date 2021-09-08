import {
  sumArrOf10Map,
  sumArrOf10ForEach,
  sumArrOf10Reducer,
  createArrOfDoubles,
  printMaxMinItemsMath,
  printMaxMinItemsSort,
} from "./05-arrays";

describe("05-arrays.js", () => {
  let originalConsoleLog;
  beforeEach(() => {
    originalConsoleLog = console.log;
  });
  afterEach(() => {
    console.log = originalConsoleLog;
  });

  const mockArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  describe("sumArrOf10Map", () => {
    it("is a function", () => {
      expect(typeof sumArrOf10Map).toBe("function");
    });
    it("console.log a number", () => {
      console.log = jest.fn();
      sumArrOf10Map(mockArr);
      expect(typeof console.log.mock.calls[0][0]).toBe("number");
    });
    it("console.log 55 for array from 1 to 10", () => {
      console.log = jest.fn();
      sumArrOf10Map(mockArr);
      expect(console.log.mock.calls[0][0]).toBe(55);
    });
    it("console.log 0 for empty array", () => {
      console.log = jest.fn();
      sumArrOf10Map([]);
      expect(console.log.mock.calls[0][0]).toBe(0);
    });
    it('console.log "0onetwo" for an array of strings', () => {
      console.log = jest.fn();
      sumArrOf10Map(["one", "two"]);
      expect(console.log.mock.calls[0][0]).toBe("0onetwo");
    });
    it("throw an error for empty array", () => {
      expect(() => {
        sumArrOf10Map();
      }).toThrow();
    });
    it("throw an error for a string", () => {
      expect(() => {
        sumArrOf10Map("string");
      }).toThrow();
    });
  });

  describe("sumArrOf10ForEach", () => {
    it("is a function", () => {
      expect(typeof sumArrOf10ForEach).toBe("function");
    });
    it("console.log a number", () => {
      console.log = jest.fn();
      sumArrOf10ForEach(mockArr);
      expect(typeof console.log.mock.calls[0][0]).toBe("number");
    });
    it("console.log 55 for array from 1 to 10", () => {
      console.log = jest.fn();
      sumArrOf10ForEach(mockArr);
      expect(console.log.mock.calls[0][0]).toBe(55);
    });
    it("console.log 0 for empty array", () => {
      console.log = jest.fn();
      sumArrOf10ForEach([]);
      expect(console.log.mock.calls[0][0]).toBe(0);
    });
    it('console.log "0onetwo" for an array of strings', () => {
      console.log = jest.fn();
      sumArrOf10ForEach(["one", "two"]);
      expect(console.log.mock.calls[0][0]).toBe("0onetwo");
    });
    it("console.log undefined for empty array", () => {
      expect(typeof sumArrOf10ForEach([])).toBe("undefined");
    });
    it("throw an error for a string", () => {
      expect(() => {
        sumArrOf10ForEach("string");
      }).toThrow();
    });
  });

  describe("sumArrOf10Reducer", () => {
    it("is a function", () => {
      expect(typeof sumArrOf10Reducer).toBe("function");
    });
    it("console.log a number", () => {
      console.log = jest.fn();
      sumArrOf10Reducer(mockArr);
      expect(typeof console.log.mock.calls[0][0]).toBe("number");
    });
    it("console.log 55 for array from 1 to 10", () => {
      console.log = jest.fn();
      sumArrOf10Reducer(mockArr);
      expect(console.log.mock.calls[0][0]).toBe(55);
    });
    it("console.log 0 for empty array", () => {
      console.log = jest.fn();
      sumArrOf10Reducer([]);
      expect(console.log.mock.calls[0][0]).toBe(0);
    });
    it('console.log "0onetwo" for an array of strings', () => {
      console.log = jest.fn();
      sumArrOf10Reducer(["one", "two"]);
      expect(console.log.mock.calls[0][0]).toBe("0onetwo");
    });
    it("console.log undefined for empty array", () => {
      expect(typeof sumArrOf10Reducer([])).toBe("undefined");
    });
    it("throw an error for a string", () => {
      expect(() => {
        sumArrOf10Reducer("string");
      }).toThrow();
    });
  });

  describe("createArrOfDoubles", () => {
    it("is a function", () => {
      expect(typeof createArrOfDoubles).toBe("function");
    });
    it("console.log an array", () => {
      console.log = jest.fn();
      createArrOfDoubles(mockArr);
      expect(typeof console.log.mock.calls[0][0]).toBe("object");
    });
    it("console.log an array of numbers", () => {
      console.log = jest.fn();
      createArrOfDoubles(mockArr);
      expect(typeof console.log.mock.calls[0][0][0]).toBe("number");
    });
    it("console.log an array from 2 to 20", () => {
      console.log = jest.fn();
      createArrOfDoubles(mockArr);
      expect(console.log.mock.calls[0][0]).toEqual([
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20,
      ]);
    });
    it("console.log an array [2, 4, 6, 20] including", () => {
      console.log = jest.fn();
      createArrOfDoubles(mockArr);
      expect(console.log.mock.calls[0][0]).toEqual(
        expect.arrayContaining([2, 4, 6, 20])
      );
    });
    it("console.log [] for empty array", () => {
      console.log = jest.fn();
      createArrOfDoubles([]);
      expect(console.log.mock.calls[0][0]).toEqual([]);
    });
    it("console.log 200 for [100]", () => {
      console.log = jest.fn();
      createArrOfDoubles([100]);
      expect(console.log.mock.calls[0][0][0]).toEqual(200);
    });
    it("console.log NaN for an array of strings", () => {
      console.log = jest.fn();
      createArrOfDoubles(["one", "two"]);
      expect(console.log.mock.calls[0][0][0]).toBeNaN();
    });
    it("throw an error for empty array", () => {
      expect(() => {
        createArrOfDoubles();
      }).toThrow();
    });
    it("throw an error for a string", () => {
      expect(() => {
        createArrOfDoubles("string");
      }).toThrow();
    });
  });

  describe("printMaxMinItemsMath", () => {
    it("is a function", () => {
      expect(typeof printMaxMinItemsMath).toBe("function");
    });
    it("return an object", () => {
      console.log = jest.fn();
      const returnedVars = printMaxMinItemsMath(mockArr);
      expect(typeof returnedVars).toBe("object");
    });
    it("return an object with values of numbers", () => {
      console.log = jest.fn();
      const returnedVars = printMaxMinItemsMath(mockArr);
      expect(typeof returnedVars.arrMax).toBe("number");
    });
    it("return an object with 1 as value of arrMin", () => {
      console.log = jest.fn();
      const returnedVars = printMaxMinItemsMath(mockArr);
      expect(returnedVars.arrMin).toBe(1);
    });
    it("console.log to be called twice", () => {
      console.log = jest.fn();
      printMaxMinItemsMath(mockArr);
      expect(console.log.mock.calls).toHaveLength(2);
      expect(console.log.mock.instances).toHaveLength(2);
    });
    it("console.log an array", () => {
      console.log = jest.fn();
      printMaxMinItemsMath(mockArr);
      expect(typeof console.log.mock.calls[0]).toBe("object");
    });
    it("console.log an array of values", () => {
      console.log = jest.fn();
      printMaxMinItemsMath(mockArr);
      expect(console.log.mock.calls[0]).toEqual([10], [1]);
    });
    it("console.log an array of numbers", () => {
      console.log = jest.fn();
      printMaxMinItemsMath(mockArr);
      expect(typeof console.log.mock.calls[0][0]).toBe("number");
    });
    it("console.log max 10 for array from 1 to 10", () => {
      console.log = jest.fn();
      printMaxMinItemsMath(mockArr);
      expect(console.log.mock.calls[0][0]).toBe(10);
    });
    it("console.log +-Infinity for empty array", () => {
      console.log = jest.fn();
      printMaxMinItemsMath([]);
      expect(console.log.mock.calls[0][0]).toBe(-Infinity, Infinity);
    });
    it("throw error for an empty param", () => {
      expect(() => {
        printMaxMinItemsMath();
      }).toThrow();
    });
    it("console.log NaN for an array of strings", () => {
      console.log = jest.fn();
      printMaxMinItemsMath(["one", "two"]);
      expect(console.log.mock.calls[0][0]).toBeNaN();
    });
    it("console.log a number (-Infinity) for empty array", () => {
      console.log = jest.fn();
      printMaxMinItemsMath([]);
      expect(typeof console.log.mock.calls[0][0]).toBe("number");
    });
    it("console.log NaN for a string", () => {
      console.log = jest.fn();
      printMaxMinItemsMath("string");
      expect(console.log.mock.calls[0][0]).toBeNaN();
    });
  });

  describe("printMaxMinItemsSort", () => {
    it("is a function", () => {
      expect(typeof printMaxMinItemsSort).toBe("function");
    });
    it("return an object", () => {
      console.log = jest.fn();
      const returnedVars = printMaxMinItemsSort(mockArr);
      expect(typeof returnedVars).toBe("object");
    });
    it("return an object with values of numbers", () => {
      console.log = jest.fn();
      const returnedVars = printMaxMinItemsSort(mockArr);
      expect(typeof returnedVars.arrMax).toBe("number");
    });
    it("return an object with 1 as value of arrMin", () => {
      console.log = jest.fn();
      const returnedVars = printMaxMinItemsSort(mockArr);
      expect(returnedVars.arrMin).toBe(1);
    });
    it("console.log to be called twice", () => {
      console.log = jest.fn();
      printMaxMinItemsSort(mockArr);
      expect(console.log.mock.calls).toHaveLength(2);
      expect(console.log.mock.instances).toHaveLength(2);
    });
    it("console.log an array", () => {
      console.log = jest.fn();
      printMaxMinItemsSort(mockArr);
      expect(typeof console.log.mock.calls[0]).toBe("object");
    });
    it("console.log an array of values", () => {
      console.log = jest.fn();
      printMaxMinItemsSort(mockArr);
      expect(console.log.mock.calls[0]).toEqual([10], [1]);
    });
    it("console.log an array of numbers", () => {
      console.log = jest.fn();
      printMaxMinItemsSort(mockArr);
      expect(typeof console.log.mock.calls[0][0]).toBe("number");
    });
    it("console.log max 10 for array from 1 to 10", () => {
      console.log = jest.fn();
      printMaxMinItemsSort(mockArr);
      expect(console.log.mock.calls[0][0]).toBe(10);
    });
    it("console.log undefined for empty array", () => {
      console.log = jest.fn();
      printMaxMinItemsSort([]);
      expect(console.log.mock.calls[0][0]).toBeUndefined();
    });
    it("throw error for an empty param", () => {
      expect(() => {
        printMaxMinItemsSort();
      }).toThrow();
    });
    it("console.log array of strings for an array of strings", () => {
      console.log = jest.fn();
      printMaxMinItemsSort(["one", "two"]);
      expect(console.log.mock.calls).toEqual([["one"], ["two"]]);
    });
    it("console.log undefined for an empty array", () => {
      console.log = jest.fn();
      printMaxMinItemsSort([]);
      expect(console.log.mock.calls[0][0]).toBeUndefined();
    });
    it("throw an error for a string", () => {
      expect(() => {
        printMaxMinItemsSort("string");
      }).toThrow();
    });
  });
});
