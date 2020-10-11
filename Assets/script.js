// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//prompts/confirms for the password
let passwordLength = prompt("Please indicate the length you want for your password (between 8-128");
  if (passwordLength === a); {
    console.log(stuff);
  } else {
    alert("Please choose a number between 8-128.");
}

let lowercaseValues = "abcdefghijklmnopqrstuvwxyz";
let uppercaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialValues = "";
