// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function buttonClick() {
  let lowercase = prompt("Do you want your password to include lowercase characters?");
  if (lowercase === "Yes" || lowercase === "yes") {

    let uppercase = prompt("Do you want your password to include uppercase characters?")
    if (uppercase === "Yes" || uppercase === "yes") {

      let numerical = prompt("Do you want your password to include numerical values?")
      if (numerical === "Yes" || numerical === "yes") {

        let special = prompt("Do you want your password to include special characters?")
        if (special === "Yes" || special === "yes") {
          console.log("test");
        }
        else if (!lowercase || !uppercase || !numerical || !special) {
          alert("User cancelled")
      }
    }
  }
}
}
