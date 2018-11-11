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
    .map((ingredient) => {
      const stats = ingredient.match(/(\w+): capacity (\S+), durability (\S+), flavor (\S+), texture (\S+), calories (\S+)/);

      return {
        name: stats[1],
        fn: (teaspoons) => {
          return {
            capacity: parseInt(stats[2]) * teaspoons,
            durability: parseInt(stats[3]) * teaspoons,
            flavor: parseInt(stats[4]) * teaspoons,
            texture: parseInt(stats[5]) * teaspoons,
            calories: parseInt(stats[6]) * teaspoons,
          };
        },
      };
    });

  const scores = getCombinations(ingredients.length)
    .map((combination) => {
      const { capacity, durability, flavor, texture, calories } = combination
        .map((teaspoons, i) => ingredients[i].fn(teaspoons))
        .reduce((accumulator, currentValue) => {
          accumulator['capacity'] += currentValue.capacity;
          accumulator['durability'] += currentValue.durability;
          accumulator['flavor'] += currentValue.flavor;
          accumulator['texture'] += currentValue.texture;
          accumulator['calories'] += currentValue.calories;

          return accumulator;
        }, {
          capacity: 0,
          durability: 0,
          flavor: 0,
          texture: 0,
          calories: 0,
        });

      const score = (capacity < 0 ? 0 : capacity) *
                    (durability < 0 ? 0 : durability) *
                    (flavor < 0 ? 0 : flavor) *
                    (texture < 0 ? 0 : texture);

      return {
        score,
        calories,
      };
    })
    .filter(({ calories }) => calories === 500)
    .map((cookie) => cookie.score);

  return Math.max(...scores);
};

module.exports = cookie;
