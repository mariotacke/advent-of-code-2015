const directions = (input) => {
  const grid = {
    '0,0': 1,
  };

  const instructions = input.split('');

  const santa = instructions.filter((x, i) => i % 2 === 0);
  const roboSanta = instructions.filter((x, i) => i % 2 === 1);

  const move = (filteredInstructions) => {
    const position = { x: 0, y: 0 };

    for (let i = 0; i < filteredInstructions.length; i++) {
      const instruction = filteredInstructions[i];

      const direction = {
        x: instruction === '<' ? -1 : instruction === '>' ? 1 : 0,
        y: instruction === '^' ? -1 : instruction === 'v' ? 1 : 0,
      };

      position.x += direction.x;
      position.y += direction.y;

      let visits = grid[`${position.x},${position.y}`] || 0;

      visits++;

      grid[`${position.x},${position.y}`] = visits;
    }
  };

  move(santa);
  move(roboSanta);

  return Object.keys(grid).length;
};

module.exports = directions;
