
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
chai()