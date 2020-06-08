// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//  Write password to the #password input
function writePassword() {
  //   var password = generatePassword();
  //   passwordText.value = password;

  passwordText.value = generatePassword();
}

// Variables
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "'",
  "=",
  "<",
  ">",
  "/",
  ",",
  ".",
  "`",
];

// Generate Password
function generatePassword() {
  var passwordLength = prompt(
    "How many characters should your password be? Choose between 9 - 15 characters."
  );

  passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength)) {
    alert("Please enter a number!");
    return;
  } else if (passwordLength < 9 || passwordLength > 15) {
    alert("A value between 9 - 15 characters long was not entered.");
    return;
  } else {
    var confirmLowerCase = confirm("Input lowercase letters in your password");
    var confirmUpperCase = confirm("Input uppercase letters in your password");
    var confirmNumbers = confirm("Input numbers in your password");
    var confirmSpecial = confirm("Input special characters in your password");

    if (
      !(
        confirmLowerCase ||
        confirmUpperCase ||
        confirmNumbers ||
        confirmSpecial
      )
    ) {
      alert("You must select at least one criteria.");
      return;
    } else {
      //   var allChar = [];
      //   if (confirmLowerCase) allChar = allChar.concat(lowerCase);
      //   if (confirmUpperCase) allChar = allChar.concat(upperCase);
      //   if (confirmNumbers) allChar = allChar.concat(numbers);
      //   if (confirmSpecial) allChar = allChar.concat(special);

      //   var password = "";
      //   for (var i = 1; i <= passwordLength; i++) {
      //     var randomChar = allChar[Math.floor(Math.random() * allChar.length)];
      //     password = password + randomChar;
      //   }
      //   return password;
      var allChar = [];
      var password = [];

      if (confirmLowerCase) {
        allChar = allChar.concat(lowerCase);
        password.push(returnRandomElement(lowerCase));
      }

      if (confirmUpperCase) {
        allChar = allChar.concat(upperCase);
        password.push(returnRandomElement(upperCase));
      }

      if (confirmNumbers) {
        allChar = allChar.concat(numbers);
        password.push(returnRandomElement(numbers));
      }

      if (confirmSpecial) {
        allChar = allChar.concat(special);
        password.push(returnRandomElement(special));
      }

      for (var i = password.length; i < passwordLength; i++) {
        // var randomChar = allChar[Math.floor(Math.random() * allChar.length)];
        // password = password + randomChar;
        password.push(returnRandomElement(allChar));
      }
      return shuffle(password).join("");
    }
  }
}

function shuffle(arr) {
  // [0,1,2,3,4,5,6,7,8,9]
  for (var i = 0; i < arr.length; i++) {
    var y = Math.floor(Math.random() * arr.length);
    // i = 0, y = [0-9] -> 4
    // i = 1, y = [0-9] -> 9
    // i = 2, y = [0-9] -> 0
    var X = arr[i];
    var Y = arr[y];
    // X = 0, Y = 4
    // X = 1, Y = 9
    // X = 2, Y = 4

    arr[i] = Y;
    arr[y] = X;
    // [4,1,2,3,0,5,6,7,8,9]
    // [4,9,2,3,0,5,6,7,8,1]
    // [2,9,4,3,0,5,6,7,8,1]
  }

  return arr;
}

function returnRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
