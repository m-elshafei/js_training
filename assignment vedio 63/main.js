function ShowDetails(name = "Un", age = "Un", ava = "Un") {
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
  return `Your Name Is ${a} And Your Age Is ${b} You Are ${c} Available For Hire`;
}
document.write(ShowDetails("Osama", 38, true));
document.write("<br>");
document.write(ShowDetails(38, "Osama", true));
document.write("<br>");
document.write(ShowDetails(true, 38, "Osama"));
document.write("<br>");
document.write(ShowDetails(false, "Osama", 38));
