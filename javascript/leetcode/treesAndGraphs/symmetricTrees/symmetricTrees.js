// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/627/

export const isSymmetric = (root) => {
  if (!root) return true;

  return compareTree(root.left, root.right);
};

const compareTree = (left, right) => {
  if (!left && !right) return true;
  if (!left || !right) return false;

  if (left.val !== right.val) return false;

  return (
    compareTree(left.left, right.right) && compareTree(left.right, right.left)
  );
};
