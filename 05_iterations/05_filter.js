const coding = ['ruby', 'js', 'c++', 'python']

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(values);         // undefined

/* 
    NOTE -> for_each doesnot return anything, 
*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNums.filter( (item) => (item > 5) )

/*
const newNums = []
myNums.forEach( (num) => {
    if(num > 4) {
        newNums.push(num)
    }
})
*/
// console.log(newNums);               //   [ 6, 7, 8, 9 ]

/*
  filter -> it returns array of elements which satisfied the given condition
*/


/* map function */

/* 
map is used to perform any operation to the each  element of array 
and return a new array after performing the action 
*/

const nums= [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNums = nums.map( (item) => item + 10)

console.log(newNums);
console.log(nums);      // it doesnot manipulate the original array

