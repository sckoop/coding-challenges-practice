export const maxSubsetSum = (array) => {
  let max = new MaxPair(array[0]);
  for (let i = 1; i < array.length; i++) {
    max = new MaxPair(array[i], max);
  }
  return Math.max(
    max.usingThisElementMax,
    max.notUsingThisElementMax
  );
}

function MaxPair (
  currentElement,
  lastMaxPair = { usingThisElementMax: 0, notUsingThisElementMax: 0 }
) {
  this.usingThisElementMax = Math.max(
    currentElement,
    currentElement + lastMaxPair.notUsingThisElementMax
  );
  this.notUsingThisElementMax = Math.max(
    lastMaxPair.usingThisElementMax,
    lastMaxPair.notUsingThisElementMax
  );
}