const medicine = (molecule, replacements) => {
  const molecules = new Set();

  replacements
    .split('\n')
    .map((x) => {
      const parts = x.match(/(\w+) => (\w+)/);

      return {
        from: parts[1],
        to: parts[2],
      };
    })
    .forEach(({ from, to }) => {
      for (let i = 0; i < molecule.length; i++) {
        if (molecule.slice(i, i + from.length) === from) {
          const replacement = [
            ...molecule.slice(0, i),
            to,
            ...molecule.slice(i + from.length, molecule.length),
          ].join('');

          molecules.add(replacement);
        }
      }
    });

  return molecules.size;
};

module.exports = medicine;
