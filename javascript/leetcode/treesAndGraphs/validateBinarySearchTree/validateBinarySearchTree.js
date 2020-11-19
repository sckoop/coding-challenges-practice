// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/625/

export const isValidBST = (root) => {
  if (!root) return true;

  return checkNode(root, null, null);
};

const checkNode = (root, min, max) => {
  if (!root) return true;

  if (min !== null && root.val <= min) return false;
  if (max !== null && root.val >= max) return false;

  const isLeftTreeValid = checkNode(root.left, min, root.val);
  if (!isLeftTreeValid) return false;

  const isRightTreeValid = checkNode(root.right, root.val, max);
  return isRightTreeValid;
};
