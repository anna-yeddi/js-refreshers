import {
  sumOfIntegers50to100,
  sevenTimes1to9,
  arithmeticMeanOdds
} from "./03-loops.js";

describe('03-loops.js', () => {
  
  describe('sumOfIntegers50to100', () => {
    it('is a function', () => {
      expect(typeof sumOfIntegers50to100).toBe('function')
    }),
    it('console.log a number', () => {
      console.log = jest.fn();
      sumOfIntegers50to100();
      expect(typeof console.log.mock.calls[0][0]).toBe('number')
    }),
    it('console.log 3825', () => {
      console.log = jest.fn();
      sumOfIntegers50to100();
      expect(console.log.mock.calls[0][0]).toBe(3825)
    })
    
  });
  
  describe('sevenTimes1to9', () => {
    it('is a function', () => {
      expect(typeof sevenTimes1to9).toBe('function')
    }),
    it('console.log a string', () => {
      console.log = jest.fn();
      sevenTimes1to9();
      expect(typeof console.log.mock.calls[0][0]).toBe('string')
    }),
    it('console.log first line "7 x 1 = 7"', () => {
      console.log = jest.fn();
      sevenTimes1to9();
      expect(console.log.mock.calls[0][0]).toBe('7 x 1 = 7')
    }),
    it('console.log last/ninth line "7 x 9 = 63"', () => {
      console.log = jest.fn();
      sevenTimes1to9();
      expect(console.log.mock.calls[8][0]).toBe('7 x 9 = 63')
    }),
    it('console.log 9 for a number of lines logged"', () => {
      console.log = jest.fn();
      sevenTimes1to9();
      expect(console.log.mock.calls.length).toBe(9)
    })
  });
  
  describe('arithmeticMeanOdds', () => {
    it('is a function', () => {
      expect(typeof arithmeticMeanOdds).toBe('function')
    })
  });

})