const solveMolecule = (target, replacements) => {
  let leastSteps = Infinity;

  const solve = (currentMolecule, steps = 0) => {
    if (currentMolecule === 'e') {
      if (steps >= leastSteps) {
        return;
      }

      leastSteps = Math.min(leastSteps, steps);

      return;
    }

    const set = new Set();

    for (let i = 0; i < replacements.length; i++) {
      const { from, to } = replacements[i];

      for (let j = 0; j < currentMolecule.length; j++) {
        if (currentMolecule.slice(j, j + to.length) === to) {
          const nextMolecule = [
            ...currentMolecule.slice(0, j),
            from,
            ...currentMolecule.slice(j + to.length, currentMolecule.length),
          ].join('');

          set.add(nextMolecule);
        }
      }
    }

    const values = [...set];

    if (!values.length) {
      return;
    }

    set.forEach((value) => {
      solve(value, steps + 1);
    });
  };

  solve(target);

  return leastSteps;
};

const medicine = (molecule, replacements) => {
  replacements = replacements
    .split('\n')
    .map((x) => {
      const parts = x.match(/(\w+) => (\w+)/);

      return {
        from: parts[1],
        to: parts[2],
      };
    })
    .sort((a, b) => b.to.length - a.to.length);

  const leastSteps = solveMolecule(molecule, replacements);

  return leastSteps;
};

module.exports = medicine;
