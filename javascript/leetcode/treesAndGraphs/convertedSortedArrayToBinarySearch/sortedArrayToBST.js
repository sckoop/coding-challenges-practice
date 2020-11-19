// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/631/

export const sortedArrayToBST = (nums) => {
  if (!nums.length) return null;

  const middleIndex = Math.floor(nums.length / 2);

  const node = { val: nums[middleIndex] };
  node.left = sortedArrayToBST(nums.slice(0, middleIndex));
  node.right = sortedArrayToBST(nums.slice(middleIndex + 1));

  return node;
};
