'use strict';

import repeatedWord from '../repeated_word';

describe('repeated_word.js', () => {
  test('Should return null', () => {
    expect(repeatedWord('')).toEqual(null);
  });
  test('Should return a', () => {
    const myString = 'Once upon a time, there was a brave princess who...';
    expect(repeatedWord(myString)).toEqual('a');
  });
  test('Should return empty string', () => {
    const myString = 'hello upon time, there was a brave princess who...';
    expect(repeatedWord(myString)).toEqual('no repeating words');
  });
});
