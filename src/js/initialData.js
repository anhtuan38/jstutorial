const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function Person(fullName, age, email, gender, height, weight, address) {
  this.fullName = fullName;
  this.age = age;
  this.email = email;
  this.gender = gender;
  this.height = height;
  this.weight = weight;
  // this.address = address;
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

const personArr = [];
const limit = 5;
const names = ["tuan", "huy", "chinh", "anh", "tu", "quang", "duc", "thai"];
const ages = [12, 15, 18, 19, 20, 22, 25, 28, 29, 35];
const mails = [
  "abc@gmail.com",
  "def@gmaiil.com",
  "ghm@gmail.com",
  "jol@gmail.com",
  "xyz@gmail.com",
];
const genders = ["male", "female", "other"];
const height = [1.44, 1.55, 1.66, 1.585, 1.628];
const weight = [55, 62, 50.6, 70, 46];

for (let count = 0; count < limit; count++) {
  const person = new Person(
    names[randomInt(0, 7)],
    ages[randomInt(0, 9)],
    mails[randomInt(0, 3)],
    genders[randomInt(0, 2)],
    height[randomInt(0, 4)],
    weight[randomInt(0, 4)]
  );
  personArr.push(person);
}

personArr.map((obj) => {
  obj.BMI = obj.calculateBMI().toFixed(2);
  obj.health = obj.guessHealth();
  return obj;
});

// console.log(personArr);
