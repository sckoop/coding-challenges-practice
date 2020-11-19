import {expressiveWords} from "./expressiveWords";

test('Example 1', () => {
  expect(expressiveWords('heeellooo', ['hello', 'hi', 'helo'])).toBe(1);
});

test('Example 2', () => {
  expect(expressiveWords('aaa', ['aaaa'])).toBe(0);
});
