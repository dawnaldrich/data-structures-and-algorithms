'use strict';

const binarySearch = require('../binary-search');

describe('binary-search.js', () => {
  test('Should return index of num', () => {
    expect(binarySearch.findNum([1, 2, 3, 4, 5], 2)).toEqual(1);
  });
  test('Should return -1 for not found', () => {
    expect(binarySearch.findNum([1, 2, 3, 4, 5], 7)).toEqual(-1);
  });
  test('Should return null', () => {
    expect(binarySearch.findNum([1, 2, 3, 4, 5], 'dog')).toEqual(null);
  });
});
