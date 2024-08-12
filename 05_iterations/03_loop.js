const myObj = {
    js: 'Javascript',
    cpp: 'c++',
    rb: 'ruby'
}

/* for_in loop
    NOTE - for_in loop is used to iterate key/index of collection
            while for_of loop is used to iterate the values of the collection
*/

for (const key in myObj) {
    // console.log(key);       // for keys
    // console.log(myObj[key]);       // for values
    // console.log(`${key}  ->  ${myObj[key]}`);
    
}

const programming = ["js","c++", "java", "c"]

for (const key in programming) {
    console.log(key);
    console.log(programming[key]);    // for values
    
}