// https://leetcode.com/problems/number-of-islands/

export const numIslandsBFS = (grid) => {
  const queue = [];

  const addToQueue = (row, column) => {
    if (row >= 0 && column >= 0 && row < grid.length && column < grid[0].length && grid[row][column] === '1') {
      queue.push({row, column });
    }
  };

  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      // Always add element to queue for check of an new island
      addToQueue(row, column);
      // if the element is land we have a island spotted.
      if (grid[row][column] === '1') {
        count++;
      }
      while(queue.length > 0) {
        const current = queue.shift();
        // None Island elements don't need a further procedure
        if (grid[current.row][current.column] !== '1') continue;
        // we mark an island to water since we don't want to visit it again.
        grid[current.row][current.column] = '0';

        // We add all surrounding elements to the queue to check how big our island is
        addToQueue(current.row + 1, current.column);
        addToQueue(current.row, current.column + 1);
        addToQueue(current.row - 1, current.column);
        addToQueue(current.row, current.column - 1);
      }
    }
  }

  return count;
};
