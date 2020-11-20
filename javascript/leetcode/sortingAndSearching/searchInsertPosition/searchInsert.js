// https://leetcode.com/problems/search-insert-position/

export const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  if (nums[0] > target) {
    return 0;
  }

  if (nums[nums.length - 1] < target) {
    return nums.length;
  }

  while (left < right) {
    let middle = left + Math.floor((right - left) / 2);

    const value = nums[middle];
    if (value === target) {
      return middle;
    }

    if (value > target) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return left;
};
