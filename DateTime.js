//Creation
let date=new Date();
console.log(date.toString());
//getFullYear()
console.log(date.getFullYear());
//getMonth()
console.log(date.getMonth()+1);
//getDate()
console.log(date.getDate());
//getHours
console.log(date.getHours());
//getMinutes
console.log(date.getMinutes());
//getSeconds
console.log(date.getSeconds());
//getMiliSeconds()
console.log(date.getMilliseconds());
//getDay()
console.log(date.getDay());
//Date.now()
date=Date.now();
console.log(date);
//Parsing
date=Date.parse('10-10-2023');
console.log(date);
//object
date=new Date(2024,10,30);
console.log(date);



//Json Methods
// {
//     'firstName':'Nishu',
//     "age":10,
//      "hobbies":['cricket']
// }
let obj={
    firstName:'deepak',
    age:10,
    hobbies:['cricket']
}
//method to json
let jsonObj=JSON.stringify(obj);
console.log(jsonObj,typeof jsonObj);

// json to normal
let normalObj=JSON.parse(jsonObj);
console.log(normalObj);

//Priortyflags & descriptors
let descriptors=Object.getOwnPropertyDescriptor(obj);
let descriptor=Object.getOwnPropertyDescriptor(obj,'firstName');
console.log(descriptors);
console.log(descriptor);
// Object Creation
obj.firstName="Nishu"
console.log(obj);
//writeable
Object.getOwnPropertyDescriptor(obj,'firstName',{
    writeable:false
})
obj.firstName="deepak";
console.log(obj);
