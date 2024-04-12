// toString(base)
let n = 10;
console.log(n.toString(2)); //1010
console.log(n.toString(8)); //12
console.log(n.toString(16)); //a
console.log(n.toString(10)); // 10

//Rounding
n = 10.25;
//Math.floor
console.log(Math.floor(n)); //10
//Math.ceil
console.log(Math.ceil(n)); // 11
//Math.round
console.log(Math.round(n));// 10
//Math.turnc
console.log(Math.trunc(n)); //10
//Math.toFixed
console.log(n.toFixed(1)); // 10.3

//Imprecise Calc
console.log(10+20+true-false-false+true-100); // -68

// Tests: isFinite and isNaN
//Math.round
console.log(Math.floor(Math.random()));