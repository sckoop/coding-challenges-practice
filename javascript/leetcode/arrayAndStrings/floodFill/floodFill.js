export const floodFill = (image, startRow, startColumn, fill) => {
  const queue = [];
  const colorToFill = image[startRow][startColumn];

  const pushQueue = (row, column) => {
    if (row >= 0 && row < image.length && column >= 0 && column < image[0].length) {
      queue.push({row, column});
    }
  };
  pushQueue(startRow, startColumn);

  while(queue.length) {
    const {row, column} = queue.shift();

    const currentColor = image[row][column];

    if (currentColor !== colorToFill || currentColor === fill) {
      continue;
    }

    image[row][column] = fill;

    pushQueue(row - 1, column);
    pushQueue(row, column - 1);
    pushQueue(row + 1, column);
    pushQueue(row, column + 1);
  }

  return image;
};