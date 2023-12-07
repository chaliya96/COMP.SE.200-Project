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

  // Additional test cases based on the specific implementation details of upperFirst.js
});
