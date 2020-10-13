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

let lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let passwordNumber = "1234567890".split("");
let special = " !#$%&/'()*+,-./:;<=>?@[]^_`{|}~".split("");

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

  let hasSpecialCharacters = confirm("Do you want special characters?");
  let hasLowercaseCharacters = confirm("Do you want lowercase characters?");
  let hasUppercaseCharacters = confirm("Do you want uppercase characters?");
  let hasNumericCharacters = confirm("Do you want numbers?");

  if (hasSpecialCharacters === false && hasLowercaseCharacters === false && hasNumericCharacters === false && hasUppercaseCharacters === false) {
    alert("Please confirm at least one option for your password.");
    return;
  }

  const passwordOptions = {
    passwordLength: passwordLength,
    hasLowercaseCharacters: hasLowercaseCharacters,
    hasUppercaseCharacters: hasUppercaseCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasSpecialCharacters: hasSpecialCharacters
  }

  return passwordOptions;
}

function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];
  return randomElement;
}



//function to generate password characters, lacking choice
function passEverything(length) {
  let password = '';
  let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&/'()*+,-./:;<=>?@[]^_`{|}~";
  let charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
     password += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return password;
}


//create the generate password function--
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
  for (let kittens = 0; kittens < guaranteedCharacters.length; kittens++) {
    result[kittens] = guaranteedCharacters[kittens];    
  }
  return result.join("");
}




/*variables used to generate password based on previous criteria 
function lowercaseCharacter() {
  
}

function uppercaseCharacter() {
  
}

function numberCharacter() {
  
}

function specialCharacter() {
  
}

//add in an array to the i <= to account for the length given in the prompt
//for loop used to make the password
for (let i = 0; i <= passwordLength; i++) {
  password = password + passwordValues.charAt(Math.floor(Math.random * Math.floor(passwordValues.length - 1))); //this only searches within the const, and does not take into account the selections the selector can make
    
}

//randomize how math.random works and then assign a random number to a variable? 
*/
