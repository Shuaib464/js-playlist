// COMBINING objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const newObj = Object.assign({}, obj1, obj2, obj3)

// easy way, using "spread operator "
const newObj = {...obj1, ...obj2}

// console.log(newObj);

const user = {
    name: "Shuaib Ahamad",
    age: 24,
    location: "Delhi ncr",
    branch: "cse",
};

/* fetching all keys of an object
    use -> Object.keys(obj_name)
    it returns the arrays of keys of object
*/
console.log(Object.keys(user));
console.log(Object.values(user));      // returning the array of values

// check whether the property exists in the object or not

console.log(user.hasOwnProperty('city'));
console.log(user.hasOwnProperty('location'));




