import {isSubsequence} from "./isSubsequence";

test('Example 1', () => {
  expect(isSubsequence('abc', 'ahbgdc')).toBeTruthy()
})

test('Example 2', () => {
  expect(isSubsequence('axc', 'ahbgdc')).toBeFalsy();
})

test('Example 3', () => {
  expect(isSubsequence('b', 'c')).toBeFalsy();
})

test('Example 4', () => {
  expect(isSubsequence('acb', 'ahbgdc')).toBeFalsy();
})
