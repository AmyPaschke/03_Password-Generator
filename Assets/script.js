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

  let inputValid = 1;

  let passwordLength = null;

  /*changes user input from string to intiger
  let passwordLength = parseInt(passwordString); */
    
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

  //inside the  do/while statement the inputValid changes from 1 to 0 once a number between 8 - 128 is selected, which is what this if statement is looking for
  if (inputValid === 0) {

   passEverything();
      
    }
}



/*variables used to generate password based on previous criteria 
function lowercaseCharacter() {
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
}

function uppercaseCharacter() {
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

function numberCharacter() {
  let passwordNumber = "1234567890";
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
*/
