import { createTreeFromArray } from '../../../helper';
import { zigzagLevelOrder } from './zigzagLevelOrder';

describe('Zigzag Level Order', () => {
  it('Example 1', () => {
    const tree = createTreeFromArray([3, 9, 20, null, null, 15, 7]);

    expect(zigzagLevelOrder(tree)).toEqual([[3], [20, 9], [15, 7]]);
  });
  it('Example 2', () => {
    const tree = createTreeFromArray([1, 2]);

    expect(zigzagLevelOrder(tree)).toEqual([[1], [2]]);
  });
  it('Example 3', () => {
    const tree = createTreeFromArray([1, 2, 3, 4, null, null, 5]);

    expect(zigzagLevelOrder(tree)).toEqual([[1], [3, 2], [4, 5]]);
  });

  it('Example 4', () => {
    const tree = createTreeFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    expect(zigzagLevelOrder(tree)).toEqual([
      [1],
      [3, 2],
      [4, 5, 6, 7],
      [10, 9, 8],
    ]);
  });
});
