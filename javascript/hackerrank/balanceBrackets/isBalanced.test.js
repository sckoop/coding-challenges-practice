import {isBalanced} from "./isBalanced";

test('Example 1a', () => {
  expect(isBalanced('{[()]}')).toBeTruthy();
});

test('Example 1b', () => {
  expect(isBalanced('{[(])}')).toBeFalsy();
});

test('Example 1c', () => {
  expect(isBalanced('{{[[(())]]}}')).toBeTruthy();
});

test('Example 2a', () => {
  expect(isBalanced('{{([])}}')).toBeTruthy();
});

test('Example 2b', () => {
  expect(isBalanced('{{)[](}}')).toBeFalsy();
});

test('Example 3a', () => {
  expect(isBalanced('{(([])[])[]}')).toBeTruthy();
});

test('Example 3b', () => {
  expect(isBalanced('{(([])[])[]]}')).toBeFalsy();
});

test('Example 2b', () => {
  expect(isBalanced('{(([])[])[]}[]')).toBeTruthy();
});