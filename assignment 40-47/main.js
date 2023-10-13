let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
// console.log(myFriends.slice(0,0).length);
// Method 1
console.log(myFriends.slice(num-num,num)); // ["Ahmed", "Elham", "Osama"];

// // Method 2
console.log(myFriends.splice(num-num,num,num-num)); // ["Ahmed", "Elham", "Osama"];

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

let a = friends.splice(friends.length-num,friends.length-num+friends.length-num);

console.log(a); // ["Eman", "Osama"]

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

console.log(finalArr.concat(arrOne,arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2).toUpperCase()); // ZERO.

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle)) {
    console.log("Found ");
}
if (haystack.some((element) => element > needle)) {
    console.log("Found ");
}
if (haystack.indexOf(needle)) {
    console.log("Found ");
}


let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

let d = allArrs.concat(arr1,arr2).sort().join("") ; 
console.log(d.slice(4,7).toLowerCase()); // fxy