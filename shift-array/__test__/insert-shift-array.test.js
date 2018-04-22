'use strict';

const insertShiftArray = require('../insert-shift-array');

describe('insert-shift-array.js', () => {
  test('Should return null', () => {
    expect(insertShiftArray.shiftmid('', 'dog')).toEqual(null);
  });
  test('num should insert in the middle and the following numbers shift to the' +
    ' right', () => {
    expect(insertShiftArray.shiftmid([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
  });
  test('Should return null if array is empty', () => {
    expect(insertShiftArray.shiftmid('', 16)).toEqual(null);
  });
});
