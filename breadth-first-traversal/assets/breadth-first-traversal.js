'use strict';

// import KaryNode from '../../helpers/kary-node';
// import KAryTree from '../../helpers/kary-tree';
// import Queue from '../../helpers/queue';


// function {
//
// }

const _inOrderTraversal = (rootNode, treeMap) => {
  if (!rootNode) {
    return undefined;
  }
  _inOrderTraversal(rootNode.left, treeMap);

  if (rootNode.value % 2 === 1) {
    treeMap.set(rootNode.value, 1);
    // treeMap[rootNode.value] = 1;
  }

  _inOrderTraversal(rootNode.right, treeMap);
  return treeMap;
};
