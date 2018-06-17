'use strict';

import llKthFromEnd from '../ll-kth-from-end';

describe('ll-kth-from-end\'.js', () => {
  const list = {
    value: 8,
    next: {
      value: 6,
      next: {
        value: 7,
        next: {
          value: 5,
          next: {
            value: 3,
            next: {
              value: 0,
              next: {
                value: 9,
                next: null,
              },
            },
          },
        },
      },
    },
  };

  test.only('Should return nth from end', () => {  //eslint-disable-line
    expect(llKthFromEnd(list, 3))
      .toEqual(5);
  });
});
