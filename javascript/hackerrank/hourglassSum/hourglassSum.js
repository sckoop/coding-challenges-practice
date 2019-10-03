export const hourglassSum = (arr) => {
  const topBottomCalc = (rowArr, column) => {
    return rowArr[column] + rowArr[column + 1] + rowArr[column + 2];
  };

  let highest = -Infinity;
  for (let row = 0; row < arr.length - 2; row++) {
    for (let column = 0; column < arr[0].length - 2; column++) {
      const top = topBottomCalc(arr[row], column);
      const middle = arr[row + 1][column + 1];
      const bottom = topBottomCalc(arr[row + 2], column);

      const sum = top + middle + bottom;

      highest = Math.max(highest, sum);
    }
  }

  return highest;
};