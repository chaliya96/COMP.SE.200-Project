import words from '../words.js';

describe('words function', () => {
  test('splits a standard sentence into words', () => {
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
  });

  test('uses a custom regex pattern to split words', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
  });

  test('handles unicode strings', () => {
    expect(words('ñandú, über, français')).toEqual(['ñandú', 'über', 'français']);
  });

  test('returns an empty array for an empty string', () => {
    expect(words('')).toEqual([]);
  });

  test('splits words correctly when no pattern is provided', () => {
    expect(words('The quick brown fox')).toEqual(['The', 'quick', 'brown', 'fox']);
  });

  // test('handles non-string inputs', () => {
  //   expect(words(123)).toEqual([]);
  //   expect(words(null)).toEqual([]);
  //   expect(words(undefined)).toEqual([]);
  // });

  test('handles strings with special characters', () => {
    expect(words('Hello, world!')).toEqual(['Hello', 'world']);
  });
});