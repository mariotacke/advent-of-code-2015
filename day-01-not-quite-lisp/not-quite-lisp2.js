const notQuiteLisp = (input) => {
  const array = input.split('');

  let currentFloor = 0;

  for (let i = 0; i < array.length; i++) {
    currentFloor += array[i] === '(' ? 1 : -1;

    if (currentFloor === -1) {
      return i + 1;
    }
  }
};

module.exports = notQuiteLisp;
