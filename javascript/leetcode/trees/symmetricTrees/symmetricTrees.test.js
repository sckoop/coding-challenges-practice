import { createTreeFromArray } from '../../../helper';
import { isSymmetric } from './symmetricTrees';
describe('Symmetric Tree', () => {
  test('Example 1', () => {
    const tree = createTreeFromArray([1, 2, 2, 3, 4, 4, 3]);

    expect(isSymmetric(tree)).toBeTruthy();
  });
  test('Example 2', () => {
    const tree = createTreeFromArray([1, 2, 2, null, 3, null, 3]);

    expect(isSymmetric(tree)).toBeFalsy();
  });
});
