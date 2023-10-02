let a = "   monday  ";
let b = a.split(" ").join("");
let day = b.charAt(0).toUpperCase() + b.slice(1);
switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  case "World":
    console.log("Its Not A Valid Day");
    break;
}
