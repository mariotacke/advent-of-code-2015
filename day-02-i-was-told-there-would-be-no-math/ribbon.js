const ribbon = (input) => {
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
      const frontBack = 2 * width + 2 * height;
      const topBottom = 2 * width + 2 * length;
      const sides = 2 * height + 2 * length;

      const smallestPerimeter = Math.min(
        frontBack,
        topBottom,
        sides
      );

      return accumulator + smallestPerimeter + length * width * height;
    }, 0);
};

module.exports = ribbon;
