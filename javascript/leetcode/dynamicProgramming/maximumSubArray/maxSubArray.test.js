const { maxSubArray } = require('./maxSubArray');

describe('Maximum Sub Array', () => {
  it('Example 1', () => {
    const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

    expect(result).toBe(6);
  });
  it('Example 2', () => {
    const result = maxSubArray([1]);

    expect(result).toBe(1);
  });
  it('Example 3', () => {
    const result = maxSubArray([0]);

    expect(result).toBe(0);
  });
  it('Example 4', () => {
    const result = maxSubArray([-1]);

    expect(result).toBe(-1);
  });
  it('Example 5', () => {
    const result = maxSubArray([-2147483647]);

    expect(result).toBe(-2147483647);
  });

  it('Example 6', () => {
    const result = maxSubArray([-2, 1]);

    expect(result).toBe(1);
  });
});
