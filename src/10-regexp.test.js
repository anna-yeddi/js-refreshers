import { isDate, isEmail, isPhone } from './10-regexp.js';

describe('isDate', () => {
  it('is function', () => {
    expect(isDate).toBeInstanceOf(Function)
  });

  it('returns a boolean', () => {
    expect(typeof isDate('01.02.2003')).toBe('boolean')
  });
  
  it('returns TRUE for a date with "."', () => {
    expect(isDate('01.02.2003')).toBeTruthy();
    expect(isDate('01.02.03')).toBeTruthy();
    expect(isDate('1.2.2003')).toBeTruthy();
    expect(isDate('1.2.03')).toBeTruthy();
  });
  it('returns TRUE for a date with "/"', () => {
    expect(isDate('01/02/2003')).toBeTruthy();
    expect(isDate('01/02/03')).toBeTruthy();
    expect(isDate('1/2/2003')).toBeTruthy();
    expect(isDate('1/2/03')).toBeTruthy();
  });
  it('returns TRUE for a date with "-"', () => {
    expect(isDate('01-02-2003')).toBeTruthy();
    expect(isDate('01-02-03')).toBeTruthy();
    expect(isDate('1-2-2003')).toBeTruthy();
    expect(isDate('1-2-03')).toBeTruthy();
  });
  
  it('returns FALSE for a non-date number', () => {
    expect(isDate('1-2-033')).toBeFalsy();
    expect(isDate('1-222-03')).toBeFalsy();
    expect(isDate('111-222-3')).toBeFalsy();
    expect(isDate('01022003')).toBeFalsy();
    expect(isDate('123')).toBeFalsy();
    expect(isDate('1234567890123')).toBeFalsy();
    expect(isDate('12 23 3456')).toBeFalsy();
    expect(isDate('12,23,3456')).toBeFalsy();
  });

  it('returns FALSE for a non-number', () => {
    expect(isDate(NaN)).toBeFalsy();
    expect(isDate('qwerty')).toBeFalsy();
    expect(isDate('May 15 1234')).toBeFalsy();
    expect(isDate('')).toBeFalsy();
    expect(isDate()).toBeFalsy();
  })
});

describe('isEmail', () => {
  it('is a function', () => {
    expect(isEmail).toBeInstanceOf(Function)
  });

  it('returns a boolean', () => {
    expect(typeof isEmail('t@test.com')).toBe('boolean')
  });

  it('returns TRUE for email addresses', () => {
    expect(isEmail('t@test.com')).toBeTruthy();
    expect(isEmail('test@t.tech')).toBeTruthy();
    expect(isEmail('testteststerst@tezzt.online')).toBeTruthy();
    expect(isEmail('test@web.ca')).toBeTruthy();
    expect(isEmail('TEST@TEST.COM')).toBeTruthy();
  });
  
  it('returns TRUE for email addresses with numbers', () => {
    expect(isEmail('123@web.eu')).toBeTruthy();
    expect(isEmail('test@123.org')).toBeTruthy();
    expect(isEmail('0987654321@123.org')).toBeTruthy();
  });
  
  it('returns TRUE for email addresses with "-"', () => {
    expect(isEmail('t-t@test.com')).toBeTruthy();
    expect(isEmail('test@t-t.tech')).toBeTruthy();
    expect(isEmail('test-test-sterst@test.org')).toBeTruthy();
  });
  
  it('returns TRUE for email addresses with "."', () => {
    expect(isEmail('t.t@test.com')).toBeTruthy();
    expect(isEmail('test@t.t.tech')).toBeTruthy();
    expect(isEmail('test.test.sterst@test.org')).toBeTruthy();
  });
  
  it('returns TRUE for email addresses with "+" in the name', () => {
    expect(isEmail('t+t@test.com')).toBeTruthy();
    expect(isEmail('test+test+sterst@test.org')).toBeTruthy();
  });
  
  it('returns FALSE for non-email addresses', () => {
    expect(isEmail('t@test')).toBeFalsy();
    expect(isEmail('t@test.t')).toBeFalsy();
    expect(isEmail('t@test.123')).toBeFalsy();
    expect(isEmail('t/@test.com')).toBeFalsy();
    expect(isEmail('t|@test.com')).toBeFalsy();
    expect(isEmail('t>@test.com')).toBeFalsy();
    expect(isEmail('t≤@test.com')).toBeFalsy();
    expect(isEmail('t.tech')).toBeFalsy();
    expect(isEmail('testteststerst')).toBeFalsy();
    expect(isEmail('test.web.ca')).toBeFalsy();
  });
});

