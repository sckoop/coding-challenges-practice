export const whatFlavors = (cost, money) => {
  const map = cost.map((cost, index) => ({cost, index: index + 1}))
    .filter(({cost}) => cost < money)
    .sort((a, b) => a.cost > b.cost ? 1 : -1);

  let firstPosition = 0;
  let secondPosition = map.length - 1;

  do {
    const first = map[firstPosition];
    const second = map[secondPosition];
    const sum = first.cost + second.cost;

    if (sum === money) {
      return first.index > second.index
        ? {first: second.index, second: first.index}
        : {first: first.index, second: second.index}
    }

    if (sum > money) {
      secondPosition--;
      continue;
    }

    firstPosition++;

  } while (firstPosition< secondPosition)
}