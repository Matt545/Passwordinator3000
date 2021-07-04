// Assignment code here
//RETRIEVE USER INPUT ON VARIABLES AND LENGTH
var generatePassword = function() {
  charLength = prompt("How long would you like your password? Min. 8 Max. 128");
  if (charLength >= 8 && charLength <= 128) {
    console.log(charLength);
  }
  else {
    alert("Please enter a valid number. Click the button to try again.");
    return;
  };

upperCase = confirm("Would you like to include Uppercase? OK for YES, CANCEL for NO.");
  if (upperCase) {
    console.log("YESSIR");
  }
  else {
    console.log("NO");
  };

numbers = confirm("Would you like to include Numbers? OK for YES, CANCEL for NO.");
  if (numbers) {
    console.log("YESSIR NUMBERS");
  }
  else {
    console.log("NO NUMBERS");
  };

symbols = confirm("Would you like to include Symbols? OK for YES, CANCEL for NO.");
  if (symbols) {
    console.log("YESSIR SYMBOLS");
  }
  else {
    console.log("NO SYMBOLS");
  };
};

// CONST AND VARIABLES HERE
const passwordDisplay = document.getElementById('password')
const characterAmount = (generatePassword.charLength)
const includeUppercase = (generatePassword.uppercase)
const includeSymbols = (generatePassword.symbols)
const includeNumbers = (generatePassword.numbers)
var generateBtn = document.querySelector("#generate");
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

// FUNCTION TO CREATE THE PASSWORD USING CHARCODES
function createPassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
   let charCodes = LOWERCASE_CHAR_CODES
   if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
   if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
   if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

   const passwordCharacters = []
   for (let i = 0; i < characterAmount; i++) {
     const characterCode = charCodes[Math.floor(Math.random() * characterAmount)]
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


generateBtn.addEventListener("click", generatePassword()); {
  const password = createPassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
  //passwordDisplay. = password
  console.log (password);
}