'use strict';

class Queue {
  constructor() {
    // can also be a lined list
    this._storage = [];
  }

  enqueue(value) {
    this._storage.push(value);
  }

  dequeue() {
    return this._storage.shift();
  }

  peek() {
    return this._storage[0];
  }

  isEmpty() {
    if (this.storage.length < 1) {
      return true;
    }
    return false;
  }
}

module.exports = Queue;
