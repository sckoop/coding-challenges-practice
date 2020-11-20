// https://leetcode.com/problems/relative-sort-array/

export const relativeSortArray = (arr1, arr2) => {
  let lastIndex = 0;
  for (let i = 0; i < arr2.length; i++) {
    const pivot = arr2[i];

    for (let j = lastIndex; j < arr1.length; j++) {
      if (arr1[j] === pivot) {
        swap(arr1, lastIndex, j);
        lastIndex++;
      }
    }
  }

  quickSort(arr1, lastIndex, arr1.length - 1);

  return arr1;
};

const quickSort = (arr, start, end) => {
  if (start < end) {
    const partitionIndex = partition(arr, start, end);

    quickSort(arr, start, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, end);
  }
};

const partition = (arr, start, end) => {
  const pivot = arr[end];

  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, end);

  return i + 1;
};

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};
