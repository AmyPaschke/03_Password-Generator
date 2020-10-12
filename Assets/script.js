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
//create the generate password function-- ?
function generatePassword() {

  let inputValid = 1;
  // the needed prompts and confirms for the password

  //changes user input from string to intiger
  let passwordLength = parseInt(passwordString);
    
  do {
    let passwordString = prompt("Please indicate the length you want for your password (between 8-128.");
      if (isNaN(passwordLength)) {
        alert("Please enter a number between 8-128.");
      } else {
        if (passwordLength > 7 && passwordLength < 129) {
        inputValid = 0;
        } else {
          alert("Please enter a number between 8-128.");
        }
      }
    }

  while (inputValid === 1);

  //inside the  do/while statement the inputValid changes from 1 to 0 once a number between 8 - 128 is selected
  if (inputValid === 0) {

    let password = "";
    
    for (let n = 0; n < passwordLength; n++) {
      password = password += something //?
      
    }
  
  }
}




/*variables used to generate password based on previous criteria */
function lowercaseCharacter() {
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
}

function uppercaseCharacter() {
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

function specialCharacter() {
  let special = " !#$%&/'()*+,-./:;<=>?@[]^_`{|}~";
}

//add in an array to the i <= to account for the length given in the prompt
//for loop used to make the password
for (let i = 0; i <= passwordLength; i++) {
  password = password + passwordValues.charAt(Math.floor(Math.random * Math.floor(passwordValues.length - 1))); //this only searches within the const, and does not take into account the selections the selector can make
    
}

//randomize how math.random works and then assign a random number to a variable? 

