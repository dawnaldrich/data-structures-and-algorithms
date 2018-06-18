'use strict';

const repeatedWord = (string) => {
  if (string === '') return null;
  const newString = string.replace(/[\W_]+/g, ' ').toLowerCase();
  newString.replace(/\s\s+/g, ' '); // remove tabs, newlines, and double-spaces
  // let wordFound = false;
  const wordArray = newString.trim().split(' ');
  console.log(wordArray);

  const resultMap = new Set();

  for (let i = 0; i < wordArray.length; i++) {
    const value = wordArray[i];
    if (resultMap.has(value)) {
      return value;
    }
    resultMap.add(value);
  }

  return 'no repeating words';
};
export default repeatedWord;

