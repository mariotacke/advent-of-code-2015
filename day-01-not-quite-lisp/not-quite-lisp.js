const notQuiteLisp = (input) => {
  return input
    .split('')
    .reduce((accumulator, currentValue) => {
      return accumulator + (currentValue === '(' ? 1 : -1);
    }, 0);
};

module.exports = notQuiteLisp;