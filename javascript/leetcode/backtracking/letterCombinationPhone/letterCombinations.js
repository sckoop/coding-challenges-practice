// https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/793/

const combinations = new Map([
  ['2', ['a', 'b', 'c']],
  ['3', ['d', 'e', 'f']],
  ['4', ['g', 'h', 'i']],
  ['5', ['j', 'k', 'l']],
  ['6', ['n', 'm', 'o']],
  ['7', ['p', 'q', 'r', 's']],
  ['8', ['t', 'u', 'v']],
  ['9', ['w', 'x', 'y', 'z']],
]);

export const letterCombinations = (digits) => {
  return digits.split('').reduce((acc, digit) => {
    const digitConversions = combinations.get(digit);
    if (acc.length === 0) return digitConversions;

    const newCombinations = [];

    acc.forEach((combination) => {
      digitConversions.forEach((conversion) => {
        newCombinations.push(combination + conversion);
      });
    });

    return newCombinations;
  }, []);
};
