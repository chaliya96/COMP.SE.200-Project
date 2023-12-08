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

  test('handles function with no arguments', () => {
    const noArgFunc = () => 42;
    const memoized = memoize(noArgFunc);
    expect(memoized()).toBe(42);
  });
  
  test('handles function returning undefined', () => {
    const undefinedFunc = () => undefined;
    const memoized = memoize(undefinedFunc);
    expect(memoized()).toBeUndefined();
  });
  
  test('handles function throwing error', () => {
    const errorFunc = () => { throw new Error('Test error'); };
    const memoized = memoize(errorFunc);
    expect(memoized).toThrow('Test error');
  });
  
  test('handles resolver throwing error', () => {
    const simpleAdd = (a, b) => a + b;
    const errorResolver = () => { throw new Error('Resolver error'); };
    const memoized = memoize(simpleAdd, errorResolver);
    expect(() => memoized(1, 2)).toThrow('Resolver error');
  });
  
  // test('handles resolver returning non-string', () => {
  //   const simpleAdd = (a, b) => a + b;
  //   const nonStringResolver = (...args) => args;
  //   const memoized = memoize(simpleAdd, nonStringResolver);
  //   memoized(1, 2);
  //   expect(memoized.cache.has('1,2')).toBe(true);
  // });
});