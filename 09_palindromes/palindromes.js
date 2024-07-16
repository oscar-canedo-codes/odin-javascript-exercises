const palindromes = function (words) {
  // CONVERT to lowercase and REMOVE  all non-alphanumeric characters
  const cleanedWords = words.toLowerCase().replace(/[^a-z0-9]/g, "");

  // SPLIT the formatted string and store the returned array
  const stringToArray = cleanedWords.split("");

  // REVERSE the array and JOIN back as string
  const reversedWords = stringToArray.reverse().join("");

  // RETURN the comparison result
  return cleanedWords === reversedWords;
};

// Do not edit below this line
module.exports = palindromes;
