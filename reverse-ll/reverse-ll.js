
export default function reverseList(list) {
  if (!list) return undefined;
  let current = list.head;
  let previous = null;
  while (current) {
    const save = current.next;
    current.next = previous;
    previous = current;
    current = save;
  }
  return previous.value;
}

