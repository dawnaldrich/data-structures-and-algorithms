'use strict';

function merge(left, right) {
  const mergeArray = [];
  const lLen = left.length;
  const rLen = right.length;
  let i = 0;
  let j = 0;
  while (i < lLen && j < rLen) {
    if (left[i] < right[j]) {
      mergeArray.push(left[i++]);
    } else {
      mergeArray.push(right[j++]);
    }
  }
  return mergeArray.concat(left.slice(i)).concat(right.slice(j));
}

const mergeSort = (array) => {
  if (!array) return null;
  const len = array.length;
  if (len < 2) return array;
  const mid = Math.floor(len / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

export default mergeSort;


// console.log(mergeSort([200, 0, 3, 8, 20, 29, 44, 133, 99, 20]));
