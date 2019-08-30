export const arrayToLinkedList = (data) => {
  let head = null;

  data.reverse().forEach((number) => {
    head = {data: number, next: head};
  });

  return head;
}

export const linkedListToArray = (list) => {
  let pointer = list;
  const array = [];

  while (pointer.next) {
      array.push(pointer.data);
      pointer = pointer.next;
  }
  array.push(pointer.data);

  return array;
};