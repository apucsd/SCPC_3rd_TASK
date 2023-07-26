// / Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
const generatePassword = (passwordLength) => {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  const allCharacters =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  let password = "";

  if (passwordLength < 8) {
    console.log("Password length must be 8");
    return;
  }

  password +=
    uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]; //get a random uppercase
  password +=
    lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]; //get a random lowercase
  password += numbers[Math.floor(Math.random() * numbers.length)]; //get a random number
  password +=
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)]; //get a random special char

  for (let i = password.length; i < passwordLength; i++) {
    const randomChar = Math.floor(Math.random() * allCharacters.length); //last hocche passwordLength er jonno baki char gulo
    password += allCharacters[randomChar];
  }
  console.log(password);
};

generatePassword(4);
