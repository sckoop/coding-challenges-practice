// https://leetcode.com/problems/expressive-words/
export const expressiveWords = (s, words) => {
  // identify the stretchable and non stretachable letters.
  if (!s) return 0;

  const charCount = (string) => {
    const charCount = [];

    let count = 0;
    let lastChar = string.charAt(0);
    for (let char of string) {
      if (lastChar === char) {
        count++;
        continue;
      }

      charCount.push({char: lastChar, count});
      lastChar = char;
      count = 1;
    }
    charCount.push({char: lastChar, count});

    return charCount
  }

  const sCount = charCount(s);

  return words.reduce((acc, word) => {
    const wordCount = charCount(word);

    if (wordCount.length !== sCount.length) return acc;

    for (let i = 0; i < wordCount.length; i++) {
      const wordChar = wordCount[i];
      const sChar = sCount[i];

      const isSameChar = wordChar.char === sChar.char;
      const isExpressiveChar = sChar.count > 2 && sChar.count >= wordChar.count;
      const isSameCharAmount = wordChar.count === sChar.count;


      if (isSameChar && (isExpressiveChar || isSameCharAmount)) {
        continue;
      }

      return acc;
    }

    return acc + 1;
  }, 0);
};
