let names1 = function (...name) {
  return `String [${name.join("], [")}] => Done`;
};
console.log(names1("Osama", "Mohamed", "Ali", "Ibrahim"));

let names2 = (...name) => `String [${name.join("], [")}] => Done`;
console.log(names2("Osama", "Mohamed", "Ali", "Ibrahim"));

let MyNambers = [20, 50, 10, 60];
let calc1 = (one, two, ...nums) => one + two + nums[0];
console.log(calc1(10, MyNambers[0], MyNambers[1])); //80

let calc2 = function (one, two, ...nums) {
  return one + two + nums[0];
};
console.log(calc2(10, MyNambers[0], MyNambers[1])); //80
