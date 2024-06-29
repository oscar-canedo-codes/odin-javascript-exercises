const removeFromArray = function (array, ...args) {
  // CREATE new empty array
  const newArray = [];

  // LOOP forEach method to iterate through the array
  array.forEach((element) => {
    // CHECK if elements are included in the  arguments
    if (!args.includes(element)) {
      // PUSH every element not included in arguments function into new array
      newArray.push(element);
    }
  });
  // RETURN new array resultn
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
