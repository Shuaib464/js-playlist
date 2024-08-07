/*
    let -> block scoped, function scoped and cannot be re-declared
    const -> block scoped, function scoped and only declared/assigned once
    var -> function scoped, FILE scoped and can be re-declared multiple times
*/


if(true) {
    let a = 10
    const b = 20
    var c = 30             
}

// console.log(a);     // ReferenceError: a is not defined
// console.log(b);         //  ReferenceError: b is not defined
console.log(c);         // 30


let num = 100
if(true) {
    let num = 5000
    console.log("Inner", - num);   // 5000
    
}

console.log(num);      //100



/*  
    NOTE -> Browser me global scope alag hota hai
            aur node environment me global scope alag hota hai
*/