const { threeSum } = require('./threeSum');

describe('Three Sum', () => {
  test('Example 1', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test('Example 2', () => {
    expect(threeSum([])).toEqual([]);
  });

  test('Example 3', () => {
    expect(threeSum([0])).toEqual([]);
  });
});
