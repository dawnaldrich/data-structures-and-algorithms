'use strict';

import Node from './../node';
import BinarySearchTree from './../binary-search-tree';
import BinaryTree from './../binary-tree';
import findSecondLargestVal from './../second-largest-value';

describe('test Binary Search Tree', () => {
test('test edge case when subtree has no left value - smaller value to right', () => { // eslint-disable-line
    const one = new Node(10);
    const two = new Node(15);
    const three = new Node(13);
    const four = new Node(12);
    const binaryTree = new BinaryTree(one);
    one.right = two;
    two.left = three;
    three.right = four;
    expect(findSecondLargestVal(binaryTree)).toEqual(13);
  });
  test('edge case when there are only only left values', () => {
    const bstLeft = new BinarySearchTree();
    bstLeft.insert(new Node(10));
    bstLeft.insert(new Node(7));
    bstLeft.insert(new Node(5));
    expect(findSecondLargestVal(bstLeft)).toEqual(7);
  });
  test('Should test simple binary search tree for second largest value', () => { // eslint-disable-line
    const bstSimple = new BinarySearchTree();
    bstSimple.insert(new Node(10));
    bstSimple.insert(new Node(15));
    bstSimple.insert(new Node(8));
    bstSimple.insert(new Node(1));
    bstSimple.insert(new Node(6));
    bstSimple.insert(new Node(12));
    bstSimple.insert(new Node(16));
    expect(findSecondLargestVal(bstSimple)).toEqual(15);
  });
  test('only 1 right child', () => { // eslint-disable-line
    const bstOne = new BinarySearchTree();
    bstOne.insert(new Node(10));
    bstOne.insert(new Node(15));
    expect(findSecondLargestVal(bstOne)).toEqual(10);
  });
});
