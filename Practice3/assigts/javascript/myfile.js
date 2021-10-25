let aString = "Hello world! I'm a newbie in programming.";
console.log(aString)
console.log(aString.length);

//Count how many words appeared in the string above.

let totalWord = 0;
for (let i = 0; i < aString.length; i++)
  if (aString[i] == " ") {
    totalWord += 1;
}
totalWord += 1; // 1 space = 2 word
console.log("Tổng số chữ: ",totalWord)

//Find the position of the word “newbie”.
console.log("Vị Trí \"newbie\": ",aString.search("newbie"))

//Cut a part of the string above to have the word “newbie”.
console.log(aString.slice(aString.search("newbie"),aString.search("newbie")+6));

//Replace word “programming” in the string above by the uppercase one.
console.log(aString.replace("programming", "PROGRAMMING"));