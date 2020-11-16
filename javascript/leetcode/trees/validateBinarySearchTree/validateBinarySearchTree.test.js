const { createTreeFormArray } = require('../../../helper');
const { isValidBST } = require('./validateBinarySearchTree');

test('Example 1', () => {
  const tree = createTreeFormArray([2, 1, 3]);
  expect(isValidBST(tree)).toBeTruthy();
});

test('Example 2', () => {
  const tree = createTreeFormArray([5, 1, 4, null, null, 3, 6]);
  expect(isValidBST(tree)).toBeFalsy();
});

test('Example 3', () => {
  const tree = createTreeFormArray([1, 1]);
  expect(isValidBST(tree)).toBeFalsy();
});

test('Example 4', () => {
  const tree = createTreeFormArray([10, 5, 15, null, null, 6, 20]);
  expect(isValidBST(tree)).toBeFalsy();
});
