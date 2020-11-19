const { createTreeFromArray } = require('../../../helper');
const { isValidBST } = require('./validateBinarySearchTree');

test('Example 1', () => {
  const tree = createTreeFromArray([2, 1, 3]);
  expect(isValidBST(tree)).toBeTruthy();
});

test('Example 2', () => {
  const tree = createTreeFromArray([5, 1, 4, null, null, 3, 6]);
  expect(isValidBST(tree)).toBeFalsy();
});

test('Example 3', () => {
  const tree = createTreeFromArray([1, 1]);
  expect(isValidBST(tree)).toBeFalsy();
});

test('Example 4', () => {
  const tree = createTreeFromArray([10, 5, 15, null, null, 6, 20]);
  expect(isValidBST(tree)).toBeFalsy();
});
