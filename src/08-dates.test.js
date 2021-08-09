import { getDay, minutesToday } from "./08-dates.js";

describe('getDay', () => {
  it('is a function', () => {
    expect(getDay).toBeInstanceOf(Function)
  }),
    
  it('returns a string', () => {
    expect(typeof getDay('08.08.2021')).toBe('string');
  }),
    
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
    
    it('outputs a day of week', () => {
      console.log = jest.fn();
      getDay('08.08.2021');
      
      expect(typeof console.log.mock.calls[0][0]).toBe('string');
      expect(console.log.mock.calls[0][0]).toBe('Sunday');
      
      const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      expect(days).toEqual(
        expect.arrayContaining([console.log.mock.calls[0][0]])
      )
    })
  })
})

describe('minutesToday', () => {
  it('is function', () => {
    expect(minutesToday).toBeInstanceOf(Function);
  }),
    
  describe('functional tests current time', () => {
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
      
    it('console.logs a number of minutes', () => {
      console.log = jest.fn();
      minutesToday();

      expect(typeof +console.log.mock.calls[0][0]).toBe('number');
      expect(console.log.mock.calls[0][0] < (24 * 60)).toBeTruthy()
    })
  })
})