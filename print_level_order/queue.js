'use strict';

class Queue {
  constructor() {
    // can also be a lined list
    this._storage = [];
  }

  enqueue(value) {
    // Vinicio - putting elements at the end of the array
    this._storage.push(value);
  }

  dequeue() {
    return this._storage.shift();
  }

  peek() {
    return this._storage[0];
  }

  isEmpty() {
    if (this._storage.length < 1) {
      return true;
    }
    return false;
  }
}

module.exports = Queue;
