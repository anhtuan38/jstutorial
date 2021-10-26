//Create 1 prompt to ask User to input a number that is larger than or equal 3.
let firstName
do
  firstName = prompt("Please input First Name larger than or equal 3 characters");
while (firstName.length < 3)
let lastName
do
  lastName = prompt("Please input Last Name larger than or equal 3 characters");
while (lastName.length < 3)

let age = prompt("Please input Age:");
let genderge = prompt("Please input Genderge");
let school = prompt("Please input School");

let Address
do
  Address = prompt("Please input Address not exceed 40 characters");
while (Address.length > 40)


document.write(
  `<table>
    <tr>
      <th>First name</th>
      <td>${firstName}</td>
    </tr>
    <tr>
      <th>Last name</th>
      <td>${lastName}</td>
    </tr>
    <tr>
      <th>Age</th>
      <td>${age}</td>
    </tr>
    <tr>
      <th>Gender</th>
      <td>${genderge}</td>
    </tr>
    <tr>
      <th>School</th>
    <td>${school}</td>
    </tr>
    <tr>
      <th>Address</th>
      <td>${Address}</td>
    </tr>
  </table>`
)
