const Calculate = {
  factorial(inputNum) {
    if (inputNum === 0) {
      return 1;
    } else {
      for (let i = inputNum - 1; i > 1; i--) {
        inputNum *= i;
      }
      return inputNum;
    }
  },
};

module.exports = Calculate;
