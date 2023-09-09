// Test Case 1
let num = 9; // "009"
if (num < 10) {
  console.log("00" + num);
}

// Test Case 2
let num12 = 20; // "020"
if (num12 > 10 && num12 < 100) {
  console.log("0" + num12);
}
// Test Case 3
let num13 = 110; // "110"
if (num13 >= 100) {
  console.log(num13.toString());
}

console.log("-----------------------");

let num6 = 9;
let str = "9";
let str2 = "20";

if (num6 == str) {
  console.log("{num1} Is The Same Value As {str}");
}
if (num6 == str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (num6 !== str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (str != str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}
console.log("-----------------------");

let num5 = 10;
let num11 = 30;
let num10 = "30";

if (num10 > num5 && num10 !== num11) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );
  if (num10 > num5 && num10 == num11 && num10 !== num11) {
    console.log(
      "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
    );
    if (num10 !== num5 && num10 !== num11) {
      console.log(
        "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
      );
    }
  }
}


console.log("-----------------------");

// Edit What You Want Here

let num1 = 8;
let num2 = 7;
let num3 = 8;
let num4 = 30;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}