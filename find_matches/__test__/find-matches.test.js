'use strict';

import KAryNode from '../kary-node';
import KAryTree from '../kary-tree';
import findMatches from '../find-matches';

describe('test K-ary-tree', () => {
  const one = new KAryNode('A');

  one.appendChild('B'); // 0
  one.appendChild('C'); // 1
  one.appendChild('D'); // 2
  one.appendChild('E'); // 3
  one.appendChild('G'); // 4
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
  test('Should return match', () => {
    expect(findMatches(kAryTree, 'Q')).toEqual(['Q']);
    // expect(findMatches(kAryTree, 'G')).toEqual(['G', 'G']);
  });
  test('Should return multiple matching values', () => {
    expect(findMatches(kAryTree, 'G')).toEqual(['G', 'G']);
  });
  test('Should return an empty array', () => {
    expect(findMatches(kAryTree, 'zz')).toEqual([]);
  });
});
