const containsThreeVowels = (value) => {
  return value.split('')
    .filter((character) => /[aeiou]/g.test(character))
    .length >= 3;
};

const containsLetterTwiceInARow = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (value[i] === value[i + 1]) {
      return true;
    }
  }

  return false;
};

const containsForbiddenPair = (value) => {
  return value.includes('ab') ||
         value.includes('cd') ||
         value.includes('pq') ||
         value.includes('xy');
};

const niceString = (input) => {
  const string = input.trim();

  const isNice = containsThreeVowels(string) &&
                 containsLetterTwiceInARow(string) &&
                 !containsForbiddenPair(string);

  return isNice;
};

module.exports = niceString;
