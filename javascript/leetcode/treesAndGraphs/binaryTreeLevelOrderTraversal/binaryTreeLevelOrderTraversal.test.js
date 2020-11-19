import { createTreeFromArray } from '../../../helper';
import { levelOrder } from './binaryTreeLevelOrderTraversal';

describe('Level order traversal', () => {
  it('Example 1', () => {
    const tree = createTreeFromArray([3, 9, 20, null, null, 15, 7]);
    const expectedLevel = [[3], [9, 20], [15, 7]];

    expect(levelOrder(tree)).toEqual(expectedLevel);
  });
});
