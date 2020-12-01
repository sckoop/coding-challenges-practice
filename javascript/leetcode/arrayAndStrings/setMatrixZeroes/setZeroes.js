// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/777/
export const setZeroes = (matrix) => {
  let firstRow = false;
  let firstCol = false;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      const currentVal = matrix[row][col];

      if (currentVal !== 0) continue;

      if (row === 0) {
        firstRow = true;
      } else {
        matrix[row][0] = Infinity;
      }

      if (col === 0) {
        firstCol = true;
      } else {
        matrix[0][col] = Infinity;
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    const currentVal = matrix[row][0];
    if (currentVal !== Infinity) continue;

    for (let col = 0; col < matrix[row].length; col++) {
      matrix[row][col] = 0;
    }
  }

  for (let col = 0; col < matrix[0].length; col++) {
    const currentVal = matrix[0][col];
    if (currentVal !== Infinity) continue;

    for (let row = 0; row < matrix.length; row++) {
      matrix[row][col] = 0;
    }
  }

  if (firstRow) {
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[0][col] = 0;
    }
  }

  if (firstCol) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][0] = 0;
    }
  }
};
