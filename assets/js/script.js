// Assignment code here
//RETRIEVE USER INPUT ON VARIABLES AND LENGTH
var characterAmount = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

var upperCase = confirm("Would you like to use uppercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");
var generateBtn = document.querySelector("#generate");

while (!upperCase && !numbers && !symbols) {
  alert("You must select at least one character type!");
  upperCase = confirm("Would you like to use uppercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}


// FUNCTION TO CREATE THE PASSWORD USING CHARCODES
function createPassword(characterAmount, upperCase, numbers, symbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (upperCase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (symbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (numbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}
//ARRAY CONST
const LOWERCASE_CHAR_CODES = arrayLowToHigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayLowToHigh(65, 90)
const NUMBER_CHAR_CODES = arrayLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayLowToHigh(33, 47).concat(
  arrayLowToHigh(58, 64)
).concat(
  arrayLowToHigh(91, 96)
).concat(
  arrayLowToHigh(123, 126)
)

generateBtn.onclick = function() {
  const password = createPassword(characterAmount, upperCase, numbers, symbols);
  alert("Your password is" + password);
  console.log(password)

};