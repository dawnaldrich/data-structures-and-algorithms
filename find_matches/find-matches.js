import Queue from './queue';

const findMatches = (kTree, value) => {
  if (!kTree.root || !value) {
    return undefined;
  }

  const allValues = [];
  const matches = [];
  const queue = new Queue();
  queue.enqueue(kTree.root);

  let currentNode = null;
  while (!queue.isEmpty()) {
    currentNode = queue.dequeue();
    // console.log is where any other operation can replace
    allValues.push(currentNode.value);
    for (let i = 0; i < currentNode.children.length; i++) {
      queue.enqueue(currentNode.children[i]);
    }
  }

  for (let i = 0; i < allValues.length; i++) {
    if (allValues[i] === value) {
      matches.push(value);
    }
  }

  return matches;
};
export default findMatches;
