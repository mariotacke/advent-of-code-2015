const getPermutations = (persons) => {
  const permutations = [];

  const permute = (array, permutation = []) => {
    if (!array.length) {
      permutations.push(permutation);

      return;
    }

    for (let i = 0; i < array.length; i++) {
      const rest = [...array];
      const person = rest.splice(i, 1)[0];

      permute(rest, [...permutation, person]);
    }
  };

  permute(persons, []);

  return permutations;
};

const table = (input) => {
  const relationships = input
    .split('\n')
    .map((x) => {
      const relationship = x.match(/(\w+) would (\w+) (\d+) happiness units by sitting next to (\w+)\./);

      return {
        name: relationship[1],
        change: parseInt(relationship[3]) * (relationship[2] === 'gain' ? 1 : -1),
        neighbor: relationship[4],
      };
    })
    .reduce((accumulator, currentValue) => {
      if (!accumulator[currentValue.name]) {
        accumulator[currentValue.name] = {};
      }

      accumulator[currentValue.name][currentValue.neighbor] = currentValue.change;

      return accumulator;
    }, {});

  Object.keys(relationships).forEach((person) => {
    relationships[person]['Mario'] = 0;
  });

  Object.keys(relationships).forEach((person) => {
    if (!relationships['Mario']) {
      relationships['Mario'] = {};
    }

    relationships['Mario'][person] = 0;
  });

  const maxHappinessChange = getPermutations(Object.keys(relationships))
    .map((permutation) => {
      let happinessChange = 0;

      for (let i = 0; i < permutation.length; i++) {
        if (typeof permutation[i + 1] !== 'undefined') {
          happinessChange += relationships[permutation[i]][permutation[i + 1]] +
                             relationships[permutation[i + 1]][permutation[i]];
        } else {
          happinessChange += relationships[permutation[i]][permutation[0]] +
                             relationships[permutation[0]][permutation[i]];
        }
      }

      return happinessChange;
    })
    .reduce((accumulator, currentValue) => {
      return currentValue > accumulator ? currentValue : accumulator;
    }, -Infinity);

  return maxHappinessChange;
};

module.exports = table;
