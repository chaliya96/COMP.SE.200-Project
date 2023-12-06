import add from '../add.js';

test('adds two positive numbers', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds a positive number and zero', () => {
  expect(add(1, 0)).toBe(1);
});

test('adds two negative numbers', () => {
  expect(add(-1, -2)).toBe(-3);
});

test('adds a positive number and a negative number', () => {
  expect(add(1, -2)).toBe(-1);
});

test('throws an error when adding non-numeric values', () => {
  expect(() => {
    add('a', 'b');
  }).toThrow();
});