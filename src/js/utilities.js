const headers = [
  "stt",
  "full name",
  "age",
  "email",
  "gender",
  "BMI",
  " health status",
  "actions",
];

function Person(fullName, age, email, gender, height, weight, address) {
  this.fullName = fullName;
  this.age = age;
  this.email = email;
  this.gender = gender;
  this.height = height;
  this.weight = weight;
  this.address = address;
  this.calculateBMI = () => {
    let BMI = this.weight / Math.pow(this.height, 2);
    return BMI;
  };
  this.guessHealth = () => {
    const BMI = this.calculateBMI();
    if (BMI < 18.5) return "underweight";
    if (BMI >= 18.5 && BMI <= 24.9) return "normal weight";
    if (BMI >= 25 && BMI <= 29.9) return "overweight";
    return "obesity";
  };
}

const person1 = new Person(
  "tuan",
  22,
  "tuanphan@gmail.com",
  "male",
  1.6,
  54,
  "abccxc"
);
const person2 = new Person(
  "thai",
  25,
  "thai@gmail.com",
  "male",
  1.7,
  62,
  "abccdfxcv"
);
const person3 = new Person(
  "chinh",
  25,
  "chinhtu@gmail.com",
  "male",
  1.6,
  52,
  "abccdfqe"
);
const person4 = new Person(
  "tuan2",
  25,
  "tuanphan2@gmail.com",
  "male",
  1.6,
  52,
  "abccdfqư"
);
const person5 = new Person(
  "tuan4",
  25,
  "pppaphan@gmail.com",
  "male",
  1.6,
  52,
  "abccdfq"
);
const person6 = new Person(
  "thai5",
  25,
  "pppaphan@gmail.com",
  "male",
  1.6,
  52,
  "abccdfz"
);
const person7 = new Person(
  "tha6",
  25,
  "pppaphan@gmail.com",
  "male",
  1.6,
  52,
  "abccdfcx"
);

const persons = [];
persons.push(
  {
    ...person1,
    calculateBMI: person1.calculateBMI(),
    guessHealth: person1.guessHealth(),
  },
  {
    ...person2,
    calculateBMI: person2.calculateBMI(),
    guessHealth: person2.guessHealth(),
  },
  {
    ...person3,
    calculateBMI: person3.calculateBMI(),
    guessHealth: person3.guessHealth(),
  },
  {
    ...person4,
    calculateBMI: person4.calculateBMI(),
    guessHealth: person4.guessHealth(),
  },
  {
    ...person5,
    calculateBMI: person5.calculateBMI(),
    guessHealth: person5.guessHealth(),
  },
  {
    ...person6,
    calculateBMI: person6.calculateBMI(),
    guessHealth: person6.guessHealth(),
  },
  {
    ...person7,
    calculateBMI: person7.calculateBMI(),
    guessHealth: person7.guessHealth(),
  }
);
console.log(persons);
