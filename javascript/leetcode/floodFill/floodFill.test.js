import {floodFill} from "./floodFill";

test('Example 1', () => {
  expect(
    floodFill(
      [[1, 1, 1], [1, 1, 0], [1, 0, 1]],
      1,
      1,
      2
    )
  ).toEqual(
    [[2, 2, 2], [2, 2, 0], [2, 0, 1]]
  );
})