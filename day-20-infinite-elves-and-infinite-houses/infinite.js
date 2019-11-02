const getFactors = (houseNumber) => {
  const factors = [];

  let i = 1;
  let end = houseNumber;

  while (i <= end) {
    if (i * end === houseNumber) {
      factors.push(i, end);
    }

    i++;
    end = Math.floor(houseNumber / i);
  }

  return factors;
};

const getPresents = (houseNumber) => {
  let presents = 0;

  const factors = getFactors(houseNumber);

  for (let i = 0; i < factors.length; i++) {
    presents += houseNumber / factors[i];
  }

  return presents * 10;
};

const infinite = (presentsThreshold) => {
  let houseNumber = 1;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const presents = getPresents(houseNumber);

    if (presents >= presentsThreshold) {
      break;
    }

    houseNumber++;
  }

  return houseNumber;
};

module.exports = infinite;
