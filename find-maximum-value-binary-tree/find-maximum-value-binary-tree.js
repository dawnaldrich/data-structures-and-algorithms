'use strict';

let max = '0';
// const nodeVal = '';
// let leftNode = '';
// let rightNode = '';
// let rootN = '';

const findMaximumValue = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  findMaximumValue(rootNode.left);
  if (rootNode.value > max) {
    max = rootNode.value;
  }
  findMaximumValue(rootNode.right);
  return max;
};

export default findMaximumValue;
