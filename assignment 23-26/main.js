let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

console.log(Math.min(Math.round(a, b, c, d)));
console.log(Math.pow(a, Math.round(d)));
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(+d.toFixed(0));
console.log(Math.trunc(d));
// b,d
console.log(+(Math.floor(b) / Math.ceil(d)).toFixed(2)); //66.67
console.log(Math.round(b) / Math.ceil(d)); //67

console.log(Math.abs(Number.MIN_SAFE_INTEGER)); // 9007199254740991
console.log( Number.MAX_SAFE_INTEGER.toString().length); // 16

let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

console.log(Math.trunc(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4