// https://www.hackerrank.com/challenges/torque-and-development/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=graphs

const createCityMatrix = (cities, roads) => {
  const cityMatrix = [];
  for (let i = 0; i < cities; i++) {
    cityMatrix[i] = Array(cities).fill(0);
  }
  roads.forEach((road) => {
    const x = road[0] - 1;
    const y = road[1] - 1;
    cityMatrix[x][y] = 1;
    cityMatrix[y][x] = 1;
  });

  return cityMatrix;
}

export const roadsAndLibraries = (cities, libraryCost, roadCost, roads) => {
  if (libraryCost <= roadCost) {
    return cities * libraryCost;
  }

  // TODO this is too slow, needs to be handled directly with the inputs.
  const cityMatrix = createCityMatrix(cities, roads);
  const visited = new Set();
  const stack = [];
  let libraries = 0;
  let roadAmount = 0;

  for (let i = 0; i < cities; i++) {
    if (visited.has(i)) {
      continue;
    }
    libraries++;
    stack.push(i);
    while(stack.length > 0) {
      const currentCity = stack.pop();
      if (visited.has(currentCity)) {
        continue;
      }
      cityMatrix[currentCity]
        .forEach((connected, city) => {
          if (!visited.has(city) && connected) {
            stack.push(city);
            visited.add(city);
            roadAmount++;
          }
        })
    }
  }

  return libraries * libraryCost + roadAmount * roadCost;
}