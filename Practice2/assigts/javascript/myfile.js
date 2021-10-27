let arrayNumber = [1, 50,  28,  2, 5, 103, 496, 105, 108, 25, 36, 6, 50, 53, 289, 1003, 472, 105, 3, 899, 692, 1000, 289, 103];
let newArray = [];
let element;
for (let element of arrayNumber) {
  if (newArray.indexOf(element) === -1) {
    newArray.push(element)
  }
}
console.log("Mảng sau khi xóa trùng nhau:",newArray);

// Calculate sum of all array elements
let sumArray = 0;
for (let element of arrayNumber) {
  sumArray+=element;
}
console.log("Tổng",sumArray);

// 	Find the odd numbsers &&  Find the even numbers.
let oddNumberArray = [];
let evenNumberArray = [];
for (let element of newArray) {
  if (element % 2 != 0) {
    oddNumberArray.push(element)
  } else {
    evenNumberArray.push(element)
  }
}
console.log("Mảng phần tử lẻ: ",oddNumberArray);
console.log("Mảng phần tử chẵn: ",evenNumberArray);

// Sort array of numbers by ascending.
let temp;
for (let i = 0; i < newArray.length-1; i++) {
  for (let j = i+1; j < newArray.length; j++) {
    if (newArray[i]>newArray[j]) {
      temp = newArray[i];
      newArray[i]=newArray[j];
      newArray[j]=temp;
    }
  }
}
console.log("Mảng sắp xếp tăng dần",newArray);

//Find the prime numbers (số nguyên tố).
function checkPrimeNumber(number) {
  let check = true;
  if (number < 2) {
    return false
  } else {
    for (let index = 2; index <= Math.sqrt(number); index++) {
      if (number % index == 0 ) {
        check = false;
        break;
      }
    }
  }
  return check;
}

let primeArray = [];
for (let element of newArray) {
    if (checkPrimeNumber(element)) {
      primeArray.push(element)
    }
  }
console.log("Mảng số Nguyên Tố: ",primeArray);


// Find the perfect numbers (số hoàn hảo )
function checkPerfectNumber(aNumber) {
  let sum=0;
  if (aNumber < 2) {
    return false
  } else {
    for (let index = 1; index <= (aNumber / 2) ; index++) {
      if (aNumber % index == 0 ) {
        sum+=index;
      }
    }
    if (sum == aNumber) return true;
    else return false;
  }
}

let perfectArray = [];
for (let element of newArray) {
    if (checkPerfectNumber(element)) {
      perfectArray.push(element)
    }
  }
console.log("Mảng số Hoàn Hảo: ",perfectArray);