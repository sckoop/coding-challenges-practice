import {matrixReshape} from "./matrixReshape";

test('Example 1', () => {
  expect(
    matrixReshape([[1,2], [3,4]], 1, 4)
  ).toEqual([[1,2,3,4]]);
});

test('Example 2', () => {
  expect(
    matrixReshape([[1,2], [3,4]], 2, 4)
  ).toEqual([[1,2], [3,4]]);
});
