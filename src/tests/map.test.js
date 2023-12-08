import map from '../map.js';

describe('map function', () => {
  const square = n => n * n;

  test('correctly maps an array with a provided iteratee', () => {
    expect(map([4, 8], square)).toEqual([16, 64]);
  });

  test('returns an empty array when given an empty array', () => {
    expect(map([], square)).toEqual([]);
  });

  test('returns an empty array when given a non-array input', () => {
    expect(map(null, square)).toEqual([]);
    expect(map(undefined, square)).toEqual([]);
    expect(map(123, square)).toEqual([]);
  });

  test('handles different types of iteratee functions', () => {
    const identity = n => n;
    expect(map([1, 2, 3], identity)).toEqual([1, 2, 3]);

    const addIndex = (value, index) => value + index;
    expect(map([1, 2, 3], addIndex)).toEqual([1, 3, 5]);
  });

  // test('returns an array of undefined if no iteratee is provided', () => {
  //   expect(map([1, 2, 3])).toEqual([undefined, undefined, undefined]);
  // });

  test('iteratee can use index and array', () => {
    const multiplyByIndex = (value, index, array) => value * index * array.length;
    expect(map([1, 2, 3], multiplyByIndex)).toEqual([0, 6, 18]);
  });

  test('handles empty array', () => {
    const iteratee = (num) => num * 2;
    expect(map([], iteratee)).toEqual([]);
  });
  
  // test('handles array with non-numeric values', () => {
  //   const iteratee = (num) => num * 2;
  //   expect(map(['a', {}, null], iteratee)).toEqual([NaN, NaN, NaN]);
  // });
  
  test('handles iteratee returning undefined', () => {
    const iteratee = () => undefined;
    expect(map([1, 2, 3], iteratee)).toEqual([undefined, undefined, undefined]);
  });
  
  test('handles iteratee throwing error', () => {
    const iteratee = () => { throw new Error('Test error'); };
    expect(() => map([1, 2, 3], iteratee)).toThrow('Test error');
  });
  
  // test('handles iteratee not a function', () => {
  //   expect(map([1, 2, 3], 'not a function')).toEqual([undefined, undefined, undefined]);
  // });
});