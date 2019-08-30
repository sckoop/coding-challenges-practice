import {whatFlavors} from "./whatFlavors";

test('Example 1 a', () => {
  expect(whatFlavors([1, 4, 5, 3, 2], 4)).toEqual({first: 1, second: 4});
});

test('Example 1 b', () => {
  expect(whatFlavors([2, 2, 4, 3], 4)).toEqual({first: 1, second: 2});
});

test('Example 2', () => {
  expect(whatFlavors([1, 2, 3, 5, 6], 5)).toEqual({first: 2, second: 3});
});

test('Example 3 a', () => {
  expect(whatFlavors([4, 3, 2, 5, 7], 8)).toEqual({first: 2, second: 4});
});

test('Example 3 b', () => {
  expect(whatFlavors([7, 2, 5, 4, 11], 12)).toEqual({first: 1, second: 3});
});