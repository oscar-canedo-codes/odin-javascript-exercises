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
};

// Do not edit below this line
module.exports = findTheOldest;
