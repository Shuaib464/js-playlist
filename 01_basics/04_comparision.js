// console.log("2" > 1);
// true

console.log(null > 0);   //false
console.log(null == 0);  //false
console.log(null >= 0);  //true
  // reason for different o/p is that an equality check ( == ) and comparisions > < >= <= work differently
  // Comparisions convert null to a number, treating it as 0.
  // That's why (3) null >= 0  is true and (1) null > 0 is false


console.log(undefined > 0);   //false
console.log(undefined == 0);  //false
console.log(undefined >= 0);  //false

// STRICT CHECK --> (===)
// checks value along with it's data type
console.log("2" === 2);     //false
