import {numIslandsBFS} from "./numberOfIslands";

test('1 expected island', () => {
  const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ];
  expect(numIslandsBFS(grid)).toBe(1);
});

test('3 expected island', () => {
  const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ];
  expect(numIslandsBFS(grid)).toBe(3);
});
