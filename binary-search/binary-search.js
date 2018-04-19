'use strict';

const binarySearch = module.exports = {};

binarySearch.findNum = function (myArray, num) {
  if (num === '' || typeof num === 'string') return null;
  const len = myArray.length;

  for (let i = 0; i < len; i++) {
    if (myArray[i] === num) return (i);
  }

  return -1;
};
