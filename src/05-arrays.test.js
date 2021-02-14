import { 
  sumArrOf10Map,
  sumArrOf10ForEach,
  sumArrOf10Reducer,
  createArrOfDoubles,
  printMaxMinItemsMath,
  printMaxMinItemsSort
} from "./05-arrays.js";

describe('05-arrays.js', () => {

  let originalConsoleLog;
  beforeEach(() => {
    originalConsoleLog = console.log;
  })
  afterEach(() => {
    console.log = originalConsoleLog;
  })

  const mockArr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

  describe('sumArrOf10Map', () => {
    it('is a function', () => {
      expect(typeof sumArrOf10Map).toBe('function')
    }),
    it('console.log a number', () => {
      console.log = jest.fn()
      sumArrOf10Map(mockArr)
      expect(typeof console.log.mock.calls[0][0]).toBe('number')
    }),
    it('console.log 55 for array from 1 to 10', () => {
      console.log = jest.fn()
      sumArrOf10Map(mockArr)
      expect(console.log.mock.calls[0][0]).toBe(55)
    }),
    it('console.log 0 for empty array', () => {
      console.log = jest.fn()
      sumArrOf10Map([])
      expect(console.log.mock.calls[0][0]).toBe(0)
    }),
    it('console.log "0onetwo" for an array of strings', () => {
      console.log = jest.fn()
      sumArrOf10Map(['one', 'two'])
      expect(console.log.mock.calls[0][0]).toBe("0onetwo")
    }),
    it('throw an error for empty array', () => {
      expect(() => {
        sumArrOf10Map()
      }).toThrow()
    }),
    it('throw an error for a string', () => {
      expect(() => {
        sumArrOf10Map('string')
      }).toThrow()
    })
  })
  
  describe('sumArrOf10ForEach', () => {
    it('is a function', () => {
      expect(typeof sumArrOf10ForEach).toBe('function')
    })
    it('console.log a number', () => {
      console.log = jest.fn()
      sumArrOf10ForEach(mockArr)
      expect(typeof console.log.mock.calls[0][0]).toBe('number')
    }),
    it('console.log 55 for array from 1 to 10', () => {
      console.log = jest.fn()
      sumArrOf10ForEach(mockArr)
      expect(console.log.mock.calls[0][0]).toBe(55)
    }),
    it('console.log 0 for empty array', () => {
      console.log = jest.fn()
      sumArrOf10ForEach([])
      expect(console.log.mock.calls[0][0]).toBe(0)
    }),
    it('console.log "0onetwo" for an array of strings', () => {
      console.log = jest.fn()
      sumArrOf10ForEach(['one', 'two'])
      expect(console.log.mock.calls[0][0]).toBe("0onetwo")
    }),
    it('console.log undefined for empty array', () => {
      expect(typeof sumArrOf10ForEach([])).toBe('undefined')
    }),
    it('throw an error for a string', () => {
      expect(() => {
        sumArrOf10ForEach('string')
      }).toThrow()
    })
  })

  describe('sumArrOf10Reducer', () => {
    it('is a function', () => {
      expect(typeof sumArrOf10Reducer).toBe('function')
    }),
    it('console.log a number', () => {
      console.log = jest.fn()
      sumArrOf10Reducer(mockArr)
      expect(typeof console.log.mock.calls[0][0]).toBe('number')
    }),
    it('console.log 55 for array from 1 to 10', () => {
      console.log = jest.fn()
      sumArrOf10Reducer(mockArr)
      expect(console.log.mock.calls[0][0]).toBe(55)
    }),
    it('console.log 0 for empty array', () => {
      console.log = jest.fn()
      sumArrOf10Reducer([])
      expect(console.log.mock.calls[0][0]).toBe(0)
    }),
    it('console.log "0onetwo" for an array of strings', () => {
      console.log = jest.fn()
      sumArrOf10Reducer(['one', 'two'])
      expect(console.log.mock.calls[0][0]).toBe("0onetwo")
    }),
    it('console.log undefined for empty array', () => {
      expect(typeof sumArrOf10Reducer([])).toBe('undefined')
    }),
    it('throw an error for a string', () => {
      expect(() => {
        sumArrOf10Reducer('string')
      }).toThrow()
    })
  })

  describe('createArrOfDoubles', () => {
    it('is a function', () => {
      expect(typeof createArrOfDoubles).toBe('function')
    })
  })

  describe('printMaxMinItemsMath', () => {
    it('is a function', () => {
      expect(typeof printMaxMinItemsMath).toBe('function')
    })
  })

  describe('printMaxMinItemsSort', () => {
    it('is a function', () => {
      expect(typeof printMaxMinItemsSort).toBe('function')
    })
  })

})