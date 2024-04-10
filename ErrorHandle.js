try {
    // let b = 10;
    let a = 10 / b;
    console.log(a);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
} finally {
    console.log("finally");
}
// URI Error not solved by try&catch block
//Custom Error Generator
try {
    let number = 10;
    let divisor = 0;
    if (!divisor) {
        throw new Error("Divisor value should be greater than zero");
    }
    console.log(number / divisor);
} catch (error) {
    console.log(error.message);
}

// Generator Function
function* addition(num1, num2) {
    yield num1 + num2;
    return 10;
    yield 10 + 30
}
let sum = addition(10, 20);
console.log(sum.next());
console.log(sum.next());
console.log(sum.next());

//CallBack Hell
function testing(Callback) {
    Callback()
}
testing(function () {
    console.log("testing 1");
    testing(function () {
        console.log("testing 2");
        testing(function () {
            console.log("testing 3");

        })
    })

})