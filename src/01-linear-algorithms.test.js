import { multiplierAndSum, sumStringsLength, sumOfDigits, sumOfDigitsAnother } from "./01-linear-algorithms.js";

describe('01-linear-algorithms', () => {
  let originalConsoleLog;
  // let originalAlert;
  // window.alert = jest.fn(() => ({}));
  beforeEach(() => {
    originalConsoleLog = console.log
  //   originalAlert = window.alert;
  })
  afterEach(() => {
    console.log = originalConsoleLog
  //   window.alert = originalAlert
  })

  describe('multiplierAndSum', () => {
    it('console.log result for integers', () => {
      console.log = jest.fn();
      multiplierAndSum(2, 3)
      // The first argument of the first call to the function was 'Multi: 6, Sum: 5'
      expect(console.log.mock.calls[0][0]).toBe(`Multi: 6, Sum: 5`)
    }),
    it('console.log result for zero', () => {
      console.log = jest.fn();
      multiplierAndSum(0, 100)
      // The first argument of the first call to the function was 'Multi: 0, Sum: 100'
      expect(console.log.mock.calls[0][0]).toBe(`Multi: 0, Sum: 100`)
    }),
    it('console.log result for negative integers', () => {
      console.log = jest.fn();
      multiplierAndSum(-10, -100)
      // The first argument of the first call to the function was 'Multi: 1000, Sum: -110'
      expect(console.log.mock.calls[0][0]).toBe(`Multi: 1000, Sum: -110`)
    }),
    it('console.log result for fractions', () => {
      console.log = jest.fn();
      multiplierAndSum(0.5, 0.1)
      // The first argument of the first call to the function was 'Multi: 0.05, Sum: 0.6'
      expect(console.log.mock.calls[0][0]).toBe(`Multi: 0.05, Sum: 0.6`)
    }),
    it('console.log result for undefined', () => {
      console.log = jest.fn();
      multiplierAndSum(5)
      // The first argument of the first call to the function was 'Multi: NaN, Sum: NaN'
      expect(console.log.mock.calls[0][0]).toBe(`Multi: NaN, Sum: NaN`)
    }),
    it('console.log result for string and negative integer', () => {
      console.log = jest.fn();
      multiplierAndSum('9', -3)
      // The first argument of the first call to the function was 'Multi: -27, Sum: 9-3'
      expect(console.log.mock.calls[0][0]).toBe(`Multi: -27, Sum: 9-3`)
    }),
    it('console.log result for strings', () => {
      console.log = jest.fn();
      multiplierAndSum('A', 'B')
      // The first argument of the first call to the function was 'Multi: NaN, Sum: AB'
      expect(console.log.mock.calls[0][0]).toBe(`Multi: NaN, Sum: AB`)
    })
  })
})