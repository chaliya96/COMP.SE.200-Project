import upperFirst from '../upperFirst.js'; // Adjust the path as necessary

describe('upperFirst function tests', () => {
  test('converts the first character to upper case if it is lower case', () => {
    expect(upperFirst('fred')).toBe('Fred');
  });

  test('leaves the string unchanged if the first character is already upper case', () => {
    expect(upperFirst('FRED')).toBe('FRED');
  });

  test('handles an empty string', () => {
    expect(upperFirst('')).toBe('');
  });

  test('handles strings with only one character', () => {
    expect(upperFirst('f')).toBe('F');
  });

  // test('handles non-string inputs', () => {
  //   expect(upperFirst(123)).toBe('123');
  //   expect(upperFirst(null)).toBe('Null');
  //   expect(upperFirst(undefined)).toBe('Undefined');
  // });

  test('handles strings with leading spaces', () => {
    expect(upperFirst(' fred')).toBe(' fred');
  });

  test('handles strings starting with non-alphabetic characters', () => {
    expect(upperFirst('1fred')).toBe('1fred');
    expect(upperFirst('!hello')).toBe('!hello');
  });
});