const containsPairWithoutOverlap = (value) => {
  for (let i = 0; i < value.length; i++) {
    for (let j = i + 2; j < value.length; j++) {
      if (`${value[i]}${value[i + 1]}` === `${value[j]}${value[j + 1]}`) {
        return true;
      }
    }
  }

  return false;
};

const containsRepeatedLetter = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (value[i] === value[i + 2]) {
      return true;
    }
  }

  return false;
};

const niceString = (input) => {
  const string = input.trim();

  const isNice = containsPairWithoutOverlap(string) &&
                 containsRepeatedLetter(string);

  return isNice;
};

module.exports = niceString;
