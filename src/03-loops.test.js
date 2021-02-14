import {
  sumOfIntegers50to100,
  sevenTimes1to9,
  arithmeticMeanOdds
} from "./03-loops.js";

describe('03-loops.js', () => {
  
  describe('sumOfIntegers50to100', () => {
    it('is a function', () => {
      expect(typeof sumOfIntegers50to100).toBe('function')
    })
  });
  
  describe('sevenTimes1to9', () => {
    it('is a function', () => {
      expect(typeof sevenTimes1to9).toBe('function')
    })
  });
  
  describe('arithmeticMeanOdds', () => {
    it('is a function', () => {
      expect(typeof arithmeticMeanOdds).toBe('function')
    })
  });

})