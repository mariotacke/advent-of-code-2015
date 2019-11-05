module.exports = (input) => {
  const instructions = input
    .split('\n')
    .map((line) => {
      const instruction = line.trim().replace(',', '').split(' ');

      if (['jie', 'jio'].includes(instruction[0])) {
        return {
          command: instruction[0],
          register: instruction[1],
          offset: parseInt(instruction[2]),
        };
      }

      if (['hlf', 'tpl', 'inc'].includes(instruction[0])) {
        return {
          command: instruction[0],
          register: instruction[1],
        };
      }

      return {
        command: instruction[0],
        offset: parseInt(instruction[1]),
      };
    });

  const registers = {
    a: 0,
    b: 0,
  };

  let position = 0;

  while (position >= 0 && position < instructions.length) {
    const { command, register, offset } = instructions[position];

    if (command === 'hlf') {
      registers[register] = registers[register] >> 1;
      position++;
    } else if (command === 'tpl') {
      registers[register] *= 3;
      position++;
    } else if (command === 'inc') {
      registers[register] += 1;
      position++;
    } else if (command === 'jmp') {
      position += offset;
    } else if (command === 'jie' && registers[register] % 2 === 0) {
      position += offset;
    } else if (command === 'jio' && registers[register] === 1) {
      position += offset;
    } else {
      position++;
    }
  }

  return registers;
};
