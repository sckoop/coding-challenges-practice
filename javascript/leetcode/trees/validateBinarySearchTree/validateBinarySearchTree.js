// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/625/

export const isValidBST = (root) => {
  if (!root) return true;

  const isValidLeft = checkNode(root.left, [root.val], []);
  if (!isValidLeft) return false;

  return checkNode(root.right, [], [root.val]);
};

const checkNode = (root, smallerThan, biggerThan) => {
  if (!root) return true;

  const isSmaller = smallerThan.reduce((acc, value) => {
    if (!acc) return false;
    return acc && value > root.val;
  }, true);
  if (!isSmaller) return false;

  const isBigger = biggerThan.reduce((acc, value) => {
    if (!acc) return false;
    return acc && value < root.val;
  }, true);
  if (!isBigger) return false;

  const checkLeftTree = checkNode(
    root.left,
    [...smallerThan, root.val],
    biggerThan
  );
  if (!checkLeftTree) return false;

  const checkRightTree = checkNode(root.right, smallerThan, [
    ...biggerThan,
    root.val,
  ]);

  return checkRightTree;
};
