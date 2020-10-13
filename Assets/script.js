// Assignment Code, this applies to the bottom fuction
let generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  let password = generatePassword(); //create this
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button- when user clicks button, run function
generateBtn.addEventListener("click", writePassword);

//function to copy password to clipboard
function copyPassword() {

  document.getElementById("password").select();

  document.execCommand("Copy");

  alert("Password has been copied!");
}

/*--------------------------------------- */

//starting variables that define the string options used for our password generator
//the .split() divides the string into an array which we can use later in the generatePassword() function
let lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let passwordNumber = "1234567890".split("");
let special = " !#$%&/'()*+,-./:;<=>?@[]^_`{|}~".split("");

//this will assure someone has entered a number (between 8 - 128)
function getPasswordOptions() {
  do {
    let passwordString = prompt("Please indicate the length you want for your password between 8-128 characters.");
      if (isNaN(passwordString)) {
        alert("Please enter a number between 8-128.");
      } else {
          if (passwordString > 7 && passwordString < 129) {
          inputValid = 0;
          passwordLength = parseInt(passwordString);
          } else {
            alert("Please enter a number between 8-128.");
          }
      }
  } while (inputValid === 1);

  //we then save the user's confirm answer as a variable
  let hasSpecialCharacters = confirm("Do you want special characters?");
  let hasLowercaseCharacters = confirm("Do you want lowercase characters?");
  let hasUppercaseCharacters = confirm("Do you want uppercase characters?");
  let hasNumericCharacters = confirm("Do you want numbers?");

  //this assures that the user has selected at least one character option
  if (hasSpecialCharacters === false && hasLowercaseCharacters === false && hasNumericCharacters === false && hasUppercaseCharacters === false) {
    alert("Please confirm at least one option for your password.");
    return;
  }

  //this is an object which we call "passwordOptions", this makes our arrays an object keyword which we can call upon later when we need a particular character or number
  const passwordOptions = {
    passwordLength: passwordLength,
    hasLowercaseCharacters: hasLowercaseCharacters,
    hasUppercaseCharacters: hasUppercaseCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasSpecialCharacters: hasSpecialCharacters
  }

  //the return makes sure we save the character being pulled from our passwordOptions object, otherwise the computer will generate a number but not save it anywhere
  return passwordOptions;
}

//this function will be used for the generatePassword() function which will feed the previous variables in and return a random index character
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];
  return randomElement;
}

//function used to generate the password information
function generatePassword() {
  let result = [];
  let possibleCharacters = [];
  let guaranteedCharacters = [];
  let options = getPasswordOptions();

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(special);
    guaranteedCharacters.push(getRandom(special));
  }

  if (options.hasLowercaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowercase);
    guaranteedCharacters.push(getRandom(lowercase));
  }

  if (options.hasUppercaseCharacters) {
    possibleCharacters = possibleCharacters.concat(uppercase);
    guaranteedCharacters.push(getRandom(uppercase));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(passwordNumber);
    guaranteedCharacters.push(getRandom(passwordNumber));
  }

  for (let i = 0; i < options.passwordLength; i++) {
    let randomCharacter = getRandom(possibleCharacters);
    result.push(randomCharacter);
  }
  for (let i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];    
  }

  //join method is used to combine string elements together, the separation between the strings is defined within the (), in our case is "", which is nothing
  return result.join("");
}