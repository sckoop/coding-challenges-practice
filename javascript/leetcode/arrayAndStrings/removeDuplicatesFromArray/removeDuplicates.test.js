const { removeDuplicates } = require('./removeDuplicates');

describe('Remove duplicates from Array', () => {
  it('Example 1', () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
  });
  it('Example 2', () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
  });
});
