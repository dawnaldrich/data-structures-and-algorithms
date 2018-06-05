'use strict';

import Queue from './queue';

export default class KAryTree {
  constructor(root) {
    this.root = root;
  }

  // Time : O(n)
  // Space : O(w) -> O(n)
  breadthSearchTraversal() {
    if (!this.root) {
      return null;
    }
    return this._breadthFirstSearch(this.root);
  }

  _breadthFirstSearch(root) { // eslint-disable-line
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();
      // console.log is where any other operation can replace
      console.log(`Visiting ${currentNode.value}`);
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
  }
}


