const score = 100     //  NUMBER
// console.log(typeof score);
// console.log(score);

const balance = new Number(100)    //  OBJECT
// console.log(typeof balance);
// console.log(balance);

// console.log(balance.toString());   //converts in string 
// console.log(balance.toString().length);   //then we can apply string functions on it

const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'));


// ++++++++++++++++++++++++   MATHS   +++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log("Absolute value-:", Math.abs(-5));
// console.log("Round val -: ",Math.round(3.6));
// console.log("Ceiling val -: ",Math.ceil(5.1));
// console.log("Floor val -: ", Math.floor(8.9));
// console.log("Square root of 81 -: ",Math.sqrt(81));
// console.log("Min value in given array - ", Math.min(2,6,8,1,9) );
// console.log("Max value in given array - ", Math.max(2,6,8,1,9) );

console.log("Random value -: ", Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random() * 10) + 1));

//formula to generate random no in a given range
//  ( Math.random() * (max - min + 1) ) + min

const min = 10
const max = 25

console.log(Math.floor((Math.random() * ( max - min + 1))) + min );