import { searchInsert } from './searchInsert';

describe('Search Insert position', () => {
  it('Example 1', () => {
    const position = searchInsert([1, 3, 5, 6], 5);

    expect(position).toBe(2);
  });
  it('Example 2', () => {
    const position = searchInsert([1, 3, 5, 6], 2);

    expect(position).toBe(1);
  });

  it('Example 3', () => {
    const position = searchInsert([1, 3, 5, 6], 7);

    expect(position).toBe(4);
  });

  it('Example 4', () => {
    const position = searchInsert([1, 3, 5, 6], 0);

    expect(position).toBe(0);
  });

  it('Example 5', () => {
    const position = searchInsert([1], 0);

    expect(position).toBe(0);
  });
});
