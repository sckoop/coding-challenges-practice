export const threeSum = function (nums) {
  let results = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] !== nums[i - 1]) {
      let target = -nums[i];
      let start = i + 1;
      let end = nums.length - 1;
      while (start < end) {
        let sum = nums[start] + nums[end];
        if (sum === target) {
          results.push([nums[i], nums[start], nums[end]]);
          end--;
          start++;
          while (start < end && nums[start] === nums[start - 1]) {
            start++;
          }
        } else if (sum < target) {
          start++;
        } else {
          end--;
        }
      }
    }
  }
  return results;
};
