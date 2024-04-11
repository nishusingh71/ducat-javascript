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

// Solved Callback Hell Problem
new Promise((resolve, reject) => {
    resolve("Resolved State")
}).then((response) => {
    console.log("testing 1", response);
}).then((response) => {
    console.log("testing 2", response);
}).then((response) => {
    console.log("testing 3", response);
}).then((response) => {
    console.log("testing 4", response);
})

// Multiple then & catch
new Promise((resolve, reject) => {
    resolve("Resolved State")
    reject("Failed")
}).then(() => {
    console.log("testing 1");
}).then(() => {
    console.log("testing 2");
}).then(() => {

    console.log("testing 3");
    throw new Error("Something went wrong");
}).then(() => {
    console.log("testing 4");
}).catch((err) => {
    console.log(err);
    // throw new Error("Something went wrong");
}).then(() => {
    console.log("testing 5");
})

// Fetch()
/**
 * fetch("url",{
 * header:{
 * },
 * method:"GET",
 * body:
 * })
 */
let response = fetch("https://restcountries.com/v3.1/all")
response.then((res) => {
    return res.json();
}).then((data) => {
    console.log(data);
})

//Async Function
async function getCountry(){
    let response=await fetch("https://restcountries.com/v3.1/all")
    let data=await response.json();
    console.log(data);
}
getCountry();

// Arrow fun
let getCountries = async () => {
    let response = await fetch("https://restcountries.com/v3.1/all")
    let data = await response.json();
    return data;
}
getCountries().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("finally finished");
})

// Promise Methods
// promise.all()-Promise Concurrency Methods
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});

//Promise.allSettled()
Promise.allSettled([
    Promise.resolve(33),
    new Promise((resolve) => setTimeout(() => resolve(66), 0)),
    99,
    Promise.reject(new Error("an error")),
  ]).then((values) => console.log(values));

  //Promise.any()
  const pErr = new Promise((resolve, reject) => {
    reject("Always fails");
  });
  
  const pSlow = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Done eventually");
  });
  
  const pFast = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Done quick");
  });
  
  Promise.any([pErr, pSlow, pFast]).then((value) => {
    console.log(value);
  });

  // Promise.race()
  function sleep(time, value, state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === "fulfill") {
          return resolve(value);
        } else {
          return reject(new Error(value));
        }
      }, time);
    });
  }
  
  const p10 = sleep(500, "one", "fulfill");
  const p12 = sleep(100, "two", "fulfill");
  
  Promise.race([p10, p12]).then((value) => {
    console.log(value); // "two"
    // Both fulfill, but p2 is faster
  });
  
  const p13 = sleep(100, "three", "fulfill");
  const p14 = sleep(500, "four", "reject");
  
  Promise.race([p13, p14]).then(
    (value) => {
      console.log(value); // "three"
      // p3 is faster, so it fulfills
    },
    (error) => {
      // Not called
    },
  );
  
  const p5 = sleep(500, "five", "fulfill");
  const p6 = sleep(100, "six", "reject");
  
  Promise.race([p5, p6]).then(
    (value) => {
      // Not called
    },
    (error) => {
      console.error(error.message); // "six"
      // p6 is faster, so it rejects
    },
  );
  
 

