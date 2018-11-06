const getPermutations = (cities) => {
  const permutations = [];

  const permute = (array, permutation = []) => {
    if (!array.length) {
      permutations.push(permutation);

      return;
    }

    for (let i = 0; i < array.length; i++) {
      const rest = [...array];
      const city = rest.splice(i, 1)[0];

      permute(rest, [...permutation, city]);
    }
  };

  permute(cities, []);

  return permutations;
};

const shortestDistance = (input) => {
  const cities = new Set();

  const connections = input
    .split('\n')
    .map((distance) => {
      const parts = distance
        .trim()
        .match(/(\w+) to (\w+) = (\d+)/);

      return {
        a: parts[1],
        b: parts[2],
        distance: parseInt(parts[3]),
      };
    });

  connections.forEach((connection) => {
    cities.add(connection.a);
    cities.add(connection.b);
  });

  const permutations = getPermutations([...cities])
    .map((permutation) => {
      const distance = permutation.reduce((previousValue, currentValue, currentIndex, array) => {
        const nextValue = array[currentIndex + 1];

        if (nextValue) {
          const connection = connections
            .find((x) =>
              (x.a === currentValue && x.b === nextValue) ||
              (x.a === nextValue && x.b === currentValue)
            );

          return previousValue + connection.distance;
        }

        return previousValue;
      }, 0);

      return {
        distance,
        route: permutation,
      };
    });

  return Math.max(...permutations.map((x) => x.distance));
};

module.exports = shortestDistance;
