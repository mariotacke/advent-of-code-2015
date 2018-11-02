const matchsticks = (input) => {
  const lines = input
    .split('\n')
    .map((line) => {
      const codeLength = line.length;
      const inMemoryLength = eval(line).length;

      return codeLength - inMemoryLength;
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return lines;
};

module.exports = matchsticks;
