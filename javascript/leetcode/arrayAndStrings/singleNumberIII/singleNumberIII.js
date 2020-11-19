// https://leetcode.com/problems/single-number-iii/

export const singleNumberIII = (arr) => {
  const singleNumbers = new Set();

  arr.forEach((number) => {
    if (singleNumbers.has(number)) {
      singleNumbers.delete(number);
      return;
    }

    singleNumbers.add(number);
  });

  return [...singleNumbers];
}
