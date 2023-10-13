let zero = 0 ;

let counter = 3 ;

let my = ["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];

my.push("Elzero");

let a = my.slice(zero,my.length-counter).reverse();

console.log(a);

console.log(a.slice(a.length-counter,counter));

let b = ["Elzero"];
let c = b[zero].slice(b.length-counter)

console.log(`${c[0]}${c[my.length-counter-counter].toUpperCase()}`);
