const { findKthLargest } = require('./findKthLargest');

describe('Kth Largest Element in Array', () => {
  test('Example 1', () => {
    const largestNumber = findKthLargest([3, 2, 1, 5, 6, 4], 2);
    expect(largestNumber).toBe(5);
  });
  test('Example 2', () => {
    const largestNumber = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
    expect(largestNumber).toBe(4);
  });
  test('Example 3', () => {
    const largestNumber = findKthLargest([-1, 2, 0], 2);
    expect(largestNumber).toBe(0);
  });
  test('Example 4', () => {
    const largestNumber = findKthLargest([2, 1], 2);
    expect(largestNumber).toBe(1);
  });
  test('Example 5', () => {
    const largestNumber = findKthLargest(Array.from(Array(5000).keys()), 5000);
    expect(largestNumber).toBe(0);
  });
});
