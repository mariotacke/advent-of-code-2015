const getElves = (houseNumber) => {
  const elves = [];

  for (let i = 1; i <= Math.floor(houseNumber / 2); i++) {
    if (houseNumber % i === 0) {
      elves.push(i);
    }
  }

  elves.push(houseNumber);

  return elves.reduce((a, b) => a + b, 0);
};

const infinite = (presentsThreshold) => {
  let houseNumber = 1;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const presents = getElves(houseNumber) * 10;

    if (presents >= presentsThreshold) {
      break;
    }

    houseNumber++;
  }

  return houseNumber;
};

module.exports = infinite;
