
// Variables store the characters used
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "@#$%^&*()_+~|}{[]></-=";


// This section sets all of the variables to fals in order to make a yes or no easier to establish on prompts.
var isupperCase = false;
var islowerCase = false;
var isnumber = false;
var issymbol = false;
var passwordLength = 8;
// This line creates the random characters that pop up after the prompts are read.
var index = Math.floor(Math.random() * passwordLength);
// This is creates the prompts that pop up.
let value = prompt("would you like upper case? y for yes, n for no")
if (value == "y") 
{
  // setting this variable as true instead of false allows for the user's ability to type y to have their response understood.
  isupperCase = true;
}

 value = prompt("would you like lower case? y for yes, n for no")
if (value == "y") 
{
  islowerCase = true;
}
value = prompt("would you like numbers? y for yes, n for no")
if (value == "y") 
{
  isnumber = true;
}
 value = prompt("would you like symbols? y for yes, n for no")
if (value == "y") 
{
  issymbol = true;
}

// This section allows for the length to be changeable using line 43.
passwordLength = prompt("How many characters would you like?")


let password = "";
while (password.length < passwordLength)
{
  if (isupperCase == true)
  // Setting each of these as true makes it so that saying yes to the prompts will search for characters from the agreed upon sections.
{
  password += upperCase[index].toString()
}
if (islowerCase == true)
{
  password += lowerCase[index].toString()
}
if (isnumber == true)
{
  password += number[index].toString()
}
if (issymbol == true)
{
  password +=symbol[index].toString()
}
}
// This line makes knowing if your code works before much easier because if everything connects, it will show the message on the console.
console.log("this is the password: "+password)
// function generatePassword() {
//   for(var i=0; i < passswordLength; i++) {
//     var random = Math.floor(Math.random() * generatePassword.length);
//     password += generatePassword.substring(random, random + 1);
//   }
//   document.getElementById("password").value = password;
//   return password
// }


var generatedBtn = document.querySelector("#generate");

function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// This line of code makes the button actually work properly.
generatedBtn.addEventListener("click", writePassword);