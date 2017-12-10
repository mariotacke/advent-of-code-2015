const md5 = require('md5');

const stockingStuffer = (input) => {
  let iteration = 1;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const hash = md5(`${input}${iteration++}`);

    if (hash.substring(0, 5) === '00000') {
      return iteration - 1;
    }
  }
};

module.exports = stockingStuffer;
