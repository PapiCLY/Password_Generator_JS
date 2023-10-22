// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperBtn = document.querySelector('#upper')
var lowerBtn = document.querySelector('#lower')
var numBtn = document.querySelector('#numeral')
var specialBtn = document.querySelector('#special')
var slider = document.getElementById("sliderchar");
var sliderValue = document.getElementById("sliderValue");
var errorElement = document.getElementById('error');



var lowercaseAdded = false
var uppercaseAdded = false
var numbersAdded = false
var specialAdded = false


slider.addEventListener("input", function() {
    sliderValue.textContent = slider.value;
});

lowerBtn.addEventListener('change', function(){
    lowercaseAdded = lowerBtn.checked
})

upperBtn.addEventListener('change', function(){
    uppercaseAdded = upperBtn.checked
})

numBtn.addEventListener('change', function(){
    numbersAdded = numBtn.checked
})

specialBtn.addEventListener('change', function(){
    specialAdded = specialBtn.checked
})

generateBtn.addEventListener("click", function() {
    var generatedPassword = generatePassword();
    // window.alert(`Your new password is: ${generatedPassword}`)
    var typePW = document.getElementById('password')
    typePW.textContent = generatedPassword
});

// Write password to the #password input
function generatePassword() {
    var password= '';

    // //this is the first prompt, which ask for the pw length
    // var passwordLength = window.prompt('Enter password length between 8 and 128 characters');
    

    //this changes the pw into a number from a string
    passwordLength = slider.value;

    if (!lowercaseAdded && !uppercaseAdded && !numbersAdded && !specialAdded) {
        errorElement.textContent = "Please select at least one character type.";
        errorElement.classList.add('error-message'); 
    } else{
        errorElement.textContent = "";
        errorElement.classList.remove('error-message');
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
    