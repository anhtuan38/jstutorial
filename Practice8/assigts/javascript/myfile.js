//Create 1 prompt to ask User to input a number that is larger than or equal 3.
let firstName
do
  firstName = prompt("Please input First Name larger than or equal 3 characters");
while (firstName.length < 3)
let lastName
do
  lastName = prompt("Please input Last Name larger than or equal 3 characters");
while (lastName.length < 3)

let genderge = prompt("Please input Genderge");
let school = prompt("Please input School");

let Address
do
  Address = prompt("Please input Address not exceed 40 characters");
while (Address.length > 40)

document.write("First Name: ",firstName ,"<br>");
document.write("Last Name: ",lastName ,"<br>");
document.write("Genderge: ",genderge ,"<br>");
document.write("School: ",school ,"<br>");
document.write("Address: ",Address ,"<br>");