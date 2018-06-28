'use strict';

// import Stack from 'stack';
import bracketValidation from '../mutli-bracket-validation';

describe('test bracket validation', () => {
  test('Should return true', () => {
    expect(bracketValidation('t([{}])')).toBe(true);
  });
  test('Should return false', () => {
    expect(bracketValidation('t([{}]')).toBe(false);
  });
  test('Should return null', () => {
    expect(bracketValidation('')).toEqual(null);
  });
});

