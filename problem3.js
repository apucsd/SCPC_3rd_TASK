// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const getMostFrequent = (array) => {
  const frequencyMap = {};
  let maxFrequency = 0;
  let mostFrequentElement;

  for (const element of array) {
    if (frequencyMap[element]) {
      frequencyMap[element]++;
    } else {
      frequencyMap[element] = 1; // na thakhle 1
    }
    if (frequencyMap[element] > maxFrequency) {
      maxFrequency = frequencyMap[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
};

console.log(getMostFrequent([1, 2, 3, 2, 2, 4, 4, 5, 2, 6]));
