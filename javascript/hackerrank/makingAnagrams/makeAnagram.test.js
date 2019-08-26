import {makeAnagram} from "./makeAnagram";

test('Example 1', () => {
  expect(makeAnagram('cde', 'abc')).toBe(4)
})

test('Example 2', () => {
  expect(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')).toBe(30)
})

test('Example 3', () => {
  expect(makeAnagram('showman', 'woman')).toBe(2)
})
