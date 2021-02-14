import {
  multiplierAndSum,
  sumStringsLength,
  sumOfDigits,
  sumOfDigitsAnother
} from "./01-linear-algorithms.js";

describe('01-linear-algorithms', () => {
  let originalConsoleLog;
  let originalPrompt;
  beforeEach(() => {
    originalConsoleLog = console.log;
    originalPrompt = window.prompt;
  })
  afterEach(() => {
    console.log = originalConsoleLog;
    window.prompt = originalPrompt
  })

  describe('multiplierAndSum', () => {
    it('is a function', () => {
      expect(typeof multiplierAndSum).toBe('function')
    }),
    it('console.log a string', () => {
      console.log = jest.fn();
      multiplierAndSum(2, 3)
      // The first argument of the first call to the function was 'string'
      expect(typeof console.log.mock.calls[0][0]).toBe(`string`)
    }),
    it('console.log "Multi: 6, Sum: 5" for integers', () => {
      console.log = jest.fn();
      multiplierAndSum(2, 3)
      // The first argument of the first call to the function was 'Multi: 6, Sum: 5'
      expect(console.log.mock.calls[0][0]).toBe(`Multi: 6, Sum: 5`)
    }),
    it('console.log "Multi: 0, Sum: 100" for zero', () => {
      console.log = jest.fn();
      multiplierAndSum(0, 100)
      // The first argument of the first call to the function was 'Multi: 0, Sum: 100'
      expect(console.log.mock.calls[0][0]).toBe(`Multi: 0, Sum: 100`)
    }),
    it('console.log "Multi: 1000, Sum: -110" for negative integers', () => {
      console.log = jest.fn();
      multiplierAndSum(-10, -100)
      // The first argument of the first call to the function was 'Multi: 1000, Sum: -110'
      expect(console.log.mock.calls[0][0]).toBe(`Multi: 1000, Sum: -110`)
    }),
    it('console.log "Multi: 0.05, Sum: 0.6" for floats', () => {
      console.log = jest.fn();
      multiplierAndSum(0.5, 0.1)
      // The first argument of the first call to the function was 'Multi: 0.05, Sum: 0.6'
      expect(console.log.mock.calls[0][0]).toBe(`Multi: 0.05, Sum: 0.6`)
    }),
    it('console.log "Multi: NaN, Sum: NaN" for undefined', () => {
      console.log = jest.fn();
      multiplierAndSum(5)
      // The first argument of the first call to the function was 'Multi: NaN, Sum: NaN'
      expect(console.log.mock.calls[0][0]).toBe(`Multi: NaN, Sum: NaN`)
    }),
    it('console.log "Multi: -27, Sum: 9-3" for string and negative integer', () => {
      console.log = jest.fn();
      multiplierAndSum('9', -3)
      // The first argument of the first call to the function was 'Multi: -27, Sum: 9-3'
      expect(console.log.mock.calls[0][0]).toBe(`Multi: -27, Sum: 9-3`)
    }),
    it('console.log "Multi: NaN, Sum: AB" for strings', () => {
      console.log = jest.fn();
      multiplierAndSum('A', 'B')
      // The first argument of the first call to the function was 'Multi: NaN, Sum: AB'
      expect(console.log.mock.calls[0][0]).toBe(`Multi: NaN, Sum: AB`)
    })
  });

  describe('sumStringsLength', () => {
    it('is a function', () => {
      expect(typeof sumStringsLength).toBe('function')
    }),
    it('console.log a number for strings to be a number', () => {
      console.log = jest.fn();
      sumStringsLength('string one', 'string two')
      // The first argument of the first call to the function was 'number'
      expect(typeof console.log.mock.calls[0][0]).toBe('number')
    }),
    it('console.log 8 for strings', () => {
      console.log = jest.fn();
      sumStringsLength('one', 'three')
      // The first argument of the first call to the function was '8'
      expect(console.log.mock.calls[0][0]).toBe(8)
    }),
    it('console.log 4 for a string and an integer', () => {
      console.log = jest.fn();
      sumStringsLength('one', 3)
      // The first argument of the first call to the function was '4'
      expect(console.log.mock.calls[0][0]).toBe(4)
    }),
    it('console.log undefined for null and undefined', () => {
      console.log = jest.fn();
      sumStringsLength(null)
      // The first argument of the first call to the function was 'undefined'
      expect(console.log.mock.calls[0][0]).toBe(undefined)
    }),
    it('console.log 255 for long strings', () => {
      console.log = jest.fn();
      sumStringsLength('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe nemo totam architecto impedit inventore?', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, consequatur sapiente. Minus a ab quos recusandae delectus. Quae, nihil error.')
      // The first argument of the first call to the function was '255'
      expect(console.log.mock.calls[0][0]).toBe(255)
    })
  });

  
  describe('sumOfDigits', () => {
    
    
    it('is a function', () => {
      expect(typeof sumOfDigits).toBe('function')
    }),
    it('console.log sum of all 3 digits in "456" as a number 15', () => {
      console.log = jest.fn();
      sumOfDigits();
      // The first argument of the first call to the function was '15'
      expect(console.log.mock.calls[0][0]).toBe(15)
    }),
    it('console.log a number (not a NaN)', () => {
      console.log = jest.fn();
      jest.spyOn(window, 'prompt').mockReturnValue('987')
      sumOfDigits();
      // The first argument of the first call to the function was a number
      expect(console.log.mock.calls[0][0]).not.toBeNaN()
    }),
    it('console.log a number', () => {
      console.log = jest.fn();
      sumOfDigits();
      // The first argument of the first call to the function was a number
      expect(typeof console.log.mock.calls[0][0]).toBe('number')
    }),
    it('console.log a number between 3 (for "111") and 27 (for "999")', () => {
      console.log = jest.fn();
      sumOfDigits();
      const range = 3 <= console.log.mock.calls[0][0] <= 27
      // The first argument of the first call to the function was an integer between 3 and 27
      expect(range).toBe(true)
    }),
    it('alerts a value entered to prompt', () => {
      console.log = jest.fn();
      sumOfDigits();
      jest.spyOn(window, "prompt").mockReturnValue("123");
    	expect(console.log).toHaveBeenCalled();
    })
  });
  
  describe('sumOfDigitsAnother', () => {
    
    it('is a function', () => {
      expect(typeof sumOfDigitsAnother).toBe('function')
    }),
    it('console.log sum of all 3 digits in "456" as a number 15', () => {
      console.log = jest.fn();
      jest.spyOn(window, 'prompt').mockReturnValue('456')
      sumOfDigitsAnother();

      // The first argument of the first call to the function was '15'
      expect(console.log.mock.calls[0][0]).toBe(15)
    }),
    it('console.log a number (not a NaN)', () => {
      console.log = jest.fn();
      jest.spyOn(window, 'prompt').mockReturnValue('987')
      sumOfDigitsAnother();
      // The first argument of the first call to the function was a number
      expect(console.log.mock.calls[0][0]).not.toBeNaN()
    }),
    it('console.log a number', () => {
      console.log = jest.fn();
      jest.spyOn(window, 'prompt').mockReturnValue('111')
      sumOfDigitsAnother();
      // The first argument of the first call to the function was a number
      expect(typeof console.log.mock.calls[0][0]).toBe('number')
    }),
    it('console.log a number between 3 (for "111") and 27 (for "999")', () => {
      console.log = jest.fn();
      jest.spyOn(window, 'prompt').mockReturnValue('999')
      sumOfDigitsAnother();
      const range = 3 <= console.log.mock.calls[0][0] <= 27
      // The first argument of the first call to the function was an integer between 3 and 27
      expect(range).toBe(true)
    }),
    it('alerts a value entered to prompt', () => {
      console.log = jest.fn();
      sumOfDigitsAnother();
      jest.spyOn(window, "prompt").mockReturnValue("123");
    	expect(console.log).toHaveBeenCalled();
    })
  });

})