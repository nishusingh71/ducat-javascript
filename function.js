function addition(num1, num2) {
    console.log(num1 + num2);
}

addition(20, 70);
//Local Scope 
function addition(num1, num2) {
    let sum = num1 + num2; //sum is local variable
    console.log(sum);
}
addition(20, 20);
// console.log(sum); // error

//Global Scope
let sum = 0;
function add(num1, num2) {
    sum = num1 + num2;
    console.log(sum);
}
console.log(sum);
add(10, 30);
console.log(sum);

//Outer Scope 
function testing() {
    let a = 10;
    function test() {
        console.log(a);
    }
    test();
}
testing();

//Default Values
function addition(num1, num2, num3 = 0) {
    console.log(num1, num2, num3);
    console.log(num1 + num2 + num3);
}
addition(10, 20, 40);
//Returning Value from function
function addition(num1 = 0, num2 = 0, num3 = 0) {
    return num1 + num2 + num3;
}
let s = addition(10, 20, 40);
console.log(s);
//function Expressions
let ad = function (num1, num2) {
    console.log(num1 + num2);
}
console.log(ad);
//Arrow Function
let a = (num1, num2) => {
    console.log(num1 + num2);
}
a(10, 20);

let sq = (num) => num * num;
console.log(sq(10));

//Callback Function
function calc(a, b, Callback) {
    console.log(a, b, Callback);
    Callback(a, b);
}
calc(10, 20, function (num1, num2) {
    console.log("add" + (num1, num2));
})
calc(10, 20, function (num1, num2) {
    console.log("sum" + (num1 + num2));
})