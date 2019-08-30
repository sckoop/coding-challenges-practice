export const insertNodeAtPosition = (head, data, position) => {
  let working = head;

  for (let i = 0; i < position - 1; i++) {
    working = working.next;
  }

  working.next = {data, next: working.next};

  return head;
}