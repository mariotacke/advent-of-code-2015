const md5 = require('md5');

const stockingStuffer = (input, leadingZeroes = 5) => {
  const zeroes = '0'.repeat(leadingZeroes);
  let iteration = 1;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const hash = md5(`${input}${iteration++}`);

    if (hash.substring(0, leadingZeroes) === zeroes) {
      return iteration - 1;
    }
  }
};

module.exports = stockingStuffer;
