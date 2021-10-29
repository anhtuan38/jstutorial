let index;
do
  index = prompt("Please input a number from 1 to 7")
while (index < 1 || index > 7)
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

alert(day[index - 1]);

// Month
let index2;
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
do
  index2 = prompt("Please input a number from 1 to 12")
while (index2 < 1 || index2 > 12)
alert(month[index2 - 1]);

let x = new Date();
 let year = x.getFullYear(x);

function isSpecialYear(year) {
  return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0));
}

if (index2 === '1' || index2 === '3' || index2 === '5' || index2 === '7' || index2 === '8' || index2 === '10' || index2 === '12') {
  alert(`Tháng ${index2} năm ${year} có 31 ngày`)
}
else if (index2 === '4' || index2 === '6' || index2 === '9' || index2 === '11') {
  alert(`Tháng ${index2} năm ${year} có 30 ngày`)
}
else if (isSpecialYear(year) === true) {
  alert(`Tháng ${index2} năm ${year} có 29 ngày`)
}
else alert(`Tháng ${index2} năm ${year} có 28 ngày`)
