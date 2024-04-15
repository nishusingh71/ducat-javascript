// //Getters
let obj = {
    firstName: 'john',
    getFirstName: function () {
        return this.firstName;
    },
    get getFirstName() {
        return this.firstName;
    }
}
// // dot operator
console.log(obj.firstName);
// //[] square bracket
console.log(obj['firstName']);
//method
console.log(obj.getFirstName());
// //getter
console.log(obj.getFirstName);
// //Setter
obj = {
    firstName: 'john',
    setName: function (value) {
        this.firstName = value;
    },
    /**
     * @param {string} value
     */
    set setFirstName(value) {
        this.firstName = value;
    }

}
//dot
obj.firstName = 'Nishu';
console.log(obj);
//[]
obj['firstName'] = 'Nishu';
console.log(obj);
//method
obj.setFirstName("Nishu");
console.log(obj);
//Setter
obj.setFirstName = "Nishu";
console.log(obj);
//Create a Class
class Employee {
    //properties
    firstName = "Nishu";
    //Methods
    getFirstName() {
        console.log("get First Name");
        console.log(this.firstName);
    }
}
let emp = new Employee();
console.log(emp);
//Constructors
class Employee2 {
    constructor(fname) {
        this.firstName = fname;
    }
}
let emp1 = new Employee2("deepak");
let emp2 = new Employee2("Suraj");
console.log(emp1, emp2);
//Getters/Setters
class Employee3 {
    firstName = "nishu";
    //getter
    get getFirstName() {
        return this.firstName;
    }
    //setter
    set setFirstName(value) {
        this.firstName = value;
    }
}
let emp3 = new Employee3();
emp3.setFirstName = "Suraj";
console.log(emp3.getFirstName);

// // Computed names[....]
let test = "t";
class Testing {
    [test + "te"] = "Testing Class";
    firstName = "deepak";
}
let t = new Testing();
console.log(t);
//Class Inheritance 
class Exp {
    className = "class";
    getClassName = () => {
        console.log(this.getClassName);
    }
}
class Ex extends Exp {

}
let ex = new Ex();
console.log(ex);
//Overriding 
class Parent {
    className = "parent class";
    getClassName = () => {
        console.log("parent class getClassName function");
    }
}
class Child extends Parent {
    //property overriding
    className = "child Class";
    //method overriding 
    getClassName = () => {
        console.log("Child class getClassName function");
    }
}
let child = new Child();
console.log(child);
child.getClassName("testing");

//Polymorphism is not supported in JS
class Area {
    //square
    area(side) {
        console.log(side * side);
    }
    //rectangle
    area(length, breadth) {
        console.log(length * breadth);
    }
}
let a = new Area();
console.log(a);
a.area(10, 10);

//Constructor Overriding
class ParentClass {
    constructor(cName) {
        this.className = cName;
    }
}
class ChildClass extends ParentClass {
    constructor(cName, age) {
        super(cName);
        this.age = age;
    }
}
let chids = new ChildClass("Parent class", 20);
console.log(chids);
//super- normal function access
class P {
    className = "parent class";
    getClassName() {
        console.log("parent class getClassName function");
    }
}
class C extends P {
    //property overriding
    className = "child Class";
    //method Overriding
    getClassName() {
        console.log("child class getClassName function");
    }
}
let c = new C();
c.getClassName();
//Static  properties and Methods
class Emp {
    static counter = 0;
    constructor() {
        Emp.counter++;
    }
    static getCount() {
        console.log(Emp.counter);
        console.log(this.counter);
    }
}
let emp4 = new Emp();
let emp5 = new Emp();
let emp6 = new Emp();
let emp7 = new Emp();
console.log(Emp.counter);
Emp.getCount();

class A {
    static className = "Parent Class";
    static getClassName() {
        console.log("A class getName");
    }

}
class B extends A {

}
console.log(B.className);
B.getClassName();

//Class Expression
let Testings = class {
    className = "Testing";

}
let ts = new Testings();
console.log(ts);

//Private 
class E {
    //public properties
    firstName = "jhon";
    lastName = "Doe";
    //private
    #salary = 10000;
    //public methods
    getFullName() {
        // this.#getSalary();
        console.log(this.#salary);
        console.log(this.firstName + " " + this.lastName);
    }
    //private Methods
    #getSalary() {
        this.#getSalary();
        console.log(this.#salary);
    }
}
let e = new E();
console.log(e.firstName);
console.log(e.lastName);
e.getFullName();

// instanceof
class AB {

}
class BC {

}
let ab = new AB();
let bc = new BC();
console.log(bc instanceof BC);