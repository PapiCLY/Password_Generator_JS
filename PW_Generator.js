// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    //this is the first prompt, which ask for the pw length
    var passwordLength = window.prompt('Enter password length between 8 and 128 characters');

    //this changes the pw into a number from a string
    passwordLength = parseInt(passwordLength, 10);

    //checking if pw is within the 8 - 128 range--Also prompting the user of their selection
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
        alert('Invalid! Please enter a password length between 8 and 128 characters!');
        return writePassword();
    } else {
        alert(`You have entered a password lenght of: ${passwordLength}`);
    }

    //select PW criteria
    var lowercasePW = window.prompt('Would you like your password to include lowercase characters?');
    if (lowercasePW === 'yes'){
        alert('You have added lowercase characters to your password!'); 
    } else {
        alert('lowercase characters will not be included in your password')
    }

    var uppercasePW = window.prompt('Would you like your password to include uppercase characters?');
    if (uppercasePW === 'yes'){
        alert('You have added uppercase characters to your password!')
    } else {
        alert('uppercase characters will not be included in your password')
    }

    var addNumbers = window.prompt('Would you like your password to include numbers?')
    if (addNumbers === 'yes'){
        alert('You have added numbers to your password')
    } else {
        alert('Numbers will not be included in your password')
    }

    var specialCharacters = window.prompt('Would you like your password to include special characters?')
    if (specialCharacters === 'yes'){
        alert('You have added special characters to your password')
    } else {
        alert('Special characters will not be included in your password')
    }

    // Add lowercase characters to password
    
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
