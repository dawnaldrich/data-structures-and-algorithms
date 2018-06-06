'use strict';

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function partition(array, left, right) {
  const pivotVal = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i] < pivotVal) {
      i++;
    }

    while (array[j] > pivotVal) {
      j--;
    }

    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

const quickSort = (array, left, right) => {
  let index;
  if (!array) return null;

  if (array.length > 1) {
    left = typeof left !== 'number' ? 0 : left; // eslint-disable-line
    right = typeof right !== 'number' ? array.length - 1 : right; // eslint-disable-line

    index = partition(array, left, right);

    if (left < index - 1) {
      quickSort(array, left, index - 1);
    }

    if (index < right) {
      quickSort(array, index, right);
    }
  }
  return array;
};

export default quickSort;

