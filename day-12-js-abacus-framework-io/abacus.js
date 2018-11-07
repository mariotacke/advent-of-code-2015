const traverse = (node) => {
  if (Number.isInteger(node)) {
    return node;
  } else if (typeof node === 'string') {
    return 0;
  } else if (Array.isArray(node)) {
    const sum = node
      .map((x) => traverse(x))
      .reduce((a, b) => a + b, 0);

    return sum;
  } else if (typeof node === 'object') {
    return Object
      .keys(node)
      .map((k) => {
        return traverse(node[k]);
      })
      .reduce((a, b) => a + b, 0);
  }
};

const abacus = (input) => {
  return traverse(input);
};

module.exports = abacus;
