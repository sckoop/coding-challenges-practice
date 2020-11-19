// https://leetcode.com/problems/valid-palindrome/
export const isPalindrome = (text) => {

  const isInvalidChar = (char) => {
    return !char.match(/^[a-z0-9]+$/i)
  }

  if (!text) return true;

  let start = 0;
  let end = text.length - 1;

  while (start < end) {
    const startChar = text.charAt(start).toLowerCase();
    if (isInvalidChar(startChar)) {
      start += 1;
      continue;
    }

    const endChar = text.charAt(end).toLowerCase();
    if (isInvalidChar(endChar)) {
      end -= 1;
      continue;
    }

    if (startChar !== endChar) return false

    start += 1;
    end -= 1;
  }

  return true
};


