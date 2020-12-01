export const connect = (root) => {
  helper(root, 0, new Map());

  return root;
};

const helper = (node, level, map) => {
  if (!node) return;
  if (map.has(level)) {
    const oldNode = map.get(level);
    node.next = oldNode;
  }

  map.set(level, node);

  helper(node.right, level + 1, map);
  helper(node.left, level + 1, map);
};
