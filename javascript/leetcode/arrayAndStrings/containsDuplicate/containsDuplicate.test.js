const { containsDuplicate } = require('./containsDuplicate');

describe('Contains Duplicate', () => {
  it('Example 1', () => {
    const nums = [1, 2, 3, 1];

    expect(containsDuplicate(nums)).toBeTruthy();
  });
  it('Example 2', () => {
    const nums = [1, 2, 3, 4];

    expect(containsDuplicate(nums)).toBeFalsy();
  });
  it('Example 3', () => {
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

    expect(containsDuplicate(nums)).toBeTruthy();
  });
});
