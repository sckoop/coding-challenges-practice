// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/628/

export const levelOrder = (root) => {
  if (!root) return [];
  const levels = [];
  const queue = [{ node: root, level: 0 }];

  while (queue.length) {
    const { node: currentNode, level: currentLevel } = queue.shift();

    if (!levels[currentLevel]) {
      levels[currentLevel] = [];
    }

    levels[currentLevel].push(currentNode.val);

    if (currentNode.left) {
      queue.push({ node: currentNode.left, level: currentLevel + 1 });
    }

    if (currentNode.right) {
      queue.push({ node: currentNode.right, level: currentLevel + 1 });
    }
  }

  return levels;
};
