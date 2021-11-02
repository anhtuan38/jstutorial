const $ = (value) => {
  return document.getElementById(value);
};

const getByName = (value) => {
  return document.getElementsByName(value);
};

// Validate Email
function validateEmail() {
  let emailInput = $("email");
  let MsgEmail = $("MsgEmail");
  if (emailInput.value.indexOf("@") === -1) {
    MsgEmail.innerHTML =
      "<span class='text-danger'>Your EMAIL is invalid !!!</span>";
  } else MsgEmail.innerHTML = "<span class='text-success'>Correct</span>";
}

// Validate Phone
function validatePhone() {
  let phoneNumber = $("phoneNumber");
  let MsgPhone = $("MsgPhone");
  let regularExpressionPatten =
    /^([\(][\+][0-9]{2}[\)])?([0-9]{3,4})-([0-9]{3})-([0-9]{3})$/;
  if (regularExpressionPatten.test(phoneNumber.value)) {
    MsgPhone.innerHTML = "<span class='text-success'>Correct</span>";
  } else
    MsgPhone.innerHTML =
      "<span class='text-danger'>Please enter the correct phone number<span>";
}

// Validate Country

function validateCountry() {
  let countrySelect = $("country");
  if (country.value === "0") {
    $("MsgCountry").innerHTML =
      "<span class='text-danger'>Please select a country<span>";
  }
}

// Validate Contact
function validateContact() {
  let contactRadioGroup = getByName("contact");
  MsgContact = $("MsgContact");
  contactRadioGroup.forEach((element) => {
    if (element.checked) {
      MsgContact.innerHTML = `<span class='text-success'>Contact by ${element.value}</span>`;
    }
  });
}

// Listenning event from Accept checkbox

const acceptCheckbox = $("acceptCheckbox");
acceptCheckbox.addEventListener("click", () => {
  if (acceptCheckbox.checked) {
    $("registerBtn").removeAttribute("disabled");
  }
  if (!acceptCheckbox.checked) {
    $("registerBtn").setAttribute("disabled", "");
  }
});

// Listenning event from reset button
const resetBtn = $("resetBtn");
resetBtn.addEventListener("click", () => {
  $("myForm").reset();
  $("MsgEmail").innerHTML = "";
  $("MsgPhone").innerHTML = "";
  $("MsgCountry").innerHTML = "";
  $("MsgContact").innerHTML = "";
});
//click button register
function validateForm() {
  validateEmail();
  validatePhone();
  validateCountry();
  validateContact();
}
