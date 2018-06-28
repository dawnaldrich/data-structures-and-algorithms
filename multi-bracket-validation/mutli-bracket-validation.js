'use strict';

import Stack from './stack';

function bracketValidation(strToValidate) {
  const stack = new Stack();
  if (!strToValidate) return null;
  const len = strToValidate.length;
  for (let i = 0; i < len; i++) {
    if (strToValidate.charAt(i) === '[' || strToValidate.charAt(i) === '{' ||
      strToValidate.charAt(i) === '(') {
      stack.push(strToValidate.charAt(i));
    } else if (strToValidate.charAt(i) === ']') {
      if (stack.pop() !== '[') {
        return false;
      }
    } else if (strToValidate.charAt(i) === '}') {
      if (stack.pop() !== '{') {
        return false;
      }
    } else if (strToValidate.charAt(i) === ')') {
      if (stack.pop() !== '(') {
        return false;
      }
    }
  }
  console.log(stack);
  if (stack.isEmpty()) {
    return true;
  }
  return false;
}

// bracketValidation('t([{}])');

export default bracketValidation;
