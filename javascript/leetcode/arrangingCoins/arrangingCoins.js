export const arrangingCoins = (n) => {
  if (!n) {
    return 0;
  }

  let total = 0;
  let fullLevels = 0;

  while(total <= n) {
    fullLevels++;
    total += fullLevels;
  }

  return fullLevels <= 1 ? fullLevels : fullLevels - 1;
};