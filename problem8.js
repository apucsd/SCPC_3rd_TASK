// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallest = (array) => {
  const min = Math.min(...array);
  const secondMin = array.reduce(
    (pre, cur) => (cur < pre && cur !== min ? cur : pre),
    Infinity
  );
  return secondMin;
};

console.log(findSecondSmallest([32, 22, 53, 92, 20, 34, 23, 11, 17]));
