import isEmpty from '../isEmpty.js';

describe('isEmpty function', () => {
  test('returns true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('returns true for primitive types', () => {
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
  });

  test('handles arrays', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  test('handles objects', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('handles strings', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty('text')).toBe(false);
  });

  test('handles maps and sets', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
    const map = new Map();
    map.set('a', 1);
    expect(isEmpty(map)).toBe(false);
    const set = new Set();
    set.add(1);
    expect(isEmpty(set)).toBe(false);
  });

  test('returns true for function and date objects', () => {
    expect(isEmpty(function() {})).toBe(true);
    expect(isEmpty(new Date())).toBe(true);
  });

  test('handles array-like objects', () => {
    const emptyArgs = (function() { return arguments })();
    expect(isEmpty(emptyArgs)).toBe(true);
  });

  test('handles non-empty array-like objects', () => {
    const nonEmptyArgs = (function() { return arguments })(1, 2, 3);
    expect(isEmpty(nonEmptyArgs)).toBe(false);
  });
  
});