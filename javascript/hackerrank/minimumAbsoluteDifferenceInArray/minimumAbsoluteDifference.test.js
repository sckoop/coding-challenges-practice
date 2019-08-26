import {minimumAbsoluteDifference} from "./minimumAbsoluteDifference";

test('Example 1', () => {
  expect(minimumAbsoluteDifference([3, -7, 0])).toBe(3);
});

test('Example 2', () => {
  expect(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])).toBe(1);
});

test('Example 3', () => {
  expect(minimumAbsoluteDifference([1, -3, 71, 68, 17])).toBe(3);
});