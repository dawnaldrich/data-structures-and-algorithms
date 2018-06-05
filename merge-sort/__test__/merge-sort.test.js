'use strict';

import mergeSort from '../merge-sort';

describe('merge-sort.js', () => {
  test('Should return sorted array', () => {
    expect(mergeSort([200, 0, 3, 8, 29, 44, 133, 99, 20]))
      .toEqual([0, 3, 8, 20, 29, 44, 99, 133, 200]);
  });
  test('Should return 0', () => {
    expect(mergeSort([0])).toEqual([0]);
  });
  test('Should return null for empty value', () => {
    expect(mergeSort()).toEqual(null);
  });
});
