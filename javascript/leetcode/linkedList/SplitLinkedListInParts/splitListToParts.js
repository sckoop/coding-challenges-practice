// https://leetcode.com/problems/split-linked-list-in-parts/

export const splitListToParts = (root, k) => {
  let total = 0;
  let current = root;

  while (current !== null) {
    current = current.next;
    total++;
  }

  const sizePerArray = Math.floor(total / k) || 1;
  const amountOfBiggerArrays = k >= total ? 0 : total % k;
  const results = [];

  current = root;

  for (let i = 0; i < k; ++i) {
    let head = {val: 0, next: {}};
    let write = head;
    const listNodeLength = sizePerArray + (i < amountOfBiggerArrays ? 1 : 0);
    for (let j = 0; j < listNodeLength; ++j) {
      if (current !== null) {
        write = write.next || {};
        write.val = current.val;
        write.next = {};
        current = current.next;
      }
    }
    write.next = null;

    results.push(head.next);
  }

  return results;
};
