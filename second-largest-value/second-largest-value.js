'use strict';

export default function findSecondLargestVal(BST) {
  if (!BST.root) return undefined;
  let currentNode = BST.root;
  let secondLargest = '';

  if (!currentNode.right) {
    currentNode = currentNode.left;
    secondLargest = currentNode;
    return secondLargest.value;
  }

  while (currentNode.right !== null) {
    secondLargest = currentNode;
    currentNode = currentNode.right;
  }

  while (currentNode.left !== null) {
    currentNode = currentNode.left;
    secondLargest = currentNode;
  }

  return secondLargest.value;
}
