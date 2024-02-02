//1-masala//

//1//
let arr = [
    { name: "Abdullah", age: 21, status: false },
    { name: "Botir", age: 18, status: true },
    { name: "Shokir", age: 12, status: false }
  ];
  
  for (let item of arr) {
    if (item.status === false) {
      console.log(item);
    }
  }
  
//2//

let inputNumber = prompt("Birdan o'ngacha son kiriting");

inputNumber = parseInt(inputNumber);

if (inputNumber >= 1 && inputNumber <= 10) {
  let sum = 0;
  let sonlar = "";

  for (let i = 1; i <= inputNumber; i++) {
    sum += i;

    sonlar += i;
    if (i < inputNumber) {
      sonlar += "+";
    }
  }

  console.log(sum);
} else {
  console.log("Birdan o'ngacha son kiriting.");
}


//3//

let array1 = [2, 5, 6, 8, 9];
let array2 = [5, 7, 2, 4];

let commonNum = 0;

for (let i = 0; i < array1.length; i++) {
  if (array2.includes(array1[i])) {
    commonNum++;
  }
}

console.log(commonNum);

//4//

let array1 = [2, 5, 6, 8, 9];
let array2 = [5, 7, 2, 4];

let EKUQ;

for (let i = 0; i < array1.length; i++) {
  let elNumber = array1[i];

  for (let j = 0; j < array2.length; j++) {
    if (elNumber === array2[j]) {
      if (EKUQ === undefined || elNumber > EKUQ) {
        EKUQ = elNumber;
      }
    }
  }
}

console.log(EKUQ);

//5//

let inputNumber = prompt("Son Kiriting");

if (inputNumber > 0) {
  for (let i = 1; i <= inputNumber; i++) {
    console.log(i);
  }
} else {
  console.log("musbat son kiriting");
}



//2-masala//


//1/. 
function reverseNumber(number) {
    let reversedNum = 0;
  
    while (number > 0) {
      let xona = number % 10;
      reversedNum = reversedNum * 10 + xona;
      number = Math.floor(number / 10);
    }
  
    return reversedNum;
  }
  
  let myNumber = 567;
  let reversedNum = reverseNumber(myNumber);
  
  console.log(myNumber);
  console.log(reversedNum);
  
  //2//

  function factorial(number) {
    let newNum= num-1
    if (number === 0) {
      return 1
    }
    else{
        return num * factorial(newNum)
    }
  }
  
  console.log(factorial(5));

  
  //4//
  function printNumber(number) {
    if (number < 1) {
      return;
    }
  
    printNumber(number - 1);
    console.log(number);
  }
  
  printNumber(5);
  
//7//

function MaxNumber(arr) {
    if (arr.length === 0) {
      return "Array bo'sh";
    }
  
    let maxNum = arr[0]; 
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxNum) {
        maxNum = arr[i];
      }
    }
  
    return maxNum;
  }
  
  let numbers = [5, 7, 8, 99, 101];
  let maxNumber = MaxNumber(numbers);
  
  console.log(maxNum);

  //8//
  let arr = [2, 4, 7, 8, null, undefined, true, false];

let sum = 0;

for (let value of arr) {
  if (value === undefined) {
    value = 0;
  }

  sum += value;
}

console.log(sum);

//3//

let obj1 = { name: "Mahliyo", age: 30 };
let obj2 = { name: "Komil", age: 25 };

function compareAges(obj1, obj2) {
  if (obj1.age === undefined || obj2.age === undefined) {
    console.log("Yosh kiritilmagan");
    return;
  }

  if (obj1.age > obj2.age) {
    console.log(obj1.name + " yoshi katta");
  } else if (obj1.age < obj2.age) {
    console.log(obj2.name + " yoshi katta");
  } else {
    console.log("Ikkalasining ham yoshi teng");
  }
}

compareAges(obj1, obj2);


//5//

let user = { name: "Shaxzod" };
let userage = { age: 25 };
let userJob = { job: "developer" };


function myobjects( user, userage, userJob){
    return{
        name: user,
        age: userage,
        job: userJob
    }
}


//6//

let maosh = { aXodim: 150, bXodim: 180, cXodim: 210 };

let sum = 0;

for (let kalit in maosh) {
  if (typeof maosh[kalit] === 'number') {
    sum += maosh[kalit];
  }
}

console.log(sum);
