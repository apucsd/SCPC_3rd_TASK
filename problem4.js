// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const getSumOfTargetValue = (sortedArray, targetValue) => {
  for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      const sum = sortedArray[i] + sortedArray[j];

      if (sum === targetValue) {
        return [i, j];
      }
    }
  }

  return "Targeted value not match ";
};

console.log(getSumOfTargetValue([1, 3, 6, 8, 11, 15], 9));
