const findCombinations = (packages = [], currentCombination = [], maximumWeight = Infinity, maximumPackages = Infinity) => {
  const availablePackages = [...packages];
  const currentWeight = currentCombination.reduce((a, b) => a + b, 0);

  if (currentWeight === maximumWeight && currentCombination.length <= maximumPackages) {
    return [currentCombination];
  }

  let combinations = [];

  while (availablePackages.length) {
    const weight = availablePackages.shift();

    if (currentWeight + weight <= maximumWeight) {
      const nextCombination = [...currentCombination, weight];
      const otherCombinations = findCombinations([...availablePackages], nextCombination, maximumWeight, maximumPackages);

      otherCombinations.forEach((combination) => combinations.push(combination));
    }
  }

  return combinations;
};

const findSmallestGroupSize = (packages, maximumWeight) => {
  let weight = 0;
  let numberOfPackages = 0;

  for (let i = 0; i < packages.length; i++) {
    if (weight + packages[i] <= maximumWeight) {
      weight += packages[i];
      numberOfPackages++;
    }
  }

  return numberOfPackages;
};

module.exports = (list) => {
  const packages = list
    .split('\n')
    .map((item) => parseInt(item))
    // sort package weights descending
    .sort((a, b) => b - a);

  const totalWeight = packages.reduce((a, b) => a + b, 0);
  const maximumGroupWeight = totalWeight / 4;

  const maximumPackages = findSmallestGroupSize(packages, maximumGroupWeight);

  return findCombinations(packages, [], maximumGroupWeight, maximumPackages)
    .map((group) => group.reduce((a, b) => a * b, 1))
    .sort((a, b) => a - b)[0];
};
