export const sortColors = (nums) => {
  quickSort(nums, 0, nums.length - 1);
};

const quickSort = (nums, low, high) => {
  if (low < high) {
    const partitionIndex = partition(nums, low, high);
    quickSort(nums, low, partitionIndex - 1);
    quickSort(nums, partitionIndex + 1, high);
  }
};

const partition = (nums, low, high) => {
  const pivot = nums[high];

  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (nums[j] < pivot) {
      i++;
      swap(nums, i, j);
    }
  }
  swap(nums, i + 1, high);
  return i + 1;
};

const swap = (nums, i, j) => {
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
};
