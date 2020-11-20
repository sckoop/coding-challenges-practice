import { relativeSortArray } from './relativeSortArray';

describe('Relative Sort Array', () => {
  it('Example 1', () => {
    const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
    const arr2 = [2, 1, 4, 3, 9, 6];
    const sorted = relativeSortArray(arr1, arr2);

    expect(sorted).toEqual([2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]);
  });

  it('Example 2', () => {
    const arr1 = [10, 7, 2, 3, 11, 8, 2];
    const arr2 = [2];

    const sorted = relativeSortArray(arr1, arr2);

    expect(sorted).toEqual([2, 2, 3, 7, 8, 10, 11]);
  });
});
