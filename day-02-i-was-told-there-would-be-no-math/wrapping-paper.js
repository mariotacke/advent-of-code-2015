const wrappingPaper = (input) => {
  return input
    .split('\n')
    .map((x) => {
      const measurements = x.trim().split('x');

      return {
        length: measurements[0],
        width: measurements[1],
        height: measurements[2],
      };
    })
    .reduce((accumulator, currentValue) => {
      const { length, width, height } = currentValue;
      const frontBack = width * height;
      const topBottom = width * length;
      const sides = height * length;

      const smallestSide = Math.min(
        frontBack,
        topBottom,
        sides
      );

      return accumulator + 2 * frontBack + 2 * topBottom + 2 * sides + smallestSide;
    }, 0);
};

module.exports = wrappingPaper;
