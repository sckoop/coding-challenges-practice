import { sortColors } from './sortColors';

describe('Sort Colors', () => {
  it('Example 1', () => {
    const colors = [2, 0, 2, 1, 1, 0];
    sortColors(colors);

    expect(colors).toEqual([0, 0, 1, 1, 2, 2]);
  });

  it('Example 2', () => {
    const colors = [2, 0, 1];
    sortColors(colors);

    expect(colors).toEqual([0, 1, 2]);
  });

  it('Example 3', () => {
    const colors = [0];
    sortColors(colors);

    expect(colors).toEqual([0]);
  });

  it('Example 4', () => {
    const colors = [1];
    sortColors(colors);

    expect(colors).toEqual([1]);
  });
});
