// if statement
let number = 11;
if (number % 2 === 0) {
    console.log("Even");
}
//else statement
else {
    console.log("Odd");
}
//if-else 
number = 10;
if (number % 2 === 0 && number % 5 === 0) {
    console.log("Number is divisible by 2 & 5");
} else if (number % 2 === 0) {
    console.log("Number is divisible by 2");
} else if (number % 5 === 0) {
    console.log("Number is divisible by 5");
} else {
    console.log("Number is not divisible by 2 & 5");
}
//Nesting if else
//Nuber is greater than zero if yes then number is odd or even otherwise number should be greater than zero.
if (number > 0) {
    if (number % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
} else {
    console.log("Number should be greater than zero");
}

//switch case
let a = 10;
let b = 10;
let op = "*";
switch (op) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b);
        break;
    case "%":
        console.log(a % b);
        break;
    case "**":
        console.log(a ** b);
        break;
    default:
        console.log("Invalid Operator");
        break;
}

//Ternary Operator
number = 13;
let result = '';
result = number % 2 === 0 ? "even" : "odd";
console.log(result);

//Nullish coalescing operator '??'
result = '';
let price = null;
result = price ?? 0;
console.log(result);