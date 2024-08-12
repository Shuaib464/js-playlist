/* "for of"  loop 

NOte -> it iterate each element in array

*/

const arr = [1,2,3,4,5]

// for (const e of arr) {
//     console.log(e);
// }

const user = "shuaib ahamad";
// for (const e of user) {
//     console.log(`Each character is ${e}`);
// }

/*  
    MAP -> Map objects are collection of key-value pairs. A key in the Map may only occur once; "It has unique values"
            contains order
*/
const map = new Map();

map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");  // it does not include in map bcoz same key-value
map.set('In', "India");     // it will add in map
map.set('IN', "Hindustan");     // it will override the value of "IN" key

// console.log(map);

for (const [key, value] of map) {     // de-structure in key-value
    // console.log(key, ':-' , value);
}


const myObj = {
    movie1: "Tirangaa",
    movie2: "Sholey",
}

// for (const [key, value] of myObj) {
//     console.log(key, ': -', value);              // not working for object
// }






