const hasIncreasingStraight = (password) => {
  const sequence = password.split('').map((x) => x.charCodeAt(0));

  for (let i = 0; i < sequence.length - 2; i++) {
    if (sequence[i + 1] === sequence[i] + 1 &&
        sequence[i + 2] === sequence[i] + 2) {
      return true;
    }
  }

  return false;
};

const hasForbiddenCharacters = (password) => {
  const set = new Set(password.split(''));

  return set.has('i') ||
         set.has('o') ||
         set.has('l');
};

const hasNonOverlappingPairs = (password) => {
  const sequence = password.split('');
  const set = new Set();

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === sequence[i + 1]) {
      set.add(sequence.slice(i, i + 2).join(''));
    }
  }

  return set.size > 1;
};

const isValidPassword = (password) => {
  return hasIncreasingStraight(password) &&
         !hasForbiddenCharacters(password) &&
         hasNonOverlappingPairs(password);
};

const incrementPassword = (password) => {
  const sequence = password.split('').map((x) => x.charCodeAt(0)).reverse();

  let index = 0;

  while (index < sequence.length) {
    if (sequence[index] + 1 > 'z'.charCodeAt(0)) {
      sequence[index] = 'a'.charCodeAt(0);
    } else {
      sequence[index] = sequence[index] + 1;
      break;
    }

    index++;
  }

  return sequence.map((x) => String.fromCharCode(x)).reverse().join('');
};

const skip = (password) => {
  const index = password.search(/[iol]/);

  return password.slice(0, index + 1) + 'z'.repeat(password.length - index - 1);
};

const passwordGenerator = (password) => {
  let nextPassword = password;

  do {
    if (hasForbiddenCharacters(nextPassword)) {
      nextPassword = skip(nextPassword);
    }

    nextPassword = incrementPassword(nextPassword);
  } while (!isValidPassword(nextPassword));

  return nextPassword;
};

module.exports = {
  hasIncreasingStraight,
  hasForbiddenCharacters,
  hasNonOverlappingPairs,
  incrementPassword,
  passwordGenerator
};
