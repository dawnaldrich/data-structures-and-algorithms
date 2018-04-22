'use strict';

const arr = [1, 2, 3, 4];
const len = arr.length;
const revArray = [];

function reverseArray(myArray) {
  for (let i = len; i > 0; i--) {
    revArray.push(myArray[i - 1]);
  }
  return revArray;
}

reverseArray(arr);

