import {jumpingOnClouds} from "./jumpingOnClouds";

test('Example 1', () => {
  expect(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])).toBe(4)
});

test('Example 2', () => {
  expect(jumpingOnClouds([0, 0, 0, 1, 0, 0])).toBe(3)
});