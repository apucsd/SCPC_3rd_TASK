// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
const getReversedString = (string) => {
  let reversedString = [];

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString.push(string[i]);
  }
  return reversedString.join("");
};

console.log(getReversedString("Hello World"));
