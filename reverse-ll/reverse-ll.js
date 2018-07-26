
export default function reverseList(list) {
  if (!list) return undefined;
  let current = list.head;
  let previous = null;
  let save = null;
  while (current) {
    save = current.next;
    current.next = previous;
    previous = current;
    current = save;
  }
  list.head = previous;
  return list.head.value;
}

