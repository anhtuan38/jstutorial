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