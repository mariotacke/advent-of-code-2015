const getNextCode = (previousCode) => previousCode * 252533 % 33554393;

const getNextPosition = (row, column) => {
  return {
    nextRow: row === 1 ? column + row : row - 1,
    nextColumn: row === 1 ? 1 : column + 1,
  };
};

module.exports = (input) => {
  const [row, column] = input.match(/(\d+)/g).map((n) => parseInt(n));

  const seed = 20151125;

  let currentCode = seed;
  let currentRow = 1;
  let currentColumn = 1;

  do {
    const { nextRow, nextColumn } = getNextPosition(currentRow, currentColumn);

    currentRow = nextRow;
    currentColumn = nextColumn;

    currentCode = getNextCode(currentCode);
  } while (currentRow !== row || currentColumn !== column);

  return currentCode;
};
