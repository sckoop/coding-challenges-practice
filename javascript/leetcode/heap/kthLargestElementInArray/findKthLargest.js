export const findKthLargest = (num, k) => {
  const maxHeap = createMaxHeap(num);

  return findKthNumber(maxHeap, k);
};

const createMaxHeap = (num) => {
  const maxHeap = [];

  for (let i = 0; i < num.length; i++) {
    let currentElement = num[i];
    if (maxHeap.length === 0) {
      maxHeap.push(currentElement);

      continue;
    }

    insertIntoHeap(maxHeap, currentElement, 0);
  }

  return maxHeap;
};

const insertIntoHeap = (heap, value, index) => {
  if (value > heap[index]) {
    const oldValue = swapValue(heap, value, index);
    return insertIntoHeap(heap, oldValue, index);
  }

  const nextIndex = index * 2 + 1;
  const nextNextIndex = index * 2 + 2;

  if (heap[nextIndex] === undefined) {
    heap[nextIndex] = value;
    return;
  }
  if (heap[nextNextIndex] === undefined) {
    heap[nextNextIndex] = value;
    return;
  }

  return insertIntoHeap(heap, value, index + 1);
};

const swapValue = (heap, value, index) => {
  const oldValue = heap[index];
  heap[index] = value;
  return oldValue;
};

const findKthNumber = (heap, kthNumber) => {
  let tries = 0;
  const queue = [{ value: heap[0], index: 0 }];
  while (queue.length) {
    tries = tries + 1;
    const { value, index } = queue.shift();
    if (tries === kthNumber) return value;

    const nextIndex = index * 2 + 1;
    const nextNextIndex = index * 2 + 2;
    if (heap[nextIndex] !== undefined) {
      queue.push({ value: heap[nextIndex], index: nextIndex });
    }
    if (heap[nextNextIndex] !== undefined) {
      queue.push({ value: heap[nextNextIndex], index: nextNextIndex });
    }
    queue.sort((a, b) => (a.value < b.value ? 1 : -1));
  }
};
