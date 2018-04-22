'use strict';

const largestProductArray = require('../largest-product');

describe('largest-product.js', () => {
  test('Should return index of num', () => {
    expect(largestProductArray.findLarge([[1, 2], [3, 4], [5, 6], [7, 8]])).toEqual(56);
  });
  test('Should return -1 for not found', () => {
    expect(largestProductArray.findLarge('')).toEqual(-1);
  });

});
