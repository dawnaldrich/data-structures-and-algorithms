'use strict';

import LinkedList from '../linked-list';

const reverseList = require('../reverse-ll');

const list = new LinkedList(10);
list.insertAtEnd(20);
list.insertAtEnd(50);
list.insertAtEnd(30);
list.insertAtEnd(60);
list.insertAtEnd(1);
list.insertAtEnd(20);

describe('reverse-lls.js', () => {
  test('Should return null', () => {
    expect(reverseList(list)).toEqual(null);
  });
});
