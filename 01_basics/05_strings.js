const name = "shuaib ahmad"
const repo = 5

// console.log(name + repo + "value");     //old way to use string 

// better way is String Interpolation {` `} (using backticks)
console.log(`Hello my name is ${name} and my repository count is ${repo}`);



const myName = new String("Shuaib")  // it returns an object
console.log((myName[0]));

// console.log(myName.toUpperCase());
console.log(myName.indexOf('h'));

const newString = myName.substring(0, 4);    //starting no (0) is included and end no(4) is excluded
console.log(newString);                     // NOTE -: we cann't pass negative values

const anoterStr = myName.slice(-1, 2);         // we can pass both negative as well as postive values in it
console.log(anoterStr);


const newName = "      shuaib ahmad    "
console.log(newName.trimStart());    // shuaib ahmad_______
console.log(newName.trimEnd());    // _______shuaib ahmad
console.log(newName.trim());      // shuaib ahmad

const var1 = name.split(" ");   // return an object(array of values)
console.log(var1);
console.log(typeof var1);
