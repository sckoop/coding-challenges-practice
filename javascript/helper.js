class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  static create(val) {
    return val === null ? null : new Node(val);
  }
}

export const createTreeFormArray = (data) => {
  if (data.length === 0) return null;

  const tree = Node.create(data.shift());
  const queue = [];
  queue.push(tree);

  while (queue.length > 0) {
    const current = queue.shift();
    const left = data.shift();
    const right = data.shift();
    if (left !== undefined) {
      current.left = Node.create(left);
      queue.push(current.left);
    }
    if (right !== undefined) {
      current.right = Node.create(right);
      queue.push(current.right);
    }
  }

  return tree;
};

export const createListFromArray = (data) => {
  if (data.length === 0) return null;

  let prevNode = null;

  data.reverse().forEach((value) => {
    const node = { val: value, next: prevNode };
    prevNode = node;
  });

  return prevNode;
};

export const createArrayFromList = (list) => {
  const data = [];

  if (!list) {
    return null;
  }

  while (list.next) {
    data.push(list.val);
    list = list.next;
  }

  data.push(list.val);

  return data;
};
