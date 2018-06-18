'use strict';


const myMap = new Map();
const matches = [];

const treeIntersection = (BT1, BT2) => {
  if (!BT1 || !BT2) {
    return undefined;
  }
  const inOrderTraversal = (root) => {
    if (!root) {
      return undefined;
    }
    inOrderTraversal(root.left);
    myMap.set(root.value, 1);
    inOrderTraversal(root.right);
    return undefined;
  };
  inOrderTraversal(BT1.root);

  const inOrderTraversal2 = (root2) => {
    if (!root2) {
      return undefined;
    }
    inOrderTraversal2(root2.left);
    if (myMap.get(root2.value)) {
      matches.push(root2.value);
    }
    inOrderTraversal2(root2.right);
    return undefined;
  };
  inOrderTraversal2(BT2.root);

  return matches;
};

export default treeIntersection;
