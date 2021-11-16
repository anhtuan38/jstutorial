const $ = (id) => {
  return document.getElementById(id);
};

const getByName = (element) => {
  return document.getElementsByName(element);
};

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomFloat = (min, max, fixed) => {
  return (Math.random() * (max - min) + min).toFixed(fixed);
};

let personArr = [];
function Person(fullName, age, email, gender, height, weight, address) {
  this.fullName = fullName;
  this.age = age;
  this.email = email;
  this.gender = gender;
  this.height = height;
  this.weight = weight;
  this.address = address;
  this.calculateBMI = () => {
    return this.weight / Math.pow(this.height, 2);
  };
  this.guessHealth = () => {
    const BMI = this.calculateBMI();
    if (BMI < 18.5) return "underweight";
    if (BMI >= 18.5 && BMI <= 24.9) return "normal weight";
    if (BMI >= 25 && BMI <= 29.9) return "overweight";
    return "obesity";
  };
}

const creat = () => {
  const limit = parseFloat($("numberRow").value);
  if (Number.isInteger(limit) && limit > 0) {
    personArr = [];
    // creat Data
    $("msgNumberRowErr").innerHTML = "";
    const names = ["tuan", "huy", "chinh", "anh", "tu", "quang", "duc", "thai"];
    const genders = ["male", "female", "other"];

    for (let count = 0; count < limit; count++) {
      const person = new Person(
        names[randomInt(0, 7)] + " " + names[randomInt(0, 7)],
        randomInt(15, 80),
        `mail_${randomInt(1000, 9999)}@gmail.com`,
        genders[randomInt(0, 2)],
        randomFloat(1, 2.5, 2),
        randomFloat(30, 100, 1),
        `thôn ${randomInt(1, 9)}`
      );
      personArr.push(person);
      // const storageKey = "userData";
      // const storage = window.localStorage.setItem(
      //   storageKey,
      //   JSON.stringify(userData)
      // );
    }
    // const Data = JSON.parse(localStorage.getItem(storageKey));

    personArr.map((obj) => {
      obj.BMI = obj.calculateBMI().toFixed(2);
      obj.health = obj.guessHealth();
      return obj;
    });
    // remove Table and creat New Table
    if ($("tableData")) {
      $("tableData").remove();
    }
    const drawTable = createTable(personArr);
    $("data").append(drawTable);
  } else
    $("msgNumberRowErr").innerHTML =
      '<span class="text-danger">Please enter a positive integer</span>';
};
