import upperFirst from '../upperFirst.js'; 
import { expect } from 'chai';

describe('upperFirst function tests', () => {
  it('converts the first character to upper case if it is lower case', () => {
    expect(upperFirst('fred')).to.equal('Fred');
  });

  it('leaves the string unchanged if the first character is already upper case', () => {
    expect(upperFirst('FRED')).to.equal('FRED');
  });

  it('handles an empty string', () => {
    expect(upperFirst('')).to.equal('');
  });

  it('handles strings with only one character', () => {
    expect(upperFirst('f')).to.equal('F');
  });

// Below test cases can be removed if deemed unnecessary

it('handles non-string inputs like numbers', () => {
    expect(upperFirst(1234)).to.equal('1234'); // Or whatever the expected behavior is
  });

  it('handles strings with leading spaces', () => {
    expect(upperFirst(' fred')).to.equal(' fred'); // Assumes no trimming
  });

  it('handles strings starting with special characters', () => {
    expect(upperFirst('#hello')).to.equal('#hello');
  });

  it('handles strings with Unicode characters', () => {
    expect(upperFirst('ñandú')).to.equal('Ñandú'); // Based on function's Unicode handling
  });
});

