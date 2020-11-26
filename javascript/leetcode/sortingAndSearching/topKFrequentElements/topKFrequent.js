// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/799/
export const topKFrequent = (nums, k) => {
  const { totalCount, highestCount } = createTotalCount(nums);

  const heap = countSort(totalCount, highestCount);

  return topElements(heap, k);
};

const createTotalCount = (nums) => {
  // Create an map with all entries and their count.
  // Further keep track of the highest count. We need this for the count sort.
  let highestCount = 0;
  const totalCount = nums.reduce((map, number) => {
    if (!map.has(number)) {
      map.set(number, 0);
    }

    const count = map.get(number) + 1;
    map.set(number, count);

    if (count > highestCount) {
      highestCount = count;
    }

    return map;
  }, new Map());

  return { totalCount, highestCount };
};

const countSort = (totalCount, highestCount) => {
  // We create an array that contains for each possible count an empty array.
  const countIndex = Array.from(Array(highestCount), () => new Array());

  // Now we push each number to their count position. We have to reduce the count by one since
  // the array start by 0 which equals to count as 1.
  totalCount.forEach((count, number) => {
    countIndex[count - 1].push(number);
  });

  // Now we iterate through the array to remove all zero counts and
  // adding only the number without their count information.
  return countIndex.reduce((acc, current) => {
    if (current.length === 0) return acc;

    return [...acc, ...current];
  }, []);
};

const topElements = (maxHeap, k) => {
  const top = [];
  // To get the desired amount we iterate till k.
  for (let i = 0; i < k; i++) {
    // The index we are looking for is the latest element at the index.
    // in relation to i.
    const index = maxHeap.length - 1 - i;
    top.push(maxHeap[index]);
  }
  return top;
};
