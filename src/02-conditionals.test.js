import { 
  biggestAB,
  printMonthSwitch,
  printMonthArr,
  isCircleFitInSquare
} from "./02-conditionals.js";

describe('02-conditionals.js', () => {

  describe('biggestAB', () => {
    it('is a function', () => {
      expect(typeof biggestAB).toBe('function')
    })
  });

  describe('printMonthSwitch', () => {
    it('is a function', () => {
      expect(typeof printMonthSwitch).toBe('function')
    })
  });

  describe('printMonthArr', () => {
    it('is a function', () => {
      expect(typeof printMonthArr).toBe('function')
    })
  });

  describe('isCircleFitInSquare', () => {
    it('is a function', () => {
      expect(typeof isCircleFitInSquare).toBe('function')
    })
  });
  
})