const lookAndSay = (input) => {
  const parts = input.split('');

  let output = [];
  let currentCounter = 1;
  let currentNumber = parts[0];

  for (let i = 0; i < parts.length; i++) {
    const nextNumber = parts[i + 1];

    if (nextNumber === currentNumber) {
      currentCounter++;
    } else {
      output.push(`${currentCounter}${currentNumber}`);
      currentCounter = 1;
      currentNumber = nextNumber;
    }
  }

  return output.join('');
};

module.exports = lookAndSay;
