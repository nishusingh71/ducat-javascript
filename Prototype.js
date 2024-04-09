//__proto__
//number
let number = 10;
console.log(number, typeof number);
console.log(number.__proto__); //Number Class

//boolean 
let bool = true;
console.log(bool.__proto__); //Boolean Class

//String
let str = "ducat";
console.log(str.__proto__); //String Class

//Symbol
let sym = Symbol("id");
console.log(sym.__proto__); //Symbol Class

//BigInt
let bigint = BigInt("10");
console.log(bigint.__proto__); //BigInt Class

// //Undefined 
// let num;
// console.log(num.__proto__); //error

// //null
// number = null;
// console.log(number.__proto__); //error

// array
let arr = [10, 20, 30];
console.log(arr.__proto__); //Array Class

//object
let obj = {
    firstName: "Nishu",
    lastName: "Singh"
}
console.log(obj.__proto__); //Object Class

class Employee {

}
Employee.prototype.className = "Employee";
Employee.prototype.getEmployeeName = function () {
    console.log(this.className);
}
let emp = new Employee();
console.log(Employee.prototype.getEmployeeName);
emp.getEmployeeName();

Array.prototype.nishu = function () {
    console.log("nishu function called");
}
arr = [];
console.log(arr);

