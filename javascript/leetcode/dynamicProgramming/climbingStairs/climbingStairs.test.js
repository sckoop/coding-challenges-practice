const { climbStairs } = require('./climbingStairs');

describe('Climbing Stairs', () => {
  it('Example 1', () => {
    expect(climbStairs(2)).toBe(2);
  });

  it('Example 2', () => {
    expect(climbStairs(3)).toBe(3);
  });

  it('Example 3', () => {
    expect(climbStairs(4)).toBe(5);
  });

  it('Example 4', () => {
    expect(climbStairs(5)).toBe(8);
  });
});
