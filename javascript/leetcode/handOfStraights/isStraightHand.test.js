import {isStraightHand} from "./isStraightHand";

test('Example 1', () => {
  expect(isStraightHand([1,2,3,6,2,3,4,7,8], 3 )).toBeTruthy();
});

test('Example 2', () => {
  expect(isStraightHand([1,2,3,4,5], 4 )).toBeFalsy();
});

test('Example 3', () => {
  expect(isStraightHand([1,2,3,6,2,3,4,7,9], 3 )).toBeFalsy();
});

test('Example 4', () => {
  expect(isStraightHand([1,1,2,2,3,3], 2 )).toBeFalsy();
});

test('Example 5', () => {
  expect(isStraightHand([8,8,9,7,7,7,6,7,10,6], 2 )).toBeTruthy();
});
