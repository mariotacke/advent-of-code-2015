const directions = (input) => {
  const grid = {
    '0,0': 1,
  };

  const instructions = input.split('');
  const position = { x: 0, y: 0 };

  for (let i = 0; i < instructions.length; i++) {
    const direction = {
      x: instructions[i] === '<' ? -1 : instructions[i] === '>' ? 1 : 0,
      y: instructions[i] === '^' ? -1 : instructions[i] === 'v' ? 1 : 0,
    };

    position.x += direction.x;
    position.y += direction.y;

    let visits = grid[`${position.x},${position.y}`] || 0;

    visits++;

    grid[`${position.x},${position.y}`] = visits;
  }

  return Object.keys(grid).length;
};

module.exports = directions;
