// function delete Row
const editRow = (index) => {
  //fullname
  const fullNameEdit = $("fullNameEdit");
  // const nameEditMsg = $("msgFullNameEdit");
  //age
  const ageEdit = $("ageEdit");
  // gender
  // const genderRadio = $('')

  //email
  const emailEdit = $("emailEdit");
  // const emailEditMsg = $("msgEmailEdit");
  // height
  const heightEdit = $("heightEdit");
  // const heighEditMsg = $("msgHeightEdit");
  //weight
  const weightEdit = $("weightEdit");
  // const weightEditMsg = $("msgWeightEdit");
  // address
  const addressEdit = $("addressEdit");

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

  $("saveBtn").setAttribute("onclick", `save(${index})`);
};

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

  // console.log(personEdit);

  // Draw new table with edited element
  $("tableData").remove();
  const newTable = creatTable(personArr);
  $("data").append(newTable);
};
