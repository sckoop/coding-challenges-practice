// https://leetcode.com/explore/interview/card/top-interview-questions-medium/107/linked-list/783/
const calcValue = (node1, node2, hasTransfer) => {
  const extra = hasTransfer ? 1 : 0;
  const val1 = node1 ? node1.val : 0;
  const val2 = node2 ? node2.val : 0;
  const result = val1 + val2 + extra;

  if (result >= 10) {
    return { val: result % 10, hasTransfer: true };
  }

  return { val: result, hasTransfer: false };
};

export const addTwoNumbers = (l1, l2) => {
  let resultHead = null;

  let current1 = l1;
  let current2 = l2;
  let currentResult;
  let hasTransfer = false;

  while (current1 !== null || current2 !== null) {
    if (resultHead === null) {
      const result = calcValue(current1, current2, hasTransfer);
      resultHead = { val: result.val, next: null };
      currentResult = resultHead;

      hasTransfer = result.hasTransfer;
      current1 = current1.next;
      current2 = current2.next;
      continue;
    }

    const result = calcValue(current1, current2, hasTransfer);
    currentResult.next = { val: result.val, next: null };
    currentResult = currentResult.next;

    hasTransfer = result.hasTransfer;
    current1 = current1 ? current1.next : null;
    current2 = current2 ? current2.next : null;
  }

  if (hasTransfer) {
    currentResult.next = { val: 1, next: null };
  }

  return resultHead;
};
