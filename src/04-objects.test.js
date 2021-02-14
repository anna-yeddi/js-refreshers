import { 
  addAge,
  createUserObjCopy,
  createVarsForAdminProps
} from "./04-objects.js";

describe('04-objects.js', () => {
  let originalPrompt;
  beforeEach(() => {
    originalPrompt = window.prompt;
  })
  afterEach(() => {
    window.prompt = originalPrompt
  })
  
  describe('addAge', () => {
    const mockUser = {
      name: 'John'
    }

    test('is a function', () => {
      expect(typeof addAge).toBe('function')
    }),
    test('returns an object', () => {
      jest.spyOn(window, 'prompt').mockReturnValue('44')
      const returnedObject = addAge(mockUser);
      expect(typeof returnedObject).toBe('object')
    }),
    test('returns an object with property "age"', () => {
      jest.spyOn(window, 'prompt').mockReturnValue('99')
      
      addAge(mockUser);
      expect(mockUser).toHaveProperty('age')
    }),
    test('returns an object with property "age" assigned to a number', () => {
      jest.spyOn(window, 'prompt').mockReturnValue('77')
      
      addAge(mockUser);
      expect(typeof mockUser.age).toBe('number')
    }),
    test('returns an object with property "age" assigned to 88', () => {
      jest.spyOn(window, 'prompt').mockReturnValue('88')
      
      addAge(mockUser);
      expect(mockUser.age).toBe(88)
    }),
    test('returns an object with property "age" assigned to NaN for a string input', () => {
      jest.spyOn(window, 'prompt').mockReturnValue('eleven')
      
      addAge(mockUser);
      expect(mockUser.age).toBeNaN()
    }),
    test('returns an object with property "age" assigned to 0 for empty input', () => {
      jest.spyOn(window, 'prompt').mockReturnValue(null)
      
      addAge(mockUser);
      expect(mockUser.age).toBe(0)
    })
  })
  
  describe('createUserObjCopy', () => {
    const mockUser = {
      name: 'John',
      age: 99
    }

    test('is a function', () => {
      expect(typeof createUserObjCopy).toBe('function')
    }),
    test('returns an object', () => {
      const returnedObject = createUserObjCopy(mockUser);
      expect(typeof returnedObject).toBe('object')
    }),
    test('returns a new object which includes original properties', () => {
      const returnedObject = createUserObjCopy(mockUser);
      expect(returnedObject).toMatchObject(mockUser)
    }),
    test('returns a new object with new properties', () => {
      const returnedObject = createUserObjCopy(mockUser);
      expect(mockUser).not.toMatchObject(returnedObject)
    }),
    test('returns an object with property "role"', () => {
      const returnedObject = createUserObjCopy(mockUser);
      expect(returnedObject).toHaveProperty('role')
    }),
    test('returns an object with property "role" assigned to string', () => {
      const returnedObject = createUserObjCopy(mockUser);
      expect(typeof returnedObject.role).toBe('string')
    }),
    test('returns an object with property "role" assigned to a "admin"', () => {
      const returnedObject = createUserObjCopy(mockUser);
      expect(returnedObject.role).toBe('admin')
    }),
    test('returns an object without property "name" when no object is provided', () => {
      const returnedObject = createUserObjCopy();
      expect(returnedObject.name).toBeUndefined()
    })
  })

  describe('createVarsForAdminProps', () => {
    const mockAdmin = {
      name: 'John',
      age: 99,
      role: "admin"
    }

    test('is a function', () => {
      expect(typeof createVarsForAdminProps).toBe('function')
    }),
    test('returns an object', () => {
      const returnedObject = createVarsForAdminProps(mockAdmin);
      expect(typeof returnedObject).toBe('object')
    }),
    test('returns a new object with values', () => {
      const returnedObject = createVarsForAdminProps(mockAdmin);
      expect(returnedObject).not.toBe(mockAdmin)
    }),
    test('returns a new object with matching values', () => {
      const returnedObject = createVarsForAdminProps(mockAdmin);
      expect(returnedObject).toEqual(mockAdmin)
    }),
    test('returns an object of 3 separate variables', () => {
      const { name, age, role } = createVarsForAdminProps(mockAdmin);
      expect(typeof name).toBe('string')
      expect(typeof age).toBe('number')
      expect(typeof role).toBe('string')
      expect(name).toEqual(mockAdmin.name)
      expect(age).toEqual(mockAdmin.age)
      expect(role).toEqual(mockAdmin.role)
    })
      
  })

})