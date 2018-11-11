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

  const giftCompounds = compounds
    .split('\n')
    .reduce((accumulator, compound) => {
      const [, name, number] = compound.match(/(\w+): (\d+)/);

      accumulator[name] = parseInt(number);

      return accumulator;
    }, {});

  const matches = aunts
    .filter(({ compounds }) => {
      if (compounds.children && compounds.children !== giftCompounds.children) return false;
      if (compounds.cats && compounds.cats !== giftCompounds.cats) return false;
      if (compounds.samoyeds && compounds.samoyeds !== giftCompounds.samoyeds) return false;
      if (compounds.pomeranians && compounds.pomeranians !== giftCompounds.pomeranians) return false;
      if (compounds.akitas && compounds.akitas !== giftCompounds.akitas) return false;
      if (compounds.vizslas && compounds.vizslas !== giftCompounds.vizslas) return false;
      if (compounds.goldfish && compounds.goldfish !== giftCompounds.goldfish) return false;
      if (compounds.trees && compounds.trees !== giftCompounds.trees) return false;
      if (compounds.cars && compounds.cars !== giftCompounds.cars) return false;
      if (compounds.perfumes && compounds.perfumes !== giftCompounds.perfumes) return false;

      return true;
    })
    .filter(({ compounds }) => !Object.values(compounds).every((value) => value === 0));

  return matches[0].number;
};

module.exports = aunties;
