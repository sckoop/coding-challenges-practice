export const checkMagazine = (magazine, note) => {

  const createWordMap = (words) => {
    const map = new Map();
    words.forEach((word) => {
      if (!map.has(word)) {
        map.set(word, 0);
      }

      map.set(word, map.get(word) + 1);

    });

    return map;
  }

  const magazineMap = createWordMap(magazine);
  const noteMap = createWordMap(note);

  for (let [word, amount] of noteMap) {
    if (!magazineMap.has(word)) {
      return false;
    }

    if (magazineMap.get(word) !== amount) {
      return false;
    }
  }

  return true;
};