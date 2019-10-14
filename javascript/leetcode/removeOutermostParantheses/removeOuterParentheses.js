export const removeOuterParentheses = (input) => {
  let innerString = '';
  let lvl = 0;
  for (const char of input) {
    if (char === '(') {
      lvl++;
    }
    if (lvl > 1) {
      innerString += char;
    }

    if (char === ')') {
      lvl--
    }
  }

  return innerString;
};