const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  //INITIALIZE sum
  let sum = 0;

  // LOOP through elements and add recursively to sum
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  // RETURN result
  return sum;
};

const multiply = function (arr) {
  // REDUCE method called on array
  // CALLBACK FUNCTION is passed to reduce
  // INITIALIZE value 1 (multiplication to 0 == 0), passed as second argument to reduce
  return arr.reduce((acc, num) => acc * num, 1);
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (num) {
  // FORMULA n! = n × (n - 1)
  /* PATTERN: 
    0! = 1
    1! = 1
    2! = 2 * 1
    3! = 3 * 2 * 1
    4! = 4 * 3 * 2 * 1
    5! = 5 * 4 * 3 * 2 * 1
 */

  let result = num;
  if (num === 0 || num === 1) return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
