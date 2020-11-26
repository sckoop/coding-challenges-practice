//leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646
https: export const rotate = (nums, k) => {
  const rotated = [];
  const position = nums.length - k;

  for (let i = position; i < nums.length; i++) {
    rotated.push(nums[i]);
  }

  for (let i = 0; i < position; i++) {
    rotated.push(nums[i]);
  }

  return rotated;
};
