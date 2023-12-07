import filter from '../filter.js';

describe('filter function', () => {
  test('filters an array based on a predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([{ 'user': 'barney', 'active': true }]);
  });

  test('returns an empty array when given an empty array', () => {
    expect(filter([], value => value)).toEqual([]);
  });

  test('returns an empty array when given a non-array input', () => {
    expect(filter(null, value => value)).toEqual([]);
    expect(filter(undefined, value => value)).toEqual([]);
    expect(filter(123, value => value)).toEqual([]);
  });

  test('handles different types of predicates', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(filter(numbers, n => n % 2 === 0)).toEqual([2, 4]);
    expect(filter(numbers, n => n > 3)).toEqual([4, 5]);
  });

  test('returns an empty array when no predicate is provided', () => {
    expect(filter([1, 2, 3])).toEqual([]);
  });

  test('handles sparse arrays correctly', () => {
    const sparseArray = [1, , 3]; // eslint-disable-line no-sparse-arrays
    expect(filter(sparseArray, n => n !== undefined)).toEqual([1, 3]);
  });

  test('works correctly with large arrays', () => {
    const largeArray = Array.from({ length: 10000 }, (_, i) => i);
    expect(filter(largeArray, n => n === 9999)).toEqual([9999]);
  });
});
