'use strict';

const insertShiftArray = module.exports = {};

insertShiftArray.shiftmid = function (myArray, num) {
  if (num === '' || typeof num === 'string') return null;
  if (myArray === '') return null;
  const len = myArray.length;
  const mid = Math.floor(len / 2); // returns than larger int less than or equal to a given number
  let temp = myArray[mid];
  myArray[mid] = num;

  for (let i = mid; i <= len; i++) {
    const tempRight = myArray[i];
    myArray[i] = temp;
    temp = tempRight;
  }
  return myArray;
};

