'use strict';

import BinaryTree from '../../helpers/binary-tree';
import Node from '../../helpers/node';
import treeIntersection from '../tree-intersection';

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
const testTree = new BinaryTree(one);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;

const one2 = new Node(1);
const two2 = new Node(2);
const three2 = new Node(3);
const four2 = new Node(12);
const five2 = new Node(5);
const six2 = new Node(66);
const seven2 = new Node(7);
const eight2 = new Node(83);
const nine2 = new Node(9);
const testTree2 = new BinaryTree(one2);

one2.left = two2;
one2.right = three2;
three2.left = four2;
three2.right = five2;
two2.left = six2;
six2.right = seven2;
seven2.left = eight2;
seven2.right = nine2;

// const matches = treeIntersection(tree1, tree2);

describe('#tree-intersection.js', () => {
  test('#treeIntersection should return matching values from 2 binary trees', () => {
    expect(treeIntersection(testTree, testTree2)).toEqual([7, 9, 2, 1, 3, 5]);
  });
  test('#treeIntersection should return undefined for empty tree', () => {
    expect(treeIntersection(testTree)).toEqual(undefined);
  });
  test('#treeIntersection should return an array', () => {
    expect(treeIntersection(null, testTree2)).toEqual(undefined);
  });
});
