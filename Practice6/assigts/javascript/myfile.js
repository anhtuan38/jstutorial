//○	Create 1 prompt to ask User to input a number that is larger than or equal 3.
let numberTriangle;
do {
  numberTriangle = parseFloat(prompt("Please input a number that is larger than or equal 3"));
} while ( numberTriangle < 3 || Number.isInteger(numberTriangle) != true )


for (let i=1; i<=numberTriangle; i++) {
  for (k = 1; k <= i; k++) {
    document.write("*");
  }
  document.write("<br>");
}