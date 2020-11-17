import { createTreeFromArray } from '../../helper';
import { maxDepth } from './maximumDepthOfBinaryTree';

test('Example 1', () => {
  const tree = createTreeFromArray([3, 9, 20, null, null, 15, 7]);
  expect(maxDepth(tree)).toEqual(3);
});

test('Example 2', () => {
  const tree = createTreeFromArray([3, 2, null]);
  expect(maxDepth(tree)).toEqual(2);
});
