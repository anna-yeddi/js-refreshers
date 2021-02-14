import { 
  addAge,
  createUserObjCopy,
  createVarsForAdminProps
} from "./04-objects.js";

describe('04-objects.js', () => {
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
  
  const mockUser = {
    name: 'John'
  }
  
  describe('addAge', () => {
    it('is a function', () => {
      expect(typeof addAge).toBe('function')
    }),
    it('returns an object with property "age"', () => {
      console.log = jest.fn();
      jest.spyOn(window, 'prompt').mockReturnValue('99')
      
      addAge(mockUser);
      expect(mockUser).toHaveProperty('age')
    }),
    it('returns an object with property "age" assigned to a number', () => {
      console.log = jest.fn();
      jest.spyOn(window, 'prompt').mockReturnValue('77')
      
      addAge(mockUser);
      expect(typeof mockUser.age).toBe('number')
    }),
    it('returns an object with property "age" assigned to 88', () => {
      console.log = jest.fn();
      jest.spyOn(window, 'prompt').mockReturnValue('88')
      
      addAge(mockUser);
      expect(mockUser.age).toBe(88)
    }),
    it('returns an object with property "age" assigned to NaN for a string input', () => {
      console.log = jest.fn();
      jest.spyOn(window, 'prompt').mockReturnValue('eleven')
      
      addAge(mockUser);
      expect(mockUser.age).toBeNaN()
    }),
    it('returns an object with property "age" assigned to 0 for empty input', () => {
      console.log = jest.fn();
      jest.spyOn(window, 'prompt').mockReturnValue(null)
      
      addAge(mockUser);
      expect(mockUser.age).toBe(0)
    })
  })
  
  describe('createUserObjCopy', () => {
    it('is a function', () => {
      expect(typeof createUserObjCopy).toBe('function')
    })
  })

  describe('createVarsForAdminProps', () => {
    it('is a function', () => {
      expect(typeof createVarsForAdminProps).toBe('function')
    })
  })

})