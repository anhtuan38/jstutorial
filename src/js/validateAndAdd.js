// validate Full Name
const validateFullName = (e) => {
  const fullname = e.target.value;
  const msgFullName = $("msgFullName");
  const regExpPattenFullName = /^[a-z]+([\s]?[a-z]+)*$/gim;

  if (!fullname) {
    msgFullName.innerHTML =
      '<span class="text-danger">This field is required.</span>';
    return false;
  }

  if (fullname.indexOf(" ") === -1) {
    msgFullName.innerHTML =
      '<span class="text-danger">Full Name must contain at least 2 words</span>';
    return false;
  }

  if (!regExpPattenFullName.test(fullname)) {
    msgFullName.innerHTML =
      '<span class="text-danger">Only include the alphabetical characters in range: a-z and A-Z</span>';
    return false;
  }

  msgFullName.innerHTML = '<span class="text-success">Good job!</span>';
  return true;
};

// validate Email
const validateEmail = (e) => {
  const msgEmail = $("msgEmail");
  const email = e.target.value;

  if (!email) {
    msgEmail.innerHTML =
      '<span class="text-danger">This field is required.</span>';
    return false;
  }

  if (
    email.indexOf("@") === -1 ||
    email[0] === "@" ||
    email[email.length - 1] === "@"
  ) {
    msgEmail.innerHTML =
      '<span class="text-danger">Your email is invalid. Please correct your email.</span>';
    return false;
  }

  msgEmail.innerHTML = '<span class="text-success">Good job!</span>';
  return true;
};

const validateHeight = (e) => {
  const height = e.target.value;
  const msgHeight = $("msgHeight");

  //validate Height
  if (isNaN(height)) {
    msgHeight.innerHTML =
      '<span class="text-danger">Only input float number</span>';
    return false;
  }

  msgHeight.innerHTML = `<span class = 'text-success'>Good job!</span>`;
  e.target.value = parseFloat(height).toFixed(2);
  return true;
};

const validateWeight = (e) => {
  const weight = e.target.value;
  const msgWeight = $("msgWeight");

  //validate Weight
  if (isNaN(weight)) {
    msgWeight.innerHTML =
      '<span class="text-danger">Only input float number</span>';
    return false;
  }
  // $("height").innerHTML = height.toFix(2);
  msgWeight.innerHTML = `<span class = 'text-success'>Good job!</span>`;
  e.target.value = parseFloat(weight).toFixed(1);
  return true;
};

// listener for event windown onload
window.onload = () => {
  //set Attribute when load windown
  $("age").setAttribute("value", "18");
  $("male").setAttribute("checked", "");
  $("fullName").setAttribute("maxlength", "50");
  $("address").setAttribute("maxlength", "100");

  const fullname = $("fullName");
  const email = $("email");
  const height = $("height");
  const weight = $("weight");

  // listener Event
  fullname.onblur = (event) => validateFullName(event);
  email.onblur = (event) => validateEmail(event);
  height.onblur = (event) => validateHeight(event);
  weight.onblur = (event) => validateWeight(event);
};
