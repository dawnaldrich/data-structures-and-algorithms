
export default function reverseList(list) {
  if (list.length < 2) {
    return;
  }

  let first = list.head;
  let second = first.next;

  while (second) {
    const temp = second.next;
    first = second;
    second = temp;
  }

  list.head.next = null;
  list.head.next = first;
}

