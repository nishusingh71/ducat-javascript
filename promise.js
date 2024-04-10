let promise = new Promise((resolve, reject) => {
    resolve("Resolved Stack")
    reject("Rejected State")
})
console.log(promise);

//then
promise = new Promise((resolve, reject) => {
    resolve("Resolved State")
})
promise.then((response) => {
    console.log(response);
})
//Catch Block
promise = new Promise((resolve, reject) => {
    reject("Rejected State")
})
promise.catch((error) => {
    console.log(error);
})

//Chaining (then & block)
promise = new Promise((resolve, reject) => {
    resolve("Resolved Stack")
    reject("Rejected State")
})

promise.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
})

//Example
let items = ["pen", "paper", "pencil"];
promise = new Promise((resolve, reject) => {
    if (items.includes("pin")) {
        resolve("Item is available");
    } else {
        reject("item is not available");
    }
})
promise.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
})


let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1")
    }, 2000)
})
promise1.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2")
    }, 1000)
})
promise2.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
})

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3")
    }, 4000)
})
promise3.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
})

let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 4")
    }, 5000)
})
promise4.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
})
