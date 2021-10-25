//Create 1 prompt to ask User to input a number that is larger than or equal 3.
do
  let firstName = prompt("Please input First Name larger than or equal 3 characters");
while (firstName.length < 3)
do
  let lastName = prompt("Please input Last Name larger than or equal 3 characters");
while (lastName.length < 3)

let genderge = prompt("Please input Genderge");
let school = prompt("Please input School");

do
  let address = prompt("Please input Address not exceed 40 characters");
while (address.length > 40)