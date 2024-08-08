
// use of this
const user = {
    username: "shuaib",
    price: 1000,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //console.log(this);     // this for object
    }
}

//user.welcomeMessage()

// user.username = "Ahmad";
// user.welcomeMessage();  
// console.log(this);     // global this

// function chai() {
//     let username = "Shuaib";
//     // console.log(this);
//     console.log(this.username);      // we cannot use "this" in this type   
// }

// chai();

// const chai = function() {
//     let username = "Shuaib";
//     // console.log(this);
//     console.log(this.username);      // we cannot use "this" in this type   
// }
// chai();

/* ARROW FUNCTION  */
const chai = () => {
    let username = "Shuaib";
    // console.log(this);
    console.log(this.username);      // we cannot use "this" in this type   
}
// chai()

/* Basic arrow function
    Explicit return
*/
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(4, 3));

/* Implicit return */
//const addTwo = (num1, num2) => num1 + num2;    //FIRST WAY 
const addTwo = (num1, num2) => (num1 + num2);    // second way

console.log(addTwo(4, 8));

/* NOTE ->  When we use {} then we have write "return" keyword
            and when we use () then we don't have to use "return"
*/

