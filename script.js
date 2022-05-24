// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var allnumbers = "0123456789";
  var allspecial = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  // Choosing password length
  var input = parseInt(prompt("Choose a length between 8 and 128"));

  if (input >= 8 && input <= 128) {
    alert("Your password will include " + input + " characters");

  // First question: Capitals or not?
    var input2 = prompt("Would you like your password to include capital letters?");
    
    var capitals = input2.toLowerCase();


    if (capitals === "yes") {
      alert("Your password will include capital letters");
    } else if (!capitals || capitals === "no") {
      alert("Your password will not include capital letters");
    }

  // Second question: Lowercase or not?
    var input3 = prompt("Would you like your password to include lowercase letters?");

    var lowers = input3.toLowerCase();

    if (lowers === "yes") {
      alert("Your password will include lowercase letters");
    } else if (!lowers || lowers === "no") {
      alert("Your password will not include lowercase letters");
    }

  // Third question: Numbers or not?
    var input4 = prompt("Would you like your password to include numbers?")

    var numbers = input4.toLowerCase();

    if (numbers === "yes") {
      alert("Your password will include numbers");
    } else if (!numbers || numbers === "no") {
      alert("Your password will not include numbers");
    }

  // Final question: Special characters or not?
    var input5 = prompt("Would you like your password to include special characters?");

    var special = input5.toLowerCase();

    if (special === "yes") {
      alert("Your password will include special characters");
    } else if (!special || special === "no") {
      alert("Your password will not include special characters");
    }

  // Creating the password randomizer
  var choices = 




  } else {
    alert("NOT COOL.");
  }

  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);