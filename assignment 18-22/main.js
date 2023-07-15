let a = 10;
let b = "20";
let c = 80;
//          [11]+ [20] + [80] - [10]
console.log(++a + +b++ + +c++ - +a++); // 101 (++a pre increment) (+ sum)  (+b++ pre & after increment) (+ sum) (+c++ pre & after increment) (- sum) (+a++ pre & after increment)
//          [11]+[-20]+[80] - [-10]+[10]
console.log(++a + -b + +c++ - -a++ + +a); // 91(++a pre increment) (+ sum) (-b pre increment) (+ sum) (+c++ pre & after increment) (- div) (-a++ pre & after increment) (+ sum) (+a pre increment)
//          [79]+[20]+ [9] * [20] -[20]*[10]+[9] -[1]
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 87(--c pre increment) (+ sum) (+b pre increment) (+ sum) (--a pre increment) (* mult) (+b++) (- div) (+b pre increment) (* mult) (a) (+ sum) (--a pre increment) (- div) (+true pre increment)
let d ="-100", e="20" ,f = 30 ,g = true;
console.log(+-d * e)//2000
console.log(+-d + ++f + ++e * ++g)//173
console.log(10 / 20 / 15 / 3 / 190 * 10 / 400); // 0
let points = 10;
console.log(++points + ++points - --points + ++points - --points); // 13
console.log(--points - points-- + --points); // 8;  