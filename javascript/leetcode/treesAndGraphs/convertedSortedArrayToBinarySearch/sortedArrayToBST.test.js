import { createArrayFromTree, createTreeFromArray } from '../../../helper';
import { sortedArrayToBST } from './sortedArrayToBST';

describe('Sorted Array to Binary Search Tree', () => {
  it('Example 1', () => {
    const result = sortedArrayToBST([-10, -3, 0, 5, 9]);
    expect(createArrayFromTree(result)).toEqual([0, -3, 9, -10, null, 5, null]);
  });
  it('Example 2', () => {
    const result = sortedArrayToBST([-10, -5, -3, 0, 5, 7, 9]);
    expect(createArrayFromTree(result)).toEqual([0, -5, 7, -10, -3, 5, 9]);
  });
});
