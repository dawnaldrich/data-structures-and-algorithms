'use strict';

const largestProduct = require('../largest-product');

describe('largest-product.js', () => {
  test('Should return the greatest product of 2 adjacent numbers in an array', () => {
    expect(largestProduct.findProduct([[1, 2], [3, 4], [5, 6], [7, 8]])).toEqual(56);
    expect(largestProduct.findProduct([[123, 2], [3, 58], [0, 0], [7, 45]])).toEqual(369);
  });
});
describe('largest-product.js null', () => {
  test('Should return the greatest product of 2 adjacent numbers in an array', () => {
    expect(largestProduct.findProduct([[], []])).toEqual(-1);
  });
});
