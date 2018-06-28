'use strict';

// LIFO last in first out

export default class Stack {
  constructor() {
    this.storage = [];
  }

  push(value) {
    this.storage.push(value);
  }
  pop() {
    return this.storage.pop(); // removes last element and returns that element
  }
  isEmpty() {
    if (this.storage.length < 1) {
      return true;
    }
    return false;
  }
}
