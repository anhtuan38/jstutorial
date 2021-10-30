
function validateEmail() {
  let x = document.forms["myForm"]["email"].value;
  console.log(x);
  if (x === "") {
    document.getElementById("errorEmail").innerHTML="Please enter the correct email address"
  }
}

function validateNumber() {
  let x = document.forms["myForm"]["phoneNumber"].value;
  if (x === "") {
    document.getElementById("errorPhone").innerHTML="The field is requied"
  }
}

function validateCountry() {
  let x = document.forms["myForm"]["inputGroupSelect01"].value;
  if (x === "Select an option") {
    document.getElementById("errorCountry").innerHTML="Please select a contry"
  }
}

function validateContact() {
  let x = document.forms["myForm"]["contact"].value;
  if (x === "") {
    document.getElementById("errorContact").innerHTML="Please select 1 of 3"
  }
}

function validateCheckbox() {
  let x = document.forms["myForm"]["flexCheckDefault"].checked;
  if (!x) {
    document.getElementById("errorAccept").innerHTML="This box must be checked"
  }
}

function validateForm()
{
  validateEmail();
  validateNumber();
  validateCountry();
  validateContact();
  validateCheckbox();
}
