// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/566/

export const maxSubArray = (nums) => {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(maxCurrent + nums[i], nums[i]);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }

  return maxGlobal;
};
