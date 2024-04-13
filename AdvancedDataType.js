"use strict"
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
str1 = "Nishu Singh"
console.log(str1.length);
//Acessing Character
console.log(str1[2]);
//Strings are Immutable
str1 = "DUCAT"
str1 = "DuCATS"
console.log(str1);
// str1[2] = "W";
// console.log(str1);
//toUpperCase() & toLowerCase()
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
//Searching for
//indexOf()
fullName = "Nishu Singh"
console.log(fullName.indexOf('s'));
console.log(fullName.indexOf('w'));
console.log(fullName.indexOf('shu'));
console.log(fullName.indexOf('sim'));
//lastIndexOf(Right-to-left)
fullName = "Nishu Singh"
console.log(fullName.lastIndexOf('s'));
console.log(fullName.lastIndexOf('w'));
console.log(fullName.lastIndexOf('shu'));
console.log(fullName.lastIndexOf('sim'));
//includes
fullName = "Nishu Singh"
console.log(fullName.includes('s'));
console.log(fullName.includes('w'));
console.log(fullName.includes('shu'));
console.log(fullName.includes('sim'));
//startWiith
fullName = "Nishu Singh"
console.log(fullName.startsWith('n'));
console.log(fullName.startsWith('w'));
console.log(fullName.startsWith('shu'));
console.log(fullName.startsWith('sim'));
//endsWith
fullName = "Nishu Singh"
console.log(fullName.endsWith('s'));
console.log(fullName.endsWith('w'));
console.log(fullName.endsWith('shu'));
console.log(fullName.endsWith('sim'));
//Slice
fullName = "Nishu Singh"
console.log(fullName.slice(0, 6));
console.log(fullName.slice(2, 6));
console.log(fullName.slice(6));
console.log(fullName.slice(0, -1));
console.log(fullName.slice(-1, -1));
console.log(fullName.slice(-2, -1));
//subStrings
fullName = "Nishu Singh"
console.log(fullName.substring(0, 6));
console.log(fullName.substring(2, 6));
console.log(fullName.substring(2));
console.log(fullName.substring(0, -1));
console.log(fullName.substring(-2, 5));

//substr-deprected
//Compare
str1 = "Hello"
str2 = "Hello"
console.log(str1 === str2);
console.log(str1 > str2);
console.log(str1 >= str2);
console.log(str1 < str2);
console.log(str1 <= str2);
console.log(str1 !== str2);

//codePointAt 
str1 = "DUCAT"
for (const charcter of str1) {
    console.log(charcter, charcter.codePointAt());
}

//Arrays
let arr = [10, 20, 30, 40, 50, 60];
console.log(arr);
// let array=new Array(10);
//Array.of
arr = Array.of(10, 30, 40, 50, 60);
console.log(arr);
//Array.from
// arr = Array.from(10, 20, 30, 40, 50);
// console.log(arr);
//Multidimensional Array(2D)
arr = [[10, [100]], [30, 40]];
console.log(arr);
console.log(arr[0][0]);
console.log(arr[0][1]);

//toString
arr = [10, 20, 30, 40, 50];
console.log(arr.toString());
//Add/remove
//Array.push()
let res = arr.push(100, 200, 300, 400);
console.log(res);
//Array.pop()
res = arr.pop();
console.log(arr, res);
//Array.unshift()
res = arr.unshift(1000, 2000, 3000);
console.log(arr, res);
//Array.shift()
res = arr.shift();
console.log(arr, res);
//Splice
res = arr.splice(2, 0);
res = arr.splice(-2, 1);
res = arr.splice(arr.length - 1, 1);
res = arr.splice(0, 1);
console.log(arr, res);