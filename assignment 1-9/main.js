document.getElementById("title").style.color = "red";
//################################################################################
window.onload = function () {
  let title = document.getElementById("title1").style;
  title.color = "blue";
  title.fontSize = "80px";
  title.fontWeight = "bold";
  title.textAlign = "center";
  title.fontFamily = "Arial";
};
//################################################################################
console.log(
  "%cElzero %cWeb %cSchool",
  "color:red;font-size:40px",
  "color:green;font-weight:bold;font-size:40px",
  "color:blue;font-size:40px"
);
//################################################################################
console.group("Group 1");
console.log("Message One");
console.log("Message two");
console.groupCollapsed("Chile Group");
console.log("Message One");
console.log("Message two");
console.groupCollapsed("Grand Chile Group");
console.log("Message One");
console.log("Message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message two");
//################################################################################
let name = ["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"];
console.log(name);
//################################################################################
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/
