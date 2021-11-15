let CheckFullName = false;
let CheckEmail = false;
let CheckHeight = false;
let CheckWeight = false;
// validate Full Name
const validateFullName = (e, indexMsg) => {
  const fullNameVal = e.target.value;
  const regExpPattenFullName = /^[a-z]+([\s]?[a-z]+)*$/gim;
  CheckFullName = false;

  if (!fullNameVal) {
    indexMsg.innerHTML =
      '<span class="text-danger">This field is required.</span>';
    return false;
  }

  if (fullNameVal.indexOf(" ") === -1) {
    indexMsg.innerHTML =
      '<span class="text-danger">Full Name must contain at least 2 words</span>';
    return false;
  }

  if (!regExpPattenFullName.test(fullNameVal)) {
    indexMsg.innerHTML =
      '<span class="text-danger">Only include the alphabetical characters in range: a-z and A-Z</span>';
    return false;
  }

  indexMsg.innerHTML = '<span class="text-success">Good job!</span>';
  CheckFullName = true;
};

// validate Email
const validateEmail = (e, indexMsg) => {
  const emailVal = e.target.value;
  CheckEmail = false;

  if (!emailVal) {
    indexMsg.innerHTML =
      '<span class="text-danger">This field is required.</span>';
    return false;
  }

  if (
    emailVal.indexOf("@") === -1 ||
    emailVal[0] === "@" ||
    emailVal[emailVal.length - 1] === "@"
  ) {
    indexMsg.innerHTML =
      '<span class="text-danger">Your email is invalid. Please correct your email.</span>';
    return false;
  }

  indexMsg.innerHTML = '<span class="text-success">Good job!</span>';
  CheckEmail = true;
};

//validate Height
const validateHeight = (e, indexMsg) => {
  const heightVal = e.target.value;
  CheckHeight = false;

  if (!heightVal) {
    indexMsg.innerHTML =
      '<span class="text-danger">This field is required.</span>';
    return false;
  }

  if (isNaN(heightVal)) {
    indexMsg.innerHTML =
      '<span class="text-danger">Only input float number</span>';
    return false;
  }

  indexMsg.innerHTML = `<span class = 'text-success'>Good job!</span>`;
  e.target.value = parseFloat(heightVal).toFixed(2);
  CheckHeight = true;
};

//validate Weight
const validateWeight = (e, indexMsg) => {
  const weightVal = e.target.value;
  CheckWeight = false;

  if (!weightVal) {
    indexMsg.innerHTML =
      '<span class="text-danger">This field is required.</span>';
    return false;
  }
  if (isNaN(weightVal)) {
    indexMsg.innerHTML =
      '<span class="text-danger">Only input float number</span>';
    return false;
  }
  // $("height").innerHTML = height.toFix(2);
  indexMsg.innerHTML = `<span class = 'text-success'>Good job!</span>`;
  e.target.value = parseFloat(weightVal).toFixed(1);
  CheckWeight = true;
};

window.onload = () => {
  $("age").setAttribute("value", "18");
  $("male").setAttribute("checked", "");
  $("fullName").setAttribute("maxlength", "50");
  $("address").setAttribute("maxlength", "100");

  const fullNameInput = $("fullName");
  const indexMsgfullName = $("msgFullName");

  const emailInput = $("email");
  const indexMsgEmail = $("msgEmail");

  const heightInput = $("height");
  const indexMsgHeight = $("msgHeight");

  const weightInput = $("weight");
  const indexMsgWeight = $("msgWeight");

  fullNameInput.onblur = (event) => validateFullName(event, indexMsgfullName);
  emailInput.onblur = (event) => validateEmail(event, indexMsgEmail);
  heightInput.onblur = (event) => validateHeight(event, indexMsgHeight);
  weightInput.onblur = (event) => validateWeight(event, indexMsgWeight);
};
