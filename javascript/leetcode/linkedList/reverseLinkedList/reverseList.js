// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/

export const reverseList = (head, newHead) => {
  if (!head && newHead) return newHead;
  if (!head) return head;

  const next = head.next;
  const newNode = head;
  newNode.next = newHead || null;

  return reverseList(next, newNode);
};

export const reverseListIteratively = (head) => {
  if (!head) return head;
  const stack = [];

  let current = head;
  while (current) {
    stack.push(current);
    current = current.next;
  }

  let newHead = null;
  let prev = null;
  while (stack.length) {
    const current = stack.pop();
    if (!newHead) {
      newHead = current;
    }
    if (prev) {
      prev.next = current;
    }
    prev = current;
  }
  prev.next = null;

  return newHead;
};
