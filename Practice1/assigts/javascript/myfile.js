
let isNumber = prompt("Please input a number");

// ex if else if
if (isNumber <= 0) {
  alert("Please input a positive number!");
} else if (isNumber > 0) {
  alert("Congratulations! You did it!");
} else {
  alert("Please input a number!");
}

let isEmail = prompt("Please input email");

// ex if else if
if ((isEmail.indexOf("@") == -1) || isEmail.length <8 || isEmail[0]=="@" || isEmail[isEmail.length-1]=="@") {
  alert("Your email is not valid");
} else {
  alert ("Email correct")
}