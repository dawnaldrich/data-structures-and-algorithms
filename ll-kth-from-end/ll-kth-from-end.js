'use strict';

const llKthFromEnd = (list, n) => {
  if (!list) {
    return null;
  }
  let length = 0;
  let current = list;
  while (current) {
    current = current.next;
    length++;
  }
  if (length <= n) return null;
  const nth = length - n;
  let element = '';
  current = list;
  for (let i = 1; i < nth; i++) {
    element = current.next.value;
    current = current.next;
  }
  return element;
};

export default llKthFromEnd;

