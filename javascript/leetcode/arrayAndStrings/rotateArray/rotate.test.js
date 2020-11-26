const { rotate } = require('./rotate');

describe('Rotate Array', () => {
  it('Example 1', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];

    expect(rotate(nums, 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it('Example 2', () => {
    const nums = [-1, -100, 3, 99];

    expect(rotate(nums, 2)).toEqual([3, 99, -1, -100]);
  });
});
