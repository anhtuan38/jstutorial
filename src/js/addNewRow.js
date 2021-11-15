$("addNewRow").addEventListener("click", () => {
  // validate exact Form
  if (CheckFullName && CheckEmail && CheckHeight && CheckWeight) {
    const fullNameVal = $("fullName").value;
    const ageVal = $("age").value;
    const emailVal = $("email").value;
    const heightVal = $("height").value;
    const weightVal = $("weight").value;
    const addressVal = $("address").value;

    // gender value
    const genderName = getByName("gender");
    let genderVal = "";
    genderName.forEach((element) => {
      if (element.checked) {
        genderVal = element.value;
      }
    });

    // push New Person into Array
    const newPerson = new Person(
      fullNameVal,
      ageVal,
      emailVal,
      genderVal,
      heightVal,
      weightVal,
      addressVal
    );

    personArr.push(newPerson);

    personArr.map((obj) => {
      obj.BMI = obj.calculateBMI().toFixed(2);
      obj.health = obj.guessHealth();
      return obj;
    });
    // deltele old data and draw New Table
    $("tableData").remove();
    const newTable = createTable(personArr);
    $("data").append(newTable);

    // reset Form when add element success
    $("myForm").reset();
    $("msgFullName").innerHTML = "";
    $("msgEmail").innerHTML = "";
    $("msgHeight").innerHTML = "";
    $("msgWeight").innerHTML = "";
  }
});
