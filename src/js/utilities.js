const $ = (value) => {
  return document.getElementById(value);
};

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
// const Person = {
//   fullName: "Anh Tuan",
//   age: "22",
//   email: "tuanphan@gmail.com",
//   gender: "male",
//   height: "1.55",
//   weight: "54",
//   address: "da nang",
//   calculateBMI: function () {
//     let BMI = this.weight / Math.pow(this.height, 2);
//     return BMI;
//   },
//   guessHealth: function () {
//     const BMI = this.calculateBMI();
//     if (BMI < 18.5) {
//       return "underweight";
//     } else if (BMI >= 18.5 && BMI <= 24.9) {
//       return "normal weight";
//     } else if (BMI >= 25 && BMI <= 29.9) return "overweight";
//     else return "obesity";
//   },
// };

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
    if (BMI < 18.5) {
      return "underweight";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      return "normal weight";
    } else if (BMI >= 25 && BMI <= 29.9) return "overweight";
    else return "obesity";
  };
}

const person1 = new Person("tuan", 22, "tuanphan", "male", 1.6, 54, "abc");
const person2 = new Person("thai", 25, "pppaphan", "male", 1.6, 52, "abccdf");

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
  }
);
console.log(persons);
