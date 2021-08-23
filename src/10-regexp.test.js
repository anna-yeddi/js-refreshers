import { boolean } from 'yargs';
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
})