//fullname
const fullNameEdit = $("fullNameEdit");
const nameEditMsg = $("msgFullNameEdit");
//age
const ageEdit = $("ageEdit");
//email
const emailEdit = $("emailEdit");
const emailEditMsg = $("msgEmailEdit");
// height
const heightEdit = $("heightEdit");
const heighEditMsg = $("msgHeightEdit");
//weight
const weightEdit = $("weightEdit");
const weightEditMsg = $("msgWeightEdit");
// address
const addressEdit = $("addressEdit");

// function when pressing Edit button
const editRow = (index) => {
  if (personArr[index - 1].gender === "male") {
    $("maleEdit").checked = true;
  }
  if (personArr[index - 1].gender === "female") {
    $("femaleEdit").checked = true;
  }
  if (personArr[index - 1].gender === "other") {
    $("otherEdit").checked = true;
  }

  fullNameEdit.value = personArr[index - 1].fullName;
  ageEdit.value = personArr[index - 1].age;
  emailEdit.value = personArr[index - 1].email;
  heightEdit.value = personArr[index - 1].height;
  weightEdit.value = personArr[index - 1].weight;
  addressEdit.value = personArr[index - 1].address;

  fullNameEdit.onblur = (event) => validateFullName(event, nameEditMsg);
  emailEdit.onblur = (event) => validateEmail(event, emailEditMsg);
  heightEdit.onblur = (event) => validateHeight(event, heighEditMsg);
  weightEdit.onblur = (event) => validateWeight(event, weightEditMsg);

  $("saveBtn").setAttribute("onclick", `save(${index})`);
};

// Function when pressing Yes button
const save = (index) => {
  const genderEdit = getByName("genderEdit");
  let gender = "";
  genderEdit.forEach((element) => {
    if (element.checked) {
      gender = element.value;
    }
    return gender;
  });
  // remove edited element from array

  const personEdit = new Person(
    fullNameEdit.value,
    ageEdit.value,
    emailEdit.value,
    gender,
    heightEdit.value,
    weightEdit.value,
    addressEdit.value
  );

  personArr.splice(index - 1, 1, personEdit);

  personArr.map((obj) => {
    obj.BMI = obj.calculateBMI().toFixed(2);
    obj.health = obj.guessHealth();
    return obj;
  });

  // Draw new table with edited element
  $("tableData").remove();
  const newTable = createTable(personArr);
  $("data").append(newTable);

  // reset msg
  nameEditMsg.innerHTML = "";
  emailEditMsg.innerHTML = "";
  heighEditMsg.innerHTML = "";
  weightEditMsg.innerHTML = "";
};

// listener Event when mouseover
$("saveBtn").addEventListener("mouseover", () => {
  if (
    (CheckFullName || !!fullNameEdit.value) &&
    (CheckEmail || !!emailEdit.value) &&
    (CheckHeight || !!heightEdit.value) &&
    (CheckWeight || !!weightEdit.value)
  ) {
    $("saveBtn").setAttribute("data-bs-dismiss", "modal");
  } else $("saveBtn").removeAttribute("data-bs-dismiss");
});
