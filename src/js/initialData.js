const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomFloat = (min, max, fixed) => {
  return (Math.random() * (max - min) + min).toFixed(fixed);
};

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
const personArr = [];
const limit = 10;
const names = ["tuan", "huy", "chinh", "anh", "tu", "quang", "duc", "thai"];
const genders = ["male", "female", "other"];

for (let count = 0; count < limit; count++) {
  const person = new Person(
    names[randomInt(0, 7)],
    randomInt(15, 80),
    `mail_${randomInt(1000, 9999)}@gmail.com`,
    genders[randomInt(0, 2)],
    randomFloat(1, 2.5, 2),
    randomFloat(30, 100, 1),
    `thôn ${randomInt(1, 9)}`
  );
  personArr.push(person);
}

personArr.map((obj) => {
  obj.BMI = obj.calculateBMI().toFixed(2);
  obj.health = obj.guessHealth();
  return obj;
});
