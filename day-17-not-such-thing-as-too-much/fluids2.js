const getCombinations = (volume, containers) => {
  const combinations = [];

  const combine = (array, carry = []) => {
    for (let i = 0; i < array.length; i++) {
      const root = array[i];
      const nodes = [...array.slice(i, i), ...array.slice(i + 1)];
      const nextCarry = [...carry, root];

      if (nextCarry.reduce((a, b) => a + b, 0) === volume) {
        combinations.push(nextCarry);
      }

      combine(nodes, nextCarry);
    }
  };

  combine(containers, []);

  return combinations;
};

const fluids = (volume, containers) => {
  containers = containers
    .split('\n')
    .map((x) => parseInt(x))
    .sort((a, b) => b - a);

  const combinationLengths = getCombinations(volume, containers)
    .map((combination) => combination.length);

  const minimum = Math.min(...combinationLengths);
  const minimumCombinations = combinationLengths
    .filter((length) => length === minimum)
    .length;

  return minimumCombinations;
};

module.exports = fluids;
