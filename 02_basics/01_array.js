// Array 
//defining an array

const myArr = [0,1,2,3,4,];
console.log(myArr);

const myArr2 = new Array(1,2,3,4)
console.log(myArr2);

const mixedTypeArr = [0,1,2,true, "Shuaib"]
console.log(mixedTypeArr);

// NOTE - 1- Array can store multiple type data in js
//        2- There is no size limitation in array (in js)


/* when we perform "copy-operation" on array, then it create shallow copies (a shallow copy of an obj 
shares the same reference point of original one) means if change any obj then it will change the value of 
original array

DEEP COPY - it doesn't share the same refence point
*/
