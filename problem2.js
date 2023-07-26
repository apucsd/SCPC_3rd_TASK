// ===========================================
// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const getSum = (array) => {
  let sum = 0;
  for (const item of array) {
    if (item > 0) {
      sum += item;
    }
  }
  return sum;
};
console.log(getSum([20, 30, -50]));

// ===================================================
