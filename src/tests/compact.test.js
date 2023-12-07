import compact from '../compact.js';

describe('compact function', () => {
//   test('removes all falsey values from an array', () => {
//     expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
//   });

  test('returns an empty array when all values are falsey', () => {
    expect(compact([0, false, '', null, undefined, NaN])).toEqual([]);
  });

//   test('returns the same array when all values are truthy', () => {
//     expect(compact([1, 'a', {}, [], true])).toEqual([1, 'a', {}, [], true]);
//   });

  test('returns an empty array for an empty array', () => {
    expect(compact([])).toEqual([]);
  });

//   test('handles non-array inputs', () => {
//     expect(compact(null)).toEqual([]);
//     expect(compact(undefined)).toEqual([]);
//     expect(compact('string')).toEqual([]);
//   });

//   test('does not remove nested arrays', () => {
//     expect(compact([[], [1], [false]])).toEqual([[], [1], [false]]);
//   });

//   test('does not remove objects and other complex types', () => {
//     const obj = { a: 1 };
//     const func = () => {};
//     expect(compact([obj, func])).toEqual([obj, func]);
//   });
});