// https://www.hackerrank.com/challenges/sock-merchant?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

export const sockMerchant = (amount, socks) => {
  let sockMap = new Map();
  let saleableSocks = 0;

  socks.forEach((sock) => {
    if (sockMap.has(sock)) {
      saleableSocks++;
      sockMap.delete(sock);
      return;
    }

    sockMap.set(sock, true);
  });

  return saleableSocks;
};