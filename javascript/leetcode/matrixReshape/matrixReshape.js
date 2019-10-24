// https://leetcode.com/problems/reshape-the-matrix/

export const matrixReshape = (matrix, rows, columns) => {
  if (rows * columns !== matrix.length * matrix[0].length) {
    return matrix;
  }

  const newMatrix = [];

  let currentRow = [];

  for (let oldRow = 0; oldRow < matrix.length; oldRow++) {
    for (let oldColumn = 0; oldColumn < matrix[0].length; oldColumn++) {
      if (currentRow.length === columns) {
        newMatrix.push(currentRow);
        currentRow = [];
      }

      currentRow.push(matrix[oldRow][oldColumn]);
    }
  }

  newMatrix.push(currentRow);

  return newMatrix;
}
