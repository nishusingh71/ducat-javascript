let object = {
    //properties and literals
    firstName: 'john',
    lastName: 'Doe',
    "full Name": 'john Doe',
    //method
    getFullName: function () {
        console.log("getFullName Called.. ");
    }
}
//. Dot operator to access value from object
console.log(object.firstName);
console.log(object.lastName);
console.log(object.getFullName);
// console.log(object.full Name);
// [] 
console.log(object['firstName']);
console.log(object['lastName']);
object['getFullName']();
console.log(object['full Name']);

//computed Properties
let firstName = "abc";
object = {
    [firstName]: "Nishu",
}
console.log(object);

//Property value Shorthand:-
firstName = "Nishu"
object = {
    firstName
}
console.log(object);

//Property Name limitations
object = {
    $firstName: "$firstName",
    _firstName: "_firstName",
    "firstName": "firstName",
    "1name": "1name",
    var: "var",
    const: "const",
    for: "for",
    if: "if",
}
console.log(object);
//for in loop
for (const key in object) {
    console.log(key, object.key);
}
//property existance test,"in" operator
object = {
    firstName: "Nishu",
    lastName: "Singh",
}
console.log("fullName" in object);

//Object Reference and Copying
//primitive type -share only data not address
let number = 10;
//let number=10;
let number1 = number;
number1 = 30;
console.log({ number });
console.log({ number1 });

//Reference Type
let arr = [10, 20, 30, 40];
console.log(arr);
let arr2 = arr;
arr2[arr.length] = 50;
console.log(arr);
console.log(arr2);

//Comparison Object
let obj1 = {}
let obj2 = {}
console.log(obj1, obj2);
console.log(obj1 === obj2);

obj1 = { age: 10 }
obj2 = obj1;
console.log(obj1 === obj2);

//Object Clone / Copy 
obj1 = {
    firstName: 'John',
    lastName: 'Smith',
    age: 10,
};
obj2 = {};
for (const key in obj1) {
    obj2[key] = obj1[key];
}
obj2.hobbies = ['Cricket']
console.log(obj1);
console.log(obj2);

// dot assign method(.)
obj1 = {
    firstName: 'John',
    lastName: 'Smith',
    age: 10,
};
obj2 = Object.assign({}, obj1, { hobbies: ['football'] }, { firstName: "Nishu" });
console.log(obj1);
console.log(obj2);
console.log(obj1 === obj2);

//Merge
obj1 = {
    firstName: "Nishu",
    lastName: "Singh",
    age: 10,
}
obj2 = {
    hobbies: ['Cricket']
}
let obj3 = Object.assign(obj1, obj2);
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj1 === obj3);

//Structured Clone
obj1 = {
    first: "Nishu",
    last: "Singh",
    age: 25
}
obj2 = structuredClone(obj1);
console.log(obj1);
console.log(obj2);
console.log(obj1 === obj2);

//Garbage Collection
arr = [10, 20, 30, 40, 50];
arr[arr.length] = 60;
console.log(arr);

//this-> refer to current Object
obj1 = {
    firstName: 'jhon',
    lastName: 'Doe',
    getFullName: function () {
        console.log(this);
        console.log(this.firstName + " " + this.lastName);
        this.testings();
    },
    testings() {
        console.log("testing");
    }
}
obj1.getFullName();

//class
function Employee(fname, lname, age) {
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.getFullName = function () {
        console.log(this);
        console.log(this.firstName + " " + this.lastName);
    }
}
obj1 = new Employee("deepak", "Singh", 10);
obj2 = new Employee("Nishu", "Singh", 20);
console.log(obj1, obj2);

//Optional Chaining
let emp = {
    name: {
        firstName: 'Nishu',
        lastName: 'Singh',
    },
    email: 'nishus877@gmail.com',
    hobbies: ['Cricket', 'teaching'],
    getDetail: function () {
        console.log("firstName :", this.name.firstName);
        console.log("lastName :", this.name.lastName);
        console.log("email", this.email);
        console.log("hobbies", this.hobbies);
    }
}
//object
console.log(emp.name?.firstName);
//array
console.log(emp.hobbies?.[0]);
//function
emp.getDetail?.();

//Symbol Type

let sym = Symbol('id');
console.log(sym);
console.log(sym.description);

let obj = {
    sym: sym,
    [sym]: "Nishu"
}
console.log(obj);
console.log(obj[sym]);

//Skipped by for ..in
obj = {
    [sym]: "Nishu",
    hobbies: "Cricket",
}
for (const key in obj) {
    console.log(key, obj[key]);
}

sym = Symbol['id'];
let sym1 = Symbol['id'];
console.log(sym === sym1);

//Global 
sym = Symbol.for('id');
sym1 = Symbol.for('id');
console.log(sym === sym1);

//Access
console.log(Symbol.keyFor(sym));
