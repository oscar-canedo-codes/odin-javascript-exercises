const reverseString = function (str) {
  // SPLIT method returns array
  const splitString = str.split("");

  // REVERSE array
  const reverseArray = splitString.reverse();

  // JOIN all elements within array into a string
  const joinArray = reverseArray.join("");

  // RETURN reversed String
  return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
