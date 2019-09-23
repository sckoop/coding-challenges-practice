export const searchBST = (root, val) => {
  if (!root) return null;

  if (root.val === val) return root;

  const left = searchBST(root.left, val);
  if (left) return left;

  const right = searchBST(root.right, val);

  return right || null;
};