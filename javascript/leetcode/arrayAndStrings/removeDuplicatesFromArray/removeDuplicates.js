// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
export const removeDuplicates = (nums) => {
  const uniqueNumbers = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (uniqueNumbers.has(nums[i])) {
      nums.splice(i, 1);
      i--;
      continue;
    }

    uniqueNumbers.add(nums[i]);
  }

  return nums.length;
};
