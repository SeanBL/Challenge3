// Assignment code here
// These arrays hold the characters for each character type.
var lowerSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numSet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var specialSet = ["!", "@", "#", "$", "%", "^", "&", "*"];

// This empty array holds the entire index of the selected character type arrays. 
var selectedSet = [];

//This empty array holds one character from the character type arrays selected by the user.
var result = [];


function generatePassword() {
  var passwordLength = '';         //This empty variable 
  var ranOnce = false;            //This sets the variable to false.

  /*This do-while loop runs the code block first. Since the "if" statement conditional is already set to
  false the "invalid" alert does not run.  */
  do {
    if (ranOnce)                  
      window.alert("Invalid input. Please try again.");
     passwordLength = window.prompt("Choose Password Length from 8 to 128");
     ranOnce = true;
    } while(!(passwordLength >= 8 && passwordLength <= 128))
    
    window.alert("you chose " + passwordLength)
    /*This do-while loop runs the code that prompts that user to select character types for the 
    password generator. If on criteria is not selected the loop will run until at least one criteria
    is selected.*/
  do {
    if (lowerCase == "n" && upperCase == "n" && numeric == "n" && specialCharacters == "n") {
      window.alert("Please select one character type.")
    }   //This if statement will run the alert if user selects no for each criteria.

  var lowerCase = window.prompt("Would you like to include lowercase letters? (y/n)");
  
  if (lowerCase == "y") {
    result.push(lowerSet[Math.floor(Math.random()*lowerSet.length)]);   //This randomly selects a character from the lowerSet array and places the character in the result array.
    window.alert("lowercase letters have been included");
    selectedSet = selectedSet.concat(lowerSet);                         //This adds the entire contents of the lowerSet array into the selectedSet array.
  } else if (lowerCase == "n") {
    window.alert("lowercase letters have not been included");
  } else {
    window.alert("Invalid input. Please try again.")
  }
  
  var upperCase = window.prompt("Would you like to include uppercase letters? (y/n)")
  
  if (upperCase == "y") {
    result.push(upperSet[Math.floor(Math.random()*upperSet.length)]);
    window.alert("Uppercase letters have been included");
    selectedSet = selectedSet.concat(upperSet);
  } else if (upperCase == "n") {
    window.alert("Uppercase letters have not been included");
  } else {
    window.alert("Invalid input. Please try again.")
  }

  var numeric = window.prompt("Would you like to include numerics? (y/n)")
  
  if (numeric == "y") {
    result.push(numSet[Math.floor(Math.random()*numSet.length)]);
    window.alert("Numerics have been included");
    selectedSet = selectedSet.concat(numSet);
  } else if (numeric == "n") {
    window.alert("Numerics have not been included");
  } else {
    window.alert("Invalid input. Please try again.")
  }

  var specialCharacters = window.prompt("Would you like to include special characters? (y/n)")
  
  if (specialCharacters == "y") {
    result.push(specialSet[Math.floor(Math.random()*specialSet.length)]);
    window.alert("Special characters have been included");
    selectedSet = selectedSet.concat(specialSet);
  } else if (specialCharacters == "n") {
    window.alert("Special characters have not been included");
  } else {
    window.alert("Invalid input. Please try again.")
  } 
}

while (lowerCase == "n" && upperCase == "n" && numeric == "n" && specialCharacters == "n");    //This while loop sets the condition for the do-while loop. 

  
  var characterLength = selectedSet.length;              //This variable is set to the array length of the selectedSet once the user has selected each criteria.
  /*This for loop has "i" set to the result.length since the criteria already selected has been already added
  to the result array. This allows for the remaining characters that need to be added from the selectedSet array
  to match the selected password length. The body of the for loop adds the remaing characters from the selectedSet 
  array. */
  for (i = result.length; i < passwordLength; i++) {

    result.push(selectedSet[(Math.floor(Math.random() * characterLength))]);
  }
  result = result.sort(() => (Math.random() > .5) ? 1 : -1);     //This randomly sorts the characters in the results array.
  result = result.join('');                                      //This
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

