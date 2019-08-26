const createWordMap = (word) => {
  const map = new Map();
  for(let char of word) {
    if (!map.has(char)) {
      map.set(char, 1);
      continue;
    }

    map.set(char, map.get(char) + 1);
  }

  return map;
}

const countChars = (map) => {
  let total = 0;

  for (let [char, count] of map) {
    total += count;
  }

  return total;
}

export const makeAnagram = (a, b) => {
  const aWordMap = createWordMap(a);
  const bWordMap = createWordMap(b);

  for (let [char, count] of aWordMap) {
    if (!bWordMap.has(char)) {
      continue;
    }

    const bCount = bWordMap.get(char);
    bWordMap.delete(char);
    const diffCount = Math.abs(count - bCount);

    if (diffCount === 0) {
      aWordMap.delete(char);
      continue;
    }

    aWordMap.set(char, diffCount);

  }

  return countChars(aWordMap) + countChars(bWordMap);
};