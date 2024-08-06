// singleton object
// const newObj = Object.create()

/* 
NOTE - Object.create() static method that creates a new object, using an existing obj (if we passes it as an argument)
*/

// Object Literals
const JsUser = {
    name: "Shuaib",
    "full name": "Shuaib Ahamad",
    age: 24,
    location: "delhi"
}

// accessing Object
// console.log(JsUser.location);
// console.log(JsUser['location']);

// console.log(JsUser['full name']);       // in this case, we have to use this way else we get an error


// Lock the object
JsUser.location = 'delhi NCR';
// console.log(JsUser);

// Object.freeze(JsUser);            // It locked the object for changing

JsUser.age = 23;            // It will not change this property.
JsUser.city = "Charkhari"      // It will not add any new property in object as well
// console.log(JsUser);

JsUser.greeting = function() {
    console.log(`Hello Js User ${this.name}`);
}

// console.log(JsUser.greeting);         // Returns the reference of the function
console.log(JsUser.greeting());




