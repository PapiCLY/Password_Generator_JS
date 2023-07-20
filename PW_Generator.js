// Assignment Code
var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", function() {
    var generatedPassword = generatePassword();
    window.prompt(`Your new password is: ${generatePassword}`)
});

// Write password to the #password input
function generatePassword() {
    var password= '';

    //this is the first prompt, which ask for the pw length
    var passwordLength = window.prompt('Enter password length between 8 and 128 characters');

    //this changes the pw into a number from a string
    passwordLength = parseInt(passwordLength, 10);

    //checking if pw is within the 8 - 128 range--Also prompting the user of their selection
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
        alert('Invalid! Please enter a password length between 8 and 128 characters!');
        return generatePassword();
    } else {
        alert(`You have entered a password lenght of: ${passwordLength}`);
    }

    //select PW criteria
    var lowercasePW = window.prompt('Would you like your password to include lowercase characters?');
    var lowercaseAdded = (lowercasePW && lowercasePW.toLowerCase() === 'yes')
    if (lowercaseAdded){
        alert('You have added lowercase characters to your password!'); 
    } else {
        alert('lowercase characters will not be included in your password')
    }

    var uppercasePW = window.prompt('Would you like your password to include uppercase characters?');
    var uppercaseAdded = (uppercasePW && uppercasePW.toUpperCase() === 'yes')
    if (uppercaseAdded){
        alert('You have added uppercase characters to your password!')
    } else {
        alert('uppercase characters will not be included in your password')
    }

    var addNumbers = window.prompt('Would you like your password to include numbers?')
    var numbersAdded = (addNumbers && addNumbers.toLowerCase() === 'yes')
    if (numbersAdded){
        alert('You have added numbers to your password')
    } else {
        alert('Numbers will not be included in your password')
    }

    var specialCharacters = window.prompt('Would you like your password to include special characters?')
    var specialAdded = (specialCharacters && specialCharacters.toLowerCase() === 'yes')
    if (specialAdded){
        alert('You have added special characters to your password')
    } else {
        alert('Special characters will not be included in your password')
    }

    var collectAllCharacters = ''
    if (lowercaseAdded){
        collectAllCharacters += 'abcdefghijklmnopqrstuvwxyz'
    }

    if (uppercaseAdded){
        collectAllCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    if (numbersAdded){
        collectAllCharacters += '0123456789'
    }

    if (specialAdded){
        collectAllCharacters += '!@#$%^&*()<>?'
    }

    //for loop to generate PW
    for (var i = 0; i < passwordLength; i++) {
        var randomPW = Math.floor(Math.random() * collectAllCharacters.length);
        password += collectAllCharacters.charAt(randomPW);
    }

    return password; // Return the password
}
    


    // Add lowercase characters to password
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//   passwordText.value = password;



// generatePassword();
// Add event listener to generate button
// generateBtn.addEventListener("click", generatePassword());
