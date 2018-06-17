'use strict';

import KAryNode from '../kary-node';
import KAryTree from '../kary-tree';
import printLevelOrder from '../print-level-order';

describe('test K-ary-tree', () => {
  test('Should validate the toString method of K-Ary Tree using Breadth Traversal', () => {
    const one = new KAryNode('A');

    one.appendChild('B'); // 0
    one.appendChild('C'); // 1
    one.appendChild('D'); // 2
    one.appendChild('E'); // 3
    one.appendChild('F'); // 4
    one.appendChild('G'); // 5

    one.children[0].appendChild('H'); // 1st left 1st branch 1-0
    one.children[0].appendChild('I');
    one.children[0].appendChild('J');
    one.children[3].appendChild('K');
    one.children[3].appendChild('L');
    one.children[5].appendChild('M');

    one.children[0].children[0].appendChild('N');
    one.children[0].children[0].appendChild('O');
    one.children[3].children[0].appendChild('P');
    one.children[3].children[1].appendChild('Q');


    const kAryTree = new KAryTree(one);
    expect(printLevelOrder(kAryTree)).toEqual('BCDEFGHIJKLMNOPQR');
    // expect(kAryTree.breadthSearchTraversal(one)).toEqual('\n1\n2\n3\n4\n5\n6\n7\n8');
  });
});
