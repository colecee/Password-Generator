
// function to generate a random numeric value
var randomNumber = function() {
    var value = Math.floor(Math.random() * 21) + 40;
  
    return value;
  };
  // generate random numeric value
var generatePassword = randomNumber(password - 3, password);

generatePassword = Math.max(0, password - password); = randomNumber();
  var randomNumber = function(0, 9) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };
  generatePassword = randomNumber(0, 9);
  var password = randomNumber(password - 3, password);

  password = Math.max(0, password - password);
  

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword(){
      var chars=
      "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=<>?/\ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      var PasswordLengthmin = 8
      var PasswordLengthmax = 128
      var password ="";
      
      for(var i = 0; i <=PasswordLengthmin; i++){
          for(var i = 0;) i <=PasswordLengthmax; i++){
              var randomNumber = Math.floor(math.random() *chars.length);
              password += chars.substring(randomNumber, randomNumber +1);
          }
          // Now apply it
          document.getElementById("password").value = password;

    

      }

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);