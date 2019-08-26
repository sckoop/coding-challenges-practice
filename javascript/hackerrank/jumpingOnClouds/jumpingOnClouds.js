// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?filter=javascript&filter_on=language&h_l=interview&h_r=next-challenge&h_v=zen&page=1&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

export const jumpingOnClouds = (clouds) => {
  let jumps = 0;
  let position = 0;

  const isJumpable = (position) => clouds[position] === 0;

  while (position < clouds.length - 1) {
    if (isJumpable(position + 2)) {
      position = position + 2;
    } else {
      position++;
    }
    jumps++;
  }

  return jumps;
};