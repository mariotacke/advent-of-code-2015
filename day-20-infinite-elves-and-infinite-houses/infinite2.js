const getFactors = (houseNumber) => {
  const factors = new Set();

  let i = 1;
  let end = houseNumber;

  while (i <= end) {
    if (i * end === houseNumber) {
      factors.add(i);
      factors.add(end);
    }

    i++;
    end = Math.floor(houseNumber / i);
  }

  return [...factors];
};

const getPresents = (houseNumber) => {
  let presents = 0;

  const factors = getFactors(houseNumber)
    .filter((factor) => factor * 50 >= houseNumber);

  for (let i = 0; i < factors.length; i++) {
    presents +=  factors[i] * 11;
  }

  return presents;
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
