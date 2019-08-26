export const countSwaps = (array) => {
  let swaps = 0;
  let swapped = false;

  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      const current = array[i];
      const next = array[i + 1];

      if (current > next) {
        swapped = true;
        array[i] = next;
        array[i + 1] = current;
        swaps++;
      }
    }
  } while (swapped);

  return {swaps, array};
};