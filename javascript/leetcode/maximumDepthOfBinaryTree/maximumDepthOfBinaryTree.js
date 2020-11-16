// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/625/
export const maxDepth = (root) => {
  if (!root) {
    return 0;
  }

  return dfs(root, 1, 1);
};

const dfs = (node, currentLevel) => {
  if (node.left === null && node.right === null) {
    return currentLevel;
  }

  const leftLevel = node.left ? dfs(node.left, currentLevel + 1) : currentLevel;
  const rightLevel = node.right
    ? dfs(node.right, currentLevel + 1)
    : currentLevel;

  return leftLevel > rightLevel ? leftLevel : rightLevel;
};
