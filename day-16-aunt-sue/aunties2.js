const aunties = (input, compounds) => {
  const aunts = input
    .split('\n')
    .map((aunt) => {
      const match = aunt.match(/Sue (\d+): (\w+): (\d+), (\w+): (\d+), (\w+): (\d+)/);

      return {
        number: parseInt(match[1]),
        compounds: {
          [match[2]]: parseInt(match[3]),
          [match[4]]: parseInt(match[5]),
          [match[6]]: parseInt(match[7]),
        },
      };
    });

  const gift = compounds
    .split('\n')
    .reduce((accumulator, compound) => {
      const [, name, number] = compound.match(/(\w+): (\d+)/);

      accumulator[name] = parseInt(number);

      return accumulator;
    }, {});

  const isKnown = (property) => typeof property !== 'undefined';

  const matches = aunts
    .filter(({ compounds: aunt }) => {
      if (isKnown(aunt.cats) && aunt.cats <= gift.cats) return false;
      if (isKnown(aunt.trees) && aunt.trees <= gift.trees) return false;

      if (isKnown(aunt.pomeranians) && aunt.pomeranians >= gift.pomeranians) return false;
      if (isKnown(aunt.goldfish) && aunt.goldfish >= gift.goldfish) return false;

      if (isKnown(aunt.children) && aunt.children !== gift.children) return false;
      if (isKnown(aunt.samoyeds) && aunt.samoyeds !== gift.samoyeds) return false;
      if (isKnown(aunt.akitas) && aunt.akitas !== gift.akitas) return false;
      if (isKnown(aunt.vizslas) && aunt.vizslas !== gift.vizslas) return false;
      if (isKnown(aunt.cars) && aunt.cars !== gift.cars) return false;
      if (isKnown(aunt.perfumes) && aunt.perfumes !== gift.perfumes) return false;

      return true;
    });

  return matches[0].number;
};

module.exports = aunties;
