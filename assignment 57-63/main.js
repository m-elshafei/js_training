function sayHello(theName, theGender) {
  document.write(`<br>`);
  if (theGender === "Male") {
    document.write(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    document.write(`Hello Miss ${theName}`);
  } else {
    document.write(`Hello ${theName}`);
  }
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

function calculate(firstNum, secondNum, operation) {
  document.write(`<br>`);
  if (firstNum && secondNum) {
    if (operation === "add") {
      document.write(firstNum + secondNum);
    } else if (operation === "subtract") {
      document.write(firstNum - secondNum);
    } else if (operation === "multiply") {
      document.write(firstNum * secondNum);
    } else {
      document.write(firstNum + secondNum);
    }
  } else {
    console.log(`Second Number Not Found`);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`${theAge * 12} Months`);
    console.log(`${theAge * 12 * 7} Weeks`);
    console.log(`${theAge * 12 * 7 * 24} Hours`);
    console.log(`${theAge * 12 * 7 * 24 * 60} Minute`);
    console.log(`${theAge * 12 * 7 * 24 * 60 * 60} Second`);
  } else {
    console.log(`Age Out Of Range`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

function checkStatus(name, age, ava) {
  let a, b, c;
  let array = [name, age, ava];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      a = array[i];
    } else if (typeof array[i] === "number") {
      b = array[i];
    } else {
      c = array[i];
      c == false ? (c = "Not") : (c = "");
    }
  }
  document.write(`<br>`);
  document.write(
    `Your Name Is ${a} And Your Age Is ${b} You Are ${c} Available For Hire`
  );
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// let getElementById()=onclick()= (startYear, endYear)=> {
//   for (let i = startYear; i < endYear.length; i++) {
//     const element = array[i];

//   }
// }
// document.getElementById("SelectBox").onclick=function(startYear, endYear) {

// }
function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i < endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
document.write(`<br>`);
createSelectBox(2000, 2021);

function multiply(...num) {
  let mult = 1;
  for (let i = 0; i < num.length; i++) {
    if (typeof num[i] === "string") {
      continue;
    } else {
      mult *= Math.floor(num[i]) ;
    }
  }
  document.write(`<br>`);
  document.write(mult);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
