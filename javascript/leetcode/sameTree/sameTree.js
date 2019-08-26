// https://leetcode.com/problems/same-tree/

export const isSameTree = function(p, q) {
  const isSame = (p, q) => (p && q && p.val === q.val);

  const stack = [{p, q,}];

  while(stack.length > 0) {
    const current = stack.pop();

    if (!current.q && !current.p) continue;

    if (!isSame(current.p, current.q)) return false;

    stack.push({p: current.p.left, q: current.q.left });
    stack.push({p: current.p.right, q: current.q.right });

  }

  return true;
};
