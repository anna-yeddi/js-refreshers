import { getDay, minutesToday, youngest } from "./08-dates";

describe("getDay", () => {
  it("is a function", () => {
    expect(getDay).toBeInstanceOf(Function);
  });

  describe("functional tests with user input", () => {
    let originalConsoleLog;
    let originalPrompt;
    beforeEach(() => {
      originalConsoleLog = console.log;
      originalPrompt = window.prompt;
    });
    afterEach(() => {
      console.log = originalConsoleLog;
      window.prompt = originalPrompt;
    });

    it("returns a string", () => {
      jest.spyOn(window, "prompt").mockReturnValue("08.08.2021");
      console.log = jest.fn();

      expect(typeof getDay()).toBe("string");
      expect(typeof console.log.mock.calls[0][0]).toBe("string");
    });

    it("outputs a day of week", () => {
      jest.spyOn(window, "prompt").mockReturnValue("08.08.2021");
      console.log = jest.fn();

      getDay();

      expect(typeof getDay()).toBe("string");
      expect(getDay()).toBe("Sunday");
      expect(console.log.mock.calls[0][0]).toBe("Sunday");

      const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      expect(days).toEqual(
        expect.arrayContaining([console.log.mock.calls[0][0]])
      );
      expect(days).toEqual(expect.arrayContaining([getDay()]));
    });
  });
});

describe("minutesToday", () => {
  it("is function", () => {
    expect(minutesToday).toBeInstanceOf(Function);
  });

  describe("functional tests current time", () => {
    let originalConsoleLog;
    let originalPrompt;
    beforeEach(() => {
      originalConsoleLog = console.log;
      originalPrompt = window.prompt;
    });
    afterEach(() => {
      console.log = originalConsoleLog;
      window.prompt = originalPrompt;
    });

    it("console.logs a number of minutes", () => {
      console.log = jest.fn();
      minutesToday();

      expect(typeof +console.log.mock.calls[0][0]).toBe("number");
      expect(+console.log.mock.calls[0][0]).toBeLessThan(24 * 60);
    });
  });
});

describe("youngest", () => {
  it("is a function", () => {
    expect(youngest).toBeInstanceOf(Function);
  });

  describe("functional tests", () => {
    it("returns a string", () => {
      expect(typeof youngest("20.02.2002", "11.11.1111")).toBe("string");
    });

    it("returns one of submitted birthday strings", () => {
      const arr = ["20.02.2002", "11.11.1111"];
      const expected = new Array(youngest("20.02.2002", "11.11.1111"));

      expect(arr).toEqual(expect.arrayContaining(expected));
      expect(youngest("20.02.2002", "11.11.1111")).toBe("11.11.1111");
      expect(youngest("22.22.2222", "21.22.2222")).toBe("21.22.2222");
    });
  });
});
