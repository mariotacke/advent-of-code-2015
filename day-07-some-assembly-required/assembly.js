const computeSignals = (instructions) => {
  const signals = {};
  const circuit = instructions
    .split('\n')
    .map((x) => {
      const instruction = x
        .trim()
        .match(/(.*)\s->\s(\w+)/);

      return {
        parts: instruction[1].split(' ').map((p) => {
          const number = parseInt(p);

          return Number.isInteger(number) ? number : p;
        }),
        signal: instruction[2],
      };
    })
    .sort((a, b) => (a.signal > b.signal) ? 1 : ((a.signal < b.signal) ? -1 : 0));

  let resolvedSignals = 0;

  while (circuit.length) {
    for (let i = circuit.length - 1; i >= 0; i--) {
      const { parts, signal } = circuit[i];

      if (parts.length === 1) {
        if (Number.isInteger(parts[0])) {
          signals[signal] = parts[0];
          circuit.splice(i, 1);
        } else if (signals[parts[0]]) {
          signals[signal] = signals[parts[0]];
          circuit.splice(i, 1);
        }
      } else if (parts[0] === 'NOT') {
        if (Number.isInteger(parts[1])) {
          signals[signal] = ~parts[1] & 0xffff;
          circuit.splice(i, 1);
        } else if (Number.isInteger(signals[parts[1]])) {
          signals[signal] = ~signals[parts[1]] & 0xffff;
          circuit.splice(i, 1);
        }
      } else if (parts.length === 3) {
        const input1 = Number.isInteger(parts[0]) ? parts[0] : signals[parts[0]];
        const input2 = Number.isInteger(parts[2]) ? parts[2] : signals[parts[2]];
        const operator = parts[1];

        if (Number.isInteger(input1) && Number.isInteger(input2)) {
          if (operator === 'AND') {
            signals[signal] = input1 & input2;
          } else if (operator === 'OR') {
            signals[signal] = input1 | input2;
          } else if (operator === 'LSHIFT') {
            signals[signal] = input1 << input2;
          } else if (operator === 'RSHIFT') {
            signals[signal] = input1 >> input2;
          }

          circuit.splice(i, 1);
        }
      }
    }

    // infinite loop guard. bail once we no longer solve new signals.
    if (resolvedSignals === Object.keys(signals).length) {
      throw new Error('Stuck solving circuit.');
    }

    resolvedSignals = Object.keys(signals).length;
  }

  return signals;
};

module.exports = computeSignals;