describe('isPhone', () => {
  it('is a function', () => {
    expect(isPhone).toBeInstanceOf(Function)
  });

  it('returns a boolean', () => {
    expect(typeof isPhone('123-123-1234')).toBe('boolean')
  });

  it('returns TRUE for 10-digit phone numbers without separators', () => {
    expect(isPhone('1231231234')).toBeTruthy();
    expect(isPhone('2022020000')).toBeTruthy();
    expect(isPhone('2345678901')).toBeTruthy();
  });

  it('returns TRUE for 10-digit phone numbers with "-"', () => {
    expect(isPhone('123-123-1234')).toBeTruthy();
    expect(isPhone('202-202-0000')).toBeTruthy();
    expect(isPhone('123-123-12-34')).toBeTruthy();
    expect(isPhone('202-202-00-00')).toBeTruthy();
    expect(isPhone('202-2020000')).toBeTruthy();
    expect(isPhone('123-1231234')).toBeTruthy();
  });

  it('returns TRUE for 10-digit phone numbers with "."', () => {
    expect(isPhone('123.123.1234')).toBeTruthy();
    expect(isPhone('202.202.0000')).toBeTruthy();
    expect(isPhone('123.123.12.34')).toBeTruthy();
    expect(isPhone('202.202.00.00')).toBeTruthy();
    expect(isPhone('202.2020000')).toBeTruthy();
    expect(isPhone('123.1231234')).toBeTruthy();
  });

  it('returns TRUE for 11-digit international phone numbers without separators', () => {
    expect(isPhone('+71231231234')).toBeTruthy();
    expect(isPhone('+12022020000')).toBeTruthy();
    expect(isPhone('+22345678901')).toBeTruthy();
  });

  it('returns TRUE for 11-digit international phone numbers with "-"', () => {
    expect(isPhone('+1-123-123-1234')).toBeTruthy();
    expect(isPhone('+7-202-202-0000')).toBeTruthy();
    expect(isPhone('+2-123-123-12-34')).toBeTruthy();
    expect(isPhone('+1-202-202-00-00')).toBeTruthy();
    expect(isPhone('+1-202-2020000')).toBeTruthy();
    expect(isPhone('+1-123-1231234')).toBeTruthy();
  });

  it('returns TRUE for 11-digit international phone numbers with "."', () => {
    expect(isPhone('+1.123.123.1234')).toBeTruthy();
    expect(isPhone('+7.202.202.0000')).toBeTruthy();
    expect(isPhone('+2.123.123.12.34')).toBeTruthy();
    expect(isPhone('+1.202.202.00.00')).toBeTruthy();
    expect(isPhone('+1.202.2020000')).toBeTruthy();
    expect(isPhone('+1.123.1231234')).toBeTruthy();
  });

  it('returns TRUE for non-phone numbers', () => {
    expect(isPhone('+1.123.123')).toBeFalsy();
    expect(isPhone('-1.123.123.1234')).toBeFalsy();
    expect(isPhone('+1.123..123.1234')).toBeFalsy();
    expect(isPhone('123/123/1234')).toBeFalsy();
    expect(isPhone('+7-202-202--')).toBeFalsy();
    expect(isPhone('+2.123.123.12.34000')).toBeFalsy();
    expect(isPhone('+111.202.202.00.00')).toBeFalsy();
    expect(isPhone('asdasda')).toBeFalsy();
    expect(isPhone('2-222')).toBeFalsy();
  });
})