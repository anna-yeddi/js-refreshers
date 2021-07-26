import {
  diff,
  isWord,
  pow
} from "./06-functions.js";

describe('06-functions.js', () => {

  describe('diff', () => {
    it('is a function', () => {
      expect(typeof diff).toBe('function')
    }),
    it('returns a number', () => {
      expect(typeof diff(1, 2)).toBe('number')
    }),
    it('returns a non-negative number', () => {
      expect(diff(1, 2) >= 0).toBeTruthy
    }),
    it('returns 1 from (1, 2)', () => {
      expect(diff(1, 2)).toBe(1)
    }),
    it('returns 3 from (-1, 2)', () => {
      expect(diff(-1, 2)).toBe(3)
    }),
    it('returns 0 from (11, 11)', () => {
      expect(diff(11, 11)).toBe(0)
    }),
    it('returns 98 from (100, 2)', () => {
      expect(diff(100, 2)).toBe(98)
    }),
    it('throws an error with "Not a number" for a non-numbers', () => {
      expect(() => {
        diff(NaN, 'string')
      }).toThrowError(/Not a number/)
    }),
    it('throws an error for a string', () => {
      expect(() => {
        diff(2, 'string')
      }).toThrow()
    }),
    it('throws an error for an undefined', () => {
      expect(() => {
        diff(2)
      }).toThrow()
    })
  });

  describe('isWord', () => {
    it('is a function', () => {
      expect(typeof isWord).toBe('function')
    }),
    it('returns a boolean', () => {
      expect(typeof isWord('one')).toBe('boolean')
    }),
    it('returns true for one-word string "one"', () => {
      expect(isWord('one')).toBeTruthy()
    }),
    it('returns false for two-word string "one two"', () => {
      expect(isWord('one two')).toBeFalsy()
    }),
    it('throws an error with "Empty string" for an empty string', () => {
      expect(() => {
        isWord("")
      }).toThrowError(/Empty string/)
    }),
    it('throws an error with "Not a string" for a NaN', () => {
      expect(() => {
        isWord(NaN)
      }).toThrowError(/Not a string/)
    }),
    it('throws an error with "Not a string" for an object', () => {
      expect(() => {
        isWord(new Object)
      }).toThrowError(/Not a string/)
    }),
    it('throws an error with "Not a string" for an array', () => {
      expect(() => {
        isWord([])
      }).toThrowError(/Not a string/)
    }),
    it('throws an error for a number', () => {
      expect(() => {
        isWord(1)
      }).toThrow()
    }),
    it('throws an error for an undefined', () => {
      expect(() => {
        isWord()
      }).toThrow()
    })
  })

  describe('pow', () => {
    it('is a function', () => {
      expect(typeof pow).toBe('function')
    }),
    it('returns a number for numbers', () => {
      expect(typeof pow(1, 1)).toBe('number')
    }),
    it('returns 4 for (2, 2)', () => {
      expect(pow(2, 2)).toBe(4)
    }),
    it('returns 16 for (4, 2)', () => {
      expect(pow(4, 2)).toBe(16)
    }),
    it('returns 16 for (2, 4)', () => {
      expect(pow(2, 4)).toBe(16)
    }),
    it('throws an error with "Not a number" for a non-numbers', () => {
      expect(() => {
        pow(NaN, 'string')
      }).toThrowError(/Not a number/)
    }),
    it('throws an error for a string', () => {
      expect(() => {
        pow(2, 'string')
      }).toThrow()
    }),
    it('throws an error for an undefined', () => {
      expect(() => {
        pow(2)
      }).toThrow()
    })
  })

})