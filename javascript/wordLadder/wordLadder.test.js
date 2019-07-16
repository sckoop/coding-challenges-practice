import {isValidChange, ladderLength} from "./wordLadder";

test('Example 1', () => {
  const beginWord = 'hit';
  const endWord = 'cog';
  const wordList = ['hot','dot','dog','lot','log','cog'];

  expect(ladderLength(beginWord, endWord, wordList)).toBe(5)
});

test('Example 2', () => {
  const beginWord = 'hit';
  const endWord = 'cog';
  const wordList = ['hot','dot','dog','lot','log',];

  expect(ladderLength(beginWord, endWord, wordList)).toBe(0)
});

describe('Word change test', () => {
  [
    ['hit', 'hot', true],
    ['cog', 'hot', false],
    ['cog', 'log', true],
    ['cog', 'dog', true],
    ['hit', 'dog', false],
  ].forEach(([wordA, wordB, expected]) => {
    test(`check ${wordA} ${wordB}`, () => {
      expect(isValidChange(wordA, wordB)).toBe(expected);
    })
  })
})
