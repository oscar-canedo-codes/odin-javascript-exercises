const findTheOldest = function (people) {
  // HANDLE case where yearOfDeath is undefined
  const currentYear = new Date().getFullYear();

  return people.reduce((oldest, person) => {
    // CALCULATE the age of the current person
    const age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    // CALCULATE the age of the person stored in the accumulator
    const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

    // COMPARE the ages and return the oldest person
    return age > oldestAge ? person : oldest;
  }, people[0]); // INITIALIZE with the first people in the array

  // TEST FOR CORRECTNESS OF NAME

  // TEST YEAR OF BIRTH

  // TEST YEAR OF DEATH

  // OR TEST NO DEATH DATE - JS DATE() FUNCTION TO GET AGE AS OF TODAY

  // RETURN OBJECT OF PERSON - REDUCE METHOD

  // 1. RETURN PERSON WHO LIVED THE LONGEST

  // 2. HANDLE CASES WITH UNDEFINED YEAR OF DEATH ON A NON-OLDEST PERSON, TO  RETURN WHO LIVED THE LONGEST

  // 3. HANDLE CASES WITH UNDEFINED YEAR OF DEATH FOR OLDEST PERSON, TO RETURN OLDEST LIVING PERSON

  /* Summarizing the Requirements

    The function findTheOldest should be able to handle an array of people with each person having name, yearOfBirth, and optionally yearOfDeath.
    It should calculate the age for each person, considering:
        If yearOfDeath is missing, assume the person is still alive and use the current year to calculate the age.
        Compare ages to find the oldest person.
    The function should return the name of the oldest person. */

  /* Testing Approach

Each test case has specific conditions and expected outcomes:

    Test 1: Ensures basic functionality works with complete data.
    Test 2: Ensures the function can handle missing yearOfDeath for non-oldest individuals.
    Test 3: Ensures the function can handle missing yearOfDeath for the oldest individual. */
};

// Do not edit below this line
module.exports = findTheOldest;
