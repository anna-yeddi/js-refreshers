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
  });

  describe('calcSolutions', () => {
    it('is a function', () => {
      expect(calcSolutions).toBeInstanceOf(Function)
    });

    describe('functional tests with user input', () => {
      let originalPrompt;
      beforeEach(() => {
        originalPrompt = window.prompt
      });
      afterEach(() => {
        window.prompt = originalPrompt
      });

      it('returns an array', () => {
        jest.spyOn(window, 'prompt').mockReturnValue('1 4 4');
        
        expect(calcSolutions()).toBeInstanceOf(Array);
      });

      it('returns an array with two numbers', () => {
        jest.spyOn(window, 'prompt').mockReturnValue('1 4 4');
        
        expect(calcSolutions().length).toBe(2);
      });

      it('returns [-2,-2] for (1, 4, 4)', () => {
        jest.spyOn(window, 'prompt').mockReturnValue('1 4 4');
        
        expect(calcSolutions()).toStrictEqual([-2,-2]);
      });

      it('returns complex roots for (5, 2, 1)', () => {
        jest.spyOn(window, 'prompt').mockReturnValue('5 2 1');
        const expectedRootsArr = ['-0.20000 + 0.40000i', '-0.20000 - 0.40000i'];
        
        expect(calcSolutions()).toEqual(
          expect.arrayContaining(expectedRootsArr)
        );
      });

      it('returns same root of -2 for (2, 8, 8)', () => {
        jest.spyOn(window, 'prompt').mockReturnValue('2 8 8');

        const func = calcSolutions()
        
        expect(func[0]).toBe(-2);
        expect(func[1]).toBe(-2);
        expect(func[0]).toBe(func[1]);
        expect(func).toStrictEqual([-2,-2]);
      });

      it('returns [1.70156, -4.70156] for (1, 3, -8)', () => {
        jest.spyOn(window, 'prompt').mockReturnValue('1 3 -8');
        const expectedRootsArr = [1.70156, -4.70156];
        
        expect(calcSolutions()).toStrictEqual(
          expect.arrayContaining(expectedRootsArr)
        )
      })
    }) 
  })
})