const { letterCombinations } = require('./letterCombinations');

describe('Letter Combinations of a phone number', () => {
  it('Example 1', () => {
    expect(letterCombinations('23')).toEqual([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ]);
  });

  it('Example 2', () => {
    expect(letterCombinations('')).toEqual([]);
  });
  it('Example 3', () => {
    expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
  });
});
