export const zigzagLevelOrder = (root) => {
  const result = [];
  if (!root) return result;
  let currentStack = [root];
  let nextLevelStack = [];
  let currentLevel = 0;

  while (currentStack.length > 0 || nextLevelStack.length > 0) {
    if (!currentStack.length) {
      currentStack = nextLevelStack;
      nextLevelStack = [];
      currentLevel++;
      continue;
    }
    const node = currentStack.pop();
    if (!node) {
      continue;
    }

    if (!result[currentLevel]) {
      result[currentLevel] = [];
    }

    result[currentLevel].push(node.val);

    if (!node.left && !node.right) {
      continue;
    }

    if (currentLevel % 2 === 0) {
      nextLevelStack.push(node.left, node.right);
      continue;
    }
    nextLevelStack.push(node.right, node.left);
  }

  return result;
};
