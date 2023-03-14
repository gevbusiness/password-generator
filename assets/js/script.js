// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

var allChars = [];

var lengthOfPassword = parseInt(window.prompt("Password Length:"));

if (lengthOfPassword < 8 || lengthOfPassword > 128) {
  alert("Password length must be between 8 - 128 characters!");
} else {
  var hasUppercase = confirm("Do you want uppercase characters?")
  console.log(hasUppercase);
  if (hasUppercase) {
    allChars = allChars.concat(upperCasedCharacters)
  }

  var hasLowercase = confirm("Do you want lowercase characters?")
  console.log(hasLowercase);
  if (hasLowercase) {
    allChars = allChars.concat(lowerCasedCharacters)
  }

  var hasnumericCharacters = confirm("Do you want numeric characters?")
  console.log(hasnumericCharacters);
  if (hasnumericCharacters) {
    allChars = allChars.concat(numericCharacters)
  }

  var hasspecialCharacters = confirm("Do you want special characters?")
  console.log(hasspecialCharacters);
  if (hasspecialCharacters) {
    allChars = allChars.concat(specialCharacters)
  }

  console.log(allChars); 
}

for (var i = 0; i < lengthOfPassword; i++) {
  var randomIndex = Math.floor(Math.random() * allChars.length);
  var randomNum = allChars[randomIndex];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



