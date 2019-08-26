// https://www.hackerrank.com/challenges/counting-valleys?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

export const countingValleys = (steps, path) => {
  let valleyAmount = 0;
  let height = 0;
  let inValley = false;

  for(let step of path) {
    height = step === 'U' ? height + 1 : height - 1;

    if (height < 0 && !inValley) {
      inValley = true;
      valleyAmount++;
      continue;
    }

    if (height === 0) {
      inValley = false;
    }
  }

  return valleyAmount;
};