'use strict';

import LinkedList from '../linked-list';
import reverseList from '../reverse-ll';

describe('reverse-lls.js', () => {
  test('#insertAtEnd', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    expect(testList.head.value).toEqual(5);

    testList.insertAtEnd(6);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);

    testList.insertAtEnd(7);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(7);
  });

  test('should return first value in list', () => {
    const list = new LinkedList();
    list.insertAtEnd(20);
    list.insertAtEnd(50);
    list.insertAtEnd(30);
    list.insertAtEnd(60);
    expect(reverseList(list)).toEqual(60);
    expect(reverseList()).toEqual(undefined);
  });
});

