// Assignment code here
var lowerSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numSet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var specialSet = ["!", "@", "#", "$", "%", "^", "&", "*"];

var selectedSet = [];



function generatePassword() {
  var passwordLength = window.prompt("Choose Password Length from 8 to 128");

   if (passwordLength >= 8 && passwordLength <= 128) {
     window.alert("you chose " + passwordLength)
   }else {
     window.alert("Invalid input. Please try again.");
   }

  var lowerCase = window.prompt("Would you like to include lowercase letters? (y/n)");
  
  if (lowerCase == "y") {
    window.alert("lowercase letters have been included");
    selectedSet = selectedSet.concat(lowerSet);
  } else if (lowerCase == "n") {
    window.alert("lowercase letters have not been included");
  } else {
    window.alert("Invalid input. Please try again.")
  }

  var upperCase = window.prompt("Would you like to include uppercase letters? (y/n)")
  
  if (upperCase == "y") {
    window.alert("Uppercase letters have been included");
    selectedSet = selectedSet.concat(upperSet);
  } else if (upperCase == "n") {
    window.alert("Uppercase letters have not been included");
  } else {
    window.alert("Invalid input. Please try again.")
  }

  var numeric = window.prompt("Would you like to include numerics? (y/n)")
  
  if (numeric == "y") {
    window.alert("Numerics have been included");
    selectedSet = selectedSet.concat(numSet);
  } else if (numeric == "n") {
    window.alert("Numerics have not been included");
  } else {
    window.alert("Invalid input. Please try again.")
  }

  var specialCharacters = window.prompt("Would you like to include special characters? (y/n)")
  
  if (specialCharacters == "y") {
    window.alert("Special characters have been included");
    selectedSet = selectedSet.concat(specialSet);
  } else if (specialCharacters == "n") {
    window.alert("Special characters have not been included");
  } else {
    window.alert("Invalid input. Please try again.")
  }

  var result = '';
  var characterLength = selectedSet.length;
  for (i = 0; i < passwordLength; i++) {

    result += selectedSet[(Math.floor(Math.random() * characterLength))];
  }
 console.log(result);
  return result;
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

