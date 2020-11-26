// https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/807

export const canJump = (nums) => {
  let position = 0;
  let max = 0;
  let goal = nums.length - 1;

  while (position < nums.length) {
    max = Math.max(max, position + nums[position]);

    if (max >= goal) return true;

    if (max <= position && nums[position] === 0) return false;

    position++;
  }

  return false;
};
