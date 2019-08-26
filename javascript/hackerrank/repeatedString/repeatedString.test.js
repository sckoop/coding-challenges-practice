import {repeatedString} from "./repeatedString";

test('Example 1', () => {
  expect(repeatedString('aba', 10)).toBe(7);
});

test('Example 2', () => {
  expect(repeatedString('a', 1000000000000)).toBe(1000000000000);
});
