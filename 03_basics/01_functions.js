/*
    Defining a function
*/

/* 
    NOTE -> 1-  when we define a function, then the given input is called "parameters"
            2-  when we call a function, then the given input is called "Arguments"
*/
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(4, null)

// giving default value to the function
function loginUserMsg(userName = "Ahmad"){
    if(!userName) {
        console.log("Please enter a user");
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMsg("Shuaib"));
console.log(loginUserMsg());


// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(10,20,30));     // 10


/* rest operator in function */
function calculateCartPrice(val1, val2,...num1){
    return num1
}

console.log(calculateCartPrice(100, 200, 300));   // [ 100, 200, 300 ]
console.log(calculateCartPrice(100, 200, 300, 7000));    // [300, 7000]

