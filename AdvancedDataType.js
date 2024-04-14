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
//update
arr = [10, 20, 30, 40, 50, 60];
res = arr.splice(2, 1, 300);
console.log(arr, res);
res = arr.splice(2, 2, 300, 400);
console.log(arr, res);
//add
arr = [10, 20, 30, 40, 50]
res = arr.splice(2, 0, 300, 400, 500, 600);
console.log(arr, res);
res = arr.splice(arr.length, 0, 300, 400, 500, 600);
console.log(arr, res);
res = arr.splice(0, 0, 300, 400, 500, 600);
console.log(arr, res);

//Slice
arr = [10, 20, 30, 40, 50, 60];
console.log(arr.slice(0, 3));
console.log(arr.slice(2));
console.log(arr.slice(0, -1));
console.log(arr.slice(-1, -1));
console.log(arr.slice(-1, -2));
//concat
arr = [10, 20, 30, 40, 50];
let arr1 = [60, 70, 80, 90, 100];
console.log(arr.concat(arr1));
//Iterate: forEach->method
arr = [10, 20, 30, 40, 50, 60];
arr.forEach((value, index, arr) => {
    console.log(value, index, arr);
})
//Searching in array
//indexOf/lastIndexOf
arr = [10, 20, 30, 40, 50, 60];
console.log(arr.indexOf(10));
console.log(arr.indexOf(100));
console.log(arr.lastIndexOf(10));
console.log(arr.lastIndexOf(100));
//includes
console.log(arr.includes(10));
console.log(arr.includes(100));
//find and findIndex/findLastIndex
arr = [10, 20, 30, 40, 50, 60];
res = arr.find((value, index, arr) => {
    console.log(value, index, arr);
    if (value === 30) {
        return value;
    }
})
console.log(res);
//findIndex
arr = [10, 20, 30, 40, 50, 60];
res = arr.findIndex((value, index, arr) => {
    console.log(value, index, arr);
    if (value === 30) {
        return value;
    }
})
console.log(res);
//findLastIndex
arr = [10, 20, 30, 40, 50, 60];
res = arr.findLastIndex((value, index, arr) => {
    console.log(value, index, arr);
    if (value === 30) {
        return value;
    }
})
console.log(res);
//filter
arr = [10, 20, 30, 40, 50, 60];
res = arr.filter((value, index, arr) => {
    console.log(value, index, arr);
    if (value === 30 || value === 40 || value === 50) {
        return value;
    }
})
console.log(res);
//Real Example of filter
let emp = [{ name: 'deepak', department: 'trainer' },
{ name: 'Nishu', department: 'trainer' },
{ name: 'Rohit', department: 'Developer' },
{ name: 'Nitin', department: 'Devops' }];
res = emp.filter(emp => emp.department !== 'trainer');
console.log(res);
//sort (fn)
arr = [30, 60, 80, 54];
console.log(arr.sort());
//reverse
console.log(arr.reverse());
//split & join
//join
arr = [10, 20, 30, 40, 50, 60];
console.log(arr.join('|'));
//join array to string convert
let stringArr = arr.join('|');
//split based on spliter string to access converting
console.log(stringArr.split('|'));

//Reduce / ReduceRight
arr.reduce((preValue, currValue) => {
    console.log(preValue, currValue);
    return preValue + currValue;
})
//ReduceRight
let sum = arr.reduceRight((preValue, currValue) => {
    console.log(preValue, currValue);
    return preValue + currValue;
}, 0)
console.log({ sum });
//Array.isArray
arr = 10;
console.log(Array.isArray(arr));

// Iterables
arr = [10, 20, 30, 40, 50];
for (const value of arr) {
    console.log(value);
}
//Object is not iterables
//String
str1 = "DUCAT";
for (const value of str1) {
    console.log(value);
}
//Map
//new Map()
let map = new Map();
//map.set(key,value)-stores the value by the key
console.log(map.set(1, 10));
console.log(map.set(true, true));
console.log(map.set("firstName", "john"));
console.log(map.set([10, 20], [10, 20]));
console.log(map.set({ key: "FirstName" }, { value: "Nishu" }));

//map.get(key)
console.log(map.get('firstName'));
//map.has(key)
console.log(map.has('firstName'));
//map.delete(key)
console.log(map.delete('firstName'));
//map.clear()
map.clear();
//map.size
console.log(map.size);

//Iteration over map
map = new Map();
console.log(map.set('firstName', 'john'));
console.log(map.set('lastName', 'Doe'));
//map.key()
console.log(map.keys());
for (const value of map.keys()) {
    console.log(value);
}
//map.value()
console.log(map.values());
for (const value of map.values()) {
    console.log(value);
}
//map.entries()
console.log(map.entries());
for (const value of map.entries()) {
    console.log('key' + value[0]);
    console.log('value' + value[1]);
}
//Set
let set = new Set();
//add
set.add(10);
set.add(20);
set.add(30);
//delete
console.log(set.delete(100));
console.log(set);
//has
console.log(set.has(100));
//clear
set.clear();
console.log(set);
//size
console.log(set.size);
//Iteration
set = new Set([10, 20, 30, 40, 50]);
for (const value of set) {
    console.log(value);
}
//WeakMap & WeakSet
let weakMap = new WeakMap();
let obj = weakMap.set({ key: 'firstName' });
weakMap.set(obj, 'deepak')
console.log(weakMap.get({ key: 'firstName' }));
console.log(weakMap.delete(obj));
console.log(weakMap.has(obj));
//WeakSet
let weakSet = new WeakSet();
//add
obj = { key: 'deepak' };
weakSet.add(obj);
//delete
weakSet.delete(obj);
console.log(weakSet);
//weakSet.has(key)
console.log(weakSet.has(obj));
//Object.key(),value,entries
obj = {
    firstName: 'john',
    lastName: 'Doe',
    age: 10
}
console.log(Object.keys(obj));
for (const value of Object.keys(obj)) {
    console.log(value);
}
console.log(Object.keys, Object.values);
for (const value of Object.values(obj)) {
    console.log(value);
}
console.log(Object.entries(obj));
for (const value of Object.entries(obj)) {
    console.log('key' + value[0]);
    console.log('value' + value[1]);
}

//Destructuring Assignment
//Array
// arr=[10,20,30]
// a=arr[0];
// let b=arr[1];
// let c=arr[2];
// console.log(a,b,c);
//Destructuring
let [b, c, d] = arr;
console.log(a, b, c);
//default value set
[b, , c, d = 0] = arr;
console.log(b, c, d);
//subarray using rest operator

arr = [10, 20, 30, 40, 50, 60, 70]
let [e, f, ...nums] = arr;
console.log(e, f, nums);
//Real Time Example
function addition(num1, num2) {
    console.log(num1 + num2);
}
addition(10, 20)

//dynamic value
function adds(...nums) {
    sum = 0;
    for (const value of nums) {
        sum += value;
    }
   
}
console.log(sum);

//Object Destructuring
obj={
    firstname:'john',
    lastname:'Smith',
    age:10,
}
let {firstname,lastname,age,hobbies}=obj;
console.log(firstname,lastname,age,hobbies);
//Rest Operator for sub Object
let{firstnames,...objs}=obj;
console.log(firstnames,objs);
//Rename by destructors
let{age:z}=obj; //Level 1
console.log(z);
// let{age:x,name:{firstname:fname}}=obj; //Level 2
// console.log(x,fname);
//nested Destructuring
obj={name:{
fn:'john',
ln:'Smith',
},
age:10,
}
let{name:{fn,ln}}=obj;
console.log(fn,ln);

