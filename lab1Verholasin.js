// 1 задание

let x1 = 2
let y1 = 3
let x2 = 10
let y2 = 5
let rectangleArea = Math.abs(x1 - x2) * Math.abs(y1 - y2);
console.log('Площадь прямоугольника = ', rectangleArea);


// 2 задание

let a = 13.890123
let b = 2.891564
let f = 2 // f это n у меня в 3 задаче тоже есть переменная n вот и пришлось заменить 
aF = (a % 1)
bF = (b % 1)
let aNormal = Math.round(aF * Math.pow(10, f))
let bNormal = Math.round(bF * Math.pow(10, f))
console.log('a > b', aNormal > bNormal);
console.log('a < b', aNormal < bNormal);
console.log('a >= b', aNormal >= bNormal);
console.log('a <= b', aNormal <= bNormal);
console.log('a === b', aNormal === bNormal);
console.log('a ≠ b', aNormal !== bNormal);


// 3 задание

let m = 0;
let n = 100;
let miniml = Math.min(n, m);
let range = Math.abs(Math.max(m, n)-(Math.min(m,n)));
let randNumber = (Math.round(Math.random() * (range-2))) + miniml;
let result =  ((randNumber % 2) + 1) + randNumber;
console.log('Рандомное нечетное число в диапазоне от', m, 'и', n, '=', result);
