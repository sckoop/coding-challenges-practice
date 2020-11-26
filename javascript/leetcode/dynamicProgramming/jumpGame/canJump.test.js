const { canJump } = require('./canJump');

describe('Jump Game', () => {
  it('Example 1', () => {
    const nums = [2, 3, 1, 1, 4];

    expect(canJump(nums)).toBeTruthy();
  });

  it('Example 2', () => {
    const nums = [3, 2, 1, 0, 4];

    expect(canJump(nums)).toBeFalsy();
  });
});
