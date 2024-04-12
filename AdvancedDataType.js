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
console.log(10 + 20 + true - false - false + true - 100); // -68

// Tests: isFinite and isNaN
//isFinite()
let a = {};
console.log(isFinite(a));
//Number
a = 12;
console.log(isFinite(a));
a = Infinity;
console.log(isFinite(a));
a = NaN;
console.log(isFinite(a));
//String
a = "";
console.log(isFinite(a));
a = "hw";
console.log(isFinite(a));
//Boolean true-> 0,1
//Null true-> 0
//Undefined false
//array
// a=[][number]-true;
// false[String]array length greater than 1
//Object-false
//Math.random
//NaN
//number
//true NaN
//false Infinity countable value
//String
//true String has somevalue
// false blank String
//boolean false
//Null false
//Undefined true
//Array 
//true[String]array.length greater than 1
//false[][number]
//Object true

//Math.random()
console.log(Math.floor(Math.random() * 100));
//Math.max()
console.log(Math.max(10, 20, 30, 40, 50));
//Math.min()
console.log(Math.min(10, 20, 30, 40, 50));
//ParseInt & ParseFloat
n = "10.2525225";
console.log(parseInt(n));
console.log(parseFloat(n));

//Strings
let str1 = "DUCAT";
let str2 = 'DUCAT';
let str3 = `DUCAT`;
let firstName = 'Nishu';
let lastName = 'Singh';
let fullName = `${firstName} ${lastName} ${Math.round()}`;
console.log(fullName);

//Special Characters
str1 = "DuCAT\'s";
str2 = "DUCAT\'s";
str3 = `DUCAT\'s`;
console.log(str1);
console.log(str2);
console.log(str3);

//String length