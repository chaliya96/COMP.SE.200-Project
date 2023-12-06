import add from '../add.js';
import { expect } from 'chai';

describe('Add function tests', () => {
  it('should add 6 and 4 to get 10', () => {
    expect(add(6, 4)).to.equal(10);
  });

  it('adds two positive numbers', () => {
    expect(add(1, 2)).to.equal(3);
  });

  it('adds a positive number and zero', () => {
    expect(add(1, 0)).to.equal(1);
  });

  it('adds two negative numbers', () => {
    expect(add(-1, -2)).to.equal(-3);
  });

  it('adds a positive number and a negative number', () => {
    expect(add(1, -2)).to.equal(-1);
  });

  it('throws an error when adding non-numeric values', () => {
    expect(() => add('a', 'b')).to.throw();
  });
});