'use strict';

const largestProduct = module.exports = {};

largestProduct.findProduct = function (arr) {
  if (!Array.isArray(arr)) {
    throw new Error('input should be an array');
  }
  let sum = -1;
  for (let rows = 0; rows < arr.length; rows++) {
    for (let cols = 0; cols < arr[rows].length; cols++) {
      const current = arr[rows][cols];
      if (rows - 1 >= 0) {
        const upVal = arr[rows - 1][cols];
        if (current * upVal > sum) {
          sum = current * upVal;
        }
      }
      if (rows + 1 < arr.length) {
        const downVal = arr[rows + 1][cols];
        if (current * downVal > sum) {
          sum = current * downVal;
        }
      }
      if (cols - 1 >= 0) {
        const leftVal = arr[rows][cols - 1];
        if (current * leftVal > sum) {
          sum = current * leftVal;
        }
      }
      if (cols + 1 >= 0) {
        const leftVal = arr[rows][cols + 1];
        if (current * leftVal > sum) {
          sum = current * leftVal;
        }
      }
    }
  }
  return sum;
};

