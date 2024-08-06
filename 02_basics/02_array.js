const marvel = ["Ironman", "thor", "hulk"]
const dc = ["superman", "flash", "batman"]

// PUSH perform operation in existing array
//marvel.push(dc);    // it passes "dc" array as an element of array in "marvel array"

/* NOTE -> to avoid this type of situation use "spread operator" */
//marvel.push(...dc)

//console.log(marvel);


/* we can use "concat" method
  "concat( )" return an array after combinig 
  it does not perform operation on existing arrays
*/
// const newArr = marvel.concat(dc);
// console.log(newArr);

/*   we can use "spread" operator here as well */
// const newArr1 = [...marvel, ...dc]
// console.log(newArr1);


// want to check whether it is "Array" or not
console.log(Array.isArray("Shuaib Ahamad"));

// convert it into an array --> use   "Array.from( ) "
console.log(Array.from("Shuaib Ahamad"));

/* In "object", we have to declare that whose array we want to create
  we want to create "keys" array of object
  or we want to create "values" array of object
*/
console.log(Array.from( {name: "Shuaib"} ));       //INTERESTING CASE....... learn more about Array.from()


// create array from group of variables
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

