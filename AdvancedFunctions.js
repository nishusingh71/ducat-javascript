//Recursion
// syntax
// function testing(){
//     testing();
// }

// print 1 to 10 using Recursion
function counting(n) {
    if (n <= 10) {
        console.log(n);
        counting(n + 1);
    }
}
counting(1)
//Stack- Last In First Out
function fun1() {
    fun2();
    console.log('fun1 called');
}
function fun2() {
    fun3();
    console.log('fun2 called');
}
function fun3() {
    console.log('fun3 called');

}
fun1();
// QUeue
// program to implement queue data structure
class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    //adds a new element
    enqueue(element) {
        this.items[this.tailIndex] = element;
        this.tailIndex++;
    }

    //removes an element from head of the queue
    dequeue() {
        let removedElement = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return removedElement;
    }

    //shows the head element of the  queue
    peek() {
        let peekElement = this.items[this.headIndex];
        return peekElement;
    }

    //shows the number of items in queue
    size() {
        return this.tailIndex - this.headIndex;
    }

    //checks if queue is empty or not
    isEmpty() {
        if (this.tailIndex - this.headIndex == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    //empty the queue
    clear() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
}
let queue = new Queue();

// add items to queue
queue.enqueue(8);
queue.enqueue(6);
queue.enqueue(4);
queue.enqueue(2);

console.log("Queue after adding items: ");
console.log(queue.items);

// remove the first item
queue.dequeue();

console.log("Queue after deleting the first item:");
console.log(queue.items);

// show the first item
console.log("First item of the queue = " + queue.peek());

// empty the queue
queue.clear();

console.log("After clearing the queue: ");
console.log(queue.items);

//Global Execution Context
//var - undefined by default
console.log(window);
console.log(this);
console.log(a);
testing(); // hoisting
var a = 10;
function testing() {
    console.log("testing");
}
// let or const- uninitialized 
// console.log(b);
// let b=20;

//Rest operator  ...variable Name
function addition(...nums) {
    let sum = 0;
    for (const value of nums) {
        sum += value;
    }
    console.log(sum);
}
addition(10, 20, 30, 40, 50, 70);
//Spread Operator
//array
let arr = [10, 20, 30, 40, 50, 60];
console.log(...arr);
//add
let arr2 = [...arr, 70, 80, 90]
console.log(arr);
console.log(arr2);
console.log(arr === arr2);

//Objects
let obj = {
    firstName: 'Nishu',
    lastName: 'Singh',
    age: 10,
}
let obj2 = { ...obj, hobbies: ['cricket'] }
console.log(obj);
console.log(obj2);
console.log(obj === obj2);