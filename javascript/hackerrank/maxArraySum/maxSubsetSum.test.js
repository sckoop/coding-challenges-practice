import {maxSubsetSum} from "./maxSubsetSum";

test('Example 1', () => {
  expect(maxSubsetSum([3, 7, 4, 6, 5])).toBe(13);
})

test('Example 2', () => {
  expect(maxSubsetSum([2, 1, 5, 8, 4])).toBe(11);
})

test('Example 3', () => {
  expect(maxSubsetSum([3, 5, -7, 8, 10])).toBe(15);
})