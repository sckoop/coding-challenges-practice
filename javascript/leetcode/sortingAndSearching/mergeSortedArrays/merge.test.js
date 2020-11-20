import { merge } from './merge';
describe('Merge Sorted Arrays', () => {
  it('Example 1', () => {
    const mergedArray = [1, 2, 3, 0, 0, 0];
    const valuesToMerge = [2, 5, 6];

    merge(mergedArray, 3, valuesToMerge, 3);

    expect(mergedArray).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it('Example 2', () => {
    const mergedArray = [1, 2, 7, 0, 0];
    const valuesToMerge = [5, 6];

    merge(mergedArray, 3, valuesToMerge, 2);

    expect(mergedArray).toEqual([1, 2, 5, 6, 7]);
  });

  it('Example 3', () => {
    const mergedArray = [1, 2, 7, 10, 0, 0, 0];
    const valuesToMerge = [5, 6, 9];

    merge(mergedArray, 4, valuesToMerge, 3);

    expect(mergedArray).toEqual([1, 2, 5, 6, 7, 9, 10]);
  });

  it('Example 4', () => {
    const mergedArray = [-7, -4, 0, 0];
    const valuesToMerge = [-10, -5];

    merge(mergedArray, 2, valuesToMerge, 2);

    expect(mergedArray).toEqual([-10, -7, -5, -4]);
  });
});
