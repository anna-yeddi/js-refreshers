import { isRightTriangle, calcCircumferenceAndArea, calcSolutions } from './09-math-ops.js';

describe('09-math-ops.js', () => {

  describe('isRightTriangle', () => {
    it('is a function', () => {
      expect(isRightTriangle).toBeInstanceOf(Function)
    });

    it('returns a boolean', () => {
      expect(typeof isRightTriangle(3, 4, 5)).toBe('boolean')
    });

    it('returns FALSE for non-numbers', () => {
      expect(isRightTriangle(NaN, 4, 5)).toBeFalsy();
      expect(isRightTriangle('abc', 4, 5)).toBeFalsy();
      expect(isRightTriangle('abc')).toBeFalsy()
      expect(isRightTriangle(5)).toBeFalsy();
      expect(isRightTriangle()).toBeFalsy();
    });
  
    it('returns FALSE for 1, 3, 4', () => {
      expect(isRightTriangle(1, 3, 4)).toBeFalsy()
    });

    it('returns TRUE for 3, 4, 5', () => {
      expect(isRightTriangle(3, 4, 5)).toBe(5 === (Math.sqrt(3**2 + 4**2)))
      expect(isRightTriangle(3, 4, 5)).toBeTruthy()
    });
    
    it('returns TRUE for 30, 40, 50', () => {
      expect(isRightTriangle(30, 40, 50)).toBeTruthy()
    });
    
    it('returns TRUE for right triangle', () => {
      expect(isRightTriangle(3, 4, 5)).toBeTruthy()
    })
  });

  describe('calcCircumferenceAndArea', () => {
    it('is function', () => {
      expect(calcCircumferenceAndArea).toBeInstanceOf(Function);
    });

    describe('functional tests with user input', () => {
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
      
      it('console.logs a number', () => {
        jest.spyOn(window, 'prompt').mockReturnValue('4');
        console.log = jest.fn();

        calcCircumferenceAndArea();

        expect(typeof console.log.mock.calls[0][0]).toBe('number');
        expect(typeof console.log.mock.calls[1][0]).toBe('number');
      });
      
      it('console.logs two numbers', () => {
        jest.spyOn(window, 'prompt').mockReturnValue('4');
        console.log = jest.fn();

        calcCircumferenceAndArea();

        expect(console.log.mock.calls.length).toBe(2);
      });
      
      it('console.logs 12.57 twice for 2', () => {
        jest.spyOn(window, 'prompt').mockReturnValue('2');
        console.log = jest.fn();

        calcCircumferenceAndArea();

        expect(console.log.mock.calls[0][0]).toBe(12.57);
        expect(console.log.mock.calls[1][0]).toBe(12.57);
      });
      
      it('console.logs 18,85, then 28.27 for 3', () => {
        jest.spyOn(window, 'prompt').mockReturnValue('3');
        console.log = jest.fn();

        calcCircumferenceAndArea();

        expect(console.log.mock.calls[0][0]).toBe(18.85);
        expect(console.log.mock.calls[1][0]).toBe(28.27);
      });

      it('console.logs NaN twice for a string', () => {
        jest.spyOn(window, 'prompt').mockReturnValue('abc');
        console.log = jest.fn();

        calcCircumferenceAndArea();

        expect(console.log.mock.calls[0][0]).toBe(NaN);
        expect(console.log.mock.calls[1][0]).toBe(NaN);
      });
    })
  })
})