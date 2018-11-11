const getCombinations = (numberOfIngredients = 2, maximumTeaspoons = 100) => {
  const combinations = [];

  const combine = (ingredientsCombination, remainingTeaspoons) => {
    for (let i = remainingTeaspoons; i >= 0; i--) {
      if (ingredientsCombination.length !== numberOfIngredients - 1) {
        combine([...ingredientsCombination, i], remainingTeaspoons - i);
      }

      if (ingredientsCombination.length === numberOfIngredients - 1) {
        combinations.push([...ingredientsCombination, i]);

        return;
      }
    }
  };

  combine([], maximumTeaspoons);

  return combinations;
};

const cookie = (input) => {
  const ingredients = input
    .split('\n')
    .map((line) => {
      const stats = line.match(/(\w+): capacity (\S+), durability (\S+), flavor (\S+), texture (\S+), calories (\S+)/);

      return {
        name: stats[1],
        capacity: parseInt(stats[2]),
        durability: parseInt(stats[3]),
        flavor: parseInt(stats[4]),
        texture: parseInt(stats[5]),
        calories: parseInt(stats[6]),
      };
    });

  const ingredientFns = ingredients.map((ingredient) => {
    return (teaspoons) => {
      return {
        capacity: ingredient.capacity * teaspoons,
        durability: ingredient.durability * teaspoons,
        flavor: ingredient.flavor * teaspoons,
        texture: ingredient.texture * teaspoons,
      };
    };
  });

  const scores = getCombinations(ingredients.length)
    .map((combination) => {
      const { capacity, durability, flavor, texture } = combination
        .map((teaspoons, i) => ingredientFns[i](teaspoons))
        .reduce((accumulator, currentValue) => {
          accumulator['capacity'] += currentValue.capacity;
          accumulator['durability'] += currentValue.durability;
          accumulator['flavor'] += currentValue.flavor;
          accumulator['texture'] += currentValue.texture;

          return accumulator;
        }, {
          capacity: 0,
          durability: 0,
          flavor: 0,
          texture: 0,
        });

      const score = (capacity < 0 ? 0 : capacity) *
                    (durability < 0 ? 0 : durability) *
                    (flavor < 0 ? 0 : flavor) *
                    (texture < 0 ? 0 : texture);

      return score;
    })
    .filter((score) => score > 0);

  return Math.max(...scores);
};

module.exports = cookie;
