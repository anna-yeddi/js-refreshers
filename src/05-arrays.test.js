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

  describe('sumArrOf10Map', () => {
    it('is a function', () => {
      expect(typeof sumArrOf10Map).toBe('function')
    })
  })
  
  describe('sumArrOf10ForEach', () => {
    it('is a function', () => {
      expect(typeof sumArrOf10ForEach).toBe('function')
    })
  })

  describe('sumArrOf10Reducer', () => {
    it('is a function', () => {
      expect(typeof sumArrOf10Reducer).toBe('function')
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