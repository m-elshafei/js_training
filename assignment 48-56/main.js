let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  document.write(`${[i]}<br>`);
}
let a = 10;
let b = 0;
let stop = 3;
document.write(`<br>`);
for (let i = a; i >= stop; i--) {
  if (i < a) {
    document.write(`0${[i]}<br>`);
  } else {
    document.write(`${[i]}<br>`);
  }
}

let c = 1;
let d = 6;
let breaker = 2;
document.write(`<br>`);
for (let i = c; i <= d; i++) {
  document.write(`${[i]}<br>`);
  for (let j = breaker; j < d; j += breaker) {
    document.write(`-- ${j}<br>`);
  }
}
document.write(`<br>`);
let index = 10;
let jump = 2;
let i = index;
for (;;) {
  if (i < jump + jump) {
    break;
  }
  document.write(`${i}<br>`);
  i -= 2;
}
document.write(`<br>`);

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let e = 1;

for (let j =friends.length-friends.length ; j < friends.length; j++) {
  if (friends[j].charAt(0) === letter.toUpperCase()) {
    continue;
  }
  document.write(`"${e} => ${friends[j]}"<br>`);
  e++;
}
document.write(`<br>`);

let f = 0;
let swappedName = "elZerO";

for (let i = f; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    
    document.write(swappedName[i].toLowerCase())
  } else {
    
    document.write(swappedName[i].toUpperCase())
  }
}

document.write(`<br>`);
document.write(`<br>`);

let s = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = s; i < mix.length; i++) {
  if (mix[i] === mix[i].toString() ) {
    continue;
  }
    if (mix[i] === 1) {
      continue;
    }
  document.write(`${mix[i]}<br>`)
  
}
