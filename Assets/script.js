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


/*--------------------------------------- */

let inputValid = 1;
// the needed prompts and confirms for the password
do {
  let passwordString = prompt("Please indicate the length you want for your password (between 8-128.");
    if (passwordString.isNan()) {
      alert("Please enter a number between 8-128.");
    } else {

      inputValid = 0;
  }
}

while 


//changes user input from string to intiger
let passwordLength = parseInt(passwordString);

/*variable used to generate password based on previous criteria
0-25 is lowercase, 26-51 is upper case, 52 - 83 are special characters*/
const passwordValues = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%&/'()*+,-./:;<=>?@[]^_`{|}~";

//add in an array to the i <= to account for the length given in the prompt
//for loop used to make the password
for (let i = 0; i <= passwordLength; i++) {
  password = password + passwordValues.charAt(Math.floor(Math.random * Math.floor(passwordValues.length - 1))); //this only searches within the const, and does not take into account the selections the selector can make
    
}

password += //function call

//randomize how math.random works and then assign a random number to a variable? 

