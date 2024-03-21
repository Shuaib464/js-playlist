// Array 
//defining an array

const myArr1 = [0,1,2,3,4,];
console.log(myArr1);

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2);

const mixedTypeArr = [0,1,2,true, "Shuaib"]
// console.log(mixedTypeArr);

// NOTE - 1- Array can store multiple type data in js
//        2- There is no size limitation in array (in js)


/* when we perform "copy-operation" on array, then it create shallow copies (a shallow copy of an obj 
shares the same reference point of original one) means if change any obj then it will change the value of 
original array

DEEP COPY - it doesn't share the same refence point
*/


//  +++++++++++++++++++++++  Array Methods +++++++++++++++++++++++
const myArr = ["Shuaib", "Newton", "Tofeek", "Aman"]

myArr.push("Ayaan");        // append element at the end
myArr.pop()                 // remove the last element

// myArr.unshift("Rohaan")     // append at the start 
// myArr.shift()               // delete at the start

// console.log(myArr);

// console.log(myArr.includes("Tofeek"));    // return boolean (true / false)
// console.log(myArr.indexOf("Shuaib"));        // return either index or -1(false if not present)

// const newArr = myArr.join()      // converts array into the string and returns it
// console.log(newArr);

// const myNewArr1 = myArr.slice(1, 3)        // return a copy of a section of array