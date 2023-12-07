import memoize from '../memoize.js';

describe('memoize function', () => {
  const simpleAdd = (a, b) => a + b;
  const resolver = (...args) => args.join('_');

  test('memoizes the result of a function', () => {
    const memoizedAdd = memoize(simpleAdd);
    expect(memoizedAdd(1, 2)).toBe(3);
    expect(memoizedAdd.cache.has(1)).toBe(true);
  });

  test('uses a custom resolver for cache keys', () => {
    const memoizedAdd = memoize(simpleAdd, resolver);
    memoizedAdd(1, 2);
    expect(memoizedAdd.cache.has('1_2')).toBe(true);
  });

  test('reuses cached results for the same arguments', () => {
    const memoizedAdd = memoize(simpleAdd);
    memoizedAdd(2, 2);
    memoizedAdd(2, 2);
    expect(memoizedAdd.cache.get(2)).toBe(4);
  });

  test('modifying the cache affects subsequent calls', () => {
    const memoizedAdd = memoize(simpleAdd);
    memoizedAdd(3, 3);
    memoizedAdd.cache.set(3, 10);
    expect(memoizedAdd(3, 3)).toBe(10);
  });

  test('throws TypeError for non-function inputs', () => {
    expect(() => memoize(null)).toThrow(TypeError);
    expect(() => memoize(123)).toThrow(TypeError);
  });

  test('works with a custom cache implementation', () => {
    memoize.Cache = WeakMap;
    const memoizedAdd = memoize(simpleAdd);
    const key = {};
    memoizedAdd(key, 2);
    expect(memoizedAdd.cache.has(key)).toBe(true);
    memoize.Cache = Map; // Reset to default
  });
});