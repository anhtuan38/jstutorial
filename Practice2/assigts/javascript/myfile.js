let arrayNumber = [1, 50,  28,  2, 5, 103, 496, 105, 108, 25, 36, 6, 50, 53, 289, 1003, 472, 105, 3, 899, 692, 1000, 289, 103];
let newArray = [];
for (let i = 0; i < arrayNumber.length; i++) {
  if (newArray.indexOf(arrayNumber[i]) === -1) {
    newArray.push(arrayNumber[i])
  }
}
console.log("Mảng sau khi xóa trùng nhau:",newArray);
// Calculate sum of all array elements
let sumArray = 0;
for (let i = 0; i < newArray.length; i++) {
  sumArray+=newArray[i];
}
console.log("Tổng",sumArray);

// 	Find the odd numbsers &&  Find the even numbers.
let oddNumberArray = [];
let evenNumberArray = [];
for (let i = 0; i < newArray.length; i++) {
  if (newArray[i] % 2 != 0) {
    oddNumberArray.push(newArray[i])
  } else {
    evenNumberArray.push(newArray[i])
  }
}
console.log("Mảng phần tử lẻ: ",oddNumberArray);
console.log("Mảng phần tử chẵn: ",evenNumberArray);

// Sort array of numbers by ascending.
let sortAscendingArray = [];
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
function checkPrime(aNumber) {
  let check = true;
  if (aNumber < 2) {
    return false
  } else {
    for (let i = 2; i <= Math.sqrt(aNumber); i++) {
      if (aNumber % i == 0 ) {
        check = false;
        break;
      }
    }
  }
  return check;
}

let primeArray = [];
for (let i = 0; i < newArray.length-1; i++) {
    if (checkPrime(newArray[i])) {
      primeArray.push(newArray[i])
    }
  }
console.log("Mảng số Nguyên Tố: ",primeArray);

// Find the perfect numbers (số hoàn hảo )

function checkPerfect(aNumber) {
  let sum=0;
  if (aNumber < 2) {
    return false
  } else {
    for (let i = 1; i <= (aNumber / 2) ; i++) {
      if (aNumber % i == 0 ) {
        sum+=i;
      }
    }
    if (sum == aNumber) return true;
    else return false;
  }
}

let perfectArray = [];
for (let i = 0; i < newArray.length-1; i++) {
    if (checkPerfect(newArray[i])) {
      perfectArray.push(newArray[i])
    }
  }
console.log("Mảng số Hoàn Hảo: ",perfectArray);