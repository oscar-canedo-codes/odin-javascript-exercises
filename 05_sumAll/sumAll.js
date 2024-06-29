// 1. INITIALIZE the sum
// 2. HANDLE parameter order
// 3. TYPE CHECKING and ERROR handling
// 4. LOOP through numbers
// 5. RETURN result

const sumAll = function (x, y) {
  // Initialize the sum
  let sumResult = 0;

  // Check if parameters are valid
  if (typeof x !== "number" || typeof y !== "number" || x < 0 || y < 0) {
    return "ERROR";
  }

  // Determine the start and end points
  let startNum = Math.min(x, y);
  let endNum = Math.max(x, y);

  // Loop through the numbers and add to sumResult

  for (let i = startNum; i <= endNum; i++) {
    sumResult += i;
  }
  // Return the final sum
  return sumResult;
};

// Do not edit below this line
module.exports = sumAll;
