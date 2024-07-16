const fibonacci = function (input) {
  // CONVERT input to integer
  let num = parseInt(input);

  if (num < 0) return "OOPS"; // VALIDATE negative number
  if (num === 0) return 0; // Base case
  if (num === 1) return 1; // Base case

  let previous = 0;
  let current = 1;
  let next;

  for (let i = 2; i <= num; i++) {
    next = previous + current;
    previous = current;
    current = next;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;
