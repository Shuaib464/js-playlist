// Mainly, there are two types of Data Types in Js

//Primititve

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3  // both are in number category

const isLogged = false
const outsideTemp = null
const name = "shuaib"
let userEmail;

const id = Symbol('786')
const anotherId = Symbol('786')

console.log(id === anotherId);   //false

const bigNumber = 132656565665n

//Reference  (Non primitive)


// 3 types --> Array, Objects, functions

const heros = ["krish", "baalbir", "shaktiman"]

let myObj = {
    name: "Shuaib",
    age : 24,
};

const myFunction = function() {
    console.log("Hello Shuaib");
}


// to know the type of variable, use "typeof"

console.log(typeof bigNumber);
console.log(typeof outsideTemp);    // object
console.log(typeof userEmail);      // undefined
console.log(typeof myFunction);     // function
console.log(typeof heros);          // object



//      ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// There are two types of memory  --->  1)Stack      2)Heap

//  whenever we use primitive data types then STACK MEMORY is used  -:  Stack(primitive)
// and when we use reference dataTypes then HEAP MEMORY is used  -:  Heap(reference)


let myName = "shuaib"

let fullName = myName    // passes a copy of myName
console.log(fullName);

fullName = "shuaib ahamad"

console.log(myName);
console.log(fullName);



//reference variable

let userOne = {
    name: "Shuaib",
    tech: "react"
}

let userTwo = userOne   // here passes the reference(adderess)

userTwo.tech = 'angular'   

console.log(userOne.tech);
console.log(userTwo.tech);
// for both the value has changed