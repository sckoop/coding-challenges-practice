const { topKFrequent } = require('./topKFrequent');

describe('Top K Frequent Elements', () => {
  it('Example 1', () => {
    const nums = [1, 1, 1, 2, 2, 3];
    expect(topKFrequent(nums, 2)).toEqual([1, 2]);
  });
  it('Example 2', () => {
    const nums = [1];
    expect(topKFrequent(nums, 1)).toEqual([1]);
  });
  it('Example 3', () => {
    const nums = [1, 1, 6, 3, 3, 6];
    expect(topKFrequent(nums, 2)).toEqual([3, 6]);
  });
  it('Example 4', () => {
    const nums = [5, 3, 1, 1, 1, 3, 73, 1];
    expect(topKFrequent(nums, 2)).toEqual([1, 3]);
  });
  it('Example 5', () => {
    const nums = [3, 0, 1, 0];
    expect(topKFrequent(nums, 1)).toEqual([0]);
  });
});
