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
    }),
    it('console.log a string', () => {
      console.log = jest.fn();
      printMonthSwitch(1);
      expect(typeof console.log.mock.calls[0][0]).toBe(`string`)
    }),
    it('console.log "Not a valid month number" for 999', () => {
      console.log = jest.fn();
      printMonthSwitch(999);
      expect(console.log.mock.calls[0][0]).toBe(`Not a valid month number`)
    }),
    it('console.log "February" for 2', () => {
      console.log = jest.fn();
      printMonthSwitch(2);
      expect(console.log.mock.calls[0][0]).toBe(`February`)
    }),
    it('console.log "March" for "3"', () => {
      console.log = jest.fn();
      printMonthSwitch("3");
      expect(console.log.mock.calls[0][0]).toBe(`March`)
    }),
    it('console.log "Not a valid month number" for undefined', () => {
      console.log = jest.fn();
      printMonthSwitch();
      expect(console.log.mock.calls[0][0]).toBe(`Not a valid month number`)
    })
  });

  describe('printMonthArr', () => {
    it('is a function', () => {
      expect(typeof printMonthArr).toBe('function')
    }),
    it('console.log a string', () => {
      console.log = jest.fn();
      printMonthArr(1);
      expect(typeof console.log.mock.calls[0][0]).toBe(`string`)
    }),
    it('console.log "Not a valid month number" for 999', () => {
      console.log = jest.fn();
      printMonthArr(999);
      expect(console.log.mock.calls[0][0]).toBe(`Not a valid month number`)
    }),
    it('console.log "February" for 2', () => {
      console.log = jest.fn();
      printMonthArr(2);
      expect(console.log.mock.calls[0][0]).toBe(`February`)
    }),
    it('console.log "March" for "3"', () => {
      console.log = jest.fn();
      printMonthArr("3");
      expect(console.log.mock.calls[0][0]).toBe(`March`)
    }),
    it('console.log "May" for 5', () => {
      console.log = jest.fn();
      printMonthArr(5);
      expect(console.log.mock.calls[0][0]).toBe(`May`)
    }),
    it('console.log "April" for "4"', () => {
      console.log = jest.fn();
      printMonthArr("4");
      expect(console.log.mock.calls[0][0]).toBe(`April`)
    }),
    it('console.log "June" for 6', () => {
      console.log = jest.fn();
      printMonthArr(6);
      expect(console.log.mock.calls[0][0]).toBe(`June`)
    }),
    it('console.log "July" for 7', () => {
      console.log = jest.fn();
      printMonthArr(7);
      expect(console.log.mock.calls[0][0]).toBe(`July`)
    }),
    it('console.log "August" for 8', () => {
      console.log = jest.fn();
      printMonthArr(8);
      expect(console.log.mock.calls[0][0]).toBe(`August`)
    }),
    it('console.log "September" for 9', () => {
      console.log = jest.fn();
      printMonthArr(9);
      expect(console.log.mock.calls[0][0]).toBe(`September`)
    }),
    it('console.log "October" for 10', () => {
      console.log = jest.fn();
      printMonthArr(10);
      expect(console.log.mock.calls[0][0]).toBe(`October`)
    }),
    it('console.log "November" for 11', () => {
      console.log = jest.fn();
      printMonthArr(11);
      expect(console.log.mock.calls[0][0]).toBe(`November`)
    }),
    it('console.log "December" for 12', () => {
      console.log = jest.fn();
      printMonthArr(12);
      expect(console.log.mock.calls[0][0]).toBe(`December`)
    }),
    it('console.log "January" for 1', () => {
      console.log = jest.fn();
      printMonthArr(1);
      expect(console.log.mock.calls[0][0]).toBe(`January`)
    }),
    it('console.log "Not a valid month number" for undefined', () => {
      console.log = jest.fn();
      printMonthArr();
      expect(console.log.mock.calls[0][0]).toBe(`Not a valid month number`)
    })
  });

  describe('isCircleFitInSquare', () => {
    it('is a function', () => {
      expect(typeof isCircleFitInSquare).toBe('function')
    }),
    it('console.log true for (1, 2)', () => {
      console.log = jest.fn();
      isCircleFitInSquare(1, 2);
      expect(console.log.mock.calls[0][0]).toBeTruthy();
    }),
    it('console.log false for (30, 2)', () => {
      console.log = jest.fn();
      isCircleFitInSquare(30, 2);
      expect(console.log.mock.calls[0][0]).toBeFalsy();
    }),
    it('console.log boolean', () => {
      console.log = jest.fn();
      isCircleFitInSquare(1, 2);
      expect(typeof console.log.mock.calls[0][0]).toBe('boolean');
    }),
    it('console.log false for undefined', () => {
      console.log = jest.fn();
      isCircleFitInSquare();
      expect(console.log.mock.calls[0][0]).toBeFalsy();
    }),
    it('console.log false for null and string', () => {
      console.log = jest.fn();
      isCircleFitInSquare(null, 'string');
      expect(console.log.mock.calls[0][0]).toBeFalsy();
    })
  });
  
})