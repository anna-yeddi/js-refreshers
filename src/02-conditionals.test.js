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
    }),
    it('console.log a number', () => {
      console.log = jest.fn();
      biggestAB(1, 2)
      // The first argument of the first call to the function was 'number'
      expect(typeof console.log.mock.calls[0][0]).toBe(`number`)
    }),
    it('console.log "99999" for "-888, 99999"', () => {
      console.log = jest.fn();
      biggestAB(-888, 99999)
      // The first argument of the first call to the function was 99999
      expect(console.log.mock.calls[0][0]).toBe(99999)
    }),
    it('console.log "1" for "1, 0.1"', () => {
      console.log = jest.fn();
      biggestAB(1, 0.1)
      // The first argument of the first call to the function was 1
      expect(console.log.mock.calls[0][0]).toBe(1)
    }),
    it('console.log NaN for empty value', () => {
      console.log = jest.fn();
      biggestAB()
      // The first argument of the first call to the function was 'NaN'
      expect(console.log.mock.calls[0][0]).toBeNan
    }),
    it('console.log 0 for nulls', () => {
      console.log = jest.fn();
      biggestAB(null, null)
      // The first argument of the first call to the function was 0
      expect(console.log.mock.calls[0][0]).toBe(0)
    }),
    it('console.log NaN for strings', () => {
      console.log = jest.fn();
      biggestAB("string", undefined)
      // The first argument of the first call to the function was 'NaN'
      expect(console.log.mock.calls[0][0]).toBeNan
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