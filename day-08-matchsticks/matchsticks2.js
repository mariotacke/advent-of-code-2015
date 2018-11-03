const matchsticks = (input) => {
  const lines = input
    .split('\n')
    .map((line) => {
      const code = line;
      const escaped = '"' + line
        .replace(/\\/g, '\\\\')
        .replace(/"/g, String.raw`\"`) + '"';

      return escaped.length - code.length;
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return lines;
};

module.exports = matchsticks;
