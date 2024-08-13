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

const newNums = myNums.filter( (item) => item > 5)

console.log(newNums);               //   [ 6, 7, 8, 9 ]

/*
  filter -> it returns array of elements which satisfied the given condition
*/

