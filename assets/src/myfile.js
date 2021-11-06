const $ = (element) => {
  return document.getElementById(element);
};

const getByName = (element) => {
  return document.getElementsByName(element);
};

// set Attribute
$("male").setAttribute("checked", "");
$("fullName").setAttribute("minlength", "6");
$("fullName").setAttribute("maxlength", "50");
$("age").setAttribute("min", "15");
$("age").setAttribute("max", "50");
$("address").setAttribute("maxlength", "100");
$("Describe").setAttribute("maxlength", "1000");

// validate Full Name
const validateFullName = () => {
  const fullname = $("fullName");
  const msgFullName = $("msgFullName");
  const regExpPattenFullName = /^[a-z]+([\s]?[a-z]+)*$/gim;
  let check = false;

  if (fullname.value === "") {
    msgFullName.innerHTML =
      '<span class="text-danger">This field is required.</span>';
  } else if (fullname.value.indexOf(" ") === -1) {
    msgFullName.innerHTML =
      '<span class="text-danger">Full Name must contain at least 2 words</span>';
  } else if (!regExpPattenFullName.test(fullname.value)) {
    msgFullName.innerHTML =
      '<span class="text-danger">Only include the alphabetical characters in range: a-z and A-Z</span>';
  } else {
    msgFullName.innerHTML = '<span class="text-success">Good job!</span>';
    check = true;
  }
  return check;
};

// validate Email
const validateEmail = () => {
  const msgEmail = $("msgEmail");
  const email = $("email").value;
  let check = false;

  const regExpPattenEmail = /^([\w]*[\w\.]*@edu.com.vn)/g;

  if (email === "") {
    msgEmail.innerHTML =
      '<span class="text-danger">This field is required.</span>';
  } else if (
    email.indexOf("@") === -1 ||
    email[0] === "@" ||
    email[email.length - 1] === "@"
  ) {
    msgEmail.innerHTML =
      '<span class="text-danger">Your email is invalid. Please correct your email.</span>';
  } else if (!regExpPattenEmail.test(email)) {
    msgEmail.innerHTML =
      '<span class="text-danger">We only accept educational emails.</span>';
  } else {
    msgEmail.innerHTML = '<span class="text-success">Good job!</span>';
    check = true;
  }
  return check;
};

// select school option
const selectSchool = () => {
  const selectSchool = $("school");
  const msgSchool = $("msgSchool");
  let check = false;

  if (selectSchool.value === "3") {
    msgSchool.innerHTML =
      '<span class="text-danger">Please select School</span>';
  } else {
    msgSchool.innerHTML = "";
    check = true;
  }
  return check;
};
// Age
const valueAge = () => {
  const age = $("age").value;
  const msgAge = $("msgAge");
  const showAge = $("showAge");

  showAge.innerHTML = `${age}`;
  if (age <= 30) {
    msgAge.innerHTML = '<span class="text-success">You’re still young!</span>';
  } else msgAge.innerHTML = "";
};

//Favorite sports
const sportCheckbox = () => {
  const msgSportCheckbox = $("msgFavorite");
  const sport = getByName("favorite");
  let check = false;
  sport.forEach((element) => {
    if (element.checked) {
      check = true;
    }
  });
  if (!check) {
    msgSportCheckbox.innerHTML =
      '<span class="text-danger">You should select at least one option.</span>';
  }
  return check;
};

// Tell us your wish
const validateYourWish = () => {
  const textYourWish = $("yourWish").value;
  const msgYourWish = $("msgYourWish");
  let check = false;

  if (textYourWish === "") {
    msgYourWish.innerHTML =
      '<span class="text-danger">This field is required</span>';
  } else {
    msgYourWish.innerHTML = "";
    return true;
  }
};

// reset button
const resetBtn = () => {
  $("myForm").reset();
  $("msgFullName").innerHTML = "";
  $("msgEmail").innerHTML = "";
  $("msgFavorite").innerHTML = "";
  $("msgYourWish").innerHTML = "";
};

const validateForm = () => {
  let flag1 = validateFullName();
  let flag2 = validateEmail();
  let flag3 = selectSchool();
  let flag4 = sportCheckbox();
  let flag5 = validateYourWish();
  if (flag1 && flag2 && flag3 && flag4 && flag5) {
    alert("Sent data! We will contact you as soon as possible.");
  }
};
