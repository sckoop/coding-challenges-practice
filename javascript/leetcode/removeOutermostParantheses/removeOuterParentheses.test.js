import {removeOuterParentheses} from "./removeOuterParentheses";

test('Example 1', () => {
  expect(removeOuterParentheses('(()())(())')).toBe('()()()');
});

test('Example 2', () => {
  expect(removeOuterParentheses('(()())(())(()(()))')).toBe('()()()()(())');
});

test('Example 3', () => {
  expect(removeOuterParentheses('()()')).toBe('');
});