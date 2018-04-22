'use strict';

const newArray = [];
function reverseArray (myArray){
  const len = myArray.length;
  for (let i = len - 1; i > -1; i--) {
    const num = myArray[i];
    newArray.push(num);
  }

  return newArray;
}

reverseArray([2, 3, 5, 7, -11, 13, 17, 19, 23, 29, 31, -37, 41, 43, 47, 137]);

