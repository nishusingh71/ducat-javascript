//Getters
let obj = {
    firstName: 'john',
    getFirstName: function () {
        return this.firstName;
    },
    get getFirstName() {
        return this.firstName;
    }
}
// dot operator
console.log(obj.firstName);
//[] square bracket
console.log(obj['firstName']);
//method
console.log(obj.getFirstName());
//getter
console.log(obj.getFirstName);
//Setter
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